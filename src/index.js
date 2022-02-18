// This is for the fake API. Do not delete!
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { worker } from "./mocks/browser";
worker.start();

render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById("root"));
