import { GrafanaTheme } from '@grafana/data';
import { css } from 'emotion';

export const getStyles = ({ height, spacing, colors }: GrafanaTheme) => ({
  wrapper: css`
    height: ${height.sm}px;
    color: ${colors.text};
    line-height: ${height.sm}px;
    display: inline-block;
    border-radius: 10px;
    padding: 0 ${spacing.sm};
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
    margin-left: ${spacing.sm};
    margin-top: ${spacing.sm};
    fill: currentColor;

    &:hover {
      color: ${colors.textStrong};
    }
  `,
});
