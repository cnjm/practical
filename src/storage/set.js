import { isObject, isArray, isString } from '../utils/isType.js';

const set = (...arg) => {
  if (arg.length <= 0 || arg.length > 2) {
    return false;
  }
  if (arg.length === 1) {
    localStorage.setItem(arg[0], "");
    return true;
  }
  if (isObject(arg[1]) || isArray(arg[1]) || isString(arg[1])) {
    if (arg.length === 2) {
      localStorage.setItem(arg[0], (isObject(arg[1]) || isArray(arg[1])) ? JSON.stringify(arg[1]) : arg[1]);
      return arg[1];
    }
  }
  return false;

}

export default set;