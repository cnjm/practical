import { isUrl } from "../_internal/isUrl.js";

const paramToObj = (url) => {
  if (!isUrl(url)) {
    return false;
  }
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  )
}
export default paramToObj;