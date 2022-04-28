import React from 'react';

const Home = () => {
    return (
        <>
        <div className="container-fluid Hero">
            <div className="row">
                <div className="intro col-md-6"> 
                <h1>Welcome to Classic Store</h1>
                <h2>Book a safe storage on a button click</h2>
                <div className='buttons'>
                    <button className="btn btn-warning">Personal Booking</button>
                    <button className="btn btn-secondary">Business Booking</button>
                </div>
                </div>
                <div className="col-md-6"> 
                    <img className="shelves" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjPegq1vSEzFS2bswVdpzNBK1hBNowk1m4Q&usqp=CAU" alt=""></img>
                </div>

            </div>
        </div>
        <div className="container-fluid about">
            <div className="row">
                <div className="col-md-6">
                    <img className="box" src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
                </div>
                <div className="description col-md-6">
                    <h1>Cut the struggle of finding a secure storage during transition</h1>
                    <p>Ever got stuck with your goods or luggage due to the lack of a reliable storage company?</p>
                    <p>Were are here for you</p>
                    <p>We are reputable as one of the safest and convinient storage companies</p>
                </div>
            </div>
        </div>
        <div className="container-fluid testimonial">
            <h1>What our Esteemed Clients are Saying</h1>
        </div>
        <footer>
            <div className="social-icons">

            </div>
            <div>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
            <p>@2020 Classic Store</p>
        </footer>
        </>
    );
}

export default Home;
