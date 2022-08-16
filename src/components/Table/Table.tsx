import React, { FC, useState } from 'react';
import { useTable, usePagination, useExpanded, useSortBy, SortingRule } from 'react-table';
import { css } from 'emotion';
import { useStyles } from '@grafana/ui';
import { getStyles } from './Table.styles';
import { TableProps, PaginatedTableOptions, PaginatedTableState } from './Table.types';
import { Pagination } from './Pagination';
import { PAGE_SIZES } from './Pagination/Pagination.constants';
import { TableContent } from './TableContent';
import { Overlay } from '../Overlay';

const defaultPropGetter = () => ({});

export const Table: FC<TableProps> = ({
  pendingRequest = false,
  data,
  columns,
  showPagination,
  sortingOnColumns,
  totalPages,
  onPaginationChanged = () => null,
  emptyMessage = '',
  totalItems,
  pageSize: propPageSize,
  pageIndex: propPageIndex = 0,
  pagesPerView,
  children,
  autoResetExpanded = true,
  autoResetPage = true,
  renderExpandedRow = () => <></>,
  getHeaderProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
}) => {
  const style = useStyles(getStyles);
  const manualPagination = !!(totalPages && totalPages >= 0);
  const sortees = React.useMemo(
    () => [
      {
        id: columns[0]?.accessor,
        desc: false,
      },
    ],
    [columns],
  );

  const initialState: Partial<PaginatedTableState> = {
    pageIndex: propPageIndex,
  };
  const tableOptions: PaginatedTableOptions = {
    columns,
    data,
    initialState,
    manualPagination,
    autoResetExpanded,
    autoResetPage,
  };
  const plugins: any[] = [useExpanded];
  const [activeSort, setActiveSort] = useState<boolean>(true);
  const [indexSort, setIndexSort] = useState<number>(0);

  if (sortingOnColumns) {
    initialState.sortBy = sortees as SortingRule<{}>[];
  }

  if (showPagination) {
    plugins.push(usePagination);

    if (manualPagination) {
      tableOptions.pageCount = totalPages;
    }

    if (propPageSize) {
      initialState.pageSize = propPageSize;
    }
  }

  const tableInstance = useTable(tableOptions, useSortBy, ...plugins);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    prepareRow,
    visibleColumns,
    pageCount,
    setPageSize,
    gotoPage,
    state: { pageSize, pageIndex },
    setSortBy,
  } = tableInstance;
  const hasData = data.length > 0;

  const onPageChanged = (newPageIndex: number) => {
    gotoPage(newPageIndex);
    onPaginationChanged(pageSize, newPageIndex);
  };

  const onPageSizeChanged = (newPageSize: number) => {
    gotoPage(0);
    setPageSize(newPageSize);
    onPaginationChanged(newPageSize, 0);
  };

  const onSetActiveIndexSort = (index: number) => {
    setIndexSort(index);
  };

  return (
    <>
      <Overlay dataTestId="table-loading" isPending={pendingRequest}>
        <div className={style.tableWrap} data-testid="table-outer-wrapper">
          <div className={style.table} data-testid="table-inner-wrapper">
            <TableContent loading={pendingRequest} hasData={hasData} emptyMessage={emptyMessage}>
              <table {...getTableProps()} data-testid="table">
                <thead data-testid="table-thead">
                  {headerGroups.map((headerGroup) => (
                    /* eslint-disable-next-line react/jsx-key */
                    <tr data-testid="table-thead-tr" {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column, index) => {
                        /* eslint-disable-next-line react/jsx-key */
                        const arrHeaderProps = [
                          getColumnProps(column),
                          getHeaderProps(column),
                          {
                            className: column.className,
                            style: column.style,
                          },
                        ];

                        if (sortingOnColumns) {
                          arrHeaderProps.push(column.getSortByToggleProps());
                        }

                        return(
                          <th
                            className={css`
                              width: ${column.width};
                            `}
                            {...column.getHeaderProps(arrHeaderProps)}
                            onClick={() => {
                              setSortBy([{ id: column.id, desc: activeSort }]);
                              onSetActiveIndexSort(index);
                              setActiveSort(!activeSort);
                            }}
                          >
                            {column.render('Header')}
                            <span>
                              <i className={`fa fa-chevron-${activeSort ? 'up' : 'down'} ${index === indexSort ? style.chevronActiveSort : style.chevronSort}`} aria-hidden="true" />
                            </span>
                          </th>
                        );
                    })}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()} data-testid="table-tbody">
                  {children
                    ? children(showPagination ? page : rows, tableInstance)
                    : (showPagination ? page : rows).map((row) => {
                        prepareRow(row);

                        return (
                          <React.Fragment key={row.id}>
                            <tr data-testid="table-tbody-tr" {...row.getRowProps(getRowProps(row))}>
                              {row.cells.map((cell) => (
                                  <td
                                    {...cell.getCellProps([
                                      {
                                        className: cell.column.className,
                                        style: cell.column.style,
                                      },
                                      getCellProps(cell),
                                    ])}
                                    key={cell.column.id}
                                  >
                                    {cell.render('Cell')}
                                  </td>
                                ))}
                            </tr>
                            {row.isExpanded ? (
                              <tr>
                                <td colSpan={visibleColumns.length}>{renderExpandedRow(row)}</td>
                              </tr>
                            ) : null}
                          </React.Fragment>
                        );
                      })}
                </tbody>
              </table>
            </TableContent>
          </div>
        </div>
      </Overlay>
      {showPagination && hasData && (
        <Pagination
          pagesPerView={pagesPerView}
          pageCount={pageCount}
          initialPageIndex={pageIndex}
          totalItems={totalItems}
          pageSizeOptions={PAGE_SIZES}
          pageSize={pageSize}
          nrRowsOnCurrentPage={page.length}
          onPageChange={(pIndex) => onPageChanged(pIndex)}
          onPageSizeChange={(pSize) => onPageSizeChanged(pSize)}
        />
      )}
    </>
  );
};
