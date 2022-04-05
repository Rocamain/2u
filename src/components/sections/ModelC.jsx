import { Box, Typography } from '@mui/material';
import StyledButton from '../single/Button';
import StyledDivider from '../single/Divider';
import useCardStyles from '../../hooks/styles/useCardStyles';

function ModelC(props) {
  let { path, ...data } = props;

  const imageURL = require(`../../assets/static/images/${data.imageFileName}`);

  const { articlesContainer, cardBg, cardWrapper, handImg } = useCardStyles();

  return (
    <Box
      component={'section'}
      className={articlesContainer}
      sx={{
        marginBottom: '6em !important',
        marginTop: '3em !important',
      }}
    >
      <Box className={cardBg}>
        <Box className={cardWrapper}>
          <Box
            component="img"
            src={imageURL}
            title="hand with a phone"
            alt="hand with a phone"
            srcSet={`${imageURL} 1200w, ${imageURL} 980w, ${imageURL} 480w`}
            sizes="(min-width: 0px) and (max-width: 480px) 25vw, (min-width: 481px) and (max-width: 980px) 65vw, (min-width: 981px) 60vw, 100vw"
            className={handImg}
          />
          <Box
            mx="0"
            sx={{
              minWidth: '50%',
              maxWidth: '90%',
            }}
          >
            <Typography
              component="h4"
              variant="subtitle"
              children={data.title}
              sx={{
                marginBottom: '0.5em',
              }}
            />
            <StyledDivider sizeWidth={'25%'} />
            <Typography
              component="p"
              children={data.content}
              variant="body2"
              sx={{
                marginBottom: '1.5em',
              }}
            />

            <StyledButton content={data.button} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ModelC;
