import get from './get.js';

const getAll = () => {
  let obj = {};
  Object.keys(localStorage).forEach((name) => {
    obj[name] = get(name);
  })
  return obj;
}

export default getAll;