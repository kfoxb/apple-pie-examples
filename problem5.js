const example = async () => {
  let value, value2, value3
  try {
    await getValue();
  } catch(err) {
    console.log('error getting first value')
    return;
  }

  try {
    await getValue();
  } catch(err) {
    console.log('error getting second value')
    return;
  }

  try {
    await getValue();
  } catch(err) {
    console.log('error getting third value')
    return;
  }
}
