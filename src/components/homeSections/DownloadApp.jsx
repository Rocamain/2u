import { Divider, Box, Typography } from '@mui/material';
import useDb from '../../hooks/custom/getData';
import StyledButton from '../accessories/Button';
import useCardStyles from '../../hooks/styles/useCardStyles';

import hand from '../../assets/static/images/hand.png';

function DownloadApp() {
  let data = useDb('http://localhost:8000/Home');
  if (data) {
    data = data.DownloadApp;
  }

  const { articlesContainer, divider, cardBg, cardWrapper, handImg } =
    useCardStyles();

  return (
    data && (
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
              src={hand}
              title="hand with a phone"
              alt="hand with a phone"
              // srcSet={`${hand} 1200w, ${hand} 980w, ${hand} 480w`}
              // sizes="(min-width: 0px) and (max-width: 480px) 25vw, (min-width: 481px) and (max-width: 980px) 65vw, (min-width: 981px) 60vw, 100vw"
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
              <Divider
                className={divider}
                sx={{
                  marginBottom: '10px',
                }}
              />
              <Typography
                component="p"
                children={data.content1}
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
    )
  );
}

export default DownloadApp;
