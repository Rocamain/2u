import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#75C9CC',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#75C9CC',
    },
    carousel: {
      main: '#000000',
    },
    text: {
      primary: 'rgba(51,51,51,0.8)',
    },
    background: {
      primary: 'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)!important',
      secondary: 'rgb(244, 249, 252)',
    },
  },

  typography: {
    htmlFontSize: 16,

    fontFamily: ['Abel', 'Open Sans'].join(','),
    h1: {
      fontWeight: '300',
      fontSize: '5rem',
      lineHeight: 1.16,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.017em',
    },
    h2: {
      fontWeight: '500',
      fontSize: '3.5rem',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.008em',
      // color: '#FFFF00',
    },
    h3: {
      fontWeight: '400',
      fontSize: '3rem',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.008em',
    },
    h4: {
      fontWeight: '500',
      fontSize: '2.3rem',
      lineHeight: 1.3,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0em',
    },
    h5: {
      fontWeight: '500',
      fontSize: '1.8rem',
      lineHeight: 1.4,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.007em',
    },
    p: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
    },
    body1: {
      fontWeight: '400',
      fontSize: '1.5rem',
      lineHeight: 1.15,
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '0.090em',
    },
    title1: {
      fontWeight: '600',
      fontSize: '2rem',
      lineHeight: 1.05,
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '0.05em',
    },
    body2: {
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: 1.43,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.05rem',
    },
    title2: {
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: 1.05,
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '0.08em',
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0px 50px 80px 0px rgb(12 2 2 / 10%)',
          '&:hover': {},
        },
      },
    },
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

theme = responsiveFontSizes(theme);

export default theme;
