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

export const give7DaySleepHours = (array, id, theDate) => {
  let arr = [];
  const user = array.filter((person) => person.userID === id);

  const index = user.findIndex((element) => element.date === theDate);
    
  for (let i = index; i < index + 7; i++) {
      arr.push(user[i]);
  }
  return arr.map((item) => `On ${item.date} you slept for ${item.hoursSlept}`);
};


export const give7DaySleepQuality = (array, id, theDate) => {
  let arr = [];
  const user = array.filter((person) => person.userID === id);
  const index = user.findIndex((element) => element.date === theDate);
  
  for (let i = index; i < index + 7; i++) {
    arr.push(user[i]);
  }
  return arr.map((item) => `On ${item.date} your sleep quality was ${item.sleepQuality}`);
};

