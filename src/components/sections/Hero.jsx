import { Box, Typography } from '@mui/material';
import photo from '../../assets/static/backgrounds/spa-and-wellness.jpg';
import { styled } from '@mui/material/styles';
import curves from '../../assets/static/backgrounds/curves.svg';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(1deg,#ffffff 20%,rgba(255,255,255,0.2) 68%),url(${photo})!important`,
  backgroundSize: 'cover',
  backgroundColor: '#FFFFFF!important',
  BackgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  padding: '6em 0',
  position: 'relative',
}));

function Hero(props) {
  const { path, ...data } = props;

  return (
    <HeroContainer>
      <Box
        sx={{
          position: 'relative',
          bottom: { xm: '2em', sm: 0 },
          zIndex: 100,
          width: { xs: '100%', sm: '80%' },
          maxWidth: { md: '600px', lg: '900px', xl: '1400px' },
          margin: 'auto',
        }}
      >
        <Box
          sx={{
            zIndex: '10!important',
            position: 'relative',
            py: ['0em', '0em', '0.3em', '4em', '6em', '9em'],
          }}
        >
          <Typography
            sx={{
              maxWidth: '70%',
              margin: '0 auto',
              fontFamily: 'Abel',
              fontWeight: 700,
              fontSize: ['65px', '80px', '90px', '110px', '130px'],
              color: '#00BCCC !important',
              letterSpacing: ['-2px', '-3px', '-5px'],
              lineHeight: '0.9em',
              textAlign: { xs: 'center', sm: 'justify' },
              textShadow: '0em 0em 0.3em #ffffff',
            }}
          >
            {data.title}
          </Typography>
          <Typography
            sx={{
              maxWidth: '80%',
              margin: '0 auto',
              marginRight: { xm: '0', sm: '4%', md: '18%' },
              color: '#666',
              fontWeight: 600,
              textAlign: 'center',
              fontFamily: 'Abel',
              fontSize: ['1.9rem', '2.1rem', '2.2rem', '2.5rem'],
              lineHeight: '1em',
              textShadow: '-17em 7em 0.3em #ffffff',
            }}
          >
            {data.subtitle}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${curves})`,
          backgroundRepeatY: 'no-repeat',
          backgroundSize: '100% 500px',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: '400px', sm: '500px', md: '500px' },
          zIndex: 10,
        }}
      />
    </HeroContainer>
  );
}

export default Hero;
