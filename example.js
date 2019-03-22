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
  console.log('in main')
  const value = await p(getValue());
  if (e(value)) {
    console.error("Error getting value", e(value))
    return
  }
  console.log("got value", value)
}


main()
