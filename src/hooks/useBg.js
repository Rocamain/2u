import { useEffect, useState } from 'react';

// useBg: calculates the height to apply to parent container. args: data, bgContainer(parent) with the ref overlapping container(child)

export default function useBg(data, overlapContainer, carousel) {
  let heightReducer = carousel ? 3 : 12;
  const [height, setHeight] = useState(null);
  const setWrapperSize = () => {
    let bgHeight =
      overlapContainer.current.scrollHeight / 16 - heightReducer + 'em';

    setHeight(bgHeight);
  };

  useEffect(() => {
    if (overlapContainer) {
      setWrapperSize();

      window.addEventListener('resize', setWrapperSize);
    }

    return () => window.removeEventListener('resize', setWrapperSize);
  }, [overlapContainer, data]);

  if (height) {
    return height;
  }
}
