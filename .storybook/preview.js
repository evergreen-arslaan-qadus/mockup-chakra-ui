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