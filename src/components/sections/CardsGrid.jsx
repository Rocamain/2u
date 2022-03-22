import { Typography, Grid } from '@mui/material';
import StyledIcon from '../single/Icon';

function CardsGrid(props) {
  const { path, cards } = props;

  return (
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
            <StyledIcon
              key={index + card.iconFileName}
              iconFileName={card.iconFileName}
            />

            <Typography
              key={index + card.content}
              variant="body2"
              component="p"
            >
              {card.content}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CardsGrid;
