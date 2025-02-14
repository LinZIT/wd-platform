import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#fbfbfb'
        },
        primary: {
            main: '#2f9439',
        },
        secondary: {
            main: '#84967f',
        },
        info: {
            main: '#6b989e',
        }
    },
    typography: {
        allVariants: {
            fontFamily: ['Geologica', 'Noto Sans Warang Citi', 'Open Sans', 'Ubuntu', 'Sans-serif'].join(','),
        },
        htmlFontSize: 16,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#fbfbfb",
                },
            },
        },
    }
});
export const themeDark = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#191919'
        },
        primary: {
            main: '#2f9439',
        },
        secondary: {
            main: '#84967f',
        },
        info: {
            main: '#6b989e',
        }
    },
    typography: {
        allVariants: {
            fontFamily: ['Geologica', 'Noto Sans Warang Citi', 'Open Sans', 'Ubuntu', 'Sans-serif'].join(','),
        },
        htmlFontSize: 16,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#191919",
                },
            },
        },
    }
});