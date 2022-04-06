import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

function StyledDivider(props) {
  const { sizeWidth, center } = props;

  const MyDivider = styled(Divider)(({ theme, width, hero, center }) => {
    return {
      backgroundColor: '#fcb900',
      height: '0.17em',
      width: width,
      marginBottom: center ? '05em' : '1em',
      marginRight: 'auto',
      margin: center ? '0 auto' : '',
      [theme.breakpoints.down('md')]: {
        width: hero ? '100%' : width,
        height: '0.15em',
      },
    };
  });

  return <MyDivider width={sizeWidth} center={center} />;
}

export default StyledDivider;
