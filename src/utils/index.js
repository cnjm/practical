import { isString } from './isType.js';

const copy = (str, el = "body") => {
  if (!document || !isString(str)) {
    return false;
  }
  const input = document.createElement('input');
  const a = document.querySelector(el);
  input.value = str;
  a.append(input);
  input.select();
  document.execCommand('Copy');
  a.removeChild(input);
  return true;
}

const cloneDeep = () => {
  console.log("clone")
}

export default {
  copy, cloneDeep
}
