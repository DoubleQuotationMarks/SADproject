import './Container.css'
import { Space, Button } from 'antd-mobile'
import { useState } from 'react'
import LoginCheck from "../Component/LoginCheck";
import React from 'react'

const Account_Checked = ( { userID, password, setAC, setLR, Role } ) => {

    const [loginStr, setLoginStr] = useState('');

    return (
        <div className='background'>
            <LoginCheck userID={userID} password={password} setLoginStr={setLoginStr} Role={Role} />
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
            <div className='Account_Check'>
                {loginStr == 'Ok'?
                <div>
                    {Role == 'client'?
                        <Button onClick={()=>{setAC(false); }} href={'/home/'.concat(userID)} >Login success. Continue.</Button>
                        :<Button onClick={()=>{setAC(false); }} href={'/staff'} >Login success. Continue.</Button>
                    }
                </div>    
                :<Button onClick={()=>{setAC(false); setLR(true);}}>Login failed. Return to login page.</Button>}
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

export default Account_Checked
