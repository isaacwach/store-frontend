import React from 'react';
import {Button, Col, Container, Row,  Form} from "react-bootstrap";

const StorageDetails = () => {
  return(
    <>
      <section className='about'>
        <h1>Storage Details</h1>
        <div className='container-storage'>
          <div className='storage'>
            <div className='storage image'>
              <img src='/images/storage-solutions-web.jpg'/>
            </div>
          </div>
          <div className='content'>
            <div className='cards'>
              <article className='card'>
                <h5>Store Unit</h5>
                <small></small>
              </article>
              <article className='card'>
                <h5>Price Per Unit</h5>
                <small></small>
              </article>
              <article className='card'>
                <h5>Types of Goods</h5>
                <small></small>
              </article>
              <article className='card'>
                <h5>Start Date</h5>
                <small></small>
              </article>
              <article className='card'>
                <h5>Stop Date</h5>
                <small></small>
              </article>
            </div>
            <p></p>
            <button>Exit Storage</button>
          </div>
        </div>
      </section>
    </>

  )
}

export default StorageDetails;