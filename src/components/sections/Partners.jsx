import useFetch from '../../hooks/useFetch';
import { Box, Typography, Grid } from '@mui/material';
import StyledIcon from '../single/Icon';

function Partners() {
  let data = useFetch('http://localhost:8000/Home');
  if (data) {
    data = data.Partners;
  }
  return (
    data && (
      <Box mx={{ width: '80%', margin: '0 auto' }}>
        <Grid container spacing={2} justifyContent="center">
          {data.cards.map((card, index) => {
            return (
              <Grid
                item
                key={index}
                xs={8}
                sm={5}
                md={3}
                sx={{ textAlign: 'center' }}
              >
                <StyledIcon key={index} iconFileName={card.iconFileName} />

                <Typography variant="body2" component="p">
                  {card.content}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    )
  );
}

export default Partners;