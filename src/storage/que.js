import { isObject, isString, isNumber } from '../_internal/isType.js';
import set from './set.js';
import get from './get.js';
import clear from './clear.js';

const getTarget = (arr, subKey) => {
  let result = null;
  let objArr = [];
  outfor: for (let i = 0; i < arr.length; i++) {
    if (isObject(arr[i])) {
      objArr = Object.keys(arr[i]);
      for (let j = 0; j < objArr.length; j++) {
        if (objArr[j] === subKey) {
          result = { index: i, value: arr[i] };
          break outfor;
        }
      }
    }
  }
  return result || false;
}
const que = (arg) => {
  const { method, key, subKey, value, position } = arg;
  if (!key || !isString(key)) {
    return false;
  }
  let arr = get(key) || [];
  if (isNumber(subKey)) {
    if (method === "clear") {
      arr.splice(subKey, 1);
      return set(key, arr);
    }
    if (method === "set") {
      arr[subKey] = value || "";
      return set(key, arr);
    }
    return arr[subKey];
  }
  if (method === "clear") {
    if (subKey && isString(subKey)) {
      let tag = getTarget(arr, subKey);
      if (tag) {
        arr.splice(tag.index, 1);
        return set(key, arr);
      }
    }
    return clear(key);
  } else if (method === "set") {
    if (value) {
      if (subKey && isString(subKey)) {
        let tag = getTarget(arr, subKey);
        let temp = null;
        if (tag) {
          arr.splice(tag.index, 1);
          temp = tag.value;
          temp[subKey] = value;
        } else {
          temp = { [subKey]: value }
        }
        if (position === "unshift") {
          arr.unshift(temp);
        } else if (position === "push") {
          arr.push(temp);
        } else {
          arr.splice(tag.index, 0, temp);
        }
        return set(key, arr);
      }
    }
    return false;
  } else {
    if (subKey && isString(subKey)) {
      return getTarget(arr, subKey).value || false;
    }
    return arr;
  }
}

export default que;