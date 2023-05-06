import React from 'react'
import {Tabs,Card } from 'antd';
const { TabPane } = Tabs;
const { Meta } = Card;
import Image from 'next/image'
import load from '../../public/img/loading.png'
import { getInfraData } from '../../lib/api';

const FacilitesComponent = () => {
    const[tabLayout,setTablLayout]=React.useState(null)
    const [iData,setIdata]=React.useState(null)
    const[imgWidth,setImgWidth]=React.useState(270)
    React.useEffect(() => {
        function handleResize() {
          if (window.matchMedia("(min-width: 1400px)").matches) {
            setTablLayout("left")
            setImgWidth(350)
            // Viewport is less or equal to 700 pixels wide
            //console.log("min-width: 1400px")
          } else if(window.matchMedia("(min-width: 1200px)").matches) {
            setTablLayout("left")
            setImgWidth(350)
            // Viewport is greater than 700 pixels wide
            //console.log("min-width: 1200px")
          }else if(window.matchMedia("(min-width: 992px)").matches){
            setTablLayout("left")
            setImgWidth(350)
            //console.log("min-width: 1200px")
          }else if(window.matchMedia("(min-width: 768px)").matches){
            setTablLayout("top")
            setImgWidth(360)
            //console.log("min-width: 768px")
          }else if(window.matchMedia("(min-width: 576px)").matches){
            setTablLayout("top")
            setImgWidth(360)
            //console.log("min-width: 768px")
          }else{
            setTablLayout("top")
            setImgWidth(380)
            //console.log("min-width: 576px")
          }
        
        }

        let isApiSubscribed = true;
        async function fetchData() {
            
            const cData = await getInfraData() //applo client
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                
                setIdata(cData)
            }
          }
         
          fetchData()
         

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
      },[])
      // console.log('infa',iData)
  return (
      <>
          <section className="wrapper bg-light">
              <div className="container py-10 py-md-10 pb-md-10">
                  <div className="row">
                      <div className="col-md-12 col-lg-10 col-xl-10 mx-auto text-center">
                          <h4 className="display-6 mb-0 link-ct-blue">Village Infrastructure</h4>
                          <p className="lead mb-5 px-md-16 px-lg-3">Developing, Strengthening the capacities and provide essential services. Some of them are.</p>
                      </div>

                  </div>
                  <div className="row">
                      <div className="col-md-12 mx-auto">
                          <div className='facility-tab'>
                          <Tabs tabPosition={tabLayout}>
                            {iData!==null?
                            iData.map((i,idx)=>
                            <TabPane tab={i.title} key={idx}>
                                <div className='row'>
                                    {i.infrastructure.infraDetails!==null ? i.infrastructure.infraDetails.map((d,ix)=>
                                        <div key={ix} className='col-md-4 col-12'>
                                            <Card 
                                                title={d.name} className='faci-card link-ct-blue mb-0 text-center'
                                                hoverable
                                                style={{ width: imgWidth }}
                                                cover={
                                                <Image alt="example"
                                                placeholder="blur"
                                                blurDataURL={load}
                                                priority={true}
                                                 src={d.image.sourceUrl} 
                                                 height={500} 
                                                 width={800} 
                                                 />}
                                            >
                                                {/* <h4 className='link-c-blue mb-0 text-center'> Goa Flora</h4> */}
                                                <p className='mb-0'>{d.desc}</p>
                                            </Card>
                                        </div>
                                    ):<></>}

                                </div>
                            </TabPane>
                            )
                            :<></>}
                            </Tabs>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default FacilitesComponent