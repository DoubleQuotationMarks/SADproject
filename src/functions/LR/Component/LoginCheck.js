import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

const LoginCheck = ({ userID, password, setLoginStr, Role }) => {

  useEffect(() => {
    axios.post('https://sadbackend-cyt.herokuapp.com/api/v1/user/login', {         //某種function，傳入使用者帳密進入資料庫中，並確認是否有重複使用者ID(假設回傳一個字串)
      "account": userID,
      "password": password,
      "user_role": Role
    })
    .then((res) => { 
      console.log(res.data.msg)
      setLoginStr(res.data.msg)
    })
    .catch((error) => { console.log(error) })
  },[])

  return (
    <div></div>
  )
}

export default LoginCheck