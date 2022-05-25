import { useState } from 'react';
import React from 'react';
import { Switch } from 'antd';

function Notification({ back }) {

    return (
        <div className='div_setting_container'>
            <button className='button_setting_back' onClick={() => back()}>Back</button>
            <h1 className='h1_setting_head'>NOTIFICATIONS</h1>
            <div className='div_setting_box'>
                <p className='p_setting_subsub'>Push Notifications</p>
                <Switch className='toggle_setting_lu' />
                <hr />
                <p className='p_setting_subsub'>Reservation Reminder</p>
                <Switch className='toggle_setting_lu' />
                <hr />
                <p className='p_setting_subsub'>Available Reminder</p>
                <Switch className='toggle_setting_lu' />
                <hr />
                <p className='p_setting_subsub'>Daily Recommend</p>
                <Switch className='toggle_setting_lu' />
                <hr />
            </div>
        </div>
    )
}

export default Notification;