import { useEffect, useState } from 'react';

export default function usePictureResize(ref) {
  let heightReducer = 240;
  const [height, setHeight] = useState(null);
  const [axis, setAxis] = useState(null);

  const setWrapperSize = () => {
    let bgHeight = ref.current.scrollHeight + heightReducer + 'px';
    let position = ref.current.getBoundingClientRect();

    setHeight(bgHeight);
    setAxis({ top: position.top, left: position.left });
  };

  useEffect(() => {
    if (ref) {
      setWrapperSize();

      window.addEventListener('resize', setWrapperSize);
    }

    return () => window.removeEventListener('resize', setWrapperSize);
  }, [ref]);

  if (height) {
    return { height, axis };
  }
}
