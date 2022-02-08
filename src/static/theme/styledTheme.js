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
    text: {
      primary: 'rgba(51,51,51,0.8)',
    },
  },

  typography: {
    fontFamily: ['Abel', 'Open Sans'].join(','),
    h1: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
    },
    h2: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
    },
    h3: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
    },
    h4: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
    },
    p: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
    },
    title: {
      lineHeight: 1,
      fontSize: '1.5rem',
      fontWeight: 500,
      letterSpacing: '0.02rem',
      fontFamily: 'Abel',
      marginBottom: '1.3em',
    },

    body1: {
      lineHeight: '1.4rem',
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.03rem',
      // fontFamily: 'Open Sans',
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
