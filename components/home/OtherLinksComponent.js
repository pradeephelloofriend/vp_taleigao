import React from 'react'
import {Card} from 'antd'
const OtherLinksComponent = () => {
  return (
    <section className="wrapper ol-section " >
        
        <div className="container py-10 py-md-10 pb-md-10">

            <div className='row'>
                <div className='col-3'>
                    <Card className='ol-card ol-hos'
                    title={<b>Hospitals in Taleigao</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Goa Medical College & Hospital - GMC </li>
                                <li>Chest Disease & TB Hospital</li>
                                <li>Urban Health Center TALEIGAO</li>
                                <li>Primary Health Centre, Panaji</li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-tur'
                    title={<b>Tourist Places Near By Taleigao</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Statue of Jack de Sequeira </li>
                                <li>Cabo Raj Nivas </li>
                                <li>Casa do Povo de Taleigão </li>
                                <li>Dona Paula View Point  </li>
                                <li>Caranzalem Beach</li>
                                <li>Cacra View Point</li>
                                <br/>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-park'
                    title={<b>Educational Institutions in Taleigao</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Don Bosco School, Oxdel</li>
                                <li>Goa University</li>
                                <li>St. Michael School, Taleigao-Goa </li>
                                <li>National Institute of Oceanography</li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-park'
                    title={<b>Government Offices near Taleigao</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Central Government Tourist Office</li>
                                <li>STC office</li>
                                <li>Taleigao Panchayat</li>
                                <li>Town & Country Planning Department Main Office</li>
                                <li>Directorate Of Social Welfare</li>
                                <li>Cabo Raj Bhavan</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OtherLinksComponent