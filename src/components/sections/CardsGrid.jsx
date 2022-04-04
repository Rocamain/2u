import { Grid, Box, Typography, Divider } from '@mui/material';
import Card from '../../components/single/Card';
import useCardStyles from '../../hooks/styles/useCardStyles';

function CardsGrid(props) {
  const { path, cards, title } = props;
  const classes = useCardStyles();
  console.log(props);
  return (
    <Box>
      {title && (
        <>
          <Typography
            variant="title1"
            component="h3"
            sx={{ textAlign: 'center' }}
          >
            {title}
          </Typography>
          <Divider className={classes.divider} />
        </>
      )}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          width: '80%',
          margin: '0 auto',
          paddingBottom: '2em',
        }}
      >
        {cards.map((card, index) => {
          return (
            <Grid
              item
              key={index}
              xs={8}
              sm={cards.length > 3 ? 5 : 8}
              md={4}
              sx={{
                textAlign: 'center',
                width: cards.length > 3 ? '100%' : '80%',
              }}
            >
              <Card
                cardInfo={card}
                iconFileName={card.iconFileName}
                cardStyles={{ boxShadow: 'none' }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default CardsGrid;
