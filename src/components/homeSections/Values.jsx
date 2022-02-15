import { useRef } from 'react';
import useDb from '../../hooks/custom/useDb';
import ScrollAnimation from '../accessories/ScrollAnimation';
import { Box, Typography, Grid } from '@mui/material';
import StyledIcon from '../accessories/Icon';

function Values() {
  const data = useDb('http://localhost:8000/sections');

  return (
    data && (
      <Box xs={{ margin: '4em auto' }}>
        <Grid
          container
          spacing={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2em',
          }}
        >
          {data[4].cards.map((card, index) => (
            <Grid
              item
              key={index}
              xs={8}
              sm={8}
              md={3}
              sx={{ textAlign: 'center' }}
            >
              <StyledIcon icon={card.title} />

              <Typography variant="title2" component="h4">
                {card.title}
              </Typography>
              <Typography variant="body2" component="p">
                {card.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  );
}

export default Values;
