import { useState, useEffect } from 'react';
import React from 'react';
import Group from './Group';

export default function EditableSubscription({
    stored,
    back,
    save
}) {

    console.log("Edit Subscription");

    const [plan, setPlan] = useState(stored.plan);

    function handleSaveClicked() {
        console.log("Saved");
        save({plan});
    }

    return (
        <React.Fragment>
        <div className='div_profile_edit-container'>
            <button className='button_profile_back' onClick={() => back()}>Back</button>
            <h1 className='h1_profile_sub-head'>SUBSCRIPTION</h1>
            <h1 className='h1_profile_sub-title'>SELECT YOUR PLAN</h1>
            <div className='div_profile_App'>
                <Group>            
                    <select className='select_profile_lu' value={plan} style={{width: "60vw"}} onChange={e => setPlan(e.target.value)}>
                        <option value="">Select your subscription plan</option>
                        <option value="Basic Plan">Basic Plan</option>
                        <option value="Standard Plan">Standard Plan $4.99/mo</option>
                        <option value="Premium Plan">Premium Plan $12.99/mo</option>
                    </select>          
                </Group>
            </div>
            <h1 className='h1_profile_sub-title'>PLAN DESCRIPTION</h1>
            <div className='div_profile_App'>
                <h2 className='h2_profile_plan'>Basic Plan</h2> 
                <h2 className='h2_profile_price' style={{top: "47vh"}}>Free</h2>         
                <h2 className='h2_profile_detail'>Basic features.</h2>
            </div>
            <div className='div_profile_App'>
                <h2 className='h2_profile_plan'>Standard Plan</h2> 
                <h2 className='h2_profile_price' style={{top: "53vh"}}>$4.99/mo</h2>         
                <h2 className='h2_profile_detail'>Training program suggestion.</h2>
            </div>
            <div className='div_profile_App'>
                <h2 className='h2_profile_plan'>Premium Plan</h2> 
                <h2 className='h2_profile_price' style={{top: "59.5vh"}}>$12.99/mo</h2>         
                <h2 className='h2_profile_detail'>Equipment reservation, training suggestion.</h2>
            </div>
        </div>
        <button className='button_profile_sc1' onClick={handleSaveClicked}>SAVE</button>
        </React.Fragment>
    )
}