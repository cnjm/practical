import { isObject, isArray, isString } from '../utils/isType.js'

const get = (...arg) => {
  if (arg.length <= 0 || arg.length > 2) {
    return false;
  }
  let obj = null;
  try {
    obj = JSON.parse(localStorage.getItem(arg[0]));
  } catch (e) {
    obj = localStorage.getItem(arg[0]);
  }
  if (arg.length === 1) {
    return obj;
  }
  if (arg.length === 2) {
    if (isString(arg[1]) && isArray(obj)) {
      let result = null;
      for (let i = 0; i < obj.length; i++) {
        if (isObject(obj[i])) {
          Object.keys(obj[i]).forEach((name) => {
            if (name === arg[1]) {
              result = obj[i][name];
            }
          })
        }
        if (result) {
          return result;
        }
      }
      return obj[Number(arg[1])] || false;
    }
    return obj[arg[1]];
  }
  return false;
}

export default get;