const wrapper = require('./lib')

const concurrency = 10

module.exports = wrapper(fetch, concurrency)
