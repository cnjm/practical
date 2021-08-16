const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null);

const cloneDeep = function (obj, hash = new WeakMap()) {
  if (hash.has(obj)) return hash.get(obj);
  let type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
  if (type.includes(obj.constructor)) return new obj.constructor(obj);

  let allDesc = Object.getOwnPropertyDescriptors(obj);

  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

  let symKeys = Object.getOwnPropertySymbols(obj);
  if (symKeys.length > 0) {
    symKeys.forEach(symKey => {
      cloneObj[symKey] = isComplexDataType(obj[symKey]) ? cloneDeep(obj[symKey], hash) : obj[symKey]
    })
  }
  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? cloneDeep(obj[key], hash) : obj[key];
  }
  return cloneObj;
};
export default cloneDeep;