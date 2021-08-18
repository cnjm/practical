import { isString } from '../_internal/isType.js';

const getByteLen = (val) => {
  if (!isString(val)) {
    return false;
  }
  let len = 0
  for (let i = 0; i < val.length; i++) {
    let a = val.charAt(i)
    if (a.match(/[^\x00-\xff]/ig) != null) { // \x00-\xff→GBK双字节编码范围内
      len += 2
    } else {
      len += 1
    }
  }
  return len
}

export default getByteLen;