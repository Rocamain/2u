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
      main: '#00BCCC',
      contrastText: '#fff',
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
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: 1.5,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.08em',
    },
    h5: {
      fontWeight: '600',
      fontSize: '0.9rem',
      lineHeight: 1.4,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.07em',
    },
    p: {
      fontWeight: '400',
      fontSize: '0.9rem',
      lineHeight: 0.9,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.007em',
    },
    body1: {
      fontWeight: '500',
      fontSize: '1.2rem',
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '0.03em',

      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1.8rem',
        lineHeight: '1.6rem',
        letterSpacing: '-0.1rem',
        textShadow: '0em 0em 4.8em #ffffff',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '2rem',
        lineHeight: '1.7rem',
        letterSpacing: '-0.1rem',
        textShadow: '0em 0em 4.8em #ffffff',
      },
    },
    heroTitle: {
      fontWeight: '700',
      color: '#00BCCC',
      fontFamily: ['Abel', 'Open Sans'].join(','),
      bottomPadding: '2.8em',
      textShadow: '0em 0em 4.8em #ffffff',

      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '5.2rem',
        lineHeight: '4.7rem',
        letterSpacing: '-0.3rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '6.2rem',
        lineHeight: '5.8rem',
        letterSpacing: '-0.3rem',
      },
    },

    heroSubtitle: {
      fontWeight: '300',
      color: '#666',
      fontFamily: ['Abel', 'Open Sans'].join(','),

      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '2.8rem',
        lineHeight: '2.5rem',
        letterSpacing: '-0.1rem',
        textShadow: '0em 0em 4.8em #ffffff',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '3.2rem',
        lineHeight: '3.1rem',
        letterSpacing: '-0.1rem',
        textShadow: '0em 0em 4.8em #ffffff',
      },
    },

    title: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
      fontWeight: '300',
      color: 'rgba(51,51,51,0.8)',
      marginBottom: '1.1em',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '2.1rem',
        lineHeight: '1.9rem',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '2.5rem',
        lineHeight: '2.3rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '4.2rem',
        lineHeight: '2.8rem',
        marginBottom: '0.5em',
      },
    },
    title1: {
      fontWeight: '400',
      fontSize: '1.2rem',
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '0.01em',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontWeight: '700',
        fontSize: '1.8rem',
        lineHeight: '1.5rem',
        letterSpacing: '-0.01em',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontWeight: '500',
        fontSize: '2.6rem',
        lineHeight: '2.3rem',
        letterSpacing: '-0.02em',
      },
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '2.4rem',
        lineHeight: '2.3rem',
        letterSpacing: '-0.04em',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '2.6rem',
        lineHeight: '2.4rem',
        letterSpacing: '-0.04em',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '2.7rem',
        lineHeight: '2.4rem',
        letterSpacing: '-0.04em',
      },
    },
    title3: {
      fontWeight: '600',
      fontSize: '1.2rem',
      color: '#00BCCC',
      lineHeight: 1.25,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.05em',

      [theme.breakpoints.between('xs', 'sm')]: {
        fontWeight: '700',
        fontSize: '1.3rem',
        lineHeight: '1.3rem',
        letterSpacing: '0.04em',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.45rem',
        lineHeight: '1.3rem',
        letterSpacing: '0.03em',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
        lineHeight: '1.5rem',
        letterSpacing: '0.02em',
      },
    },
    subtitle1: {
      fontWeight: '700',
      fontSize: '0.9rem',
      color: '#666',
      fontFamily: ['Open Sans', 'Abel'].join(','),
      marginBottom: '0.5em',
      lineHeight: '1rem',
      letterSpacing: '0.01em',
    },
    navbarLinks: {
      fontWeight: '600',
      fontSize: '0.9rem',
      lineHeight: '1.2rem',
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.04em',
      color: '#666',
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '0.9rem',
        lineHeight: '1.1rem',
        letterSpacing: '0.04em',
      },
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1.15rem',
        lineHeight: '1.1rem',
        letterSpacing: '0.04em',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.3rem',
        lineHeight: '1.2rem',
        letterSpacing: '0.05em',
      },
      '&:hover': {
        color: '#75C9CC',
      },
    },
    body2: {
      fontWeight: '400',
      fontSize: '1rem',
      color: '#666',
      lineHeight: '1.35rem',
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.02rem',
      marginBottom: '0.6em',
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1.14rem',
        lineHeight: '1.5rem',
        letterSpacing: '0.03rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.23rem',
        lineHeight: '1.8rem',
      },
    },
    body3: {
      fontWeight: '500',
      fontSize: '1rem',
      color: '#666',
      lineHeight: '0.9rem',
      fontFamily: ['Abel', 'Open Sans'].join(','),
      marginBottom: '0.5em',
    },
    title2: {
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: 1.05,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.08em',
      color: '#8F5F45',
      marginBottom: '1em',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '1.25rem',
        lineHeight: '1.2rem',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.8rem',
        lineHeight: '1.4rem',
      },
    },
    subtitle: {
      fontWeight: '400',
      fontSize: '2.1rem',
      lineHeight: 1.75,
      fontFamily: ['Abel', 'Open Sans'].join(','),

      color: theme.palette.text.primary,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '1.65rem',
        lineHeight: '1.9rem',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.8rem',
        lineHeight: '1.7rem',
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
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '0.2em',
          '&:hover': {},
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0.5em',
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

    MuiListItemButton: {
      styleOverrides: {
        root: {
          border: 'none',
          background: 'none',
          width: 'maxContent',
          '&.Mui-selected': {
            backgroundColor: '#00bccc36',
          },
          contrastText: '#fff',
          '&:hover': {
            backgroundColor: '#00bccc',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.3rem',
            lineHeight: '1.3rem',
            letterSpacing: '0.02em',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '1.3rem',
            lineHeight: '1.2rem',
            marginBottom: '0.01em',
          },
          contrastText: '#fff',
          '&:hover': {
            backgroundColor: '#00bccc',
          },
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
