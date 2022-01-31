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
    title: {
      lineHeight: 1.3,
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
  },
});

// export default theme
