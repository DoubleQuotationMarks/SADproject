import { useState } from 'react';
import React from 'react';
import Group from './Group';
import { months, calcButtonTextColor } from '../tools';

export default function UserProfile({
    stored
}) {

    console.log()

    return <div>
        <Group>
            <h2 style={{float:'left'}} >NAME</h2> <span>{stored.name}</span>
        </Group>
        <Group>
            <h2 style={{float:'left'}}>GENDER</h2> <span>{stored.gender}</span>
        </Group>
        <Group>
            <h2 style={{float:'left'}}>EMAIL</h2> <span>{stored.email}</span>
        </Group>
        <Group>
            <h2 style={{float:'left'}}>PHONE</h2> <span>{stored.phone}</span>
        </Group>
        <Group>
            <h2 style={{float:'left'}}>BIRTHDAY</h2> <span>{stored.year} {months.getShortName(stored.month)} {stored.day}</span>
        </Group>
    </div>
}