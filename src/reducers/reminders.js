import * as actionTypes from '../actions/actionTypes';
import Moment from 'moment';

const INITIAL_STATE = {
  reminder: [],
  reminders_for_month: [],
};

function createReminder(payload) {
  return {
    uuid: payload.id,
    date: payload.date,
    text: payload.text,
    dayIndex: payload.arrayIndex,
    reminderColor: payload.reminderColor
  }
}

function fetchReminder(state, payload) {
  let newO = {};
  state.reminder.find((reminder, index) => {
    if (reminder.uuid === payload.id) {
      newO = Object.assign({}, reminder, { index: index });
      return newO;
    }
    return null;
  })
  return newO;
}

function fetchReminderPerMonth(state, month) {
 let array = [];
  state.reminder.find((reminder, index) => {
   if (reminder.date === month) {
     return array.push(reminder);
   }
   return null;
 })
 return array;
}

export function reminders(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADDREMINDER:
      return { ...state, reminder: [...state.reminder, createReminder(action.payload)] }
    case actionTypes.GETREMINDERS:
      const month = Moment().month(action.payload).format('MMM');
      let fetched = fetchReminderPerMonth(state, month);
      return { ...state, reminders_for_month: fetched};
    case actionTypes.EDITREMINDER:
      let fetchedReminder = fetchReminder(state, action.payload);
      let stateRemindersCopy = [...state.reminder];
      stateRemindersCopy[fetchedReminder.index].text = action.payload.text
      stateRemindersCopy[fetchedReminder.index].date = action.payload.date
      stateRemindersCopy[fetchedReminder.index].reminderColor = action.payload.reminderColor
      return { ...state }
    case actionTypes.DELETEREMINDER:
      return { ...state, text: action.payload }
    default:
      return state;
  }
}
