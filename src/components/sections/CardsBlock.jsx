import { Typography, Box } from '@mui/material';

export default function CardsBlock(props) {
  const { title, subtitle, cards } = props;
  return (
    <Box
      sx={{
        width: { xs: '90%', md: '90%', lg: 'inherit', xl: 'inherit' },
        mx: 'auto',
      }}
    >
      <Box sx={{ marginBottom: '5em' }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ margin: '1em auto', color: 'text.primary' }}
        >
          {title}
        </Typography>
        <Typography align="center" variant="h5" sx={{ color: 'text.primary' }}>
          {subtitle}
        </Typography>
      </Box>
      <Box>
        {cards.map((card, index) => (
          <Box
            index={index}
            sx={{
              borderRadius: '15px',
              backgroundColor: '#8F5F45',
              width: '40vw',
              padding: '1em 1em',
              margin: '2em auto',
            }}
          >
            {card.map((content, index) => (
              <Typography
                key={index}
                variant="h4"
                align="center"
                sx={{ margin: '1em auto', color: 'white' }}
              >
                {content}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
