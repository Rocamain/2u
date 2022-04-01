import { ImageList, ImageListItem, useMediaQuery } from '@mui/material';

import { useTheme } from '@mui/material/styles';

function ImageGrid(props) {
  const { path, imagesFileName } = props;
  const theme = useTheme();
  let mdUpOnly = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <ImageList
      sx={{
        width: mdUpOnly ? '65%' : '80%',
        mx: 'auto',
        paddingBottom: mdUpOnly ? '80px' : '50px',
      }}
      gap={mdUpOnly ? 40 : 10}
      cols={mdUpOnly ? 2 : 1}
    >
      {imagesFileName.map((fileName) => {
        const imgURL = require(`../../assets/static/images/${fileName}`);
        return (
          <ImageListItem key={fileName}>
            <img
              src={`${imgURL}`}
              srcSet={`${imgURL}`}
              alt="shop"
              loading="lazy"
              style={{
                boxShadow: '0px 15px 30px -10px rgb(0 0 0 / 30%)',
              }}
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

export default ImageGrid;
