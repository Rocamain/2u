import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Stepper from './Stepper';
import image from '../../static/images/water1.jpg';

export default function Carousel() {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8000/carousels')
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((response) => {
        setText(response);
      });
  }, []);

  const useStyles = makeStyles({
    hidden: {
      width: '70%',
      visibility: 'visible',
      opacity: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: `translateY(500px) translateX(0)`,
      position: 'absolute',
      top: '100px',
      margin: '0 auto',
    },
    visible: {
      transform: 'unset',
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      overflow: 'visible',
    },
    slideContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#75C9CC',
      margin: '0 auto',
      paddingBottom: '1.5em',
      paddingTop: '1.5em',
    },
    carousel: {
      width: '100%',
      height: '90vh',
      display: 'flex',
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      // backgroundColor: 'rgba(255, 255, 255,)',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  const classes = useStyles();

  const CardsContainer = (text) =>
    text.map((cardText, index) => {
      if (index === 0) {
        return (
          <Card
            key={index}
            elevation={8}
            sx={{ position: 'relative', zIndex: '4' }}
            className={index === visible ? classes.visible : classes.hidden}
          >
            <CardHeader
              title={
                <Typography variant="title" component="h2" align="center">
                  {cardText.title}
                </Typography>
              }
            />

            <CardContent variant="body1" sx={{ pb: '0.5em' }}>
              <Typography>{cardText.content}</Typography>
            </CardContent>

            <CardActions sx={{ display: 'block', py: '1em' }}>
              <Button
                align="center"
                size="small"
                variant="contained"
                sx={{ fontWeight: 'bold' }}
                disableRipple
              >
                {cardText.button}
              </Button>
            </CardActions>
          </Card>
        );
      }
    });

  return (
    text && (
      <div>
        <Box alt="sea water on the background" className={classes.carousel}>
          <Box sx={{}} className={classes.slideContainer}>
            {CardsContainer(text)}
          </Box>
        </Box>
        <Stepper />
      </div>
    )
  );
}
