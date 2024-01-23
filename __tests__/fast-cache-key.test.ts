import { test, expect } from "vitest";
import { fastCacheKey } from "../src/index.js";

test("should work", () => {
  expect(fastCacheKey(["foo", "bar"])).toEqual(
    "it:1:string:foo;;it:2:string:bar;;"
  );

  expect(fastCacheKey({ foo: "bar" })).toEqual("obj:foo:string:bar;;");
});

test("should work with Set and Map", () => {
  expect(fastCacheKey(new Set([1, 2]))).toEqual(
    "it:1:number:1;;it:2:number:2;;"
  );

  expect(fastCacheKey(new Map([["foo", "bar"]]))).toEqual(
    "it:1:it:1:string:foo;;it:2:string:bar;;;"
  );
});
