const { p, i, e } = require('./applePie');

const ERR = 'error'
const getValue = (value = ERR) => {
  return new Promise((resolve, reject) => {
    if (value === ERR) {
      reject(new Error("Must provide a value"))
    } else {
      resolve(value)
    }
  })
}

const main = async () => {
  // initial idea of api
  // pros
  // provides a way to access error and value
  // cons
  // error code repeats, may not be very clear for side effects
  console.log('main')
  const value = await p(getValue());
  if (e(value)) {
    console.error("Error getting value", e(value))
    return
  }
  console.log("got value", value)
}

main()

const main1 = async () => {
  console.log('main1')
  // example of returning a value or null
  // pros
  // simple to understand, short code
  // cons
  // lose error value, not sure how it would work for side effects
  const value = await getValue().catch(() => null);
  if (!value) {
    console.error("Error getting value", value)
    return
  }
  console.log("got value", value)
}

main1()

const main2 = async () => {
  // example of declaring a handler function before trying async values
  // pros
  // possible to define an error handler for multiple awaits, more dry
  // access to error value
  // should work with side effects
  // cons
  // not extremely clear that getting value2 will use the first error handler
  // if p.e is made to return from main2, babel will have to be used and won't be as clear
  console.log('main2')
  p.e = (err) => {
    console.error("Error getting value", value)
    return
  }
  const value = await p(getValue());
  const value2 = await p(getValue("value"));

  p.e = () => {
    console.error("Error getting third value", value)
    return
  }
  const value3 = await p(getValue("value3"));

  console.log("got values", value, value2, value3)
}

main2()
