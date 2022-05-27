import { Switch } from 'antd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化
import axios from './api'
import React from 'react';
import { useState, useEffect } from 'react';
import man from './man.png';
import woman from './woman.png';
import './setting.css';
import Notification from './components/notification';
import Privacy from './components/privacy';
import Language from './components/language';
import Contact from './components/contact';

function App() {
    let userid = window.location.pathname
    const account = userid.replace('/setting/','')
    console.log(account)
    const home_path = '/home/' + account

    const [name, setName] = useState('');
    const [gender, setGender] = useState('')
    const [page, setPage] = useState('main');

    useEffect(() => {
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
            setName(data.name)
            setGender(data.personal_info.Gender)
        }
        else {
            alert("loaded unsuccessfully.")
        }
    }


    function handleBack() {
        setPage('main')
    }

    return (
        page === 'main' ?
            <div className='div_setting_container'>
                <Link to={home_path}>
                    <button className='button_setting_back'>Back</button>
                </Link>
                <h1 className='h1_setting_head'>SETTING</h1>
                <div className='div_setting_box'>
                    {
                        gender === 'male' ?
                        <img src={man} className='img_setting_head' alt="male head icon" />
                        : <img src={woman} className='img_setting_head' alt="female head icon" />
                    }
                    <h1 className='h1_setting_name'>{name}</h1>
                    <p className='p_setting_sub-title'>General</p>
                    <p className='p_setting_subsub'>Dark Mode</p>
                    <Switch className='toggle_setting_lu' />
                    <hr />
                    <p className='p_setting_subsub'>Notifications</p>
                    <button className='button_setting_arrow' onClick={() => setPage('notification')}>></button>
                    <hr />
                    <p className='p_setting_subsub'>Privacy</p>
                    <button className='button_setting_arrow' onClick={() => setPage('privacy')}>></button>
                    <hr className='hr_setting_jump' />
                    <p className='p_setting_sub-title'>Other</p>
                    <p className='p_setting_subsub'>Language</p>
                    <button className='button_setting_arrow' onClick={() => setPage('language')}>></button>
                    <hr />
                    <p className='p_setting_subsub'>Contact Us</p>
                    <button className='button_setting_arrow' onClick={() => setPage('contact')}>></button>
                    <hr />
                    <button className='button_setting_logout'>Log Out</button>
                </div>
            </div>
        : page === 'notification' ?
        <Notification back={handleBack} />
        : page === 'privacy' ?
        <Privacy back={handleBack} />
        : page === 'language' ?
        <Language back={handleBack} />
        : page === 'contact' ?
        <Contact back={handleBack} />
        : <Contact back={handleBack} />
    );
}

export default App;
