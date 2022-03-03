import Carousel from '../components/accessories/Carousel';
import OurServices from '../components/homeSections/OurServices';
import AboutUs from '../components/homeSections/AboutUs';
import DownloadApp from '../components/homeSections/DownloadApp';
import AnyDoubt from '../components/homeSections/AnyDoubt';
import Values from '../components/homeSections/Values';
import Partners from '../components/homeSections/Partners';

export default function Home() {
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
