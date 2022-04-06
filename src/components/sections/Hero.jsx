import { Box, Typography, styled } from '@mui/material';
import StyledButton from '../single/Button';
import StyledDivider from '../single/Divider';
import useCardStyles from '../../hooks/styles/useCardStyles';

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
      height: sizeBig ? '85vh' : 'inherit',
    },
    [theme.breakpoints.up('lg')]: {
      height: sizeBig ? '90vh' : 'inherit',
      marginBottom: '1em',
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
    <Box sx={{ mb: { xs: '10vh', md: '14vh' } }}>
      <HeroContainer fileName={data.imageFileName} sizeBig={data.sizeBig}>
        <Box
          className={classes.heroHeader}
          sx={{
            paddingTop: {
              xs: data.sizeBig ? '9em' : '7em',
            },
          }}
        >
          <Box sx={{ pb: '2em' }}>
            <Typography component="h1" variant="heroTitle">
              {data.title}
            </Typography>

            <Typography component="h3" variant="heroSubtitle">
              {data.subtitle}
            </Typography>
          </Box>

          {data.content && (
            <>
              <StyledDivider sizeWidth={'25%'} hero />

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
                    gap: '1em',
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
        <Box className={classes.heroBackgroundCurves} />
      </HeroContainer>
    </Box>
  );
}

export default Hero;
