import React from 'react';
import { BossTimerListComponent } from '../boss-timer-list-component/BossTimerListComponent';
import moment from 'moment';

export function BossComponent(props) {
    const timeTables = [
        moment(props.boss.previousDateOfInvoke).add(props.boss.interval, 'm'),
        moment(props.boss.previousDateOfInvoke).add(props.boss.interval * 2, 'm'),
        moment(props.boss.previousDateOfInvoke).add(props.boss.interval * 3, 'm')];

    return (
        <div>
            <h2>{props.boss.name}</h2>
            <BossTimerListComponent timeTables={timeTables} />
        </div>
    );
}
