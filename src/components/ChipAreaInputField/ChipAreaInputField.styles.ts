import { css } from 'emotion';
import { GrafanaTheme } from '@grafana/data';

export const getStyles = (theme: GrafanaTheme) => {
  const {
    border, colors, palette, isDark, spacing, typography,
  } = theme;

  const focusBoxShadow = isDark
    ? 'rgb(20, 22, 25) 0px 0px 0px 2px, rgb(31, 96, 196) 0px 0px 0px 4px'
    : 'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(87, 148, 242) 0px 0px 0px 4px';

  return {
    chips: css`
      background-color: ${colors.formInputBg};
      padding: 7px 8px;
      border-width: ${border.width.sm};
      border-style: solid;
      border-color: ${colors.formInputBorder};
      border-radius: 2px;
      outline: transparent dotted 2px;

      &:focus-within {
        outline-offset: 2px;
        box-shadow: ${focusBoxShadow};
        outline: none;
        transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
      }

      &:hover {
        cursor: text;
      }
    `,
    field: css`
      &:not(:last-child) {
        margin-bottom: ${spacing.formInputMargin};
      }
    `,
    errorMessage: css`
      color: ${palette.redBase};
      font-size: ${typography.size.sm};
      height: ${typography.size.sm};
      line-height: ${typography.lineHeight.sm};
      margin: ${spacing.formValidationMessageMargin};
      padding: ${spacing.formLabelPadding};
    `,
    input: css`
      line-height: ${typography.lineHeight.md};
      font-size: ${typography.size.md};
      color: ${colors.formInputText};
      position: relative;
      display: inline-block;
      padding: 0;
      border: 0;
      width: 120px;
      background: 0;
      z-index: 0;

      &.invalid {
        border-color: ${colors.formInputBorderInvalid};
        &:hover {
          border-color: ${colors.formInputBorderInvalid};
        }
      }
      &:hover {
        border-color: ${colors.formInputBorderHover};
      }
      &:disabled {
        background-color: ${colors.formInputBgDisabled};
        color: ${colors.formInputDisabledText};
      }
    `,
  };
};
