import React, { ButtonHTMLAttributes, FC } from 'react';
import { Button, ButtonVariant, IconName, Spinner } from '@grafana/ui';
import { cx } from 'emotion';

type ComponentSize = 'xs' | 'sm' | 'md' | 'lg';

type CommonProps = {
  size?: ComponentSize;
  variant?: ButtonVariant;
  icon?: IconName;
  className?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
  fieldClassName?: string;
};

export type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export interface LoaderButtonProps extends ButtonProps {
  loading?: boolean;
}

export const LoaderButton: FC<LoaderButtonProps> = ({
  children,
  className,
  disabled,
  loading = false,
  size = 'md',
  fieldClassName,
  ...props
}) => (
  <Button className={cx(className, fieldClassName)} size={size} disabled={loading || disabled} {...props}>
    {loading ? <Spinner /> : children}
  </Button>
);
