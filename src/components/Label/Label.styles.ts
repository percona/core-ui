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
    }
  `,
  label: css`
      display: block;
      text-align: left;
      font-size: ${typography.size.md};
      font-weight: ${typography.weight.semibold};
      line-height: 1.25;
      margin: ${spacing.formLabelMargin};
      padding: ${spacing.formLabelPadding};
      color: ${colors.formLabel};
    `,
});
