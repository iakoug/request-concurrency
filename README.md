#### fetch concurrency

控制调用并发数

#### use

```js
  const wrapper = require('./lib')

  const concurrency = 10

  const originRequest = fetch

  const concurrencyFetch = wrapper(originRequest, concurrency)
```