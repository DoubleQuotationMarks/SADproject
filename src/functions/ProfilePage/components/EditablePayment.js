import { useState, useEffect } from 'react';
import React from 'react';
import Group from './Group';

export default function EditablePayment({
    stored,
    back,
    save
}) {

    console.log("Edit Payment");

    const [payType, setPayType] = useState(stored.payType);
    const [payAccount, setPayAccount] = useState(stored.payAccount);

    function handleSaveClicked() {
        console.log("Saved");
        save({payType, payAccount});
    }

    return (
        <React.Fragment>
        <div className="div_profile_edit-container">
            <button className='button_profile_back' onClick={() => back()}>Back</button>
            <h1 className='h1_profile_sub-head'>PAYMENT</h1>
            <div className='div_profile_App'>
                <Group>            
                    <select className='select_profile_lu' value={payType} onChange={e => setPayType(e.target.value)}>
                        <option value="">Select your card type</option>
                        <option value="Visa">Visa</option>
                        <option value="Mastercard">Mastercard</option>
                    </select>          
                </Group>
                <Group>            
                    <input
                        className='input_profile_lu'
                        type='text'
                        value={payAccount}
                        onChange={e => setPayAccount(e.target.value)}
                    />            
                </Group>
            </div>
        </div>
        <button className='button_profile_sc1' onClick={handleSaveClicked}>SAVE</button>
        </React.Fragment>
    )
}