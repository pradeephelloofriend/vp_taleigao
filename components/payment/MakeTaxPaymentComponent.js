import React from 'react'
import {Button,Card} from 'antd'
import { useRouter } from 'next/router'
import Axios from 'axios';
import PaymentSuccesModalComponent from '../modal/PaymentSuccesModalComponent';
const MakeTaxPaymentComponent = ({tAmt,selctionData}) => {
    const [show,setShow]=React.useState(false)
    const [paymentId,setPaymentId]=React.useState(null)
    const router = useRouter()
    const handleShow = () => {
        setShow(true)
    };
    const handleClose = () => {
    router.reload(window.location.pathname)
      setShow(false)
      
      
    };
    const makePayment = async () => {
        //console.log("here...");
        const res = await initializeRazorpay();
    
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
    
        // Make API call to the serverless API

        const data = await fetch("/api/razorpay", 
        {
             method: "POST",
             headers: {
                'Content-Type': 'application/json',
            },
             body: JSON.stringify({
                taxAmt:tAmt
             })
         }
        )
        .then((t) =>
          t.json()
        );
        //console.log(data);
        var options = {
          key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
          name: "Vilage Panchayat",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: "Thankyou for your test donation",
          image: "https://manuarora.in/logo.png",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            const payId=response.razorpay_payment_id;
            setPaymentId(payId)
            Axios.post(`/api/updateTaxPayment`,{ payId:payId,selctionData:selctionData})
            .then(({ data }) => {
                //const tempData=[]
                if(data==0){
                   alert('payment unsucessfull') 
                }else{
                    
                    setShow(true)
                    
                    
                }
                //console.log('update-tax-data',data)
                
                
            })
            //alert(response.razorpay_payment_id);
            //alert(response.razorpay_order_id);
            //alert(response.razorpay_signature);
          },
          prefill: {
            name: "Pradeep Das",
            email: "pradeephellofriend@gmail.com",
            contact: "8249396180",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          // document.body.appendChild(script);
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      }
  return (
      <>
          <div className='tax-payment-box text-center '>


              <Card className='mb-1'>
                  <p className='mb-0'>Total Amount</p>
                  <h3 className='mb-1'>Rs.{tAmt}</h3>
              </Card>

              <Button onClick={makePayment} 
              disabled={tAmt >= 1 ? false : true} 
              className='mt-3' block
              >
                Pay Now
              </Button>
              <span>Testing Payment UPI ID : success@razorpay</span>


          </div>
          <PaymentSuccesModalComponent
          show={show}
          onClick={handleClose}
          onHide={handleClose}
          paymentId={paymentId}
          />
      </>
  )
}

export default MakeTaxPaymentComponent