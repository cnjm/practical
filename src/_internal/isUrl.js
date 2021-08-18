import { isString } from './isType.js';
export const isUrl = (url) => {
  return isString(url) && /^https?:\/\//.test(url);
}