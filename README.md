# fast-cache-key

[![badge](https://img.shields.io/npm/v/fast-cache-key)](https://www.npmjs.com/package/fast-cache-key) [![badge](https://img.shields.io/bundlephobia/min/fast-cache-key)](https://bundlephobia.com/package/fast-cache-key) ![badge](https://img.shields.io/github/license/LiamMartens/fast-cache-key)

Creates a unique key from object values. Supports primitives and objects, but also provides support for other iterables such as Set and Map.

## Usage

```js
import { fastCacheKey } from "fast-cache-key";

fastCacheKey({});
```

## Benchmark

|     | Task Name      | ops/sec   | Average Time (ns)  | Margin | Samples |
| --- | -------------- | --------- | ------------------ | ------ | ------- |
| 0   | object-hash    | 42,588    | 23480.405963841604 | ±1.83% | 4259    |
| 1   | JSON.stringify | 3,256,918 | 307.0386960686379  | ±2.08% | 325692  |
| 2   | fast-cache-key | 4,333,536 | 230.75838690762822 | ±2.52% | 433354  |
