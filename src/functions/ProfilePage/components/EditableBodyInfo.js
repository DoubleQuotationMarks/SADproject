import { useState, useEffect } from 'react';
import React from 'react';
import Group from './Group';

export default function EditableBodyInfo({
    stored,
    back,
    save
}) {

    console.log("Edit Body Info");

    const [weight, setWeight] = useState(stored.weight);
    const [height, setHeight] = useState(stored.height);

    function handleSaveClicked() {
        console.log("Saved");
        save({weight, height});
    }

    return (
        <React.Fragment>
        <div className='div_profile_edit-container'>
            <button className='button_profile_back' onClick={() => back()}>Back</button>
            <h1 className='h1_profile_sub-head'>BODY INFORMATION</h1>
            <div className='div_profile_App'>
                <Group>            
                    <h2 style={{float:'left'}}>WEIGHT (KG)</h2>
                    <input
                        className='input_profile_lu'
                        type='number'
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                    />            
                </Group>
                <Group>            
                    <h2 style={{float:'left'}}>HEIGHT (CM)</h2>
                    <input
                        className='input_profile_lu'
                        type='number'
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                    />            
                </Group>
            </div>
        </div>
        <button className='button_profile_sc1' onClick={handleSaveClicked}>SAVE</button>
        </React.Fragment>
    )
}