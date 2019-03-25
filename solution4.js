const { i } = require('./applePie')
const example = async () => {
  const value = await i(getValue());
  const value2 = await i(getValue("value"));
  const value3 = await i(getValue("value3"));

  console.log("got values", value, value2, value3)
}
