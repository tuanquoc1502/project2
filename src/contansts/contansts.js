import {
  getCustomAmPm,
  getCustomDate,
  getCustomDayNameFull,
  getCustomMonthNameFull,
} from '@hirishu10/simple-date-time';

// actions redux
const API_FETCH_REQUEST = (payload) => {
  return {
    type: 'API_FETCH_REQUEST',
    payload: payload,
  };
};

const API_FETCH_SUCCEEDED = (payload) => {
  return {
    type: 'API_FETCH_SUCCEEDED',
    payload: payload,
  };
};

const API_FETCH_FAILED = (payload) => {
  return {
    type: 'API_FETCH_FAILED',
    payload: payload,
  };
};

// Current time
let data = new Date();
let hour = data.getHours();
let minute = data.getMinutes();
const year = data.getFullYear();
const amPm = getCustomAmPm().toUpperCase();
const date = getCustomDate();
const day = getCustomDayNameFull();
const month = getCustomMonthNameFull();

if (hour < 10) {
  hour = `0${hour}`;
}

if (minute < 10) {
  minute = `0${minute}`;
}

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

let toDay;

export const wholeDay = (day) => {
  let result;
  switch (day) {
    case 'Monday': {
      toDay = result = 0;
      break;
    }
    case 'Tuesday': {
      toDay = 1;
      break;
    }
    case 'Wednesday': {
      toDay = 2;
      break;
    }
    case 'Thursday': {
      toDay = 3;
      break;
    }
    case 'Friday': {
      toDay = 4;
      break;
    }
    case 'Saturday': {
      toDay = 5;
      break;
    }
    case 'Sunday': {
      toDay = 6;
      break;
    }
    default:
      return 'err';
  }
  return result;
};

wholeDay(day);

export const convertCtoF = (c) => {
  return (c * 9) / 5 + 32;
};

export { hour, minute, year, amPm, date, day, month, toDay, daysOfWeek };
export { API_FETCH_REQUEST, API_FETCH_SUCCEEDED, API_FETCH_FAILED };
