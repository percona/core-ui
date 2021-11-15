import { GrafanaTheme } from '@grafana/data';
import { css } from 'emotion';

export const getStyles = (theme: GrafanaTheme) => {
  const { spacing, colors, border, zIndex } = theme;

  return {
    tooltip: css`
      z-index: ${zIndex.tooltip};
    `,
    tooltipText: css`
      display: flex;
      background-color: ${colors.bg2};
      border-radius: ${border.radius.md};
      box-shadow: 0 0 ${spacing.sm} 0 ${colors.dropdownShadow};
      padding: ${spacing.sm};
      color: ${colors.text};
    `,
    clipboardButton: css`
      background-color: ${colors.bgBlue1};
    `,
    clipboardButtonContainer: css`
      max-height: fit-content;
      max-width: fit-content;
    `,
  };
};
