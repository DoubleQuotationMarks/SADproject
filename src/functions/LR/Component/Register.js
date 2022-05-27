import { useEffect, useState } from 'react';
import { InputItem, List, Picker, DatePicker } from 'antd-mobile';
import React from 'react'

/*const gender = [
    [
      {
        label: 'male',
        value: 'male',
      },
      {
        label: 'female',
        value: 'female',
      },
    ],
]*/

const Register = ({ setUserID, setPassword, setName, Gender, setGender, setEmail, setPhone, Birthday, setBirthday, setWeight, setHeight }) => {
    
      const onChangeID = (value) => {
        console.log(`selected ${value}`);
        setUserID(value)
      }
      const onChangePwd = (value) => {
        console.log(`selected ${value}`);
        setPassword(value)
      }
      const onChangeName = (value) => {
        console.log(`selected ${value}`);
        setName(value)
      }
      const onChangeGender = (value) => {
        console.log(`selected ${value}`);
        setGender(value)
      }
      const onChangeEmail = (value) => {
        console.log(`selected ${value}`);
        setEmail(value)
      }
      const onChangePhone = (value) => {
        console.log(`selected ${value}`);
        setPhone(value)
      }
      const onChangeBday = (value) => {
        console.log(`selected ${value}`);
        setBirthday(value)
      }
      const onChangeWeight = (value) => {
        console.log(`selected ${value}`);
        setWeight(value)
      }
      const onChangeHeight = (value) => {
        console.log(`selected ${value}`);
        setHeight(value)
      }

      const gender = [
        [
          {
            label: 'male',
            value: 'male',
          },
          {
            label: 'female',
            value: 'female',
          },
        ],
      ]


      return(


        <div>
          <InputItem placeholder="請輸入帳號"
                 onChange = {onChangeID} >
          Account
          </InputItem>
          <InputItem placeholder="請輸入密碼"
                 type='password'
                 onChange = {onChangePwd} >
          Password
          </InputItem>
          <InputItem placeholder="請輸入名字"
                 onChange = {onChangeName} >
          Name
          </InputItem>
          <List>
            <Picker
              onChange={onChangeGender}
              value={Gender}
              data={gender}
              cascade={false}
            >
              <List.Item >Gender</List.Item>
            </Picker>
          </List>
          <InputItem placeholder="請輸入Email"
                 onChange = {onChangeEmail} >
          Email
          </InputItem>
          <InputItem placeholder="請輸入電話"
                 onChange = {onChangePhone} >
          Phone
          </InputItem>
          <List>
            <DatePicker
              mode="date"
              value={Birthday}
              defaultDate={new Date()}
              minDate={new Date(1950, 1, 1)}
              maxDate={new Date(2022, 1, 1)}
              onChange={onChangeBday}
              format="YYYY-MM-DD">
              <List.Item arrow="horizontal">Birthday</List.Item>
            </DatePicker>
          </List>
          <InputItem placeholder="請輸入體重"
                 onChange = {onChangeWeight} >
          Weight
          </InputItem>
          <InputItem placeholder="請輸入身高"
                 onChange = {onChangeHeight} >
          Height
          </InputItem>
        </div>
      );

}

export default Register;