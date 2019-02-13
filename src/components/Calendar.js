import React from 'react'
import Reminder from '../containers/ReminderContainer';
import styled from 'styled-components'

const Cell = styled.div`
  border: black 1px solid;
`;

export default class CalendarClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remindersForMonth: []
    }
  }

  componentDidUpdate = () => {
    this.props.fetchRemindersPerMonth();
  }

  render() {
    return (
      <main className="container">
        <h1>Calendar</h1>
        <h2>{this.props.monthData.month}</h2>
        <section className="row">
          <aside className="col-md-4">
            <button onClick={this.props.getPrevMonthOnClick}>prev</button>
            <button onClick={this.props.getNextMonthOnClick}>next</button>
            <br/>
            <pre style={{ textAlign: 'left' }}>
              {JSON.stringify(this.props.monthData, null, 2)}
            </pre>

          </aside>
          <article className="col-md-8">
            {/* <Header/> */}
            <div className="row">
              {this.props.weekDays.map((day, index) => {
                return (
                  <Cell key={index} style={{ width: '14%' }}>
                    <div>{day}</div>
                  </Cell>
                )
              })
              }
            </div>
            {/* <Week/> */}
            <div className="row">
              {this.props.monthData.startArray.map((day, index) => {
                return (
                  <Cell key={index} style={{ width: '14%' }}>
                    <div style={{ visibility: 'hidden' }}>{day}</div>
                  </Cell>
                )
              })
              }
              {this.props.monthData.daysArray.map((day, index) => {
                return (
                  <Cell key={index} style={{ width: '14%' }}>
                    <div>{day.dayNumber}</div>
                    <Reminder daysArray={this.props.monthData.daysArray} dayIndex={index} day={day} remindersForMonth={this.props.remindersForMonth}/>
                  </Cell>
                )
              })
              }
            </div>
          </article>
        </section>
      </main>
    )
  }
}
