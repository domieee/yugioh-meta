"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    // Define your styles here
    table: {
        // Style properties for the table
    },
    sheet: {
        // Style properties for the sheet
    },
    // Other styles...
});

export const NextAuthProvider = ({ children }) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <SessionProvider>
                    <ThemeProvider theme={darkTheme}>
                        {children}
                    </ThemeProvider>
                </SessionProvider>
            </StyledEngineProvider>
        </>
    )
};
