let hugePromise: Promise<number> | undefined;

export default function loadHuge(from: string): Promise<number> {
  if (hugePromise) {
    return hugePromise;
  }

  hugePromise = new Promise((resolve, reject) => {
    console.log(`loading heavy from ${from}...`);
    console.time(`loaded heavy from ${from} in`);
    setTimeout(
      // window.addEventListener("load", 
      () => {
        import(
          /* webpackChunkName: "huge" */
          "./huge")
          .then(({ default: lib }) => {
            console.timeEnd(`loaded heavy from ${from} in`);
            console.log(`huge loaded from ${from} in:`, lib.length);
            resolve(lib.length);
          })
          .catch(reject);
      }, 5500);
    // , { once: true });
  });

  return hugePromise;
}