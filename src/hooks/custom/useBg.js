import { useEffect, useState } from 'react';

// useBg: calculates the height to apply to parent container. args: data, bgContainer(parent) with the ref overlapping container(child)

export default function useBg(data, overlapContainer) {
  const [height, setHeight] = useState();
  const setWrapperSize = () => {
    let bgHeight = overlapContainer.current.scrollHeight / 16 - 14 + 'em';
    setHeight(bgHeight);
  };

  useEffect(() => {
    if (data) {
      setWrapperSize();
      window.addEventListener('resize', setWrapperSize);
    }
    return () => window.removeEventListener('resize', setWrapperSize);
  }, [data]);

  return height;
}
