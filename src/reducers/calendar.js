import * as actionTypes from '../actions/actionTypes';
import Moment from 'moment';
import MonthDataClass from '../Utils/MonthDataClass';

const INITIAL_STATE = {
  test: '',
  current_month: getMonth().index,
  month_data: getMonth(),
  week_days: Moment.weekdays(),
};

/**
 * Get Month Data
 * @param {Boolean} next 
 * @return {Object}
 */
function getMonth(when, index) {
  let active;
  if (index >= 0) {
    active = Moment().month(index);
  }

  switch (when) {
    case 'PREVMONTH':
      const prev = active.subtract(1, 'M');
      return new MonthDataClass(prev);
    case 'NEXTMONTH':
      const next = active.add(1, 'M');
      return new MonthDataClass(next);
    default:
      const current = Moment()
      return new MonthDataClass(current);
  }
}

export function months(state = INITIAL_STATE, action) {
  let monthData;
  switch (action.type) {
    case actionTypes.TEST:
      return { ...state, test: action.payload }
    case actionTypes.CURRENTMONTH:
      return { ...state, month_data: getMonth(actionTypes.CURRENTMONTH) }
    case actionTypes.PREVMONTH:
      monthData = getMonth(actionTypes.PREVMONTH, action.payload);
      return { ...state, current_month: monthData.index, month_data: monthData }
    case actionTypes.NEXTMONTH:
      monthData = getMonth(actionTypes.NEXTMONTH, action.payload);
      return { ...state, current_month: monthData.index, month_data: monthData }
    default:
      return state;
  }
}