import { useState } from 'react';
import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import phone from './telephone.png'
import email from './email.png'

function Contact({ back }) {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
        }
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <div className='div_setting_container'>
            <button className='button_setting_back' onClick={() => back()}>Back</button>
            <h1 className='h1_setting_head'>CONTACT US</h1>
            <div className='div_setting_box'>
                <span className='span_setting_icon'>
                    <img src={phone} className='img_setting_icon' />
                    <p className='p_setting_icon'>(02) 2737 2903</p>
                    <img src={email} className='img_setting_icon' />
                    <p className='p_setting_icon'>gym@gmail.com</p>
                </span>
                <Form className='form_setting_lu' size='small' {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item style={{marginBottom: "3vh"}} name={['user', 'name']} label={<p style={{fontSize: "4vw", marginTop: '1.2vh'}}>Name</p>} rules={[{ required: true }]}>
                        <Input style={{height: "2.7vh"}} />
                    </Form.Item>
                    <Form.Item style={{marginBottom: "3vh"}} name={['user', 'email']} label={<p style={{fontSize: "4vw", marginTop: '1.2vh'}}>Email</p>} rules={[{ type: 'email', required: true }]}>
                        <Input style={{height: "2.7vh"}} />
                    </Form.Item>
                    <Form.Item style={{marginBottom: "3vh"}} name={['user', 'message']} label={<p style={{fontSize: "4vw", marginTop: '1.2vh'}}>Message</p>} rules={[{ required: true }]}>
                        <Input.TextArea style={{height: "5vh"}} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
                        <Button type="primary" htmlType="submit" size="small" shape='round' style={{ background: "#DE5D4D" , borderColor: '#DE5D4D', height: "3vh"}}>
                        <p style={{fontSize: "3.5vw"}}>Send Message</p>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Contact;