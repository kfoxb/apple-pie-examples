const example = async () => {
  let value, value2, value3
  try {
    value = await getValue();
  } catch(err) {
    console.error("Error getting first value", err)
    rollback1();
    return
  }

  try {
    value2 = await getValue("value");
  } catch(err) {
    console.error("Error getting first value", err)
    rollback1();
    console.error("Error getting second value", err)
    rollback2();
    return
  }

  try {
    value3 = await getValue("value3");
  } catch(err) {
    console.error("Error getting first value", err)
    rollback1();
    console.error("Error getting second value", err)
    rollback2();
    console.error("Error getting third value", err)
    rollback3();
    return
  }
  console.log("got values", value, value2, value3)
}
