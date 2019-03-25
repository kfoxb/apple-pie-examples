// example of try catch to see the problem
const example = async () => {
  let value, value2, value3
  try {
    value = await getValue();
  } catch(err) {
    console.error("Error getting first value", err)
    return
  }

  try {
    value2 = await getValue("value");
  } catch(err) {
    console.error("Error getting second value", err)
    return
  }

  try {
    value3 = await getValue("value3");
  } catch(err) {
    console.error("Error getting third value", err)
    return
  }
  console.log("got values", value, value2, value3)
}

example()
