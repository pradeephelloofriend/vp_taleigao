import React from 'react'
import { Table } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRegCertData } from '../../redux/menu/menuSelector';
import {Button,Typography,Tabs,Card } from 'antd';
import { Collapse } from 'antd';
import UploadUserNewModalComponent from '../modal/UploadUserNewModalComponent';
import UploadDocumentComponent from '../detail/UploadDocumentComponent';
import { getProceedData } from '../../lib/api';

const { Panel } = Collapse;

const { TabPane } = Tabs;
const ProceedingComponent = ({}) => {
  const[pData,setPdata]=React.useState(null)
  const [crData,setCrData]=React.useState(null)
  const [expended, setExpended] = React.useState();

  const expend = (index) => {
    if (expended === index) setExpended(undefined);
    else setExpended(index);
};

  const expandedRowRender = (record) => {
    return (
      <div>
        <p>{record.description}</p>
      </div>
    );
  };

  React.useEffect(()=>{
    //console.log('tabKey',tabKey)
    let isApiSubscribed = true;
    
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
                ip:ele.proceedings.individualProceedings, recBy:ele.proceedings.recorder, Key:idx+1
              })
            });
            console.log('arr',arr)
            setPdata(arr)
            setCrData(cData)
          }
        }
        fetchData()
        
        
    
   
      return () => {
        // cancel the subscription
        isApiSubscribed = false;
      };
    
},[])


    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Venue',
        dataIndex: 'venue',
        key: 'venue',
      },
      {
        title: 'Chair',
        dataIndex: 'chair_name',
        key: 'chair_name',
      },
      {
        title: 'Start Time',
        dataIndex: 'startTime',
        key: 'startTime',
      },
      {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration',
      },
      {
        title: 'Attendees',
        dataIndex: 'noOfAttendees',
        key: 'noOfAttendees',
      },
      {
        title: 'Attachment',
        dataIndex: 'attachments',
        key: 'attachments',
        render: (text, record) =>
        (
          <a target="_blank" href={`${text}`}>View More</a>
        ),
      },
    ];

    const columns_ip = [
      {
        title: 'proposer',
        dataIndex: 'proposer',
      },
      {
        title: 'seconder',
        dataIndex: 'seconder',
      },
    ];
    //console.log(router)
  return (
    <>

                      <div className='page-content'>
                        <h4>{crData!==null?crData.title:<></>}</h4>
                        <div className='sp-cm' dangerouslySetInnerHTML={{ __html:crData!==null?crData.description:<></>}} />
                      <Table columns={columns} 
                         expandable={{
                          expandedRowRender: (record) => 
                          {
                            // console.log("record", record)
                            return(
                              <section className="wrapper bg-light-pch">
                                <div className="container py-10 py-md-10 pb-md-10">
                                    <div className="row">
                                      <div className="col-md-12 col-xl-12">
                                      <div className="row">
                                        <div className="col-md-12 col-xl-8">
                                          <h4>Individual Proceedings</h4>
                                        </div>
                                        <div className="col-md-12 col-xl-4">
                                        <h4 style={{ display: 'inline-block'}}>Recorded By : </h4>
                                            {record.recBy.map((itemrec,idx) => (
                                                <h6 style={{ display: 'inline-block'}}>
                                                    {itemrec.designation.name}
                                                </h6>
                                          ))}
                                        </div>
                                      </div>
                                      
                                      <Collapse defaultActiveKey={['0']}>
                                      {record.ip.map((item,idx) => (
                                          <Panel key={idx} header={item.title}>
                                            <div className="row">
                                              <div className="col-md-12 col-xl-8">
                                                <div dangerouslySetInnerHTML={{ __html:item.description}} />
                                              </div>

                                              <div className="col-md-12 col-xl-4">
                                                <Table
                                                  columns={columns_ip}
                                                  dataSource={record.ip!==null?record.ip:[]} />
                                              </div>
                                              </div>
                                            
                                          </Panel>
                                        ))}
                                      </Collapse>
                                      </div>
                                    </div>
                                </div>
                              </section>
                              //
                            )
                          },
                        }}
                      dataSource={pData!==null?pData:[]}
                      /> 
                
                      </div>


      </>   
  )
}

export default ProceedingComponent