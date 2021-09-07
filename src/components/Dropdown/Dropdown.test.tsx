import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Toggle = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <button type="button" ref={ref} {...props}>Toggle</button>
));

const asyncClick = async (ref) => {
  await act(async () => {
    userEvent.click(ref);
  });
};

const DATA_QA_MENU='dropdown-menu-menu';
const DATA_QA_TOGGLE='dropdown-menu-toggle';

describe('Dropdown ::', () => {
  test('should render the toggle', () => {
    render(
      <Dropdown toggle={Toggle}>
        <a href="/">root</a>
        <a href="/test">test</a>
      </Dropdown>,
    );

    expect(screen.getByTestId(DATA_QA_TOGGLE)).toBeInTheDocument();
  });

  test('clicking on the toggle toggles the menu visibility', async () => {
    render(
      <Dropdown toggle={Toggle}>
        <a href="/">root</a>
        <a href="/test">test</a>
      </Dropdown>,
    );

    const toggle = await screen.getByTestId(DATA_QA_TOGGLE);

    expect(screen.queryByTestId(DATA_QA_MENU)).not.toBeInTheDocument();
    await asyncClick(toggle);

    expect(screen.getByTestId(DATA_QA_MENU)).toBeInTheDocument();
    await asyncClick(toggle);

    expect(screen.queryByTestId(DATA_QA_MENU)).not.toBeInTheDocument();
  });

  test('clicking outside the dropdown closes the menu', async () => {
    render(
      <main role="main">
        <Dropdown toggle={Toggle}>
          <a href="/">root</a>
          <a href="/test">test</a>
        </Dropdown>
      </main>,
    );

    const toggle = screen.getByTestId(DATA_QA_TOGGLE);

    await asyncClick(toggle);

    expect(screen.getByTestId(DATA_QA_MENU)).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByRole('main'));

    expect(screen.queryByTestId(DATA_QA_MENU)).not.toBeInTheDocument();
  });

  test('mousedown on the dropdown does not close the menu', async () => {
    const menuAction = jest.fn();

    render(
      <Dropdown toggle={Toggle}>
        <a data-qa="menu-item" onClick={menuAction}>root</a>
        <a href="/test">test</a>
      </Dropdown>,
    );

    const toggle = screen.getByTestId(DATA_QA_TOGGLE);

    await asyncClick(toggle);
    fireEvent.mouseDown(toggle);

    const menu = screen.getByTestId(DATA_QA_MENU);

    fireEvent.mouseDown(menu);

    expect(menu).toBeInTheDocument();
  });

  test('clicking on a menu item propagates the event and closes the menu', async () => {
    const menuAction = jest.fn();

    render(
      <Dropdown toggle={Toggle}>
        <div data-qa="menu-item" onClick={menuAction}>root</div>
        <a href="/test">test</a>
      </Dropdown>,
    );

    const toggle = screen.getByTestId(DATA_QA_TOGGLE);

    expect(menuAction).toBeCalledTimes(0);

    await asyncClick(toggle);

    const menuItem = screen.getByTestId('menu-item');

    await asyncClick(menuItem);

    expect(menuAction).toBeCalledTimes(1);
  });

  test('doesn\'t keep menu item active on close', async () => {
    render(
      <Dropdown toggle={Toggle}>
        <div data-qa="menu-item" onClick={jest.fn()}>root</div>
        <a href="/test">test</a>
      </Dropdown>,
    );

    const toggle = await screen.getByTestId(DATA_QA_TOGGLE);

    await asyncClick(toggle);

    const menuItem = await screen.getByTestId('menu-item');

    await asyncClick(menuItem);
    await asyncClick(toggle);

    expect(menuItem?.className.includes('active')).toBeFalsy();
  });
});
