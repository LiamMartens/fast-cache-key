import { Bench } from "tinybench";
import hash from "object-hash";
import sum from "hash-sum";
import { fastCacheKey } from "../src/index.js";

const exampleObject = {
  user_id: "583c3ac3f38e84297c002546",
  email: "test@test.com",
  name: "test@test.com",
  given_name: "Hello",
  family_name: "Test",
  nickname: "test",
  logins_count: 15,
  created_at: "2016-11-28T14:10:11.338Z",
  updated_at: "2016-12-02T01:17:29.310Z",
  last_login: "2016-12-02T01:17:29.310Z",
  email_verified: true,
};

const bench = new Bench({ time: 100 });

bench
  .add("object-hash", () => {
    hash(exampleObject);
  })
  .add("sum", () => {
    sum(exampleObject);
  })
  .add("JSON.stringify", () => {
    JSON.stringify(exampleObject);
  })
  .add("fast-cache-key", () => {
    fastCacheKey(exampleObject);
  });

await bench.warmup();
await bench.run();

console.table(bench.table());
