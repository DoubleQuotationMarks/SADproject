import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

const RegisterCheck = ({ userID, password, Birthday, Email, Gender, Height, Name, Phone, Weight, setRegisterStr }) => {


  useEffect(() => {
    axios.post('https://sadbackend-cyt.herokuapp.com/api/v1/user/signup', {         //某種function，傳入使用者帳密進入資料庫中，並確認是否有重複使用者ID(假設回傳一個字串)
    "account": userID,
    "birthday": Birthday,
    "email": Email,
    "gender": Gender,
    "height": Number(Height),
    "name": Name,
    "password": password,
    "phone": Phone,
    "weight": Number(Weight)
    })
    .then((res) => { 
      console.log(res)
      setRegisterStr(res.data.msg)
    })
    .catch((error) => { console.log(error) })
  },[])

  return (
    <div></div>
  )
}

export default RegisterCheck