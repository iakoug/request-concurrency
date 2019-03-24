# fetch concurrency

控制调用并发数

# Getting started

```bash
npm install request-concurrency
```

# use
```js
  const setConcurrencyWrapper = require("request-concurrency")

  const concurrency = 10

  const originRequest = fetch

  const concurrencyFetch = setConcurrencyWrapper(originRequest, concurrency)
```
