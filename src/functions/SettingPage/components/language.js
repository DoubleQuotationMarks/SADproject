import { useState } from 'react';
import React from 'react'

function Language({ back }) {
    const [language, setLanguage] = useState('');

    return (
        <div className='div_setting_container'>
            <button className='button_setting_back' onClick={() => back()}>Back</button>
            <h1 className='h1_setting_head'>LANGUAGE</h1>
            <div className='div_setting_box'>
                <select className='select_setting_lu' value={language} onChange={e => setLanguage(e.target.value)}>
                    <option value="">Select your language</option>
                    <option value="English">English</option>
                    <option value="Mandarin">Mandarin</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Franch">Franch</option>
                </select>
            </div>
        </div>
    )
}

export default Language;