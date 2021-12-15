import { GrafanaTheme } from '@grafana/data';
import { css } from 'emotion';

export const getStyles = ({ height, spacing }: GrafanaTheme) => ({
  wrapper: css`
    height: ${height.sm}px;
    line-height: ${height.sm}px;
    display: inline-block;
    border-radius: calc(${height.sm}px/2);
    padding: 0 ${spacing.md};
    background-color: #eceff1;
  `,
});
