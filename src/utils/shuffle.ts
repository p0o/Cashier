
const shuffle = (x: Array<any>) => x
  .map(a => [Math.random(), a])
  .sort((a,b) => a[0] - b[0])
  .map(a => a[1]);

export default shuffle;
