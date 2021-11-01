import { GrafanaTheme } from '@grafana/data';
import { css } from 'emotion';

export const getStyles = ({ typography, spacing, colors }: GrafanaTheme) => ({
  labelWrapper: css`
    align-items: center;
    display: flex;
    flex-direction: row;
    div[class$='-Icon'] {
      display: flex;
      margin-left: ${spacing.xs};
      margin-bottom: ${spacing.xxs};
    }
  `,
  label: css`
      display: block;
      text-align: left;
      font-size: ${typography.size.md};
      font-weight: ${typography.weight.semibold};
      line-height: ${typography.lineHeight.sm};
      margin: ${spacing.formLabelMargin};
      padding: ${spacing.formLabelPadding};
      color: ${colors.formLabel};
    `,
});
