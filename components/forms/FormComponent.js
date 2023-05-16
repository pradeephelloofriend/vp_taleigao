import React from 'react'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectMenuData,selectTabKey} from '../../redux/menu/menuSelector'
import {setTabKey} from '../../redux/menu/menuAction'
import {Tabs,Card } from 'antd';
import { useRouter } from 'next/router'
import {getCertificateData, getProceedData} from '../../lib/api'

import Axios from 'axios';
import DetailComponent from '../detail/DetailComponent';
//import NocTabDetailComponent from './NocTabDetailComponent';
import FormTabDetailComponent from './FormTabDetailComponent';
import TabDetailsComponent from '../about-us/TabDetailsComponent';
import SpinningComponent from '../spin/SpinningComponent';
import ProceedingComponent from '../proceedings/ProceedingComponent';
import ProceedingTabDetailsComponent from '../proceedings/ProceedingTabDetailsComponent';

const { TabPane } = Tabs;
const FormComponent = ({tabKey,routeTitle,menuData,cDetailData,routeUri,setTabKey}) => {
    const [mData,setMdata]=React.useState(null);
    //const [tabKey,setTabKey]=React.useState(routeUri)
    const[pData,setPdata]=React.useState(null)
    const [crData,setCrData]=React.useState(null)
    const router = useRouter();
    const[tabLayout,setTablLayout]=React.useState('left')
    React.useEffect(()=>{
        //console.log('tabKey',tabKey)
        let isApiSubscribed = true;
        if(menuData.length>=1){
            const [data]=menuData.filter(d=>d.node.label==routeTitle)
            //console.log('filterData',data)
            setMdata(data.node)
        }
        /*if(tabKey!==null){
            //console.log('tabKey',tabKey)
            async function fetchData() {
              // const cData = await getCertificateData(tabKey) //applo client 
              const cData = await getProceedData()
              // 👇️ only update state if component is mounted
              if (isApiSubscribed) {
                let arr=[]
                cData.forEach((ele,idx) => {
                  arr.push({
                    date:ele.proceedings.dateAndTime, title:ele.title, venue:ele.proceedings.venue, 
                    chair_name:ele.proceedings.chair.name, startTime:ele.proceedings.startTime, duration:ele.proceedings.duration,
                    noOfAttendees:ele.proceedings.attendanceDetails.noOfAttendees, attachments:ele.proceedings.attachments.sourceUrl,
                    ip:ele.proceedings.individualProceedings, recBy:ele.proceedings.recorder
                  })
                });
                console.log('arr',arr)
                setPdata(arr)
                setCrData(cData)
              }
            }
            fetchData()
            
            
          }*/
        /**Responsive tab */
        function handleResize() {
            if (window.matchMedia("(min-width: 1400px)").matches) {
              setTablLayout("left")
              
              // Viewport is less or equal to 700 pixels wide
              //console.log("min-width: 1400px")
            } else if(window.matchMedia("(min-width: 1200px)").matches) {
              setTablLayout("left")
              
              // Viewport is greater than 700 pixels wide
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 992px)").matches){
              setTablLayout("left")
              
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
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
        
    },[menuData,routeTitle,tabKey])
    
    
   const {title,desc,iscomplete}= router.query
   //console.log('crData',crData)
   //console.log('mData',mData)
   //console.log('crData title ',crData)
  return (
    <>
          <section className="wrapper bg-gray">
              <div className="container-fluid  py-10 py-md-12">
                  <div className="row">
                      <div className='col-12'>
                          <div className='about-us-tab'>
                              <Tabs activeKey={tabKey} onTabClick={(key) => setTabKey(key)} tabPosition={tabLayout}>
                                {mData!==null?mData.childItems.edges.map((t,idx)=>
                                    <TabPane tab={t.node.label} key={t.node.uri}>
                                        <div className='page-content'>
                                            <div className="caption1">
                                                <h1>{t.node.label}</h1>
                                                <h1>{t.node.route.code}</h1>
                                            </div>
                                            {/* {title == 'Forms/Downloads' && crData!==null?
                                           
                                            <FormTabDetailComponent pdata={pData} cDetailData={crData}/>
                                            
                                            :<SpinningComponent/>  } */}
                                      {t.node.route.code == 'proceedings' ?
                                        <ProceedingComponent/>
                                        :<ProceedingTabDetailsComponent />
                                      }
                                        </div>
                                        
                                 </TabPane>
                                ):<></>}
                                  
                                  
                              </Tabs>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    
    </>
  )
}

const mapStateToProps=createStructuredSelector({
    menuData:selectMenuData,
    tabKey:selectTabKey
})
const mapDispatchToProps=dispatch=>({
    setTabKey:data=>dispatch(setTabKey(data))
})
export default connect(mapStateToProps,mapDispatchToProps) (FormComponent)