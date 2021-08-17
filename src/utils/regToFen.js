const regToFen = (yuan, digit = 100) => {
  const yuannum = Number(yuan);
  const digitnum = Number(digit);
  let m = 0;
  const s1 = yuannum.toString();
  const s2 = digitnum.toString();
  if (s1.split('.')[1]) {
    m += s1.split('.')[1].length;
  }
  if (s2.split('.')[1]) {
    m += s2.split('.')[1].length;
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

export default regToFen;