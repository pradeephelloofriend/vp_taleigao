import React from 'react'
import { Table } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRegCertData } from '../../redux/menu/menuSelector';
import {Button,Typography,Tabs,Card } from 'antd';
import { Collapse } from 'antd';
import UploadUserNewModalComponent from '../modal/UploadUserNewModalComponent';
import UploadDocumentComponent from '../detail/UploadDocumentComponent';

const { Panel } = Collapse;

const { TabPane } = Tabs;
const FormTabDetailComponent = ({regCertData,cDetailData}) => {
    // console.log('cDetailData forms',cDetailData)
    const{applicationTab,otherTabs,faqTab}=cDetailData
    const [show,setShow]=React.useState(false)
    const[regData,setRegData]=React.useState(null)
    const[tabLayout,setTablLayout]=React.useState(null)
    React.useEffect(()=>{
        //console.log('regData',regCertData)
        if(regCertData!==null){
            setRegData(regCertData.regStatus)
            
        }
        else{
            setRegData(null)
        }
        function handleResize() {
            if (window.matchMedia("(min-width: 1400px)").matches) {
              setTablLayout("right")
             
              // Viewport is less or equal to 700 pixels wide
              //console.log("min-width: 1400px")
            } else if(window.matchMedia("(min-width: 1200px)").matches) {
              setTablLayout("right")
             
              // Viewport is greater than 700 pixels wide
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 992px)").matches){
              setTablLayout("right")
              
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 768px)").matches){
              setTablLayout("top")
              
              //console.log("min-width: 768px")
            }else if(window.matchMedia("(min-width: 576px)").matches){
              setTablLayout("top")
              
              //console.log("min-width: 768px")
            }else{
              setTablLayout("top")
              //console.log("min-width: 576px")
            }
          
          }
          handleResize()
          window.addEventListener('resize', handleResize)
    },[regCertData])
    const handleShow = () => {
        setShow(true)
    };
    const handleClose = () => {
      setShow(false)
      //setRegStatus(false)
    };   
    // console.log('applicationTab forms',applicationTab)
    console.log('cDetailData formsdetails', cDetailData)
  return (
    <>

        
        
          {/* <div className='facility-tab'>
              <Tabs tabPosition={tabLayout} className='sub-tab'>

                  <TabPane tab="Application" key="app"> */}
                      <div className='page-content'>
                        <h4>{cDetailData.title}</h4>
                        <div className='sp-cm' dangerouslySetInnerHTML={{ __html:cDetailData.description!==null?cDetailData.description:<></>}} />
                      {/* <div dangerouslySetInnerHTML={{ __html:cDetailData.title!==null?cDetailData.title:<></>}} /> */}
                      {/* <Table columns={columns} dataSource={cDetailData} />  */}
                      <table>
                        <thead>
                          <tr>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Date</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Title</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Vanue</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Chair</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Start Time</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Duration</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Attendees</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Attachment</td>
                          </tr>

                        </thead>
                        {/* {cDetailData.members!==null ? cDetailData.members.map((m)=> */}
                          
                            <tbody>
                              <tr> <td className='text-centre fs-15' style={{textAlign:'center'}}>asds</td>
                                {/* <td className='text-centre fs-15' style={{textAlign:'center'}}>{cDetailData.dateAndTime}</td>
                                <td className='fs-15' style={{textAlign:'center'}}>{cDetailData.title}</td>
                                <td className='fs-15' style={{textAlign:'center'}}>{cDetailData.venue}</td>
                                <td className='fs-15' style={{textAlign:'center'}}>{cDetailData.chair.name}</td>
                                <td className='fs-15' style={{textAlign:'center'}}>{cDetailData.startTime}</td>
                                <td className='fs-15' style={{textAlign:'center'}}>{cDetailData.duration}</td>
                                <td className='fs-15' style={{textAlign:'center'}}>{cDetailData.attendanceDetails.noOfAttendees}</td>
                                <td className='fs-15' style={{textAlign:'center'}}>{cDetailData.attendanceDetails.noOfAttendees}</td> */}
                                {/* <td className='fs-15' style={{textAlign:'center'}}>{m.name}</td>
                                <td className='px-10 fs-15' style={{textAlign:'center'}}>{m.designation}</td>
                                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.contactNo}</td>
                                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.emailId}</td>
                                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.address}</td> */}
                              </tr>
                            </tbody>
                         
                        {/* ):<></>} */}
                         </table>
                
                        
                      </div>



                  
                  

          <UploadUserNewModalComponent
              show={show}
              onClick={handleClose}
              onHide={handleClose}
          />

      </>
    // <>

        
        
    //       <div className='facility-tab'>
    //           <Tabs tabPosition={tabLayout} className='sub-tab'>

    //               <TabPane tab="Application" key="app">
    //                   <div className='page-content'>
    //                   <div dangerouslySetInnerHTML={{ __html:applicationTab.desc!==null?applicationTab.desc:<></>}} />
                          
    //                       <div className='row'>
    //                         {applicationTab.cardMenuBox!==null ?applicationTab.cardMenuBox.map((m,mix)=>
    //                         <div key={mix} className='col-md-6'>
    //                             <Card
    //                                 className='faci-card'
    //                                 hoverable
    //                             >
    //                                 <h4 className='link-c-blue mb-0'>{m.manuName}</h4>
    //                                 <p className='mb-0'>{m.menuDesc}</p>
    //                                 <div className='btn-block mt-3 f-right'>
    //                                     {m.menuButton.map((b,bix)=>
    //                                         <a key={bix} href={`${b.btnLink}`}> <Button className='view-btn mr-5'>{b.btnName}</Button></a>
    //                                     )}
    //                                 {mix==0?
    //                                 <Button onClick={() => handleShow()} style={{display:'none'}} className='view-btn'>Upload Offline</Button>
    //                                 :<></>}
                                        
    //                                 </div>

    //                             </Card>
    //                         </div>
    //                         ):<></>}
                              
                              
    //                       </div>
    //                       <div className='row'>
    //                             {regData!==null || regData=='Y'?
    //                             <UploadDocumentComponent/>
    //                             :
    //                             <></>
    //                             }
                                
    //                       </div>
    //                   </div>



    //               </TabPane>
    //               {otherTabs!==null? otherTabs.map((ot,otx)=>
    //                 <TabPane tab={ot.tabName} key={otx}>
    //                      <div dangerouslySetInnerHTML={{ __html:ot.desc}} />
    //                 </TabPane>
    //                         ):<></>}
                  
    //               <TabPane tab="FAQ" key="faq">
    //                   <Collapse accordion>
    //                     {faqTab!==null ?faqTab.map((ft,ftx)=>
    //                         <Panel header={ft.ttitle} key={ftx}>
    //                         <div dangerouslySetInnerHTML={{ __html:ft.desc}} />
    //                         </Panel>
    //                     ):<></>}
                         
    //                   </Collapse>
    //               </TabPane>

    //           </Tabs>
    //       </div>
          
    //       <UploadUserNewModalComponent
    //           show={show}
    //           onClick={handleClose}
    //           onHide={handleClose}
    //       />

    //   </>
  )
}
const mapStateToProps=createStructuredSelector({
    regCertData:selectRegCertData
})
export default connect(mapStateToProps) (FormTabDetailComponent)