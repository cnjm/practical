import { isString } from '../_internal/isType.js';

const getByteLen = (val, utf8) => {
  if (!isString(val)) {
    return false;
  }
  if (utf8) {
    let s = val.length
    for (let i = val.length - 1; i >= 0; i--) {
      const code = val.charCodeAt(i);
      if (code > 0x7f && code <= 0x7ff) s++;
      else if (code > 0x7ff && code <= 0xffff) s += 2;
      if (code >= 0xDC00 && code <= 0xDFFF) i--;
    }
    return s
  }
  let len = 0
  for (let i = 0; i < val.length; i++) {
    let a = val.charAt(i)
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2
    } else {
      len += 1
    }
  }
  return len
}

export default getByteLen;