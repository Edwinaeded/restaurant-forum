const dayjs = require('dayjs')
module.exports = {
  currentYear: () => dayjs().year(),
  eq: (a, b) => a === b,
  ifCond: function (a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this)
  }
}
