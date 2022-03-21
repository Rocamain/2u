import { Divider, Box, Typography, Grid } from '@mui/material';
import StyledButton from '../single/Button';
import shop from '../../assets/static/images/illa.jpg';
import useCardStyles from '../../hooks/styles/useCardStyles';
import useFetch from '../../hooks/useFetch';

const AboutUs = (props) => {
  const { path } = props;

  let data = useFetch(`http://localhost:8000/${path}`);

  if (data) {
    data = data.AboutUs;
  }
  const { aboutUsSection, divider, aboutGridImg, aboutGridImgShadow } =
    useCardStyles();

  return (
    data && (
      <Box component={'section'} className={aboutUsSection}>
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 2, md: '0' }}
          justifyContent="flex-end"
          component="div"
          sx={{
            width: '85vw',
            margin: '0 auto',
          }}
        >
          <Grid item component="div" xs={12} sm={12} md={6}>
            <Typography component="h2" variant="title" children={data.title} />

            <Divider className={divider} />

            {data.paragraphs.map((paragraph, index) => (
              <Typography
                key={index}
                component="p"
                children={paragraph}
                variant="body2"
              />
            ))}

            <StyledButton content={data.button} />
          </Grid>
          <Grid
            item
            component="div"
            xs={12}
            sm={12}
            md={6}
            className={aboutGridImgShadow}
          >
            <Box
              component="img"
              src={shop}
              title="shop"
              alt="shop"
              srcSet={`${shop} 1200w, ${shop} 980w, ${shop} 480w`}
              sizes="(min-width: 0px) and (max-width: 480px) 85vw, (min-width: 481px) and (max-width: 980px) 95vw, (min-width: 981px) 60vw, 100vw"
              className={aboutGridImg}
            />
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default AboutUs;
