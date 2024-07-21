import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import PRL from '/Users/ricardofeliz/Desktop/ecomv2/src/prlLogo.jpeg';
import ktuner from '/Users/ricardofeliz/Desktop/ecomv2/src/KtunerLogo.jpeg';
import Rv6 from '/Users/ricardofeliz/Desktop/ecomv2/src/Rv6Logo.jpeg';
import Won from '/Users/ricardofeliz/Desktop/ecomv2/src/Two7wonLogo.jpeg';
import SliderCSS from './Slider.module.css';
import HybridRacing from '/Users/ricardofeliz/Desktop/ecomv2/src/hybridRacing.webp'
import Garret from '/Users/ricardofeliz/Desktop/ecomv2/src/GarretMotion.jpg'
function Slide() {
  return (
 
    <Carousel  className={SliderCSS.carousel}>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
        <img src={PRL} text="First slide"  className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>PRL Motorsports</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000"> 
      <img src={Rv6} text="First slide" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Rv6 Performance</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={Won} text="First slide" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>27WON Performance</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={ktuner} text="First slide" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Ktuner</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={HybridRacing} text="First slide" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Hybrid Racing</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={SliderCSS.carouselItem} data-interval="4000">
      <img src={Garret} text="First slide" className={SliderCSS.brandImg}/>
        <Carousel.Caption>
          <h3>Garret Motion</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  )
}

export default Slide;