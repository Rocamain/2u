import { Divider, Box, Typography } from '@mui/material';
import useDb from '../../hooks/custom/useDb';
import StyledButton from '../accessories/Button';
import useCardStyles from '../../hooks/styles/useCardStyles';
import { useTheme } from '@mui/styles';
import hand from '../../assets/static/images/hand.png';

function DownloadApp() {
  const data = useDb('http://localhost:8000/sections');
  const { articlesContainer, divider, wrapper } = useCardStyles();

  return (
    data && (
      <Box
        component={'section'}
        className={articlesContainer}
        sx={{ bottom: '1.4em' }}
      >
        <Box className={wrapper}>
          <Box
            component="img"
            src={hand}
            title="shop"
            alt="shop"
            srcSet={`${hand} 1200w, ${hand} 980w, ${hand} 480w`}
            sizes="(min-width: 0px) and (max-width: 480px) 85vw, (min-width: 481px) and (max-width: 980px) 95vw, (min-width: 981px) 60vw, 100vw"
            sx={{
              position: 'relative',
              bottom: '15%',
              minHeight: '15em',
              width: '40%',
            }}
          />
          <Box>
            <Typography
              component="h2"
              variant="title"
              children={data[2].title}
            />
            <Divider className={{ divider }} />
            <Typography
              component="p"
              children={data[2].content1}
              variant="body2"
            />

            <StyledButton content={data[2].button} />
          </Box>
        </Box>
      </Box>
    )
  );
}

export default DownloadApp;
