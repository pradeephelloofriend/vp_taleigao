import React from 'react'
import { Form, Input, Button, Checkbox,message,Select, Spin } from 'antd';
import Axios from 'axios';
import { getComplainCategoryData } from '../../lib/api';
const { TextArea } = Input;
const ComplainsComponent = () => {
    const[cData,setCdata]=React.useState(null)
    const [form] = Form.useForm();
    const { getFieldDecorator } =form;
    const[isLoading,setIsLoading]=React.useState(false)
    React.useEffect(()=>{
        let isAppSubscribed=true
        

        if (isAppSubscribed) {
            async function fetchData(){
                const data= await getComplainCategoryData();
                setCdata(data)
                setIsLoading(false)
                console.log('complain-cat',data)
            }
            try {
                setIsLoading(true)
                fetchData()
            } catch (error) {
                setIsLoading(false)
            }
            
        }

        return()=>{
            isAppSubscribed=false
        }

    },[])
    const onFinish = (values) => {
        const dataTemp={
            cat:values.complainTypes,
            email:values.email,
            contact:values.contact,
            subject:values.subject,
            msg:values.message
        }
        console.log('values-data',dataTemp)
        try {
            setIsLoading(true)
            Axios.post(`/api/complain/addNewComplain/`,{dataTemp})
            .then(({ data }) => {
                form.resetFields()
                setIsLoading(false)
                message.success({
                    content: 'Your message Has been send successfully',
                    className: 'custom-class',
                    style: {
                      marginTop: '40vh',
                    },
                  });
                console.log('api-taxi-data',data)
                
            })
            
        } catch (error) {
            setIsLoading(false)
        }
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      }
  return (
    <div className="bg-light-pch">
    <div className="container py-10 py-md-10 pb-md-10">
        <h2>Register your Complain here!</h2>
      <div className="cm-pb-2">
        <Spin spinning={isLoading}>
          <Form
              name="basic"
              form={form}
              labelCol={{
                  span: 6,
              }}
              wrapperCol={{
                  span: 20,
              }}
              layout="vertical"
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
          >
              <Form.Item label="Complain Types"
                  name="complainTypes"
                  rules={[
                      {
                          required: true,
                          message: 'Please select Complain types',
                      },
                  ]}
              >

                  <Select placeholder="Select">
                      {cData !== null ? cData.map((d, idx) =>
                          <Select.Option key={idx} value={d.name}>{d.name}</Select.Option>
                      ) : <></>}

                  </Select>
              </Form.Item>
              <Form.Item
              
                  label="Email"
                  name="email"
                  
                  rules={[
                      {
                          required: true,
                          type:"email",
                          message: 'Please input your Email-id!',
                      },
                  ]}
              >

                  <Input />
              </Form.Item>
              <Form.Item
                  label="Contact Number"
                  name="contact"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your Phone NO.!',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              <Form.Item
                  label="Subject"
                  placeholder="Subject"
                  name="subject"
                  rules={[
                      {
                          required: true,
                          message: 'Please enter subject',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>


              <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your Message!',
                      },
                  ]}
              >
                  <TextArea showCount maxLength={350} autoSize={{ minRows: 3, maxRows: 6 }} />
              </Form.Item>


              <Form.Item
                  wrapperCol={{
                      offset: 6,
                      span: 16,
                  }}
              >
                  <Button type="primary" htmlType="submit"  >

                      Submit

                  </Button>


              </Form.Item>
          </Form>
          </Spin>
      </div>
    </div>
    </div>
  )
}

export default ComplainsComponent