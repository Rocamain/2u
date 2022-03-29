import { Typography, Box } from '@mui/material';

function NotFound() {
  return (
    <Box m=" 5em auto" width="85%">
      <Typography variant="title1" component="h2" sx={{ textAlign: 'center' }}>
        Not Found
      </Typography>
      <Typography variant="body1" sx={{ margin: '1.4em 0' }}>
        Whoops. we are sorry to not found what you are looking for, please try
        again...
      </Typography>
    </Box>
  );
}

export default NotFound;
