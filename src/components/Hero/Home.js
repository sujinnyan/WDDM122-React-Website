import React from "react"
import "./Home.css"
import icon1 from "../img/design1.jpeg"
import icon2 from "../img/design2.jpeg"
import icon3 from "../img/design3.jpeg"

import { Typewriter } from 'react-simple-typewriter'




const Home = () => {
    return (
        <>
          <section className='hero' id='home'>  
          <div className='container f_flex top'>
              <div className='left top'>
                  <h3>WELCOME TO Modic.</h3>
                  <h1>Hello, We are <span>Modic. </span></h1>
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

                 <p>With our online DESIGN preview tool, create a room that reflects the idea you have in mind. All you need to do is choose the furniture and accessories in store, play with the colours and textures, then design the space to your liking. DESIGN ensures all your home décor projects are successful, every time.</p>

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

   
                </div>

                <div className='item'>
                <img src={icon2} alt=""/>

                </div>
                <div className='item'>
                <img src={icon3} alt=""/>

                </div>

            
            </div>
       
        </div>

      </div>
    
        </>
    )
}

export default Home
