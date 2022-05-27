import React from 'react';
import { useState } from 'react';
import Login_Register from '../Container/Login_Register';
import Account_Checked from '../Container/AccountChecked';
import RegisterPage from '../Container/RegisterPage';
import Register_Checked from '../Container/Register_Checked';


const LRPage = () => {

  const [UserID, setUserID] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [Gender, setGender] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Birthday, setBirthday] = useState('');
  const [Weight, setWeight] = useState('');
  const [Height, setHeight] = useState('');
  const [Role, setRole] = useState('client');


  const [LR, setLR] = useState(true);
  const [AC, setAC] = useState(false);
  const [RP, setRP] = useState(false);
  const [RC, setRC] = useState(false);

  return (
    <div>
      {LR?
      <Login_Register setUserID={setUserID} setPassword={setPassword} setLR={setLR} setAC={setAC} setRP={setRP} setRole={setRole} />:<div></div>}
      {AC?
      <Account_Checked userID={UserID} password={Password} setAC={setAC} setLR={setLR} Role={Role} />:<div></div>}
      {RP?
      <RegisterPage setUserID={setUserID} setPassword={setPassword} setName={setName} Gender={Gender} setGender={setGender} setEmail={setEmail} setPhone={setPhone} Birthday={Birthday} setBirthday={setBirthday} setWeight={setWeight} setHeight={setHeight} setRP={setRP} setRC={setRC} setLR={setLR} />:<div></div>}
      {RC?
      <Register_Checked userID={UserID} password={Password} Birthday={Birthday} Email={Email} Gender={Gender} Height={Height} Name={Name} Phone={Phone} Weight={Weight} setRC={setRC} setLR={setLR} setRP={setRP} />:<div></div>}
    </div>
  )
}

export default LRPage;
