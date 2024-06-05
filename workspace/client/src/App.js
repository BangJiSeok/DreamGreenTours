import logo from "./logo.svg";
import "./App.css";

import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ThemeProvider } from "styled-components";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
