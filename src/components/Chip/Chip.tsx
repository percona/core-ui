import React, { FC } from 'react';
import { useStyles } from '@grafana/ui';
import { cx } from 'emotion';
import { getStyles } from './Chip.styles';

export interface ChipProps {
  text: string;
  isRemovable: boolean;
}

export const Chip: FC<ChipProps> = ({ text, isRemovable = false }) => {
  const styles = useStyles(getStyles);

  return <div className={styles.wrapper}>{text}{isRemovable && <i className={cx('fa fa-times', styles.removeIcon)}/>}</div>;
};
