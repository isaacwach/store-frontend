import React from 'react'
import './storagedetails.css'


const StorageDetails = () => {
  return(
    <>
      <main>
        <div className='container'>
          <div className='cover'></div>
          <div className='content'>
            <div className='nav'>
              <span className='logo'>STORAGE DETAILS</span>
              <span><i class="fab fa-sistrix"  style="font-size:24px"></i></span>
            </div>
            <div className='content-body'>
              <div className='pages'>
                <span className='active'><b>01</b></span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
              </div>
              <div className='black-label'>
                <span className='title'><b>STORAGE DETAILS</b></span>
                <pre>Store Unit</pre>
                <pre>Type Of Goods</pre>
                <pre>Start Date</pre>
                <pre>End Date</pre>
              </div>
              <div className='prix'>
                <span className='button'>Exit Storage</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>

  )
}