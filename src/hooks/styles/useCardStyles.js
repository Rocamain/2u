import { makeStyles } from '@mui/styles';
import image from '../../static/images/water1.jpg';

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
