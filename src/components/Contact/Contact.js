import React, { useState } from "react"
import "./Contact.css"
import Image1 from "../img/image-15.jpg"


const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",

    })
    const InputEvent = (event) => {
        const {name,value} = event.target

        setData ((preVal) =>{
            return {
                ... preVal,
                [name]:value,
            }
        })
    }

    const formSubmit = (event) => {
        event.preventDefault()
        alert(`My name is ${data.fullname}.
        My phone Numer is ${data.phone}.
        My email address is ${data.email}.
        My Subject is ${data.subject}.
        Here is my message I want to say : ${data.message}
        `)
    }

    return (
    <div>
        <section className='Contact' id='contact'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h5>CONTACT</h5>
                    <h2>Contact With Me</h2>
                </div>

                <div className='content d_flex'>
                    <div className='left'>
                        <div className='box box_shadow'>
                            <img src={Image1} alt=""/>
                        </div>

                        <div className='details'>
                            <h1>Modic.</h1>
                            <p><i className='fa-solid fa-location-arrow'></i>4775 Yonge St, North York, ON M2N 5M5</p>
                            <p>Phone: +1 647 895 8349</p>
                            <p>Email: admin@gmail.com</p>
                            <span>FIND WITH ME</span>
                           
                            <div className='button2 f_flex'>
                                <button className='fab fa-facebook-f'></button>
                            
                                <button className='fab fa-instagram'></button>
                        
                                <button className='fab fa-twitter'></button>
                            </div>

                    </div>
                </div>

                <div className='right box-shadow'>
                    <form onSubmit={formSubmit}>
                        <div className="input_container">
                           
                           <div className='input_text'>
                            <div className='input_row'>
                                <span>YOUR NAME</span><br></br>
                                <input type="text" name='fullname' value={data.fullname} onChange={InputEvent} />
                            </div>

                            <div className='input_row'>
                                <span>YOUR NUMBER</span><br></br>
                                <input type="phone" name='phone' value={data.phone} onChange={InputEvent} />
                            </div>
                            </div>

                            <div className='input'>
                                <span>EMAIL</span><br></br>
                                <input type="email" name='email' value={data.email} onChange={InputEvent} />
                            </div>


                            <div className='input'>
                                <span>SUBJECT</span><br></br>
                                <input type="text" name='subject' value={data.subject} onChange={InputEvent} />
                            </div>

                            <div className='input'>
                                <span>YOUR MESSAGE</span><br></br>
                                <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent} ></textarea>

                            </div>

                            <button className='btn_shadow'>SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                            </button>

                        </div>
                    </form>
                </div>


            </div>
            </div>
        </section>
    </div>
    )
}


export default Contact