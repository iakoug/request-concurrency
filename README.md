# fetch concurrency

控制调用并发数

# Getting started

```js
  const setConcurrencyWrapper = require('./lib')

  const concurrency = 10

  const originRequest = fetch

  const concurrencyFetch = setConcurrencyWrapper(originRequest, concurrency)
```
