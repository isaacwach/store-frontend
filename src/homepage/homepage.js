import React from 'react';
import Popup from '../popup/popup';
import { useState } from 'react';

const Card = (props) => {
    return (
        <>
        <div className="">
            
            <div className="card mycard">
                <img
                    src={props.src}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
            
        </div>
        </>
    )
}

const Home = (props) => {
    const [buttonPopup, setButtonPopup]=useState(false);
    return (
        <>
        <div className="container-fluid hero">
            <div className="row flex-column-reverse flex-sm-row">
                <div className="intro col-md-6"> 
                <h1>Welcome to Classic Store</h1>
                <h2>Book a safe storage on a button click</h2>
                <div className='buttons'>
                    <button className="btn btn-warning" onClick={ () => setButtonPopup(true)}>Personal Booking</button>
                    <button className="btn btn-secondary">Business Booking</button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                        <div className="pop-form">
                            <form className="form1">
                                <h3>Fill in Your Details</h3>
                                <label>Fullname:<br/>
                                    <input className="fname" type="text" placeholder="Enter your fullname"/>
                                </label><br/>
                                <label>Move in date:<br/>
                                    <input id='date' type="date" />
                                </label><br/>
                                <label>Expected move our date:<br/>
                                    <input id='date' type="date" />
                                </label>
                                <div className="form-buttons"> 
                                    <button className="btn-btn1">Submit</button>
                                    <button className="btn-btn2" onClick={() => props.setTrigger(false)} >Close</button>
                                </div>
                            </form>
                        </div>
                       
                    </Popup>
                </div>
                </div>
                <div className="col-md-6"> 
                    <img className="shelves" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcxwj0yCkum1HJtNkWX2_cmndrrVoP_z0pg&usqp=CAU" alt=""></img>
                </div>

            </div>
        </div>
        <div className="container-fluid about">
            <div className="row">
                <div className="col-md-6">
                    <img className="box" src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
                </div>
                <div className="description col-md-6">
                    <hr className="line1" size="10" width="280px" color="orange"></hr> 
                    <h1>Cut the struggle of finding a secure storage during transition</h1>
                    <p>Ever got stuck with your goods or luggage due to the lack of a reliable storage company?</p>
                    <p>Were are here for you</p>
                    <p>We are reputable as one of the safest and convinient storage companies</p>
                </div>
            </div>
        </div>
        <div className="container-fluid testimonial">
            <h1>Testimonials</h1>
            <hr className="line2"size="10" width="220px" color="orange"></hr> 
            <h3>What our Esteemed Clients are Saying</h3>
            <div className="row test-cards">
                <div className="col-md-auto col-xs-6">
                    <Card src={'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png'} name={'Leonard Gucci'} text={'lorem ipsum dolor sit amet, consectetur adipiscing elit lorem vty'}/>
                </div>
                <div className="col-md-auto col-xs-6">
                    <Card src={'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png'} name={"Mark Weber"} text={"lorem ipsum dolor sit amet amet sur jitr opium"}/>
                </div>
                <div className="col-md-auto">
                    <Card src={'https://freerangestock.com/sample/116474/man-avatar-.jpg'} name={"Duncan Opiyo"} text={"lorem ipsum dolor sit amet amet sur jitr"}/>
                </div>
                <div className="col-md-auto">
                    <Card src={'https://i.pinimg.com/474x/57/70/ab/5770ab4f9edf4b18bbf7f420c94c1488.jpg'} name={"Sarah Mukami"} text={"lorem ipsum dolor sit amet amet sur jitr opium lorem ipsum dolor sit amet"}/>
                </div>
            </div>

        </div>

        </>
    );
}

export default Home;
