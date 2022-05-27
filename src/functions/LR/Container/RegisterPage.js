import React from 'react'
import { Flex, WingBlank } from 'antd-mobile'
import { Button } from 'antd-mobile'
import Register from '../Component/Register'
import './Container.css'

const RegisterPage = ( { setUserID, setPassword, setName, Gender, setGender, setEmail, setPhone, Birthday, setBirthday, setWeight, setHeight, setRP, setRC, setLR } ) => {

    return (
        <div className='background' >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='login_register'>
                <Register setUserID={setUserID} setPassword={setPassword} setName={setName} Gender={Gender} setGender={setGender} setEmail={setEmail} setPhone={setPhone} Birthday={Birthday} setBirthday={setBirthday} setWeight={setWeight} setHeight={setHeight} />
            </div>
            <div className='login_register_button'>
                <Button onClick={()=>{setRP(false); setRC(true);}}>Finish</Button>
            </div>
            <div className='login_register_button'>
                <Button onClick={()=>{setRP(false); setLR(true);}}>Cancel</Button>
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

export default RegisterPage