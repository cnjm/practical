import set from './set.js';

const setAll = (obj) => {
  Object.keys(obj).forEach((name) => {
    set(name, obj[name]);
  })
  return true
}

export default setAll;