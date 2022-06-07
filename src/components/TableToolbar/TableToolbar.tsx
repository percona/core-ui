import React, { FC } from 'react';
import { useStyles2 } from '@grafana/ui';
import { TableToolbarButton } from './TableToolbarButton';
import { getStyles } from './TableToolbar.styles';
import { TableToolbarProps } from './types';

export const TableToolbar: FC<TableToolbarProps> = ({ actions, selectedItems }) => {
  const styles = useStyles2(getStyles);

  return (
    <div className={styles.wrapper}>
      {actions.map(({ callback, icon, isBulkAction = false, label }) => (
        <TableToolbarButton
          key={`${icon}-${label}`}
          icon={icon}
          label={label}
          disabled={isBulkAction && selectedItems.length <= 1}
          onClick={callback}
        />
      ))}
    </div>
  );
};
