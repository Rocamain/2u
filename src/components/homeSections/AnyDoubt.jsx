import { Divider, Box, Typography } from '@mui/material';
import useDb from '../../hooks/custom/useDb';
import StyledButton from '../accessories/Button';
import useCardStyles from '../../hooks/styles/useCardStyles';
import shop from '../../assets/static/images/turo.jpg';

function AnyDoubt() {
  const data = useDb('http://localhost:8000/sections');
  const { anyDoubtSection, divider, anyDoubtImg, yellowCard } = useCardStyles();

  return (
    data && (
      <Box className={anyDoubtSection} _>
        <Box>
          <Typography
            component="h2"
            variant="title"
            children={data[3].title}
            sx={{
              padding: ['0', '0', '1em 0'],
              paddingRight: '1em',
              marginBottom: '0.5em',
            }}
          />

          <Box className={yellowCard}>
            <Divider className={divider} />
            <Typography
              component="h2"
              variant="body2"
              children={data[3].content1}
              sx={{
                marginBottom: '1.5em',
              }}
            />

            <StyledButton content={data[3].button} />
          </Box>
        </Box>
        <Box
          component="img"
          src={shop}
          title="shop"
          alt="shop"
          srcSet={`${shop} 1200w, ${shop} 980w, ${shop} 480w`}
          sizes="(min-width: 0px) and (max-width: 480px) 85vw, (min-width: 481px) and (max-width: 980px) 95vw, (min-width: 981px) 60vw, 100vw"
          className={anyDoubtImg}
        />
      </Box>
    )
  );
}

export default AnyDoubt;
