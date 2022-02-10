import { Divider, Box, Typography, Grid } from '@mui/material';

import StyledButton from '../accessories/Button';

import useCardStyles from '../../hooks/styles/useCardStyles';
import { useTheme } from '@mui/styles';
import useDb from '../../hooks/custom/useDb';

const AboutUs = () => {
  const data = useDb('http://localhost:8000/sections');

  const classes = useCardStyles();
  const theme = useTheme();
  return (
    data && (
      <Box
        // className={classes.articlesContainer}
        // ref={bgContainer}
        component={'section'}
      >
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 2, md: 6, lg: 7 }}
          // className={classes.articlesWrapper}
          // ref={overlapContainer

          component="div"
          sx={{
            flexGrow: 1,
            width: '85%',
            margin: '0 auto',
          }}
        >
          <Grid item component="div" xs={12} sm={12} md={6}>
            <Typography
              component="h2"
              variant="h4"
              children={data[1].title}
              className={classes.cardTitle}
              sx={{ mb: 3 }}
            />

            <Divider classes={{ root: classes.divider }} />

            <Typography
              component="p"
              children={data[1].content1}
              sx={{
                color: theme.palette.text.primary,
                marginBottom: '1em',
              }}
              variant="body2"
            />

            <Typography
              component="p"
              variant="body2"
              children={data[1].content2}
              sx={{ color: theme.palette.text.primary, marginBottom: '1em' }}
            />
            <Typography
              component="p"
              variant="body2"
              children={data[1].content3}
              sx={{ color: theme.palette.text.primary, marginBottom: '1em' }}
            />
            <Typography
              component="p"
              variant="body2"
              children={data[1].content4}
              sx={{ color: theme.palette.text.primary, marginBottom: '1em' }}
            />

            <StyledButton content={data[1].button} />
          </Grid>
          <Grid item component="div" xs={12} sm={12} md={6}>
            <Box> Hi!!!! HI</Box>
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default AboutUs;
