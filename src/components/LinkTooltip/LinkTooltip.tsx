import React, { FC } from 'react';
import { Icon, IconName, Tooltip, useStyles } from '@grafana/ui';
import { getStyles } from './LinkTooltip.styles';

export interface LinkTooltipProps {
  tooltipText: string;
  link?: string;
  linkText?: string;
  icon?: IconName;
  tooltipDataTestId?: string;
  tooltipLinkTarget?: string;
}

export const LinkTooltip: FC<LinkTooltipProps> = ({
  tooltipText,
  link,
  linkText,
  icon = 'info-circle',
  tooltipDataTestId,
  tooltipLinkTarget = '_blank',
}) => {
  const styles = useStyles(getStyles);

  return (
    <Tooltip
      content={
        <div className={styles.contentWrapper}>
          <span>{tooltipText}</span>
          {link && linkText && (
            <a className={styles.link} href={link} target={tooltipLinkTarget}>
              {linkText}
            </a>
          )}
        </div>
      }
      data-testid={tooltipDataTestId}
    >
      <div>
        <Icon name={icon} />
      </div>
    </Tooltip>
  );
};
