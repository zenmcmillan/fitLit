export const giveAverageWaterConsumption = (array, id) => {
  let total = 0;
  const filtered = array.filter((person) => person.userID === id);
  filtered.forEach((element) => {
    total += element.numOunces;
  });
  return Math.trunc(total / filtered.length);
};

export const giveWaterConsumptionForSpecificDay = (id, date, array) => {
  return array.find(person => person.userID === id && person.date === date).numOunces
}

export const fluidOuncesForDay = (hydratedUsers, userId, date) => {
    const entry = hydratedUsers.find(item => item.userID === userId && item.date === date);
    return entry ? entry.numOunces : 0;
}

export const give7DayWaterConsumption = (array, id, theDate) => {
  let arr = [];

  const user = array.filter((person) => person.userID === id);

  const index = user.findIndex((element) => element.date === theDate);

  for (let i = index; i < index + 7; i++) {
    arr.push(user[i]);
  }
  return arr.map((item) => `On ${item.date} you drank ${item.numOunces} oz. of water`);
};