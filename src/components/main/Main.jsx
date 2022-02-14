import Carousel from '../accessories/Carousel';
import OurServices from '../homeSections/OurServices';
import AboutUs from '../homeSections/AboutUs';
import DownloadApp from '../homeSections/DownloadApp';
import AnyDoubt from '../homeSections/AnyDoubt';

export default function Main() {
  return (
    <main>
      <Carousel />
      <OurServices />
      <AboutUs />
      <DownloadApp />
      <AnyDoubt />
    </main>
  );
}
