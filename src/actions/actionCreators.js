import * as actionTypes from './actionTypes';

export function test(text) {
  return {
    type: actionTypes.TEST,
    payload: text
  }
}

export function currentMonth() {
  return {
    type: actionTypes.CURRENTMONTH,
  }
}

export function prevMonth(currentMonth) {
  return {
    type: actionTypes.PREVMONTH,
    payload: currentMonth
  }
}

export function nextMonth(currentMonth) {
  return {
    type: actionTypes.NEXTMONTH,
    payload: currentMonth
  }
}

export function addReminder(text) {
  return {
    type: actionTypes.ADDREMINDER,
    payload: text
  }
}

export function getReminders(month) {
  return {
    type: actionTypes.GETREMINDERS,
    payload: month
  }
}

export function editReminder(reminderObject) {
  return {
    type: actionTypes.EDITREMINDER,
    payload: reminderObject
  }
}

export function deleteReminder(text) {
  return {
    type: actionTypes.DELETEREMINDER,
    payload: text
  }
}