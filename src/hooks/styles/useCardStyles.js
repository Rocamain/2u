import { makeStyles } from '@mui/styles';
import image from '../../assets/static/images/water1.jpg';
import backgroundImage from '../../assets/static/images/bg.jpg';

export const useStyles = makeStyles((theme) => {
  return {
    carousel: {
      height: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${image})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },

    slideContainer: {
      width: '100%',
      margin: '0 auto',
      backgroundImage: theme.palette.background.primary,
      paddingBottom: '0.7em',
      paddingTop: '1.5em',
    },
    slideShowWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    slideButton: {
      minWidth: '2.7em',
      position: 'relative',
    },
    chevron: {
      color: 'white',
      fontSize: '3.4rem',
    },

    divider: {
      backgroundColor: '#cc7875',
      height: '0.1rem',
      marginBottom: '2em',
      width: '40%',
    },

    articlesContainer: {
      backgroundImage: theme.palette.background.primary,
      marginTop: '10em',
      marginBottom: '18em',
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowX: 'visible',
    },
    aboutUsSection: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: '50%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
    },
    // boxShadow: '20vw 0px 0px 0px #00bccc',
    aboutGridImgShadow: {
      [theme.breakpoints.up('md')]: {
        boxShadow: '20vw 0px 0px 0px #00bccc',
      },
    },
    aboutGridImg: {
      objectFit: 'cover',
      width: '95vw',
      minHeight: '60%',
      marginRight: '-10vw',
      float: 'right',
      boxSizing: 'border-box',
      boxShadow: '0px 80px 100px -40px rgb(0 0 0 / 30%)',
      marginBottom: '9em',
      [theme.breakpoints.up('md')]: {
        width: '110%',
      },
    },

    articlesWrapper: {
      width: '85%',
      position: 'absolute',
      top: '-6em',
      margin: '0 auto',
      backgroundColor: theme.palette.background.secondary,
      padding: '1.5em',
    },
  };
});

export default useStyles;
