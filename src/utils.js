import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax.js';
import {
  DATE_FORMAT,
  HOURS_IN_DAY,
  MILLISECONDS_IN_MINUTES,
  SECONDS_IN_MINUTES
} from './constants.js';

dayjs.extend(minMax);

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumber(number) {
  const randomNumber = Math.floor(Math.random() * number) + 1;
  return Number(randomNumber);
}

function getRandomBoolean() {
  const randomNumber = Math.random();
  return randomNumber >= 0.5;
}

function getRandomElementsFromArray(array) {
  const elementsLength = Math.floor(Math.random() * array.length);
  return array.slice(0, elementsLength);
}

function getElementById(elements, itemsId) {
  if (Array.isArray(itemsId)) {
    return elements.filter((element) => itemsId.find((id) => element.id === id));
  }
  return elements.find((element) => element.id === itemsId);
}

const getElementByType = (elements, type) => elements.find((element) => element.type === type);

function humanizeTaskDueDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

function getDifferenceInTime(start, end) {
  const difference = dayjs(end).diff(start) / MILLISECONDS_IN_MINUTES;

  switch (difference) {
    case difference < SECONDS_IN_MINUTES:
      return dayjs(difference).format(DATE_FORMAT.MINUTES_WITH_POSTFIX);

    case difference > SECONDS_IN_MINUTES && difference < SECONDS_IN_MINUTES * HOURS_IN_DAY:
      return dayjs(difference).format(DATE_FORMAT.HOUR_MINUTES_WITH_POSTFIX);

    default:
      return dayjs(difference).format(DATE_FORMAT.DAY_HOUR_MINUTES_WITH_POSTFIX);
  }
}

function incrementCounter(startFrom) {
  let counterStart = startFrom;
  return function () {
    return counterStart++;
  };
}

function randomNumberOfRange(range) {
  const rangeNumber = Math.floor(Math.random() * range) + 1;
  return rangeNumber < 10 ? `0${rangeNumber}` : `${rangeNumber}`;
}

function toUpperCaseFirstSign (item) {
  return item.charAt(0).toUpperCase() + item.substring(1);
}
export {
  getRandomArrayElement,
  incrementCounter,
  getRandomNumber,
  getRandomBoolean,
  getRandomElementsFromArray,
  getElementByType,
  getElementById,
  humanizeTaskDueDate,
  randomNumberOfRange,
  getDifferenceInTime,
  toUpperCaseFirstSign
};
