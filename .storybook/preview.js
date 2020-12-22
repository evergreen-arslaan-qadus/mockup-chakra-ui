import React from 'react'
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/react'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Story />
    </ThemeProvider>
  ),
];