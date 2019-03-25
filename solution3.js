const { check, handler } = require('./applePie')
const main2 = async () => {
  handler((err) => {
    console.error("Error getting first value", err)
    rollback1();
    return
  })
  const value = await check(getValue());

  handler((err) => {
    console.error("Error getting second value", err)
    rollback2();
  })
  const value2 = await check(getValue("value"));

  handler(() => {
    console.error("Error getting third value", err)
    rollback3();
  })
  const value3 = await check(getValue("value3"));
  console.log("got values", value, value2, value3)
}
