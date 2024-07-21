import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import PRL from './prlLogo.jpeg';
import ktuner from './KtunerLogo.jpeg';
import Rv6 from './Rv6Logo.jpeg';
import Won from './Two7wonLogo.jpeg';
import SliderCSS from './Slider.module.css';
import HybridRacing from './hybridRacing.webp'
import Garret from './GarretMotion.jpg'
function Slide() {
  return (
 
    <Carousel  className={SliderCSS.carousel}>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
        <img src={PRL} text="First slide" alt="prl logo" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>PRL Motorsports</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000"> 
      <img src={Rv6} text="First slide"   alt="rv6 logo"className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Rv6 Performance</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={Won} text="First slide"  alt="27won logo" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>27WON Performance</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={ktuner} text="First slide"  alt="ktuner logo" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Ktuner</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={HybridRacing} text="First slide"  alt="hybrid logo" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Hybrid Racing</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={Garret} text="First slide"  alt="garret motion logo" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Garret Motion</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  )
}

export default Slide;