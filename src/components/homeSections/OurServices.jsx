import { useRef } from 'react';
import { Divider, Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import StyledButton from '../accessories/Button';
import StyledCard from '../accessories/Card';

import useCardStyles from '../../hooks/styles/useCardStyles';
import { useTheme } from '@mui/styles';
import useDb from '../../hooks/custom/useDb';
import useBg from '../../hooks/custom/useBg';

export default function Article() {
  // Refs
  const overlapContainer = useRef(null);
  const bgContainer = useRef(null);

  // Custom Hooks

  const data = useDb('http://localhost:8000/sections');
  const bgHeight = useBg(data, overlapContainer);

  // Styles
  const classes = useCardStyles();
  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    width: '100%',
  }));

  return (
    data && (
      <Box
        height={bgHeight}
        className={classes.articlesContainer}
        ref={bgContainer}
      >
        <Grid
          container
          rowSpacing={{ xs: 4, sm: 4, md: '0', lg: '0' }}
          columnSpacing={{ sm: '0', md: 4 }}
          className={classes.articlesWrapper}
          ref={overlapContainer}
          component="div"
          sx={{ flexGrow: 1, boxShadow: 8 }}
        >
          <Grid item component="div" xs={12} sm={12} md={6} lg={6}>
            <Typography
              component="h3"
              variant="title"
              children={data[0].title}
              sx={{
                color: theme.palette.text.primary,
              }}
            />

            <Divider classes={{ root: classes.divider }} />

            <Typography
              component="p"
              children={data[0].content1}
              sx={{
                color: theme.palette.text.primary,
                marginBottom: '1em',
              }}
            />

            <Typography
              component="p"
              children={data[0].content2}
              sx={{ color: theme.palette.text.primary, marginBottom: '1em' }}
            />

            <StyledButton content={data[0].button} />
          </Grid>
          <Grid
            item
            component="div"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            spacing={1}
            container
          >
            {data[0].cards.map((card, index) => (
              <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
                <StyledCard
                  cardInfo={card}
                  icon={card.title}
                  {...(!index && { first: true })}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    )
  );
}
