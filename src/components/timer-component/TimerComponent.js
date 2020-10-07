import React from 'react';

export function TimerComponent(props) {
    return (
        <div>Timer component: {props.timeToDisplay.toString()}</div>
    );
}
