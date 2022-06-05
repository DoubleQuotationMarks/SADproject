import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

const LoginCheck = ({ userID, password, setLoginStr, Role }) => {

  useEffect(() => {
    axios.post('https://sadbackend-cyt.herokuapp.com/api/v1/user/login', {         
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