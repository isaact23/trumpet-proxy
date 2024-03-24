// Convert Mozart's export to our JSON format.
export function mozartToJson(mozartStr) {
  return {
    0: {
      time: 1000,
      val1: 1,
      val2: 0,
      val3: 0,
    },
    1: {
      time: 1000,
      val1: 0,
      val2: 1,
      val3: 0,
    },
    2: {
      time: 1000,
      val1: 0,
      val2: 0,
      val3: 1,
    },
  };
}
