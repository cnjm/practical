import { isDate } from '../utils/isType.js'

const diff = (date1, date2, unit, roundFunc = (num) => Math.round(num)) => {
  const d1 = isDate(date1) ? date1 : new Date(date1);
  const d2 = isDate(date2) ? date2 : new Date(date2);
  const dateDiff = d2.getTime() - d1.getTime();
  let result = 0;

  switch (unit) {
    case 'Y':
      result = roundFunc(dateDiff / (365 * 24 * 60 * 60 * 1000));
      break
    case 'M':
      result = roundFunc(dateDiff / (30 * 24 * 60 * 60 * 1000));
      break
    case 'D':
      result = roundFunc(dateDiff / (24 * 60 * 60 * 1000));
      break
    case 'h':
      result = roundFunc(dateDiff / (60 * 60 * 1000));
      break
    case 'm':
      result = roundFunc(dateDiff / (60 * 1000));
      break
    case 's':
      result = roundFunc(dateDiff / 1000);
      break
    case 'ms':
    default:
      result = dateDiff;
      break
  }

  return result;
}

export default diff;