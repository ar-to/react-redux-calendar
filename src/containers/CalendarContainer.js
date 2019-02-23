import { connect } from 'react-redux';
import * as actionsCreators from '../actions/actionCreators'; 
import Calendar from '../components/Calendar';


const mapStateToProps = state => {
  return {
    months: state.months,
    reminders: state.reminders,
    currentMonthIndex: state.months.current_month,
    monthData: state.months.month_data,
    weekDays: state.months.week_days, 
    monthStartDay: state.months.month_data.monthStartDay,
    remindersForMonth: state.reminders.reminder_for_month,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPrevMonth: (event, index) => {
      dispatch(actionsCreators.prevMonth(index))
    },
    getNextMonth: (event, index) => {
      dispatch(actionsCreators.nextMonth(index))
    },
    getReminders: (monthIndex) => {
      dispatch(actionsCreators.getReminders(monthIndex))
    },
  }
}

const mergeProps = (mapStateToProps, mapDispatchToProps, ownProps) => {
  return {
    ...mapStateToProps,  // optional
    ...mapDispatchToProps,  // optional
    getPrevMonthOnClick: (event) => (
      mapDispatchToProps.getPrevMonth(
        event,
        mapStateToProps.currentMonthIndex  // <<< here the magic happens
      )
    ),
    getNextMonthOnClick: (event) => (
      mapDispatchToProps.getNextMonth(
        event,
        mapStateToProps.currentMonthIndex  // <<< here the magic happens
      )
    ),
    fetchRemindersPerMonth: () => (
      mapDispatchToProps.getReminders(
        mapStateToProps.currentMonthIndex  // <<< here the magic happens
      )
    ),
  }
}

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Calendar)

export default CalendarContainer