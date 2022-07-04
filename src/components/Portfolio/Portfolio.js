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
        We were entrusted with developing a brand new website for Saudi Arabia’s capital, Riyadh, in collaboration with AXIS, a top-tier local agency. 
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
        A city this size requires a site that can withstand massive server loads. Our team relied on only the most current technologies for developing the server. 
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
        Citizens will discover plenty of useful information about their city on the new site, and it’s also targeted to attract business and tourism.
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
        There are six primary sections on the site that describe in detail Riyad’s features and provide a complete picture of the metropolis, including history and must-see sites.
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
        One of the site’s key functions is The Moment. This interactive city map includes all the business centers with panoramas and 3D imaging.
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
        The services and functions of uLesson are linked to its mobile application which lets users register, pass tests, and evaluate their learning progress.
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
        The platform offers parents or guardians analytical and data reports to help guide the child’s progress, improve the learning process, and add new subjects.
        </Card.Text>
        <button className='btn-arrow'><i className='fa fa-long-arrow-right'></i></button>
  </Card.ImgOverlay>
</Card>


</div>

    </div>



  );
}

export default ImgOverlayExample;