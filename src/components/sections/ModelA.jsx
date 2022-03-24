import { useRef } from 'react';
import useCardStyles from '../../hooks/styles/useCardStyles';
import useBg from '../../hooks/useBg';
import { Divider, Box, Typography, Grid } from '@mui/material';
import StyledButton from '../single/Button';
import StyledCard from '../single/Card';

export default function ModelA(props) {
  const { path, ...data } = props;
  console.log(data?.cards);

  data.cards ? console.log(data) : console.log('false', data);

  // Refs
  const overlapContainer = useRef(null);
  const bgContainer = useRef(null);

  // Custom Hooks
  let bgHeight = useBg(data, overlapContainer);

  const classes = useCardStyles();

  return (
    <Box
      height={bgHeight}
      className={classes.articlesContainer}
      ref={bgContainer}
      component={'section'}
    >
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 2, lg: 4 }}
        className={classes.articlesWrapper}
        ref={overlapContainer}
        component="div"
        sx={{
          flexGrow: 1,
          boxShadow: 'rgba(56, 21, 11, 0.09) 0px 50px 80px 0px',
        }}
      >
        {data.contentLeft === false ? (
          <>
            <GridContent data={data} classes={classes} />
            {data.cards ? (
              <GridCards data={data} />
            ) : (
              <GridImage data={data} classes={classes} />
            )}
          </>
        ) : (
          <>
            {data.cards ? (
              <GridCards data={data} />
            ) : (
              <GridImage data={data} classes={classes} />
            )}
            <GridContent data={data} classes={classes} />
          </>
        )}
      </Grid>
    </Box>
  );
}

const GridContent = (props) => {
  const { classes, data } = props;

  return (
    <Grid item component="div" xs={12} sm={12} md={6}>
      <Box sx={{ px: '1em' }}>
        <Typography component="h2" variant="title" children={data.title} />

        <Divider classes={{ root: classes.divider }} />
        {data.content.map((content, index) => (
          <Typography
            key={index}
            component="p"
            variant="body2"
            children={content}
          />
        ))}

        <StyledButton content={data.button} />
      </Box>
    </Grid>
  );
};

const GridCards = (props) => {
  const { data } = props;

  return (
    <Grid
      item
      component="div"
      xs={12}
      sm={12}
      md={6}
      container
      spacing={2}
      // sx={{ paddingTop: '400px' }}
    >
      <Grid
        item
        component="div"
        xs={12}
        sm={6}
        container
        rowSpacing={{ xs: 3, md: 5 }}
      >
        {data.cards.map(
          (card, index) =>
            index % 2 === 0 && (
              <Grid key={index} item>
                <StyledCard
                  cardInfo={card}
                  iconFileName={card.iconFileName}
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
        {data.cards.map(
          (card, index, array) =>
            index % 2 !== 0 && (
              <Grid key={index} item>
                <StyledCard
                  cardInfo={card}
                  iconFileName={card.iconFileName}
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
  );
};
const GridImage = (props) => {
  const { data, classes } = props;
  const imageURL = require(`../../assets/static/images/${data.imageFileName}`);
  return (
    <Grid item component="div" xs={12} sm={12} md={6}>
      <Box
        component="img"
        src={imageURL}
        title="shop"
        alt="shop"
        srcSet={`${imageURL} 1200w, ${imageURL} 980w, ${imageURL} 480w`}
        sizes="(min-width: 0px) and (max-width: 480px) 85vw, (min-width: 481px) and (max-width: 980px) 95vw, (min-width: 981px) 90vw, 100vw"
        className={classes.gridImg}
      />
    </Grid>
  );
};
