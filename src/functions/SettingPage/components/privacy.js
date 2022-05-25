import { useState } from 'react';
import React from 'react';
import { Switch } from 'antd';

function Privacy({ back }) {

    return (
        <div className='div_setting_container'>
            <button className='button_setting_back' onClick={() => back()}>Back</button>
            <h1 className='h1_setting_head'>PRIVACY</h1>
            <div className='div_setting_box'>
                <p className='p_setting_subsub'>Personalized Advertising</p>
                <Switch className='toggle_setting_lu' />
                <hr />
                <p className='p_setting_subsub'>Data Analytics</p>
                <Switch className='toggle_setting_lu' />
                <hr />
                <p className='p_setting_subsub'>Share Your Location & Activity</p>
                <Switch className='toggle_setting_lu' />
                <hr />
            </div>
        </div>
    )
}

export default Privacy;