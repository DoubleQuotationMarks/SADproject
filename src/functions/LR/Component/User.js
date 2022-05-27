//import axios from 'axios';
import { useEffect, useState } from 'react';
import { InputItem, List } from 'antd-mobile';
import React from 'react'

const User = ({ setUserID, setPassword }) => {
    
      const onChangeID = (value) => {
        console.log(`selected ${value}`);
        setUserID(value)
      }
      const onChangePwd = (value) => {
        console.log(`selected ${value}`);
        setPassword(value)
      }
      
      return(
        <div>
          <InputItem placeholder="Account"
                     onChange = {onChangeID} >
          帳號
          </InputItem>
          <InputItem placeholder="Password"
                     type="password"
                     onChange = {onChangePwd} >
          密碼
          </InputItem>
        </div>
      );

}

export default User;