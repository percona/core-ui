import { stylesFactory } from '@grafana/ui';
import { GrafanaTheme } from '@grafana/data';
import { css } from 'emotion';

export const getStyles = stylesFactory(({ spacing, palette }: GrafanaTheme) => ({
  contentWrapper: css`
    display: flex;
    flex-direction: column;
  `,
  link: css`
    color: ${palette.gray4};
    padding-top: ${spacing.sm};
    text-decoration: underline;
    &: hover {
      color: white;
      text-decoration: underline;
    }
  `,
}));
