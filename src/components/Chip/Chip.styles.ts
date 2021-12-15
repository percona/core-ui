import { GrafanaTheme } from '@grafana/data';
import { css } from 'emotion';

export const getStyles = ({ height, spacing, colors }: GrafanaTheme) => ({
  wrapper: css`
    height: ${height.sm}px;
    color: ${colors.text};
    line-height: ${height.sm}px;
    display: inline-block;
    border-radius: calc(${height.sm}px/2);
    padding: 0 ${spacing.md};
    cursor: pointer;
    background-color: ${colors.bg2};
    transition: all .1s linear;

    &:hover {
      background-color: ${colors.bg3};
    }
  `,
  removeIcon: css`
    float: right;
    cursor: pointer;
    padding-left: ${spacing.sm};
    line-height: ${height.sm}px;
  `,
});
