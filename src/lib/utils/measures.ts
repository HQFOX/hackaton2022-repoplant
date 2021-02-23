export const avg = (values: number[]): number => {
  if (!values || values.length === 0) {
    return 0;
  }
  return (
    values.reduce((a, b) => {
      return a + b;
    }) / values.length
  );
};
