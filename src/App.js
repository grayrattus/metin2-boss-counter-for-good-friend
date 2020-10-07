import React from 'react';
import { BossComponent } from './components/boss-component/BossComponent'
import { TimerComponent } from './components/timer-component/TimerComponent';
import moment from 'moment';

export class App extends React.Component {
  state = { currentTime: moment() };

  serverRestartTime = moment('2020-10-05 7:30', 'YYYY-MM-DD h:m');
  bosses = [
    {
      name: 'Boss 20 min',
      interval: 20,
      previousDateOfInvoke: moment(this.serverRestartTime)
    },
    {
      name: 'Boss 25 min',
      interval: 25,
      previousDateOfInvoke: moment(this.serverRestartTime)
    },
    {
      name: 'Boss 30 min',
      interval: 30,
      previousDateOfInvoke: moment(this.serverRestartTime)
    },
    {
      name: 'Boss 35 min',
      interval: 35,
      previousDateOfInvoke: moment(this.serverRestartTime)
    },
    {
      name: 'Boss 120 min',
      interval: 120,
      previousDateOfInvoke: moment(this.serverRestartTime)
    },
    {
      name: 'Boss 180 min',
      interval: 180,
      previousDateOfInvoke: moment(this.serverRestartTime)
    },
    {
      name: 'Boss 360 min',
      interval: 360,
      previousDateOfInvoke: moment(this.serverRestartTime)
    },
    {
      name: 'Boss 480 min',
      interval: 480,
      previousDateOfInvoke: moment(this.serverRestartTime)
    }
  ];

  timer = setInterval(() => {
    this.setState({ currentTime: moment() });
    this.bosses.forEach((boss) => {
      for (; ;) {
        if (boss.previousDateOfInvoke.diff(this.state.currentTime) >= 0) {
          boss.previousDateOfInvoke.subtract(boss.interval, 'm');
          break;
        }
        boss.previousDateOfInvoke.add(boss.interval, 'm');
      }
    });
  }, 1000);

  render() {
    return <div className="App">
      <TimerComponent timeToDisplay={this.state.currentTime} />
      {this.bosses.map((boss) => <BossComponent
        currentTime={this.state.currentTime}
        boss={boss}
      />)}
    </div>
  };
}
