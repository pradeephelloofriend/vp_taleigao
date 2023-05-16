import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import pmap from '../../public/img/profile/Taleigao-map.jpg'

const ProfileComponent = () => {
  return (
    <>
    <section className="wrapper image-wrapper bg-image bg-overlay profile-section" >
      <div className="container py-12">
        <div className="row">
          <div className="col-lg-5">
            <div className='pf-img-block'>
                <Image className='image' alt="example" src={pmap} height={800} width={800}/>
                {/* <img src='https://res.cloudinary.com/depg2aab2/image/upload/v1670342628/vp/dongrim/dongurli-map-min_jhxgx1.png' alt=''/> */}
            </div>
            
          </div>
          <div className='col-7'>
          <Card >
            <Card.Body>
            <div className='pf-content-block '>
            <h4 className="display-6 mb-0 text-white">Chicalim Profile</h4>
              <Card className='display-c1'>
                <Card.Body>
                  <ul className='ph-ul text-white mt-3'>
                    <li>Block / Taluka 
                      <p>Mormugao</p>
                    </li>
                    <li>District 
                      <p>South Goa</p>
                    </li>
                    <li>State 
                      <p>Goa</p>
                    </li>
                    <li>Pincode 
                      <p>403711</p>
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='display-c1'>
                <Card.Body>
                  <ul className='ph-ul text-white mt-3'>
                    <li>Area 
                      <p>6901.68 hectares</p>
                    </li>
                    <li>Population(2011) 
                      <p>6,933</p>
                    </li>
                    <li>Households 
                      <p>1190</p>
                    </li>

                  </ul>
                </Card.Body>
              </Card>
            <ul className='pf-ul pf-other text-white text-center mt-3'>
              {/* <Card className='pf-bg-orange'>
                <Card.Body>
                <li className=''>Assembly Constituency<p>Poriem</p></li>  
                </Card.Body>
              </Card>

              <Card className='pf-bg-blue'>
                <Card.Body>
                <li className=''>Parliament Constituency<p>North Goa</p></li>
                </Card.Body>
              </Card>

              <Card className='pf-bg-merun'>
                <Card.Body>
                <li className='pf-bg-merun'>Nearest Town <p>Satari</p></li> 
                </Card.Body>
              </Card> */}

              <Card className='display-c1'>
                <Card.Body>
                  <ul className='pf-ul text-white mt-3'>
                    <li className='pf-bg-orange'>Assembly Constituency
                      <p>Mormugao</p>
                    </li>
                    <li className='pf-bg-blue'>Parliament Constituency
                      <p>South Goa</p>
                    </li>
                    <li className='pf-bg-skyb'>Nearest Town 
                      <p>Mormugao</p>
                    </li>

                  </ul>
                </Card.Body>
              </Card>
              
              
              {/* <li className='pf-bg-orange'>Assembly Constituency<p>Mormugao</p></li> 
              <li className='pf-bg-blue'>Parliament Constituency<p>South goa</p></li>
              <li className='pf-bg-merun'>Nearest Town <p>Mormugao</p></li> */}
            </ul>  
            </div>
            </Card.Body>
          </Card>

          </div>
        </div>

          <div className="row">
            <div className="col-md-12 col-xl-12">
              <Card className='vil-card-pd'>
                <div className='vil-card-block'>
                  <div className="row">
                    <div className="col-md-4 col-xl-4 vil-card-text" onClick={() => goToPage('reporting/tenders', 'tenders', 'Tenders', 'Reporting', '/tenders/', 'Yes')}>
                      <a href="#" target="_blank"><i className="fa fa-gavel fa-size" aria-hidden="true"></i></a>
                      <h1>0 </h1>
                      <p>Tenders floated</p>
                    </div>
                    <div className="col-md-4 col-xl-4 vil-card-text">
                      <a href="#" target="_blank"><i className="fa fa-camera fa-size" aria-hidden="true"></i></a>
                      <h1>0 </h1>
                      <p>Events planned</p>
                    </div>
                    <div className="col-md-4 col-xl-4 vil-card-text">
                      <a href="#" target="_blank"><i className="fa fa-pie-chart fa-size" aria-hidden="true"></i></a>
                      <h1>0 </h1>
                      <p>RTI received</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-xl-4 vil-card-text" onClick={() => goToPage('reporting/grants-received', 'grants-received', 'Grants Received', 'Reporting', '/grants-received/', 'Yes')}>
                      <a href="#" target="_blank"><i className="fa fa-thumbs-up fa-size" aria-hidden="true"></i></a>
                      <h1>0 </h1>
                      <p>Grants received</p>
                    </div>
                    <div className="col-md-4 col-xl-4 vil-card-text" onClick={() => goToPage('about-us/projects', 'projects', 'Projects Members', 'About Us', '/projects/', 'Yes')}>
                      <a href="#" target="_blank"><i className="fa fa-tasks fa-size" aria-hidden="true"></i></a>
                      <h1>0 </h1>
                      <p>Projects</p>
                    </div>
                    <div className="col-md-4 col-xl-4 vil-card-text">
                      <a href="#" target="_blank"><i className="fa fa-money fa-size" aria-hidden="true"></i></a>
                      <h1>0 </h1>
                      <p>Fee and Taxes</p>
                    </div>
                  </div>

                </div>
              </Card>
            </div>
          </div>
        
      </div>
      
    </section>
    </>
  )
}

export default ProfileComponent