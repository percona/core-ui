import React, { FC } from 'react';
import { Icon, Tooltip, useStyles2 } from '@grafana/ui';
import { getStyles } from './LinkTooltip.styles';
import { LabelTooltipProps } from '../../shared/types';

export const LinkTooltip: FC<LabelTooltipProps> = ({
  tooltipText,
  tooltipLink,
  tooltipLinkText = 'Read more',
  tooltipIcon = 'info-circle',
  tooltipDataTestId,
  tooltipLinkTarget = '_blank',
}) => {
  const styles = useStyles2(getStyles);

  return (
    <Tooltip
      content={
        <div className={styles.contentWrapper}>
          <span>{tooltipText}</span>
          {tooltipLink && (
            <a className={styles.link} href={tooltipLink} target={tooltipLinkTarget}>
              {tooltipLinkText}
            </a>
          )}
        </div>
      }
      data-testid={tooltipDataTestId}
    >
      <div>
        <Icon name={tooltipIcon} />
      </div>
    </Tooltip>
  );
};
