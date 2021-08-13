import isBrowser from '../_internal/isBrowser.js';

const testMap = {
  Windows: /Windows/,
  MacOS: /Macintosh/,
  Linux: /Linux|X11/,
  Android: /Android|Adr/,
  IOS: /like Mac OS X/,
  Mobile: /Mobi|iPh|480/,
  Tablet: /Tablet|Pad|Nexus 7/,
  WeChat: /MicroMessenger/,
  IPhone: /iPhone|iPod/,
  IPad: /iPad/
};
const userAgent = isBrowser ? window.navigator.userAgent : '';

const uaCheck = (type) => {
  return testMap[type].test(userAgent);
}
export default uaCheck;
