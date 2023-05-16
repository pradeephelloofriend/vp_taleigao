import React from 'react'

const MapComponent = () => {
    return (
      
            <section className="wrapper bg-light ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-12 ">
                        {/* <iframe src="https://goo.gl/maps/fkbHJcvDJ8gquJpW6" width="100%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10415.198490770277!2d73.8251880024919!3d15.465099124426851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0b7f54f9f0b%3A0x384b8a7fd3da16e9!2sTaleigao%20Panchayat!5e0!3m2!1sen!2sin!4v1684215421868!5m2!1sen!2si" width="100%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        
                        </div>
                    </div>
                </div>
            </section>
        
    )
}

export default MapComponent
