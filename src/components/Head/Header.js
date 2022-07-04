import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'



const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                    <li><h3><NavLink to="/">STUDIO J.</NavLink>
                    </h3> </li>
                        </div>

                    <div className='navlink'>
                        <ul className='link f_flex uppercase'>
                           
                            <li><NavLink to="/">About</NavLink>
                            </li>

                            <li><NavLink to="/Portfolio">Portfolio</NavLink>
                           </li>

                           <li><NavLink to="/Contact">Contact</NavLink>
                           </li>

                            <li><button className='home-btn'>Learn More</button></li>
                        </ul>
      
                    </div>

                    </div>
            </header>   


        </>
    )
}

export default Header
