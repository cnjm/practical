const get = (arg) => {
  if (!arg) {
    return false;
  }
  let obj = null;
  try {
    obj = JSON.parse(localStorage.getItem(arg));
  } catch (e) {
    obj = localStorage.getItem(arg);
  }
  return obj || false;
}

export default get;