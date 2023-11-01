import { expect } from "chai";

const { averageHoursSleptPerDay, averageSleepQuality, hoursSleptOnDay, sleepQualityDay} = require('../src/sleep-functions.js')

describe("Sleep Tests", () => {
  let sleepData;
  
  beforeEach(() => {
    sleepData = [
    {
      userID: 1,
      date: "2023/03/24",
      hoursSlept: 9.6,
      sleepQuality: 4.3,
    },
    {
      userID: 2,
      date: "2023/03/24",
      hoursSlept: 8.4,
      sleepQuality: 3.5,
    },
    {
      userID: 3,
      date: "2023/03/24",
      hoursSlept: 9.7,
      sleepQuality: 4.7,
    },
    {
      userID: 19,
      date: "2023/03/24",
      hoursSlept: 9.9,
      sleepQuality: 4.7,
    },
  ]
});


  it("should give the average daily hours slept of a particular user", () => {
    
    const averageHoursSlept = averageHoursSleptPerDay(sleepData, 19)
     
    expect(averageHoursSlept).to.equal('9.9');
    
  });


  it("should give the average sleep quality of a particular user", () => {
  
    const averageSleepQuality1 = averageSleepQuality(sleepData, 19);

    expect(averageSleepQuality1).to.equal('4.7');
  });

  it("should give the hours slept on a specific day for a user", () => {

    const hoursSlept = hoursSleptOnDay(sleepData, 2, "2023/03/24");
    const hoursSlept2 = hoursSleptOnDay(sleepData, 3, "2023/03/24");
    const hoursSlept3 = hoursSleptOnDay(sleepData, 1, "2023/03/24");
    expect(hoursSlept).to.equal(8.4);
    expect(hoursSlept2).to.equal(9.7);
    expect(hoursSlept3).to.equal(9.6);
  });

  it("should give the sleep quality of a user on a specific day", () => {

    const sleepQuality = sleepQualityDay(sleepData, 3, "2023/03/24");
    const sleepQuality2 = sleepQualityDay(sleepData, 1, "2023/03/24");
    const sleepQuality3 = sleepQualityDay(sleepData, 2, "2023/03/24");
    expect(sleepQuality).to.equal(4.7);
    expect(sleepQuality2).to.equal(4.3);
    expect(sleepQuality3).to.equal(3.5);
  });
});
