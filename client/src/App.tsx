import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "@/scene/NavBar";
import DashBoard from "@/scene/DashBoard";
import Predictions from "@/scene/Predictions";

function App() {
    const theme = useMemo(() => createTheme(themeSettings), []);

    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box
                        width="100%"
                        height="100%"
                        padding="1rem 2rem 4rem 2rem"
                    >
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<DashBoard />} />
                            <Route
                                path="/predictions"
                                element={<Predictions />}
                            />
                        </Routes>
                    </Box>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
