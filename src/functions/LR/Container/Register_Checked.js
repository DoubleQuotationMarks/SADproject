import './Container.css'
import { Space, Button } from 'antd-mobile'
import { useState } from 'react'
import RegisterCheck from '../Component/RegisterCheck';
import React from 'react'

const Register_Checked = ( { userID, password, Birthday, Email, Gender, Height, Name, Phone, Weight, setRC, setLR, setRP } ) => {

    const [registerStr, setRegisterStr] = useState('')

    return (
        <div className='background'>
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
            <RegisterCheck userID={userID} password={password} Birthday={Birthday} Email={Email} Gender={Gender} Height={Height} Name={Name} Phone={Phone} Weight={Weight} setRegisterStr={setRegisterStr} />
            <div className='login_register'>
                {registerStr == 'Ok'?
                <div className='register_success'>
                    <Button onClick={()=>{setRC(false); }} href={'/home/'.concat(userID)}>註冊成功，繼續</Button>
                </div>:
                <div>
                    <Button onClick={()=>{setRC(false); setLR(true);}}>註冊失敗，返回登入頁</Button>
                    <Button onClick={()=>{setRC(false); setRP(true);}}>返回註冊頁</Button>
                </div>}
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

export default Register_Checked