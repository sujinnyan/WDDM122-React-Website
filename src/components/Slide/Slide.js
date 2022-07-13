import Carousel from 'react-bootstrap/Carousel';
import gallery10 from '../img/image-2.jpg';
import gallery11 from '../img/image-6.jpg';
import gallery12 from '../img/image-8.jpg';
import "./Slide.css"



function UncontrolledExample() {
  return (

    <Carousel className="wrapper-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 1000}}
          src={gallery10}
        />
        <Carousel.Caption>
            <div className='text-wrapper'>
            <h1><span>Modic.</span><br></br>We create furniture that opens everyones’ eyes to the spaces they already have and the life that’s yet to be lived in them.</h1>
          </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 1000}}
          src={gallery11}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className='text-wrapper'>
          <h1><span>Modic.</span><br></br>
          it’s safe to say blonde wood is back in style, marking a return to classic and comforting values.</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 1000}}
          src={gallery12}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='text-wrapper'>
        <h1><span>Modic.</span><br></br>
        Our sectional sofas, loveseats and accent chairs are trendy and versatile. </h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




export default UncontrolledExample;