import React, { FC } from 'react';
import { Spinner } from '@grafana/ui';
import { cx } from '@emotion/css';
import { OverlayProps } from './Overlay.types';
import { styles } from './Overlay.styles';

export const Overlay: FC<OverlayProps> = ({
  children,
  className,
  dataTestId = 'overlay-children',
  isPending,
  size = 20,
}) => (
  <div className={cx(styles.getOverlayWrapper(size), className)} data-testid="overlay-wrapper">
    {isPending ? (
      <>
        <div className={styles.overlay} data-testid="overlay-spinner">
          <Spinner size={size} className={styles.spinner} />
        </div>
        <div className={styles.childrenWrapper} data-testid={dataTestId}>
          {children}
        </div>
      </>
    ) : (
      children
    )}
  </div>
);
