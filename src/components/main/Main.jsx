import Carousel from '../accessories/Carousel';
import OurServices from '../homeSections/OurServices';
import AboutUs from '../homeSections/AboutUs';
import DownloadApp from '../homeSections/DownloadApp';
import AnyDoubt from '../homeSections/AnyDoubt';
import Values from '../homeSections/Values';
import Partners from '../homeSections/Partners';

export default function Main() {
  return (
    <main>
      <Carousel />
      <OurServices />
      <AboutUs />
      <DownloadApp />
      <AnyDoubt />
      <Values />
      <Partners />
    </main>
  );
}
