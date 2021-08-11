import { isObject, isArray, isString } from '../utils/isType.js';

const set = (...arg) => {
  if (arg.length <= 0 || arg.length > 3) {
    return false;
  }
  if (arg.length === 1) {
    localStorage.setItem(arg[0], "");
    return true;
  }
  if (isObject(arg[1]) || isArray(arg[1]) || isString(arg[1])) {
    if (arg.length === 2) {
      localStorage.setItem(arg[0], (isObject(arg[1]) || isArray(arg[1])) ? JSON.stringify(arg[1]) : arg[1]);
      return true;
    }
    if (arg.length === 3) {//三个参数默认单存
      let obj = JSON.parse(localStorage.getItem(arg[0]));
      obj[arg[1]] = arg[2];
      localStorage.setItem(arg[0], JSON.stringify(obj));
      return true;
    }
  }
  return false;

}

export default set;