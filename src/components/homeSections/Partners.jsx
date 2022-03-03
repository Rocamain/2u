import useDb from '../../hooks/custom/getData';
import { Box, Typography, Grid } from '@mui/material';
import StyledIcon from '../accessories/Icon';

function Partners() {
  const data = useDb('http://localhost:8000/sections');

  return (
    data && (
      <Box mx={{ width: '80%', margin: '0 auto' }}>
        <Grid container spacing={2} justifyContent="center">
          {data[5].cards.map((card, index) => {
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
