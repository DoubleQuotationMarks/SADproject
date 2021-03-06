import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}

const RegisterCheck = ({ userID, password, Birthday, Email, Gender, Height, Name, Phone, Weight, setRegisterStr }) => {
  var year = Birthday.getFullYear();
  var month = pad(Birthday.getMonth()+1);//js從0開始取
  var date = pad(Birthday.getDate());

  var datetime = year + '/' + month + '/' + date;

  var gender = Gender.toString();

  useEffect(() => {
    axios.post('https://sadbackend-cyt.herokuapp.com/api/v1/user/signup', {         
    "account": userID,
    "birthday": datetime,
    "email": Email,
    "gender": gender,
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
