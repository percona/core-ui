import React, { FC, useState } from 'react';
import { useStyles } from '@grafana/ui';
import { cx } from 'emotion';
import { getStyles } from './Chip.styles';

export interface ChipProps {
  text: string;
  isRemovable?: boolean;
  onRemove?: (text: string) => void;
}

export const Chip: FC<ChipProps> = ({ text, isRemovable = false, onRemove = () => null }) => {
  const styles = useStyles(getStyles);
  const [show, setShow] = useState(true);

  const handleCloseClick = () => {
    onRemove(text);
    setShow(false);
  };

  return show ? <div className={styles.wrapper}>{text}{isRemovable && <i onClick={handleCloseClick} className={cx('fa fa-times', styles.removeIcon)}/>}</div> : null;
};
