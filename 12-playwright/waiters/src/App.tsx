import {Provider} from "react-redux";
import {store} from "./store";
import {WaitersComponent} from "./features/waiters";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomeComponent} from "./features/home";
import {AboutComponent} from "./features/about";
import {ErrorComponent} from "./features/error";
import {Container, Stack} from "@mui/material";
import {ThemeProvider} from "./components/ThemeContext";
import {Navigation} from "./components/Navigation";

export function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <Container maxWidth={"sm"}>
                        <Stack spacing={2}>
                            <Navigation/>
                            <Routes>
                                <Route path="/" element={<HomeComponent/>}/>
                                <Route path="/waiters/*" element={<WaitersComponent/>}/>
                                <Route path="/about" element={<AboutComponent/>}/>
                                <Route path="*" element={<ErrorComponent/>}/>
                            </Routes>
                        </Stack>
                    </Container>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    )
}


