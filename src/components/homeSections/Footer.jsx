import { useEffect, useRef } from 'react';

import { Box, Grid, Typography, Button } from '@mui/material';
import useDb from '../../hooks/custom/useDb';
import SendIcon from '@mui/icons-material/Send';

function Maps() {
  const data = useDb('http://localhost:8000/footer');
  const ref = useRef(null);

  return (
    data && (
      <Box sx={{ backgroundColor: '#333333', color: 'primary.contrastText' }}>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          {data.map((shop, index) => (
            <Grid key={index} item xs={10} md={4}>
              <Box sx={{ marginBottom: '2em' }}>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ pb: '0.2em', color: 'secondary.main' }}
                >
                  {shop.city}
                </Typography>
                <Typography variant="h5" component="h5">
                  {shop.shopName.toUpperCase()}
                </Typography>
                <Typography component="p" variant="p">
                  {shop.street}
                </Typography>
                <Typography component="p" variant="p">
                  {shop.postCode}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                >{`phone: ${shop.phone}`}</Typography>
                <Typography
                  component="p"
                  variant="p"
                >{`mobile: ${shop.phone}`}</Typography>

                <Typography
                  component="p"
                  variant="h5"
                  sx={{ marginTop: '0.5em', fontWeight: '500' }}
                >
                  Times:
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                >{`Mondays to Fridays from ${shop.openingTimes[0]} to ${shop.openingTimes[1]}`}</Typography>
                <Typography
                  component="p"
                  variant="p"
                >{`Saturdays from ${shop.openingTimesWnked[0]} to ${shop.openingTimesWnked[1]}`}</Typography>
              </Box>
              <Button
                variant="outlined"
                // width="50px"
                children={<p>WhatsApp</p>}
                endIcon={<SendIcon className="icon" />}
                ref={ref}
                sx={[
                  { mb: '2em' },
                  {
                    '&:hover': {
                      color: '#EEE',
                      '& :first-child': {
                        color: '#EEE',
                      },
                    },
                  },
                ]}
                disableRipple
              />

              {/* <iframe
                title={`shop {shop.shopName}`}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.0178610391715!2d2.6541507531398913!3d39.57367450475289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979253c75938f1%3A0xe974fedce6bb1bfa!2sAz+Est%C3%A9tica+Avanzada!5e0!3m2!1ses!2ses!4v1535230926482"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
              ></iframe> */}
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  );
}

export default Maps;
