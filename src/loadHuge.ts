export default function loadHuge(from: string): Promise<number> {
  return new Promise((resolve) => {
    console.log(`loading heavy from ${from}...`);
    console.time(`loaded heavy from ${from} in`);
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "huge" */
      "./huge")
      .then(({ default: lib }) => {
        console.timeEnd(`loaded heavy from ${from} in`);
        console.log(`huge loaded from ${from} in:`, lib.length);
        resolve(lib.length);
      });
  });
}