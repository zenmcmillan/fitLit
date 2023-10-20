export { give7DaySleepHours, give7DaySleepQuality }

const give7DaySleepHours = (array, id, theDate) => {
    let arr = [];
  
    const user = array.filter((person) => person.userID === id);
    const index = user.findIndex((element) => element.date === theDate);
  
    for (let i = index; i < index + 7; i++) {
      arr.push(user[i]);
    }
    return arr.map((item) => `On ${item.date} you slept for ${item.hoursSlept}`);
  };

  
const give7DaySleepQuality = (array, id, theDate) => {
    let arr = [];
  
    const user = array.filter((person) => person.userID === id);
  
    const index = user.findIndex((element) => element.date === theDate);
  
    for (let i = index; i < index + 7; i++) {
      arr.push(user[i]);
    }
    return arr.map((item) => `On ${item.date} your sleep quality was ${item.sleepQuality}`);
  };
  