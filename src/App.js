import React, { Component } from 'react';
import Calendar from './containers/CalendarContainer';
import ReactGA from 'react-ga';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-135002757-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}

export default App;
