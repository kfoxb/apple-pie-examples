const getError = require('./applePie')
const example = async () => {
  const maybeError1 = await getError(getValue());
  if (maybeError1) {
    console.log('error getting first value')
    return;
  }
  const maybeError2 = await getError(getValue());
  if (maybeError2) {
    console.log('error getting second value')
    return;
  }
  const maybeError3 = await getError(getValue());
  if (maybeError3) {
    console.log('error getting third value')
    return;
  }
}
