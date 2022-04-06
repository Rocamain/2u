import { Grid, Typography, Button, Box } from '@mui/material';
import StyledDivider from '../single/Divider';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

export default function LinksGrid(props) {
  const { title, links, path } = props;

  return (
    <Box
      sx={{ width: { xs: '90%', md: '90%', lg: '85%', xl: '60' }, mx: 'auto' }}
    >
      <Box sx={{ marginBottom: '5em' }}>
        <Typography variant="title1" component="h4" sx={{ margin: '1em auto' }}>
          {title}
        </Typography>
        <StyledDivider sizeWidth={'25%'} />
      </Box>
      <Grid
        container
        justifyContent="center"
        sx={{
          width: '80%',
          margin: '0 auto',
          paddingBottom: '2em',
        }}
      >
        {links.map((link, index) => (
          <Grid
            item
            key={index}
            xs={8}
            sm={links.length > 3 ? 5 : 8}
            md={4}
            sx={{
              textAlign: 'center',
              width: links.length > 3 ? '100%' : '80%',
            }}
          >
            <Button
              disableRipple
              variant="contained"
              endIcon={<SendIcon className="icon" />}
              sx={[
                {
                  padding: { xs: '1em 2em', md: '1em 3em' },
                  mb: '2em',
                  border: '2px solid #00BCCC',
                  transition: 'all 0.5s ease',
                  justifyContent: 'flex-start',
                  boxShadow:
                    '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
                },
                {
                  '&:hover': {
                    color: '#75C9CC',
                    mx: '0.1em',
                    '& span,svg:first-of-type': {
                      mx: '0',
                      opacity: '1',
                      color: 'white',
                      transform: 'translateX(0.75em) scale(1.2)',
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
            >
              <Link
                to={link.to}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                {link.title}
              </Link>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
