import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/react'
import { theme } from '../src/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'Grey',
    values: [
      {
        name: 'Grey',
        value: theme.colors.gray[5],
      },
      {
        name: 'White',
        value: theme.colors.white,
      },
      {
        name: 'Green',
        value: theme.colors.green[0],
      },
    ],
  },
};