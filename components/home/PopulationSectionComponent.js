import React from 'react'
import Image from 'next/image'
import pic from '../../public/img/population/population.jpg'
import pslidea from '../../public/img/population-slide1.png'

const PopulationSectionComponent = () => {
  return (
      <>
          <section className="wrapper pop-section image-wrapper bg-auto no-overlay bg-image text-center" >
          <div className={'image-container'}>
          <Image className='image' alt="example" src={pslidea} layout='fill' />
          {/* <Image className='image' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665069502/vp/nagoa/population-min_gajuy7.jpg'} alt='' layout='fill' /> */}
          </div>
            
              <div className="container-fluid pop-content">
                  <div className="row">
                      <div className="col-lg-6 col-xl-6 mx-auto">
                          {/*<h2 className="display-4 mb-3 text-center">Join Our Community</h2>*/}
                          <p className="mb-0 px-md-16 px-lg-3 link-disp-black no-padding">"Clean Administration and Ready to help People of Taleigao anytime for our beautiful Green Taleigao Village"</p>
                          <p className='mb-0'>--Sarpanch</p>
                      </div>
                      
                  </div>
                  <div className="row">
                    <div className="col-md-10 col-lg-9 col-xl-7 mx-auto">
                        <div className="row align-items-center counter-wrapper">
                            <div className="col-md-6 text-center mb-1">
                                <h3 className="counter counter-lg link-disp-black">11</h3>
                                <p>Wards</p>
                            </div>
                            
                            <div className="col-md-6 text-center mb-5">
                                <h3 className="counter counter-lg link-disp-black">25,811</h3>
                                <p>Total Population</p>
                            </div>
                            
                            
                        
                        </div>
                            
                    </div>     
         
                </div>
              </div>
          </section>
      </>
  )
}

export default PopulationSectionComponent