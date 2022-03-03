import { Box, Grid, Typography, Button } from '@mui/material';
import useDb from '../../hooks/custom/getData';
import SendIcon from '@mui/icons-material/Send';

function Maps() {
  const data = useDb('http://localhost:8000/footer');

  return (
    data && (
      <Box sx={{ backgroundColor: '#333333', color: 'primary.contrastText' }}>
        <Grid
          container
          // spacing={4}
          sx={{ justifyContent: 'center', width: '90%', mx: 'auto' }}
        >
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
                endIcon={<SendIcon className="icon" />}
                href="https://api.whatsapp.com/send?phone=+44568807804&text=Hola"
                target="_blank"
                sx={[
                  {
                    mb: '2em',
                    border: '2px solid #00BCCC',
                    transition: 'all 0.5s ease',
                    justifyContent: 'flex-start',
                  },
                  {
                    '&:hover': {
                      color: '#e2d3e2',
                      border: '1px solid #333333',
                      mx: '0.1rem',
                      transform: 'scale(1.1)',
                      '& span,svg:first-of-type': {
                        mx: '0',
                        opacity: '1',
                      },
                      '& p:first-of-type': {
                        transform: 'translateX(-5px)',
                        opacity: '1',
                      },
                    },
                  },
                  {
                    '& span,svg': {
                      color: '#00BCCC',
                      opacity: '0.2',
                      transition: 'all 0.5s ease',
                      marginLeft: '-0.7rem',
                    },
                    '& p': {
                      color: '#00BCCC',
                      transform: 'translateX(-0.2rem)',
                      lineHeight: '0.3rem',
                      transition: 'all 0.5s ease',
                    },
                  },
                ]}
                disableRipple
              >
                <p>Whatsapp</p>
              </Button>

              <iframe
                title={`shop {shop.shopName}`}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.0178610391715!2d2.6541507531398913!3d39.57367450475289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979253c75938f1%3A0xe974fedce6bb1bfa!2sAz+Est%C3%A9tica+Avanzada!5e0!3m2!1ses!2ses!4v1535230926482"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
              ></iframe>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  );
}

export default Maps;
