import Moment from 'moment';
export default class MonthDataClass {
  constructor(moment) {
    this.moment = moment;
    this.index = moment.month();
    this.momentCalendar  = moment.calendar();
    this.momentDay  = moment.format('D');
    this.shortName = moment.format('MMM');
    this.month = moment.format('MMMM');
    this.year = moment.format('YYYY');
    this.date = moment.format("dddd, MMMM Do YYYY, h:mm:ss a");
    this.daysInMonth = moment.daysInMonth();
    this.format = moment.format();
    // this.startMonth = moment.startOf('month');
    // this.startMonthDay = moment.startOf('month').date();
    this.monthStartDay = moment.startOf('month').day();
    this.startMonthDayIndex = moment.startOf('month').dayOfYear();

    // this.weekStart = moment.startOf('month').week()
    // this.weekEnd = moment.endOf('month').week()

    // this.weekDay = moment.weekday(5).format('ddd');
    // this.monthStartDayShort = moment.startOf('month').format('ddd');
    // this.monthEndDay = moment.endOf('month').day();
    // this.monthEndDayShort = moment.endOf('month').format('ddd');

    this.daysArray = this.getDays(this.daysInMonth, this)
    this.startArray = this.getStartDays(this.monthStartDay)
  }

  getDays(totalDays) {
    let array = [];
    let object = {};
    let index = this.startMonthDayIndex;
    let nowShortName = Moment().format('MMM');
    for (let day = 1; day <= totalDays; day++) {
      object = {
        dayIndex: index++,
        dayNumber: day,
        dayName: this.shortName,
        currentDay: Number(this.momentDay) === day && this.shortName === nowShortName
        // reminders: [
        //   {
        //     uuid: "04d46320-2f39-11e9-b590-579db90c6936",
        //     date: "Feb",
        //     text: "gg",
        //     dayIndex: 34
        //   },
        // ]
      }
      array.push(object);
    }
    return array;
  }

  getStartDays(startDay) {
    let array = []
    for (let day = 1; day <= startDay; day++) {
      array.push(day);
    }
    return array;
  }
}