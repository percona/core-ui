import { useDarkMode } from 'storybook-dark-mode';
import { getTheme, ThemeContext } from '@grafana/ui';
import { GrafanaThemeType } from '@grafana/data';

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
    const theme = useDarkMode() ? GrafanaThemeType.Dark : GrafanaThemeType.Light;

    return (
      <ThemeContext.Provider value={getTheme(theme)}>
        <Story />
      </ThemeContext.Provider>
    );
  },
]
