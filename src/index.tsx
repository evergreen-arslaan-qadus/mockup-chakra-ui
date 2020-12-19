import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    white: "#ffffff",
    green: {
      0: "#39b54a",
      75: "#6bc878",
      50: "#9cdaa4",
      25: "#cdecd2",
      10: "#ebf7ec",
      100: "#36ab45"
    },
    yellow: {
      0: "#ffc805",
      75: "#ffd644",
      50: "#ffe382",
      25: "#fff1c0",
      10: "#fff9e6",
      100: "#8d6e00"
    },
    gray: {
      0: "#706f6f",
      75: "#939393",
      50: "#b7b7b7",
      25: "#dbdbdb",
      5: "#f7f7f7",
      10: "#f0f0f0",
    },
    ruby: {
      0: "#d8338b",
      75: "#e474b1",
      50: "#eca4cb",
      25: "#f5d3e5",
      10: "#fae9f3",
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);