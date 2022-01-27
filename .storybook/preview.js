import { useDarkMode } from 'storybook-dark-mode';
import { ThemeContext } from '@grafana/ui';
import { createTheme } from '@grafana/data';

import './styles/font-awesome.css';
import './styles/global.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    const theme = createTheme({ colors: { mode: useDarkMode() ? 'dark' : 'light' } });

    return (
      <ThemeContext.Provider value={theme}>
        <Story />
      </ThemeContext.Provider>
    );
  },
]
