import React from 'react'
import Reminder from '../containers/ReminderContainer';
import styled from 'styled-components'
import { CSVLink } from "react-csv";

const Cell = styled.div`
  border: black 1px solid;
`;

export default class CalendarClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remindersForMonth: [],
      downloadWarning: false
    }
  }

  componentDidUpdate = (prevProps) => {
    /**
     * Update warning that backup (download) has not been done
     */
    if (this.props.reminders.reminder.length !== prevProps.reminders.reminder.length) {
      this.setState({
        downloadWarning: true
      })
    }
  }

  showDevJSON = () => {
    if (process.env.NODE_ENV === 'development') {
      return (
        <pre style={{ textAlign: 'left' }}>
          {JSON.stringify(this.props.monthData, null, 2)}
        </pre>
      )
    }
    return null;
  }

  render() {
    return (
      <main className="container">
        <h1>Calendar</h1>
        <h2>{`${this.props.monthData.month}, ${this.props.monthData.year}`}</h2>
        <CSVLink
          data={this.props.reminders.reminder}
          filename={"reminders.csv"}
          className="btn btn-dark"
          target="_blank"
          onClick={() => {
            this.setState({
              downloadWarning: false
            })
          }}
        >
          reminders.cvs
        </CSVLink>
        {this.state.downloadWarning ? <p>You have not downloaded your reminders since your last change</p> : null}
        <section className="row">
          <aside className="col-md-4">
            <br />
            <button onClick={this.props.getPrevMonthOnClick}>prev</button>
            <button onClick={this.props.getNextMonthOnClick}>next</button>
            <hr />
            {this.showDevJSON()}
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
                    <div style={day.currentDay ? { color: "red" } : null}>{day.dayNumber}</div>
                    <Reminder daysArray={this.props.monthData.daysArray} dayIndex={index} day={day} remindersForMonth={this.props.remindersForMonth} />
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
