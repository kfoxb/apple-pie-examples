const example = async () => {
  let value, value2, value3
  try {
    value = await getValue();
  } catch(err) {}

  try {
    value2 = await getValue("value");
  } catch(err) {}

  try {
    value3 = await getValue("value3");
  } catch(err) {}

  console.log("got values", value, value2, value3)
}
