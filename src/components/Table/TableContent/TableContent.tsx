import React, { FC } from 'react';
import { TableContentProps } from './TableContent.types';

export const TableContent: FC<TableContentProps> = ({ hasData, emptyMessage, loading, children }) =>
  hasData ? <>{children}</> : <div data-testid="table-no-data">{!loading && <h1>{emptyMessage}</h1>}</div>;
