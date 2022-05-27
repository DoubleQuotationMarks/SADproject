import React from 'react'
import { Flex, WhiteSpace, WingBlank } from 'antd-mobile'
import { Button } from 'antd-mobile'
import User from '../Component/User'
import './Container.css'

const Login_Register = ( { setUserID, setPassword, setLR, setAC, setRP, setRole } ) => {

    return (
        <div class = "background" >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='login_register'>Logo</h1>
            <div className='login_register'>
                <Flex>
                    <Flex.Item style={{ paddingLeft: 45, paddingRight: 45 }}>
                        <Button onClick={()=>{setRole('client');}} size='large'>Client</Button>
                    </Flex.Item>
                    <Flex.Item style={{ paddingLeft: 45, paddingRight: 45 }}>
                        <Button onClick={()=>{setRole('staff');}} size='large'>Staff</Button>
                    </Flex.Item>
                </Flex>
            </div>
            <div className='login_register'>
                <User setUserID={setUserID} setPassword={setPassword} />
            </div>
                
            <div className='login_register'>
                <Button onClick={()=>{setLR(false); setAC(true);}} className='login_button'></Button>
            </div>
            <br></br>
            <br></br>
            <div className='login_register'>
                <p>--or--</p>
            </div>
            <div className='login_register'>
                <Button onClick={()=>{setLR(false); setRP(true);}} className='register_button'></Button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )

}

export default Login_Register