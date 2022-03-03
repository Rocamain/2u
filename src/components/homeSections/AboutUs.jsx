import { Divider, Box, Typography, Grid } from '@mui/material';

import StyledButton from '../accessories/Button';

import shop from '../../assets/static/images/illa.jpg';
import useCardStyles from '../../hooks/styles/useCardStyles';
import useDb from '../../hooks/custom/getData';

const AboutUs = () => {
  const data = useDb('http://localhost:8000/sections');

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
            <Typography
              component="h2"
              variant="title"
              children={data[1].title}
            />

            <Divider className={divider} />

            <Typography
              component="p"
              children={data[1].content1}
              variant="body2"
            />

            <Typography
              component="p"
              variant="body2"
              children={data[1].content2}
            />
            <Typography
              component="p"
              variant="body2"
              children={data[1].content3}
            />
            <Typography
              component="p"
              variant="body2"
              children={data[1].content4}
            />

            <StyledButton content={data[1].button} />
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
