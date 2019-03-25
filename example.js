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
  handler((err) => {
    console.error("Error getting value", value)
    return
  })
  const value = await check(getValue());
  const value2 = await check(getValue("value"));

  handler(() => {
    console.error("Error getting third value", value)
    // if there were no return here this would call the next handler as well
    return
  })
  const value3 = await check(getValue("value3"));

  console.log("got values", value, value2, value3)
}

main2()

const main3 = async () => {
  // example similar to the go 2 style handler above, except by wrapping things in execute
  // I think we should be able to use the p.error handler to actually return from execute
  // without having to use any babel magic. It's still a little bit unclear though.
  console.log('main3')
  await execute(async () => {
    handler((err) => {
      console.error("Error getting value", value)
      return
    })
    const value = await check(getValue());
    const value2 = await check(getValue("value"));

    handler(() => {
      console.error("Error getting third value", value)
      // if there were no return here this would run and so would the previous handler
      // this means we may need to use function.toString() to see if there is actually
      // a return value though.
      return
    })
    const value3 = await check(getValue("value3"));

    console.log("got values", value, value2, value3)
  })
}

main3()

const main4 = async () => {
  console.log('main4')
  const err = Symbol('error')
  // example of using err symbol to access error from the returned value
  // pros
  // a little cleaner than using e()
  // maybe a little more explicit
  // cons
  // have to access value twice
  const value = await p(getValue());
  if (value[err]) {
    console.error("Error getting first value", value[err])
    return
  }
  const value2 = await p(getValue("value"));
  if (value[err] != null) {
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
