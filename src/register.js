import React from 'react'
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import Image from './banner.jpg'
import './register.css'

function Register() {
    const navigate = useNavigate()
    function Reg(values) {
        localStorage.setItem('user', JSON.stringify(values))
        alert("Register Sucessful")
            navigate('/login')
    }
    return (
        <div id='reg_main_content'>
            <div id='cre_acc'>
                <Form onFinish={Reg} layout='vertical' id='form'>
                    <center><h3>Create An Account</h3></center>
                    <br></br>
                    <Form.Item label="Full Name" name='name'>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="Email" name='email'>
                        <Input type='email'></Input>
                    </Form.Item>
                    <Form.Item label="Password" name='pass'>
                        <Input type='password'></Input>
                    </Form.Item>
                    <br></br>
                    <Form.Item>
                        <Button htmlType='submit' id='btn'>Register</Button>
                    </Form.Item>
                </Form>
            </div>
            <div>
                <img src={Image} id='img' />
            </div>
        </div>
    )
}

export default Register