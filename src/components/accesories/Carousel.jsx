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
import { Translate } from '@mui/icons-material';

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
      opacity: 0.1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transform: `translateY(100px) translateX(0)`,
      position: 'absolute',
      top: '100px',
      margin: '0 auto',
    },
    visible: {
      display: 'block',
      transform: 'unset',
      position: 'relative',
    },
  });
  const classes = useStyles();

  const CardsContainer = (text) =>
    text.map((cardText, index) => (
      <Card
        key={index}
        elevation={4}
        className={index === visible ? classes.visible : classes.hidden}
      >
        <CardHeader
          title={
            <Typography variant="title" component="h2">
              {cardText.title}
            </Typography>
          }
        />
        <CardContent sx={{ pt: 1, px: 2 }}>
          <Typography mb="30px">{cardText.content}</Typography>

          <CardActions>
            <Button size="small" variant="contained" disableRipple>
              {cardText.button}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    ));

  return (
    text && (
      <div
        className="carousel"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '70%',
          margin: '0 auto',
          background: `url:${require}`,
        }}
      >
        {CardsContainer(text)}
      </div>
    )
  );
}
