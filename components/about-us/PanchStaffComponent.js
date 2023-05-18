import React from 'react'
import {Card} from 'antd'
import Image from 'next/image'
import { getPanchStaff } from '../../lib/api'
import SpinningComponent from '../spin/SpinningComponent'
const MessageComponent = () => {
    const [crData,setCrData]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        async function fetchData() {
            const cData = await getPanchStaff() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                setCrData(cData)
            }
          }
          fetchData()
       
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    // console.log(crData);
  return (
      <>
        {crData !== null? 
        
        <div>
        {/* <h2 className="text-tranfor " >{crData.panchStaffMembers.fieldGroupName}</h2> */}
        <table className='cust_tbl'>
            <thead>
                <tr>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Entry</td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Name
                    </td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Designation</td>
                </tr>
            </thead>

        { crData.panchStaffMembers.membersInformation.map((m) =>
        <tbody>
            <tr>
                <td className='fs-15' style={{textAlign:'center'}}>{m.entry}
                </td>
                <td className='px-10 fs-15' style={{textAlign:'center'}}>{m.name}</td>
                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.designation}</td>
            </tr>
        </tbody>

        )}
        </table>

        </div>
        
        
        : <SpinningComponent/>}
       
    
        
      </>
  )
}

export default MessageComponent