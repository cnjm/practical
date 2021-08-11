
import { isString } from '../utils/isType.js'
const clear = (key) => {
  if (isString(key)) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
  return true
}
export default clear;