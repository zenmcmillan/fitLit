export const milesWalked = (array1, array2, id, date) => {
  const person = array1.find(
    (person) => person["userID"] === id && person["date"] === date
  );

  return ((person["numSteps"] * array2[id - 1]["strideLength"]) / 2250).toFixed(
    1
  );
};
