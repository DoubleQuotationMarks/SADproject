import { useState } from 'react';
import React from 'react';
import Group from './Group';

export default function Subscription({
    stored,
}) {

    console.log()

    return <div>
        <Group>
            <span>{stored.plan}</span>
        </Group>
    </div>
}