import { makeStyles } from '@mui/styles';
import image from '../../static/images/water1.jpg';

export const useStyles = makeStyles({
  card: {
    width: '70%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidden: {
    display: 'none',
  },
  slideContainer: {
    backgroundColor: '#75C9CC',
    margin: '0 auto',
    paddingBottom: '0.7em',
    paddingTop: '1.5em',
  },
  slideShowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  carousel: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default useStyles;
