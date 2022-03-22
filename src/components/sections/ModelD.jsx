import { Divider, Box, Typography } from '@mui/material';
import StyledButton from '../single/Button';
import useCardStyles from '../../hooks/styles/useCardStyles';

function ModelD(props) {
  const { path, ...data } = props;

  const imageURL = require(`../../assets/static/images/${data.imageFileName}`);
  const { anyDoubtSection, divider, anyDoubtImg, yellowCard } = useCardStyles();

  return (
    <Box className={anyDoubtSection}>
      <Box>
        <Typography
          component="h2"
          variant="title"
          children={data.title}
          sx={{
            padding: ['0', '0', '1em 0'],
            paddingRight: '1em',
            marginBottom: '0.5em',
          }}
        />

        <Box className={yellowCard}>
          <Divider className={divider} />
          <Typography
            component="h2"
            variant="body2"
            children={data.content}
            sx={{
              marginBottom: '1.5em',
            }}
          />

          <StyledButton content={data.button} />
        </Box>
      </Box>
      <Box
        component="img"
        src={imageURL}
        title="shop"
        alt="shop"
        srcSet={`${imageURL} 1200w, ${imageURL} 980w, ${imageURL} 480w`}
        sizes="(min-width: 0px) and (max-width: 480px) 85vw, (min-width: 481px) and (max-width: 980px) 95vw, (min-width: 981px) 60vw, 100vw"
        className={anyDoubtImg}
      />
    </Box>
  );
}

export default ModelD;
