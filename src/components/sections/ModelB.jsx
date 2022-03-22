import { Divider, Box, Typography, Grid } from '@mui/material';
import StyledButton from '../single/Button';
import useCardStyles from '../../hooks/styles/useCardStyles';

const ModelB = (props) => {
  const { path, ...data } = props;
  const imageURL = require(`../../assets/static/images/${data.imageFileName}`);

  const { aboutUsSection, divider, aboutGridImg, aboutGridImgShadow } =
    useCardStyles();

  return (
    <Box
      component={'section'}
      className={data.leavesBackground ? aboutUsSection : null}
    >
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

          {data.content.map((paragraph, index) => (
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
          className={data.imageShadow ? aboutGridImgShadow : null}
        >
          <Box
            component="img"
            src={imageURL}
            title="shop"
            alt="shop"
            srcSet={`${imageURL} 1200w, ${imageURL} 980w, ${imageURL} 480w`}
            sizes="(min-width: 0px) and (max-width: 480px) 85vw, (min-width: 481px) and (max-width: 980px) 95vw, (min-width: 981px) 60vw, 100vw"
            className={aboutGridImg}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModelB;
