import { useState } from 'react';
import React from 'react';
import Group from './Group';

export default function BodyInfo({
    stored,
}) {

    console.log()

    return <div>
        <Group>
            <h2 style={{float:'left'}}>WEIGHT (KG)</h2> <span>{stored.weight}</span>
        </Group>
        <Group>
            <h2 style={{float:'left'}}>HEIGHT (CM)</h2> <span>{stored.height}</span>
        </Group>
    </div>
}