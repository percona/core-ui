import React, { FC } from 'react';
import { Form } from 'react-final-form';

export const dataQa = (selector: string) => `[data-qa="${selector}"]`;

export const dataTestId = (selector: string) => `[data-testid="${selector}"]`;

export const FormWrapper: FC<any> = ({ children, ...props }) => (
  <Form onSubmit={() => {}} {...props}>
    {() => (
      <form>{children}</form>
    )}
  </Form>
);
