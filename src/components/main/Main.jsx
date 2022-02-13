import Carousel from '../accessories/Carousel';
import OurServices from '../homeSections/OurServices';
import AboutUs from '../homeSections/AboutUs';
import DownloadApp from '../homeSections/DownloadApp';

export default function Main() {
  return (
    <main>
      <Carousel />
      <OurServices />
      <AboutUs />
      <DownloadApp />
    </main>
  );
}
