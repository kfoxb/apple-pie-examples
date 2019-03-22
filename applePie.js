const errKey = Symbol("applePieError")

const p = (promise) => {
  return promise
    .catch((err) => {
      err[errKey] = true;
      return err
    })
}

const i = () => {}

const e = (maybeError) => {
  if (maybeError[errKey]) {
    return maybeError
  } else {
    return false;
  }
}

module.exports = { p, i, e }
