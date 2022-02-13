import { useRef } from 'react';
import { Divider, Box, Typography, Grid } from '@mui/material';

import StyledButton from '../accessories/Button';
import StyledCard from '../accessories/Card';

import useCardStyles from '../../hooks/styles/useCardStyles';
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

  return (
    data && (
      <Box
        height={bgHeight}
        className={classes.articlesContainer}
        ref={bgContainer}
        component={'section'}
      >
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
          className={classes.articlesWrapper}
          ref={overlapContainer}
          component="div"
          sx={{
            flexGrow: 1,
            boxShadow: 'rgba(56, 21, 11, 0.09) 0px 50px 80px 0px',
          }}
        >
          <Grid item component="div" xs={12} sm={12} md={6}>
            <Typography
              component="h2"
              variant="title"
              children={data[0].title}
            />

            <Divider classes={{ root: classes.divider }} />

            <Typography
              component="p"
              children={data[0].content1}
              variant="body2"
            />

            <Typography
              component="p"
              variant="body2"
              children={data[0].content2}
            />

            <StyledButton content={data[0].button} />
          </Grid>
          <Grid
            item
            component="div"
            xs={12}
            sm={12}
            md={6}
            container
            spacing={2}
          >
            <Grid
              item
              component="div"
              xs={12}
              sm={6}
              container
              rowSpacing={{ xs: 3, md: 5 }}
            >
              {data[0].cards.map(
                (card, index) =>
                  index % 2 === 0 && (
                    <Grid key={index} item>
                      <StyledCard
                        cardInfo={card}
                        icon={card.title}
                        {...(index === 0 && {
                          cardStyles: {
                            bgcolor: '#75C9CC',
                            boxShadow: '0px 50px 80px 0px #75c9cc',
                            color: '#fff',
                          },
                        })}
                      />
                    </Grid>
                  )
              )}
            </Grid>
            <Grid
              item
              component="div"
              xs={12}
              sm={6}
              container
              alignContent="flex-start"
              rowSpacing={{ xs: 3, md: 5 }}
            >
              {data[0].cards.map(
                (card, index, array) =>
                  index % 2 !== 0 && (
                    <Grid key={index} item>
                      <StyledCard
                        cardInfo={card}
                        icon={card.title}
                        {...(index === array.length - 1 && {
                          cardStyles: {
                            bgcolor: 'rgb(255, 251, 245)',
                            boxShadow: '0px 50px 80px 0px rgb(12 2 2 / 10%)',
                          },
                        })}
                      />
                    </Grid>
                  )
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
  );
}
