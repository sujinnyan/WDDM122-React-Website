import React from "react"
import "./Home.css"
import gallery1 from "../img/img-3.jpg"
import gallery2 from "../img/img-4.jpg"
import gallery3 from "../img/img-5.jpg"
import gallery4 from "../img/img-7.jpg"
import icon1 from "../img/imac.png"
import icon2 from "../img/idea.png"
import icon3 from "../img/printing.png"
import icon4 from "../img/design.png"
import { Typewriter } from 'react-simple-typewriter'




const Home = () => {
    return (
        <>
          <section className='hero' id='home'>  
          <div className='container f_flex top'>
              <div className='left top'>
                  <h3>WELCOME TO STUDIO J.</h3>
                  <h1>Hello, We are <span>STUDIO J </span></h1>
                  <h2>
                      a
                      <span>
                        
                        <Typewriter
                        words={[' Professional ', ' Unique', ' Essencial' ]}
                        loop={3}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        />
                    
                    </span>

                </h2>

                 <p>As visual storytellers we transform any concept into a unique visual language with a little bit of magic & fairy dust</p>

          <div className='hero_btn'>
              <div className='col_1'>
                  
                  <div className='button'>
                      <button className='btn_shadow'>
                          <i className='fab fa-facebook-f'><a href="#"></a></i>
                      </button>
                      <button className='btn_shadow'>
                          <i className='fab fa-instagram'><a href="#"></a></i>
                      </button>
                      <button className='btn_shadow'>
                          <i className='fab fa-youtube'><a href="#"></a></i>
                      </button>
                  </div>
              </div>
          </div>
        </div>
      </div>
      </section>

      <div className='services_section'>
       
        <div className='services-wrapper'>
            <h5>SERVICES</h5>
            <h2>What We Offer</h2>

            <div className='services-container'>
                <div className='item'>
                <img src={icon1} alt=""/>
                <h4>Responsive</h4>
                <p>Looks great on any screen size!</p>
                </div>

                <div className='item'>
                <img src={icon2} alt=""/>
                <h4>Idea</h4>
                <p>Looks great on any screen size!</p>
                </div>

                <div className='item'>
                <img src={icon3} alt=""/>
                <h4>Print</h4>
                <p>Looks great on any screen size!</p>
                </div>

                <div className='item'>
                <img src={icon4} alt=""/>
                <h4>Design</h4>
                <p>Looks great on any screen size!</p>
                </div>
            </div>
       
        </div>

      </div>


      <div className='image-gallery-section'>

          <div className='gallery'>

              <div className="gallery-item">
                  <div className='gallery-text'>
                      <h6><span>Visual Identity</span></h6>
                  </div>
                  <img src={gallery1} alt=""/>
              </div>



            <div className="gallery-item">
                <h1>Hello We Are Studio J.</h1>
                <h2>As visual storytellers we transform any concept into a unique visual language with a little bit of magic & fairy dust</h2>
                <button className='btn_more'>More</button>
              </div>


            <div className="gallery-item">
                  <img src={gallery3} alt=""/>
              </div>


            <div className="gallery-item">
                  <img src={gallery4} alt=""/>
              </div>
 
          </div>

      </div>


      {/* <section className='main'>

        <div className='main_container'>

        <div className='left'>
            <div className='left_img'>
            <img src={main} alt=""/>
            </div>
        </div>

        <div className='right'>
            <div className='right_img'>
            <img src={right} alt=""/>
            </div>
        </div>

        </div>
        
        

    </section> */}
    
        </>
    )
}

export default Home
