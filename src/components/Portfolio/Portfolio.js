import Card from 'react-bootstrap/Card';
import Image1 from '../img/img-10.jpg'
import Image2 from '../img/img-12.jpg'
import Image3 from '../img/img-9.jpg'
import Image4 from '../img/img-19.jpg'
import Image5 from '../img/img-26.jpg'
import Image6 from '../img/img-21.jpg'
import Image7 from '../img/img-22.jpg'
import Image8 from '../img/img-23.jpg'

import './Portfolio.css'
function ImgOverlayExample() {
  return (


    

    <div className="card">

        <div className='text_container'>
                    <h5>PORTFOLIO</h5>
                    <h2>STUDIO J. Project</h2>
        </div>

        <div className="card_container">


    <Card className="bg-dark text-white w-50">
      <Card.Img src={Image1} alt="Card image" />
      <Card.ImgOverlay>
      <Card.Title className='h2'>Project 2.</Card.Title>
      <Card.Title className='h4'>Graphic Design</Card.Title>
        <Card.Text className='p'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <button className='btn-arrow'><i className='fa fa-long-arrow-right'></i></button>

      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-white w-50">
      <Card.Img src={Image3} alt="Card image" />
      <Card.ImgOverlay>
      <Card.Title className='h2'>Project 2.</Card.Title>
      <Card.Title className='h4'>Art Design</Card.Title>
        <Card.Text className='p'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <button className='btn-arrow'><i className='fa fa-long-arrow-right'></i></button>
      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-white w-50">
      <Card.Img src={Image8} alt="Card image" />
      <Card.ImgOverlay>
      <Card.Title className='h2'>Project 3.</Card.Title>
      <Card.Title className='h4'>Graphic Design</Card.Title>
        <Card.Text className='p'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <button className='btn-arrow'><i className='fa fa-long-arrow-right'></i></button>
      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-white w-50">
      <Card.Img src={Image2} alt="Card image" />
      <Card.ImgOverlay>
      <Card.Title className='h2'>Project 4.</Card.Title>
      <Card.Title className='h4'>Outdoor Design</Card.Title>
        <Card.Text className='p'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <button className='btn-arrow'><i className='fa fa-long-arrow-right'></i></button>
      </Card.ImgOverlay>
    </Card>


    </div>

    <div className="card_container">

<Card className="bg-dark text-white w-50">
  <Card.Img src={Image4} alt="Card image" />
  <Card.ImgOverlay>
      <Card.Title className='h2'>Project 5.</Card.Title>
      <Card.Title className='h4'>Branding Design</Card.Title>
        <Card.Text className='p'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <button className='btn-arrow'><i className='fa fa-long-arrow-right'></i></button>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white w-50">
  <Card.Img src={Image5} alt="Card image" />
  <Card.ImgOverlay>
      <Card.Title className='h2'>Project 6.</Card.Title>
      <Card.Title className='h4'>Graphic Design</Card.Title>
        <Card.Text className='p'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <button className='btn-arrow'><i className='fa fa-long-arrow-right'></i></button>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white w-50">
  <Card.Img src={Image6} alt="Card image" />
  <Card.ImgOverlay>
      <Card.Title className='h2'>Project 7.</Card.Title>
      <Card.Title className='h4'>Graphic Design</Card.Title>
        <Card.Text className='p'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <button className='btn-arrow'><i className='fa fa-long-arrow-right'></i></button>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white w-50">
  <Card.Img src={Image7} alt="Card image" />
  <Card.ImgOverlay>
      <Card.Title className='h2'>Project 8.</Card.Title>
      <Card.Title className='h4'>Graphic Design</Card.Title>
        <Card.Text className='p'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <button className='btn-arrow'><i className='fa fa-long-arrow-right'></i></button>
  </Card.ImgOverlay>
</Card>


</div>

    </div>



  );
}

export default ImgOverlayExample;