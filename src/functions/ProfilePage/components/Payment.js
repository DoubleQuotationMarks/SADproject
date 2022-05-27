import { useState } from 'react';
import React from 'react';
import visa from './visa.png'
import mastercard from './mastercard.png'
import Group from './Group';

export default function Payment({
    stored,
}) {

    console.log()

    return <div>
        <Group>
            {
                stored.payType === 'Visa' ?
                <img src={visa} className='img_profile_pay' alt='visa' />
                : <img src={mastercard} className='img_profile_pay' alt='mastercard' />
            }
            <span>{stored.payAccount}</span>
        </Group>
    </div>
}