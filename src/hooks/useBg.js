import { useEffect, useState } from 'react';

// useBg: calculates the height to apply to parent container. args: data, bgContainer(parent) with the ref overlapping container(child)

export default function useBg(data, overlapContainer, carousel) {
  let heightReducer = carousel ? 6 : 12;
  const [height, setHeight] = useState(null);
  const setWrapperSize = () => {
    let bgHeight =
      overlapContainer.current.scrollHeight / 16 - heightReducer + 'em';
    // if (carousel)
    //   console.log(
    //     'background',
    //     bgHeight,
    //     'Overlap',
    //     overlapContainer.current.scrollHeight / 16
    //   );

    setHeight(bgHeight);
  };

  useEffect(() => {
    if (data) {
      setWrapperSize();
      // if (carousel) console.log(overlapContainer.current.scrollHeight);
      window.addEventListener('resize', setWrapperSize);
    }

    return () => window.removeEventListener('resize', setWrapperSize);
  }, [data]);

  if (height) {
    return height;
  }
}
