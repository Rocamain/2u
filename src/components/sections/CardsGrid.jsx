import { Grid } from '@mui/material';
import Card from '../../components/single/Card';

function CardsGrid(props) {
  const { path, cards } = props;

  return (
    <div>
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
              sm={cards.length > 3 ? 5 : 4}
              md={3}
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
    </div>
  );
}

export default CardsGrid;
