import React, { FC } from 'react';
import { useStyles } from '@grafana/ui';
import { getStyles } from './Chip.styles';

export interface ChipProps {
  text: string;
}

export const Chip: FC<ChipProps> = ({ text }) => {
  const styles = useStyles(getStyles);

  return <div className={styles.wrapper}>{text}</div>;
};
