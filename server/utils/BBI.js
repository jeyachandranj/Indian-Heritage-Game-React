export const BBI = (bbi) => {
  const [wickets, runs] = bbi.split("/").map(Number);
  return bbi === "-" ? 0 : 100 - runs + wickets * 100;
};
