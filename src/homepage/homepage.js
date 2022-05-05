import React from 'react';
import { Link } from 'react-router-dom';

// import ReactStars from "react-rating-stars-component";


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
    return (
        <>
        <div className="container-fluid hero">
                <h1>Welcome to Classic Store</h1>
                <h2>Book safe storage at a button's click</h2>
                <div className='buttons'>

                    <Link to='/booking' className="btn btn-warning">Personal Booking</Link>
                    <Link to='/booking' className="btn btn-secondary">Business Booking</Link>

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
                    <Card src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdzwVTM2Qz3A7SqUsdzLsUBfjtz4y5xgAyZw&usqp=CAU'} name={"Duncan Opiyo"} text={"lorem ipsum dolor sit amet amet sur jitr"}/>
                </div>
                <div className="col-md-auto">
                    <Card src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QgUlHndF8E8D_Fcm6wiqVcIACH9DG2GekA&usqp=CAU'} name={"Sarah Mukami"} text={"lorem ipsum dolor sit amet amet sur jitr opium lorem ipsum dolor sit amet"}/>
                </div>
            </div>

        </div>

        </>
    );
}

export default Home;
