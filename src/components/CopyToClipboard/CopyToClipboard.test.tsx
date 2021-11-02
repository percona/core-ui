import React from 'react';
import { act, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CopyToClipboard } from './CopyToClipboard';

const asyncClick = async (ref) => {
  await act(async () => {
    userEvent.click(ref);
  });
};

const DATA_QA_TOOLTIP='tooltip';
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

    expect(screen.getByTestId(DATA_QA_BUTTON)).toBeInTheDocument();
  });

  test('clicking on the button show the tooltip', async () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <>
        <CopyToClipboard textContainer={ref}/>
        <div ref={ref}>
          some text
        </div>
      </>,
    );
    const button = await screen.getByTestId(DATA_QA_BUTTON);

    expect(screen.queryByTestId(DATA_QA_TOOLTIP)).not.toBeInTheDocument();
    await asyncClick(button);

    expect(screen.queryByTestId(DATA_QA_TOOLTIP)).toBeInTheDocument();
  });

  test('clicking on the button show the tooltip', async () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <>
        <CopyToClipboard textContainer={ref}/>
        <div ref={ref}>
          some text
        </div>
      </>,
    );
    const button = await screen.getByTestId(DATA_QA_BUTTON);

    expect(screen.queryByTestId(DATA_QA_TOOLTIP)).not.toBeInTheDocument();
    await asyncClick(button);

    expect(screen.queryByTestId(DATA_QA_TOOLTIP)).toBeInTheDocument();
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
    const button = await screen.getByTestId(DATA_QA_BUTTON);

    expect(screen.queryByTestId(DATA_QA_TOOLTIP)).not.toBeInTheDocument();
    await asyncClick(button);

    expect(screen.queryByTestId(DATA_QA_TOOLTIP)).toBeInTheDocument();

    waitForElementToBeRemoved(screen.queryByTestId(DATA_QA_TOOLTIP)).then(() =>
     expect(screen.queryByTestId(DATA_QA_TOOLTIP)).not.toBeInTheDocument(),
    );

  }, 2000);
});
