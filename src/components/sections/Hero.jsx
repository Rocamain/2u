import { Box, Typography, Divider } from '@mui/material';
import StyledButton from '../single/Button';
import useCardStyles from '../../hooks/styles/useCardStyles';
import { styled } from '@mui/material/styles';
import curves from '../../assets/static/backgrounds/curves.svg';

const HeroContainer = styled(Box)(({ theme, fileName, sizeBig }) => {
  const url = require(`../../assets/static/backgrounds/${fileName}`);

  return {
    backgroundImage: `linear-gradient(1deg,#ffffff 21%,rgba(255,255,255,0) 68%),url(${url})!important`,
    backgroundSize: 'cover',
    backgroundColor: '#FFFFFF!important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left bottom 0px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      height: sizeBig ? '60vh' : '15vh',
      paddingBottom: '2em',
    },
    [theme.breakpoints.up('lg')]: {
      height: sizeBig ? '75vh' : '25vh',
      marginBottom: '5em',
    },
    [theme.breakpoints.up('xl')]: {
      height: sizeBig ? '80vh' : '45vh',
      marginBottom: '6em',
    },
  };
});

function Hero(props) {
  const { path, ...data } = props;
  const classes = useCardStyles();

  let iconURL;

  if (data.iconFileName) {
    iconURL = require(`../../assets/static/backgrounds/${data.iconFileName}`);
  }

  return (
    <HeroContainer fileName={data.imageFileName} sizeBig={data.sizeBig}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',

          zIndex: 100,
          width: { xs: '85%', sm: '90%', md: '75%', xl: '60%' },

          justifyContent: { md: 'flex-end' },
          AlignItems: { md: 'flex-start' },
          paddingTop: data.sizeBig ? '7em' : '4em',
          paddingBottom: '0',
          height: '100%',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            width: ['80%', '85%'],
            margin: '0 auto',
            py: ['0em', '1.5em'],
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Abel',
              fontWeight: 700,
              fontSize: ['65px', '80px', '90px', '110px', '130px'],
              color: '#00BCCC !important',
              lineHeight: '0.9em',
              letterSpacing: ['-2px', '-3px', '-5px'],
              textAlign: { xs: 'center', sm: 'justify' },
              textShadow: '0em 0em 0.3em #ffffff',
            }}
          >
            {data.title}
          </Typography>

          <Typography
            sx={{
              color: '#666',
              fontWeight: 600,
              textAlign: 'center',
              fontFamily: 'Abel',
              fontSize: ['1.9rem', '2.1rem', '2.2rem', '2.5rem'],
              lineHeight: '1em',
              textShadow: '-17em 7em 0.3em #ffffff',
              maxWidth: { md: '60%' },
            }}
          >
            {data.subtitle}
          </Typography>
        </Box>

        {data.content && (
          <>
            <Divider className={classes.divider} />
            <Box
              sx={{
                width: { xs: '85%', md: '100%' },
                margin: '0 auto',
                display: { md: 'flex' },
              }}
            >
              <Box
                component="img"
                src={iconURL}
                title="shop"
                alt="shop"
                srcSet={`${iconURL} 1200w, ${iconURL} 980w, ${iconURL} 480w`}
                sizes="(min-width: 0px) and (max-width: 480px) 85vw, (min-width: 481px) and (max-width: 980px) 95vw, (min-width: 981px) 90vw, 100vw"
                sx={{ width: { xs: '60%', sm: '50%', md: '25%', lg: '20%' } }}
              />

              <Box
                sx={{
                  paddingTop: '2em',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    pb: '3em',
                    fontWeight: '400',
                    fontSize: '1rem',
                    color: 'text.primary',
                  }}
                >
                  {data.content}
                </Typography>
                <StyledButton
                  content={data.button}
                  style={{ padding: '30px' }}
                />
              </Box>
            </Box>
          </>
        )}
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${curves})`,
          backgroundRepeatY: 'no-repeat',
          backgroundSize: '100% 500px',
          width: '100%',
          position: 'absolute',
          bottom: '-5vh',
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
