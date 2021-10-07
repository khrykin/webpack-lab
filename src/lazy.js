const debouncedPromisesCache = new Map();

/**
 * Defers execution of promiseFn to some time after the window load event and caches the returned promise. 
 * Can be used for debouncing lazy-loading using dynamic import
 * @param {string} cacheKey - The name for the cache entry.
 * @param {() => Promise} promiseFn - A function that returns a promise. It will only be executed once.
 * @param {timeout} [timeout = 0] - A timeout after the load event, after which the promiseFn will be executed.
 * @return {Promise}
 * 
 * @example 
 * const { default: someModule } = await debouncePromiseOnLoad("huge",() => import("huge"), 5000); 
 */
export function debouncePromiseOnLoad(cacheKey, promiseFn, timeout = 0) {
  if (debouncedPromisesCache.has(cacheKey)) {
    return debouncedPromisesCache.get(cacheKey);
  }

  const promise = new Promise((resolve, reject) => {
    window.addEventListener("load",
      () => {
        setTimeout(() => {
          promiseFn().then(resolve, reject);
        }, timeout);
      },
      { once: true }
    );
  });

  debouncedPromisesCache.set(cacheKey, promise);

  return promise;
}

