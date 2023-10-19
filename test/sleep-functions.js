export const averageHoursSleptPerDay = (array, id) => {
  let total = 0;
  const hours = array
    .filter((person) => person.userID === id)
    .map((person1) => person1.hoursSlept);

  hours.forEach((dailyHours) => {
    total += dailyHours;
  });

  return total / hours.length;
};
