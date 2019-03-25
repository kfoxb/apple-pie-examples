const { check, handler } = require('./applePie')
const main2 = async () => {
  handler((err) => {
    console.error("Error getting value", value)
    return
  })
  const value = await check(getValue());
  const value2 = await check(getValue("value"));

  handler(() => {
    console.error("Error getting third value", value)
    return
  })
  const value3 = await check(getValue("value3"));

  console.log("got values", value, value2, value3)
}
