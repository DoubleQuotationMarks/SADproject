import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'//导入的方式跟之前有点变化
import React from 'react';
import './profile.css';
import axios from './api'
import UserProfile from './components/UserProfile';
import BodyInfo from './components/BodyInfo';
import Subscription from './components/Subscription';
import Payment from './components/Payment';
import EditableUserProfile from './components/EditableUserProfile';
import EditableBodyInfo from './components/EditableBodyInfo';
import EditableSubscription from './components/EditableSubscription';
import EditablePayment from './components/EditablePayment';

function App() {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);

    const [page, setPage] = useState('main');
    const [save, setSave] = useState(false);

    let userid = window.location.pathname
    const account = userid.replace('/profile/','')
    console.log(account)
    const home_path = '/home/' + account

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [plan, setPlan] = useState('');
    const [payType, setPayType] = useState('');
    const [payAccount, setPayAccount] = useState('');

    const stored = {name, gender, email, phone, year, month, day, weight, height, plan, payType, payAccount};
    
    useEffect(() => {
        const reloadCount = sessionStorage.getItem('reloadCount');
        if(reloadCount < 1) {
            sessionStorage.setItem('reloadCount', String(reloadCount + 1));
            window.location.reload();
        } else {
            sessionStorage.removeItem('reloadCount');
        }
        loadData()
    }, []);

    async function loadData () {
        const url = '/api/v1/user/info?account=' + account
        console.log('loadData')
        const {
            data: { code, msg, data },
        } = await axios.get(url);
        
        console.log(code, msg, data)
        if (code) {
            const birth = new Date(data.personal_info.Birthday)
            setName(data.name)
            setGender(data.personal_info.Gender)
            setEmail(data.email)
            setPhone(data.personal_info.Phone)
            setYear(birth.getFullYear())
            setMonth(birth.getMonth())
            setDay(birth.getDate())
            setWeight(data.body_info.Weight)
            setHeight(data.body_info.Height)
            setPlan(data.subscription.Plan)
            setPayType(data.payment_method.PayType)
            setPayAccount(data.payment_method.Account)
        }
        else {
            alert("loaded unsuccessfully.")
        }
    }

    function handleBack() {
        setPage('main')
    }

    function handleUserSave(result) {
        console.log("handleUserComplete", result);
        if (result != null) {
            setName(result.name);
            setGender(result.gender);
            setEmail(result.email);
            setPhone(result.phone);
            setYear(parseInt(result.year));
            setMonth(parseInt(result.month));
            setDay(parseInt(result.day));
            setSave(true);
        }
        setPage('main');
    }

    function handleBodySave(result) {
        console.log("handleBodyComplete", result);
        if (result != null) {
            setWeight(parseFloat(result.weight));
            setHeight(parseFloat(result.height));
            setSave(true);
        }     
        setPage('main');
    }

    function handlePlanSave(result) {
        console.log("handlePlanComplete", result);
        if (result != null) {
            setPlan(result.plan);
            setSave(true);
        }
        setPage('main');
    }

    function handlePaySave(result) {
        console.log("handlePayComplete", result);
        if (result != null) {
            setPayType(result.payType);
            setPayAccount(result.payAccount);
            setSave(true);
        }
        setPage('main');
    }

    useEffect(() => {
        if (save) {
            handleSave()
        }
    }, [save]);


    async function handleSave() {
        console.log('saveData')
        const month_edit = month + 1 
        const {
            data: { code, msg, data },
        } = await axios.put('/api/v1/user/info', {
            "account": account,
            "day": day,
            "email": email,
            "gender": gender,
            "height": height,
            "month": month_edit,
            "name": name,
            "pay_type": payType,
            "payment_plan": payAccount,
            "phone": phone,
            "plan": plan,
            "weight": weight,
            "year": year
            })
        
        console.log(code, msg, data)
        if (code) {
        }
        else {
            alert("saved unsuccessfully.")
        }
        setSave(false)
    }

    return (
        page === 'main' ?
            <div className="div_profile_container">
                <Link to={home_path}>
                    <button className='button_profile_back'>Back</button>
                </Link>
                <h1 className='h1_profile_head'>USER</h1>
                <div className='div_profile_box'>
                    <h1 className='h1_profile_title'>PERSONAL INFORMATION</h1>
                    <button
                        className='button_profile_edit'
                        onClick={() => setPage('user')}
                    >EDIT</button>
                    <div className="div_profile_App">  
                        <UserProfile stored={stored} />          
                    </div>
                </div>
                <div className='div_profile_box'>
                    <h1 className='h1_profile_title'>BODY INFORMATION</h1>
                    <button
                        className='button_profile_edit'
                        onClick={() => setPage('body')}
                    >EDIT</button>
                    <div className="div_profile_App">  
                        <BodyInfo stored={stored} />        
                    </div>
                </div>
                <div className='div_profile_box'>
                    <h1 className='h1_profile_title'>SUBSCRIPTION</h1>
                    <button
                        className='button_profile_edit'
                        onClick={() => setPage('subscription')}
                    >EDIT</button>
                    <div className="div_profile_App">  
                        <Subscription stored={stored} />         
                    </div>
                </div>
                <div className='div_profile_box'>
                    <h1 className='h1_profile_title'>PAYMENT</h1>
                        <button
                            className='button_profile_edit'
                            onClick={() => {setPage('pay')}}
                        >EDIT</button>
                    <div className="div_profile_App">  
                        <Payment stored={stored} />
                    </div>
                </div>
            </div>
        : page === 'user' ?
        <EditableUserProfile stored={stored} back={handleBack} save={handleUserSave} />
        : page === 'body' ?
        <EditableBodyInfo stored={stored} back={handleBack} save={handleBodySave} />
        : page === 'subscription' ?
        <EditableSubscription stored={stored} back={handleBack} save={handlePlanSave} />
        : page === 'pay' ?
        <EditablePayment stored={stored} back={handleBack} save={handlePaySave} />
        : <EditablePayment stored={stored} back={handleBack} save={handlePaySave} />
    );
}

export default App;
