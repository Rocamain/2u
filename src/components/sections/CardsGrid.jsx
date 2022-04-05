import { Grid, Box, Typography } from '@mui/material';
import Card from '../../components/single/Card';
import StyledDivider from '../single/Divider';

function CardsGrid(props) {
  const { path, cards, title } = props;

  return (
    <Box>
      {title && (
        <>
          <Typography
            variant="title1"
            component="h3"
            sx={{ textAlign: 'center', mb: '1em' }}
          >
            {title}
          </Typography>
          <StyledDivider sizeWidth={'25%'} center={'true'} />
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
