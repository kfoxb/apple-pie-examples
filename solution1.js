const { err, p } = require('./applePie')
const main4 = async () => {
  const value = await p(getValue());
  if (value[err]) {
    console.error("Error getting first value", value[err])
    return
  }
  const value2 = await p(getValue("value"));
  if (value[err]) {
    console.error("Error getting second value", value[err])
    return
  }
  const value3 = await p(getValue("value3"));
  if (value[err]) {
    console.error("Error getting third value", value[err])
    return
  }
  console.log("got values", value, value2, value3)
}

main4()
