import { createTheme } from'@mui/material'; 


export const theme = createTheme({
    typography: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
    },
    palette: {
        primary: {
            main: '#7B1EA2'
        },
        secondary: {
            main: '#242625',
            light: '#1B2929'
        },
        info: {
            main: '#ab8dce'
        }
    }
})