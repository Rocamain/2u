import { makeStyles } from '@mui/styles';
import image from '../../static/images/water1.jpg';

export const useStyles = makeStyles((theme) => {
  return {
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'black',
    },
    cardFirst: {
      backgroundColor: '#75C9CC',
    },
    carouselTitle: {
      lineHeight: 1,
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
      fontFamily: 'Open Sans',
    },

    carouselContent: {
      lineHeight: 1.13,
      fontSize: '1.3rem',
      fontWeight: 400,
      letterSpacing: '0.05em',
      fontFamily: 'Open Sans',
    },
    hidden: {
      display: 'none',
    },
    slideContainer: {
      width: '100%',
      margin: '0 auto',
      backgroundColor: '#75C9CC',
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
    carousel: {
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${image})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },

    divider: {
      backgroundColor: '#cc7875',
      height: '0.1rem',

      marginBottom: '1em',
      width: '40%',
      // marginRight: 'auto',
    },

    articlesContainer: {
      backgroundImage:
        'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)!important',
      marginTop: '140px',
      marginBottom: '130px',
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    articlesWrapper: {
      width: '85%',
      position: 'absolute',
      top: '-5em',
      margin: '0 auto',

      backgroundColor: 'rgb(244, 249, 252)',

      padding: '2em',
    },
  };
});

export default useStyles;
