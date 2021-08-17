const toDecimal2 = (x, digit) => {
  let f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  f = Math.round(x * digit) / digit;
  let s = f.toString();
  let rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}
const regToYuan = (fen, digit = 100) => {
  let num = fen;
  num = fen * 0.01;
  num += '';
  const reg = num.indexOf('.') > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
  num = num.replace(reg, '$1');
  num = toDecimal2(num, digit);
  return Number(num);
}

export default regToYuan;