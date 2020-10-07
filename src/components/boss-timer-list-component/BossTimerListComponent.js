import React from 'react';

export function BossTimerListComponent(props) {
    return (
        <ol>
            {props.timeTables.map((value) => <li>{value.toString()}</li>)}
        </ol>
    );
}
