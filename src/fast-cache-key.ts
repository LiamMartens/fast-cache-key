/**
 * Creates a cache key for a value.
 * Supports most objects
 */
export function fastCacheKey<V>(value: V) {
  const valueType = typeof value;
  if (
    valueType === "string" ||
    valueType === "boolean" ||
    valueType === "number" ||
    valueType === "symbol" ||
    valueType === "bigint"
  ) {
    return valueType + String(value);
  }

  if (value === null || valueType === "undefined") {
    return "nil;";
  }

  if (valueType === "function") {
    return "fn" + (value as unknown as CallableFunction).name;
  }

  if (valueType === "object") {
    const canIterate = (value as unknown as Partial<Iterable<unknown>>)[
      Symbol.iterator
    ];

    if (canIterate) {
      let combinedKey = "";
      for (const entry of value as unknown as Iterable<unknown>) {
        combinedKey += "it" + fastCacheKey(entry);
      }
      return combinedKey;
    }

    let combinedKey = "";
    for (const k in value) {
      combinedKey += "obj:" + k + fastCacheKey(value[k]);
    }
    return combinedKey;
  }

  return ";";
}
