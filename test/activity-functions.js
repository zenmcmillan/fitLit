export const milesWalked = (array1, array2, id, date) => {
  let date1 = date;

  let person = array1.find(
    (person) => person["userID"] === id && person["date"] === date
  );

  let miles = (
    (person["numSteps"] * array2[id - 1]["strideLength"]) /
    2250
  ).toFixed(1);

  return `On ${date} you walked ${miles} miles`;
};
