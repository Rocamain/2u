import { ImageList, ImageListItem } from '@mui/material';

import useFetch from '../../hooks/custom/useFetch';

function Gallery(props) {
  const { path } = props;
  let data = useFetch(`http://localhost:8000/${path}`);

  if (data) {
    data = data.AboutUs;
  }

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {data.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Gallery;
