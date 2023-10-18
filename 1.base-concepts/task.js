function getArrayParams(...arr) {
  if (arr.length === 0) {
    return {
      min: undefined,
      max: undefined,
      avg: undefined,
    };
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = +(sum / arr.length).toFixed(2);

  return { min, max, avg };
}