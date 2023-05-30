"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});

export const NextAuthProvider = ({ children }) => {
    return (
        <>
            <SessionProvider>
                <ThemeProvider theme={darkTheme}>
                    {children}
                </ThemeProvider>
            </SessionProvider>
        </>
    )
};
