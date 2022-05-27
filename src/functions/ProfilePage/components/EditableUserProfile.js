import { useState, useEffect } from 'react';
import React from 'react';
import Group from './Group';
import { months, calcButtonTextColor } from '../tools';

function renderMonthOptions() {
    return months.getMonths().map( (m, i) => {
        return <option
            key={i}
            value={i}
        >
            {m.shortName}
        </option>
    });
}

function bound(value, floor, ceil) {
    return Math.min(ceil, Math.max(value, floor));
}

export default function EditableUserProfile({
    stored,
    back,
    save
}) {

    console.log("Edit User Profile");

    const [name, setName] = useState(stored.name);
    const [gender, setGender] = useState(stored.gender);
    const [email, setEmail] = useState(stored.email);
    const [phone, setPhone] = useState(stored.phone);
    const [year, setYear] = useState(stored.year);
    const [month, setMonth] = useState(stored.month);
    const [day, setDay] = useState(stored.day);

    const maxDay = months.getMaxDays(month);

    function handleSaveClicked() {
        console.log("Saved");
        save({name, gender, email, phone, year, month, day});
    }

    useEffect(() => {
        setDay(bound(day, 1, maxDay));
    }, [month]);

    return (
        <React.Fragment>
        <div className='div_profile_edit-container'>
            <button className='button_profile_back' onClick={() => back()}>Back</button>
            <h1 className='h1_profile_sub-head'>PERSONAL INFORMATION</h1>
            <div className='div_profile_App'>
                <Group>            
                    <h2 style={{float:'left'}}>NAME</h2>
                    <input
                        className='input_profile_lu'
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />            
                </Group>
                <Group>            
                    <h2 style={{float:'left'}}>GENDER</h2>
                    <select className='select_profile_lu' value={gender} onChange={e => setGender(e.target.value)}>
                        <option value="">Select your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>        
                </Group>
                <Group>            
                    <h2 style={{float:'left'}}>EMAIL</h2>
                    <input
                        className='input_profile_lu'
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />            
                </Group>
                <Group>            
                    <h2 style={{float:'left'}}>PHONE</h2>
                    <input
                        className='input_profile_lu'
                        type='text'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />            
                </Group>
                <Group>            
                    <h2 style={{float:'left'}}>BIRTHDAY</h2>            
                    <input
                        className='input_profile_lu'
                        type='number'
                        value={year}
                        onChange={e => setYear(e.target.value)}
                        style={{width: "15vw"}}
                    />
                    <select
                        className='select_profile_lu'
                        value={month}
                        onChange={e => setMonth(bound(e.target.value, 0, 11))}
                        style={{width: "15vw"}}
                    >
                        {renderMonthOptions()}
                    </select>
                    <input
                        className='input_profile_lu'
                        type='number'
                        value={day}
                        onChange={e => setDay(bound(e.target.value, 1, maxDay))}
                        style={{width: "9vw"}}
                    />
                </Group>
            </div>
        </div>
        <button className='button_profile_sc1' onClick={handleSaveClicked}>SAVE</button>
        </React.Fragment>
    )
}