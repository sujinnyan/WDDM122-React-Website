import Carousel from 'react-bootstrap/Carousel';
import gallery10 from '../img/img-15.jpg';
import gallery11 from '../img/img-16.jpg';
import gallery12 from '../img/img-17.jpg';
import "./Slide.css"



function UncontrolledExample() {
  return (

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 1000}}
          src={gallery10}
        />
        <Carousel.Caption>
            <div className='text-wrapper'>
            <h1><span>STUDIO J.</span><br></br> is a Toronto-based brand studio; we specialize in creating visual identities for forward-thinking businesses.</h1>
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
          <h1><span>STUDIO J.</span><br></br>
          Discover the world’s first purpose-built historical logo archive. As well as our digital skills</h1>
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
        <h1><span>STUDIO J.</span><br></br>
        We prefer to call ourselves simply Graphic Designers, as that encompasses everything we enjoy doing. </h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




export default UncontrolledExample;