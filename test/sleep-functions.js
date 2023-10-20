export const averageHoursSleptPerDay = (array, id) => {
  let total = 0;
  const hours = array
    .filter((person) => person.userID === id)
    .map((person1) => person1.hoursSlept);

  hours.forEach((dailyHours) => {
    total += dailyHours;
  });

  return (total / hours.length).toFixed(1)
};

export const averageSleepQuality = (array, id) => {
  let total = 0;
  const hours = array
    .filter((person) => person.userID === id)
    .map((person1) => person1.sleepQuality);

  hours.forEach((dailyHours) => {
    total += dailyHours;
  });

  return (total / hours.length).toFixed(1);
};

export const hoursSleptOnDay = (array, id, date) => {
  const sleptDay =  array.find(person => person.userID === id && person.date === date);
  return sleptDay.hoursSlept
};

export const sleepQualityDay = (array, id, date) => {
  const qualityDay = array.find(person => person.userID === id && person.date === date);
  return qualityDay.sleepQuality
};