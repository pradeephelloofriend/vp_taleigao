import React from "react";
import { Form, Input, Button, Select, Spin, Row, Col, Upload } from "antd";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";

import { Card } from "antd";
import img1 from "../../public/img/complain/dt.jpg";
import img2 from "../../public/img/complain/Dw.jpg";
import img3 from "../../public/img/complain/Dwaste.jpg";

import Image from "next/image";
import { getComplainCategoryData } from "../../lib/api";
const { TextArea } = Input;
const { Item } = Form;
const ComplainsComponent = () => {
  const [cData, setCdata] = React.useState(null);
  const [form] = Form.useForm();
  const { getFieldDecorator } = form;
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    let isAppSubscribed = true;

    if (isAppSubscribed) {
      async function fetchData() {
        const data = await getComplainCategoryData();
        setCdata(data);
        setIsLoading(false);
        console.log("complain-cat", data);
      }
      try {
        setIsLoading(true);
        fetchData();
      } catch (error) {
        setIsLoading(false);
      }
    }

    return () => {
      isAppSubscribed = false;
    };
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col span={24}>
        <div className="bg-light-pch" style={{ padding: "20px" }}>
          <Row justify="center" align="middle">
            <Col xs={24} sm={12} lg={8}>
              {/* Images */}
              <Row gutter={[16, 16]} justify="center">
                <Col span={24}>
                  <Card
                    hoverable
                    style={{ width: "100%", height: "200px" }}
                    cover={<Image alt="example" src={img1} />}
                  ></Card>
                </Col>
                <Col span={24}>
                  <Card
                    hoverable
                    style={{ width: "100%", height: "200px" }}
                    cover={<Image alt="example" src={img2} />}
                  ></Card>
                </Col>
                <Col span={24}>
                  <Card
                    hoverable
                    style={{ width: "100%", height: "200px" }}
                    cover={<Image alt="example" src={img3} />}
                  ></Card>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={12} lg={16}>
              {/* Form */}
              <div className="container" style={{ maxWidth: "800px" }}>
                <h2 style={{ textAlign: "center" }}>
                  Register your Complaint here!
                </h2>
                <div style={{ marginBottom: "20px" }}>
                  <Spin spinning={isLoading}>
                    <Form
                      name="basic"
                      form={form}
                      labelCol={{ span: 6 }}
                      wrapperCol={{ span: 18 }}
                      layout="vertical"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        label="Complaint Types"
                        name="complainTypes"
                        rules={[
                          {
                            required: true,
                            message: "Please select Complaint types",
                          },
                        ]}
                      >
                        <Select placeholder="Select">
                          {cData !== null ? (
                            cData.map((d, idx) => (
                              <Select.Option key={idx} value={d.name}>
                                {d.name}
                              </Select.Option>
                            ))
                          ) : (
                            <></>
                          )}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            required: true,
                            type: "email",
                            message: "Please input your Email ID!",
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
                            message: "Please input your Phone No.!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Subject"
                        name="subject"
                        rules={[
                          {
                            required: true,
                            message: "Please enter subject",
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
                            message: "Please input your Message!",
                          },
                        ]}
                      >
                        <TextArea
                          showCount
                          maxLength={350}
                          autoSize={{ minRows: 3, maxRows: 6 }}
                        />
                      </Form.Item>
                      <Form.Item
                        wrapperCol={{ offset: 6, span: 18 }}
                        style={{ display: "flex" }}
                      >
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                        <Item label="" name="upload">
                          <Upload>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                            <div>
                              <Button
                                icon={<PlusOutlined />}
                                className="ant-upload-text"
                              >
                                Add
                              </Button>
                            </div>
                          </Upload>
                        </Item>
                      </Form.Item>
                    </Form>
                  </Spin>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default ComplainsComponent;
