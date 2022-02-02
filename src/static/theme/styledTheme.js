import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#75C9CC',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#75C9CC',
    },
  },
  typography: {
    fontFamily: 'Open Sans',

    h2: {},
    title: {
      lineHeight: 1,
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    body1: {
      lineHeight: 1.13,
      fontSize: '1.3rem',
      fontWeight: 400,
      letterSpacing: '0.05em',
      fontFamily: 'Open Sans',
    },
  },

  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          border: 'none',
          background: 'none',
          color: '#75C9CC',
          contrastText: '#fff',
          '&:hover': {},
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
          wordWrap: 'break-word',
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          border: 'none',
          background: 'none',
          color: '#75C9CC',
          contrastText: '#fff',
          '&:hover': {},
        },
        dotActive: {
          background: 'white',
        },
      },
    },
  },
});
