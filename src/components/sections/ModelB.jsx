import { Box, Typography, Grid } from '@mui/material';
import StyledButton from '../single/Button';
import useCardStyles from '../../hooks/styles/useCardStyles';
import StyledDivider from '../single/Divider';

const ModelB = (props) => {
  const { path, ...data } = props;
  const imageURL = require(`../../assets/static/images/${data.imageFileName}`);

  const { aboutUsSection, aboutGridImg } = useCardStyles();

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
          width: { sm: '85vw', md: '76vw' },
          margin: '0 auto',

          boxShadow: '25vw 0px 0px 0px #00bccc',
        }}
      >
        <Grid
          item
          component="div"
          xs={12}
          sm={12}
          md={6}
          sx={{ marginTop: '4em' }}
        >
          <Box sx={{ width: '85%', mx: 'auto' }}>
            <Typography component="h2" variant="title" children={data.title} />

            <StyledDivider sizeWidth={'25%'} />

            {data.content.map((paragraph, index) => (
              <Typography
                key={index}
                component="p"
                children={paragraph}
                variant="body2"
              />
            ))}
            {data.list && (
              <ul>
                {data.list.map((paragraph, index) => (
                  <Typography
                    key={index}
                    component="li"
                    children={paragraph}
                    variant="body2"
                  />
                ))}
              </ul>
            )}
            {data.content1 &&
              data.content1.map((paragraph, index) => (
                <Typography
                  key={index}
                  component="p"
                  children={paragraph}
                  variant="body2"
                />
              ))}

            <StyledButton content={data.button} />
          </Box>
        </Grid>
        <Grid item component="div" xs={12} sm={12} md={6}>
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
