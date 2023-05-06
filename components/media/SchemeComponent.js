import React from 'react'
import {Card,Table,Button,Icon } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image'
import {getAllSchemeData} from '../../lib/api'
import SpinningComponent from '../spin/SpinningComponent';


const SchemeComponent = () => {
  const router=useRouter()
  const[sData,setSdata]=React.useState(null);
  const columns = [
    {
      title: 'Sr. No',
      dataIndex: 'sNo',
      key: 'sNo',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Scheme Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'View',
      dataIndex: 'details',
      key: 'details',
      render: (text,record) =>{
        //console.log('record',record)
        return(
          <Button size='small'
          onClick={()=>router.push({
            pathname:`/media/schemes/${record.title}`,
            query:{slug:record.slug,title:record.title}
          })}
          >{text}</Button>
        )
      }
    },
    {
      title: 'Download',
      dataIndex: 'download',
      key: 'download',
      render: text => <a>{text}</a>,
    }
  ]
  React.useEffect(()=>{
    let isApiSubscribed = true;
    const tempData=[]
    async function fetchData() {
      const cData = await getAllSchemeData() //applo client 

      // 👇️ only update state if component is mounted
      if (isApiSubscribed) {
        cData.forEach((element,idx) => {
          //console.log('element',element)
          tempData.push({key:idx,sNo:idx+1,name:element.title,details:'Read more',download:'Download PDF',slug:element.slug})
        });
        setSdata(tempData)
      }
    }
    fetchData()
    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  },[])
  //console.log('sData',sData)
  return (
    <>
      {sData !== null ?
        <div className='page-content'>
          <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          <div className='scheme-block'>

            <Table bordered columns={columns} dataSource={sData} />


          </div>
        </div>
        :
        <SpinningComponent />
      }

    </>
  )
}

export default SchemeComponent