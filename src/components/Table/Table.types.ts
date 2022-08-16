import {
  Column,
  TableInstance,
  TableState,
  Row,
  TableOptions,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  Cell,
  ColumnInstance,
  HeaderGroup,
  SortingRule,
} from 'react-table';

export interface TableProps {
  data: object[];
  columns: Column[];
  pendingRequest?: boolean;
  emptyMessage?: string;
  showPagination?: boolean;
  sortingOnColumns?: boolean;
  totalItems: number;
  totalPages?: number;
  tableHash?: string;
  pageSize?: number;
  pageIndex?: number;
  pagesPerView?: number;
  autoResetPage?: boolean;
  autoResetExpanded?: boolean;
  onPaginationChanged?: (pageSize: number, pageIndex: number) => void;
  children?: (rows: Row[], table: TableInstance) => React.ReactNode;
  renderExpandedRow?: (row: Row<any>) => JSX.Element;
  getHeaderProps?: (column: HeaderGroup) => TableHeaderProps;
  getRowProps?: (row: Row<any>) => TableRowProps;
  getColumnProps?: (column: ColumnInstance) => TableCellProps;
  getCellProps?: (cell: Cell<any, any>) => TableCellProps;
}

export interface PaginatedTableState extends TableState {
  pageIndex: number;
  pageSize: number;
  sortBy: SortingRule<{}>[];
}

export interface PaginatedTableOptions extends TableOptions<object> {
  manualPagination?: boolean;
  pageCount?: number;
  autoResetPage?: boolean;
  autoResetExpanded?: boolean;
}
