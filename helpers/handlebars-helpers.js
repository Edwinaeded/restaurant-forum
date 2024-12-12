const dayjs = require('dayjs')
module.exports = {
  currentYear: () => dayjs().year(),
  eq: (a, b) => a === b
}
