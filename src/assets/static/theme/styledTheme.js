import { createTheme, responsiveFontSizes } from '@mui/material';
let theme = createTheme();
theme = createTheme(theme, {});

theme = createTheme(theme, {
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
      fontSize: '1.3rem',
      lineHeight: 1.15,
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '0.090em',
    },
    title: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
      fontWeight: '300',
      color: 'rgba(51,51,51,0.8)',
      marginBottom: '1.1em',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '2.1rem', // 20px
        lineHeight: '1.5rem', //  30px
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '2.5rem', //24px
        lineHeight: '2rem', // 35px
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '4.5rem', //24px
        lineHeight: '3.3rem', // 35px
      },
    },
    title1: {
      fontWeight: '600',
      fontSize: '2.2rem',
      lineHeight: 1.05,
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '0.05em',
    },
    body2: {
      fontWeight: '400',
      fontSize: '1rem',
      color: theme.palette.text.primary,
      lineHeight: 1.63,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.05rem',
      marginBottom: '0.6em',
    },
    title2: {
      fontWeight: '400',
      fontSize: '1.4rem',
      lineHeight: 1.05,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.08em',
      color: '#8F5F45',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '1.45rem', // 20px
        lineHeight: '1.9rem', //  30px
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.6rem', //24px
        lineHeight: '2rem', // 35px
      },
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