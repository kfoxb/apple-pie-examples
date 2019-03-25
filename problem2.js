const main2 = async () => {
  let value, value2, value3
  try {
    value = await getValue();
    value2 = await getValue("value");
  } catch (err) {
    console.error("Error getting value", value)
    return
  }

  try {
    value3 = await getValue("value3");
  } catch (err) {
    console.error("Error getting third value", value)
    return
  }

  console.log("got values", value, value2, value3)
}
