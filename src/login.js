import React from 'react'
import { Form, Input, Button } from 'antd'
import Image from './banner.jpg'
import { Link } from 'react-router-dom'

function login() {
    function Log(values){
        const Data=JSON.parse(localStorage.getItem('user'))
        if(Data.email===values.email && Data.pass===values.pass){
            alert("Login Sucess")
            localStorage.setItem('logedin',true)
        }
        else{
            alert("Email or Password Incorrect")
        }
        }
    return (
        <div id='reg_main_content'>
            <div>
                <img src={Image} id='img' />
            </div>
            <div id='cre_acc'>
                <Form onFinish={Log} layout='vertical' id='form'>
                    <center><h3>Login</h3></center>
                    <br></br>
                    <Form.Item label="Email" name='email'>
                        <Input type='email'></Input>
                    </Form.Item>
                    <Form.Item label="Password" name='pass'>
                        <Input type='password'></Input>
                    </Form.Item>
                    <br></br>
                    <Form.Item>
                        <Button htmlType='submit' id='btn'>Login</Button>
                    </Form.Item>
                    <center><p>Don't have account? <Link to='/register'>Click here</Link></p></center>
                </Form>
                
            </div>
        </div>
    )
}

export default login