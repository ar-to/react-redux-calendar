import { connect } from 'react-redux';
import * as actionsCreators from '../actions/actionCreators';
import Reminder from '../components/Reminder/index';


const mapStateToProps = state => {
  return {
    monthData: state.months.month_data,
    reminders: state.reminders.reminder,
    remindersForMonth: state.reminders.reminder_for_month,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReminder: (reminderObject) => {
      dispatch(actionsCreators.addReminder(reminderObject))
    },
    getReminders: (month) => {
      dispatch(actionsCreators.getReminders(month))
    },
    editReminder: (reminderObject) => {
      dispatch(actionsCreators.editReminder(reminderObject))
    },
    deleteReminder: (event, reminderObject) => {
      dispatch(actionsCreators.deleteReminder(reminderObject))
    }
  }
}

const ReminderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reminder)

export default ReminderContainer