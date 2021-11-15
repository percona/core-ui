import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CopyToClipboard } from './CopyToClipboard';

const DATA_TESTID='tooltip';
const DATA_QA_BUTTON='clipboard-button';

describe('CopyToClipboard ::', () => {
  test('should render the component', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <>
        <CopyToClipboard textContainer={ref}/>
        <div ref={ref}>
          some text
        </div>
      </>,
    );

    expect(screen.getByTestId(DATA_TESTID_BUTTON)).toBeInTheDocument();
  });

  test('clicking on the button should show the tooltip', async () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <>
        <CopyToClipboard textContainer={ref}/>
        <div ref={ref}>
          some text
        </div>
      </>,
    );
    const button = await screen.getByTestId(DATA_TESTID_BUTTON);

    expect(screen.queryByTestId(DATA_TESTID)).not.toBeInTheDocument();
    userEvent.click(button);

    expect(screen.queryByTestId(DATA_TESTID)).toBeInTheDocument();
  });

  test('copyToClipboard should copy the text', async () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <>
        <CopyToClipboard textContainer={ref}/>
        <div ref={ref}>
          some text
        </div>
      </>,
    );
    document.execCommand = jest.fn();
    const copyToClipboardSpy = jest.spyOn(document as any, 'execCommand');

    const button = await screen.getByTestId(DATA_TESTID_BUTTON);

    expect(screen.queryByTestId(DATA_TESTID)).not.toBeInTheDocument();
    userEvent.click(button);

    expect(screen.queryByTestId(DATA_TESTID)).toBeInTheDocument();

    expect(copyToClipboardSpy).toHaveBeenCalledWith('copy');
  });

  test('tooltip is automatically hidden after 2000 ms', async () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <>
        <CopyToClipboard textContainer={ref}/>
        <div ref={ref}>
          some text
        </div>
      </>,
    );
    const button = await screen.getByTestId(DATA_TESTID_BUTTON);

    expect(screen.queryByTestId(DATA_TESTID)).not.toBeInTheDocument();
    userEvent.click(button);

    expect(screen.queryByTestId(DATA_TESTID)).toBeInTheDocument();
  }, 2000);
});