import React, { FC, useState } from 'react';
import { useStyles } from '@grafana/ui';
import { cx } from 'emotion';
import { getStyles } from './Chip.styles';

export interface ChipProps {
  text: string;
  isRemovable?: boolean;
  onRemove?: (text: string) => void;
  className?: string;
}

export const Chip: FC<ChipProps> = ({ text, isRemovable = false, onRemove = () => null, className }) => {
  const styles = useStyles(getStyles);
  const [show, setShow] = useState(true);

  const handleCloseClick = () => {
    onRemove(text);
    setShow(false);
  };

  return show ?
    <div
      data-testid="chip"
      className={cx(styles.wrapper, className)}
    >
      {text}
      {
        isRemovable &&
          <i
            data-testid="chip-remove"
            onClick={handleCloseClick}
            className={cx('fa fa-times', styles.removeIcon)}
          />
      }
    </div>
  : null;
};
