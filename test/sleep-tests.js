import { expect } from "chai";

const { averageHoursSleptPerDay } = require('./sleep-functions.js')

describe("Average Hours Slept for a User", () => {
  it("should give the average daily hours slept of a particular user", () => {
    
    const sleepData = [
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
        userID: 4,
        date: "2023/03/24",
        hoursSlept: 4.7,
        sleepQuality: 3,
      },
      {
        userID: 5,
        date: "2023/03/24",
        hoursSlept: 8,
        sleepQuality: 3.1,
      },
      {
        userID: 6,
        date: "2023/03/24",
        hoursSlept: 4.2,
        sleepQuality: 1.2,
      },
      {
        userID: 7,
        date: "2023/03/24",
        hoursSlept: 4.1,
        sleepQuality: 3.9,
      },
      {
        userID: 8,
        date: "2023/03/24",
        hoursSlept: 9.2,
        sleepQuality: 1.6,
      },
      {
        userID: 9,
        date: "2023/03/24",
        hoursSlept: 4.8,
        sleepQuality: 2.5,
      },
      {
        userID: 10,
        date: "2023/03/24",
        hoursSlept: 7.2,
        sleepQuality: 2.2,
      },
      {
        userID: 11,
        date: "2023/03/24",
        hoursSlept: 7.2,
        sleepQuality: 1,
      },
      {
        userID: 12,
        date: "2023/03/24",
        hoursSlept: 4,
        sleepQuality: 3.1,
      },
      {
        userID: 13,
        date: "2023/03/24",
        hoursSlept: 6.5,
        sleepQuality: 1.4,
      },
      {
        userID: 14,
        date: "2023/03/24",
        hoursSlept: 5.3,
        sleepQuality: 4.7,
      },
      {
        userID: 15,
        date: "2023/03/24",
        hoursSlept: 10,
        sleepQuality: 2.4,
      },
      {
        userID: 16,
        date: "2023/03/24",
        hoursSlept: 6.7,
        sleepQuality: 2.9,
      },
      {
        userID: 17,
        date: "2023/03/24",
        hoursSlept: 6.3,
        sleepQuality: 3.6,
      },
      {
        userID: 18,
        date: "2023/03/24",
        hoursSlept: 4.2,
        sleepQuality: 4.6,
      },
      {
        userID: 19,
        date: "2023/03/24",
        hoursSlept: 9.9,
        sleepQuality: 4.7,
      },
      {
        userID: 20,
        date: "2023/03/24",
        hoursSlept: 7.4,
        sleepQuality: 1.7,
      },
      {
        userID: 21,
        date: "2023/03/24",
        hoursSlept: 10.9,
        sleepQuality: 3.3,
      },
      {
        userID: 22,
        date: "2023/03/24",
        hoursSlept: 8.9,
        sleepQuality: 2,
      },
      {
        userID: 23,
        date: "2023/03/24",
        hoursSlept: 5.7,
        sleepQuality: 3.4,
      },
      {
        userID: 24,
        date: "2023/03/24",
        hoursSlept: 8.9,
        sleepQuality: 1.2,
      },
      {
        userID: 25,
        date: "2023/03/24",
        hoursSlept: 6,
        sleepQuality: 3.4,
      },
      {
        userID: 26,
        date: "2023/03/24",
        hoursSlept: 8,
        sleepQuality: 1.5,
      },
      {
        userID: 27,
        date: "2023/03/24",
        hoursSlept: 9.6,
        sleepQuality: 4.9,
      },
      {
        userID: 28,
        date: "2023/03/24",
        hoursSlept: 10,
        sleepQuality: 4.9,
      },
      {
        userID: 29,
        date: "2023/03/24",
        hoursSlept: 7.9,
        sleepQuality: 2.2,
      },
      {
        userID: 30,
        date: "2023/03/24",
        hoursSlept: 5.5,
        sleepQuality: 2.3,
      },
      {
        userID: 31,
        date: "2023/03/24",
        hoursSlept: 4.9,
        sleepQuality: 4.9,
      },
      {
        userID: 32,
        date: "2023/03/24",
        hoursSlept: 11,
        sleepQuality: 4.7,
      },
      {
        userID: 33,
        date: "2023/03/24",
        hoursSlept: 6.2,
        sleepQuality: 1.2,
      },
      {
        userID: 34,
        date: "2023/03/24",
        hoursSlept: 7.8,
        sleepQuality: 3.2,
      },
      {
        userID: 35,
        date: "2023/03/24",
        hoursSlept: 5,
        sleepQuality: 1.5,
      },
      {
        userID: 36,
        date: "2023/03/24",
        hoursSlept: 6.4,
        sleepQuality: 1.4,
      },
      {
        userID: 37,
        date: "2023/03/24",
        hoursSlept: 6.6,
        sleepQuality: 4.3,
      },
      {
        userID: 38,
        date: "2023/03/24",
        hoursSlept: 6.3,
        sleepQuality: 1.6,
      },
      {
        userID: 39,
        date: "2023/03/24",
        hoursSlept: 7.7,
        sleepQuality: 2.1,
      },
      {
        userID: 40,
        date: "2023/03/24",
        hoursSlept: 6.9,
        sleepQuality: 1.2,
      },
      {
        userID: 41,
        date: "2023/03/24",
        hoursSlept: 6.1,
        sleepQuality: 3,
      },
      {
        userID: 42,
        date: "2023/03/24",
        hoursSlept: 4.7,
        sleepQuality: 2.9,
      },
      {
        userID: 43,
        date: "2023/03/24",
        hoursSlept: 8.2,
        sleepQuality: 4.8,
      },
      {
        userID: 44,
        date: "2023/03/24",
        hoursSlept: 4.6,
        sleepQuality: 2.6,
      },
      {
        userID: 45,
        date: "2023/03/24",
        hoursSlept: 10.5,
        sleepQuality: 4.9,
      },
      {
        userID: 46,
        date: "2023/03/24",
        hoursSlept: 8.8,
        sleepQuality: 4.8,
      },
      {
        userID: 47,
        date: "2023/03/24",
        hoursSlept: 7.5,
        sleepQuality: 1.1,
      },
      {
        userID: 48,
        date: "2023/03/24",
        hoursSlept: 10.1,
        sleepQuality: 1.8,
      },
      {
        userID: 49,
        date: "2023/03/24",
        hoursSlept: 7,
        sleepQuality: 2.3,
      },
      {
        userID: 50,
        date: "2023/03/24",
        hoursSlept: 4.2,
        sleepQuality: 3.1,
      },
    ];

    const averageHoursSlept = averageHoursSleptPerDay(sleepData, 19)
     
    expect(averageHoursSlept).to.equal(9.9);
    
  });
});

describe("Average Sleep Quality", () => {
  it("should give the average sleep quality of a particular user", () => {
    const sleepData = [
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
        userID: 4,
        date: "2023/03/24",
        hoursSlept: 4.7,
        sleepQuality: 3,
      },
      {
        userID: 5,
        date: "2023/03/24",
        hoursSlept: 8,
        sleepQuality: 3.1,
      },
      {
        userID: 6,
        date: "2023/03/24",
        hoursSlept: 4.2,
        sleepQuality: 1.2,
      },
      {
        userID: 7,
        date: "2023/03/24",
        hoursSlept: 4.1,
        sleepQuality: 3.9,
      },
      {
        userID: 8,
        date: "2023/03/24",
        hoursSlept: 9.2,
        sleepQuality: 1.6,
      },
      {
        userID: 9,
        date: "2023/03/24",
        hoursSlept: 4.8,
        sleepQuality: 2.5,
      },
      {
        userID: 10,
        date: "2023/03/24",
        hoursSlept: 7.2,
        sleepQuality: 2.2,
      },
      {
        userID: 11,
        date: "2023/03/24",
        hoursSlept: 7.2,
        sleepQuality: 1,
      },
      {
        userID: 12,
        date: "2023/03/24",
        hoursSlept: 4,
        sleepQuality: 3.1,
      },
      {
        userID: 13,
        date: "2023/03/24",
        hoursSlept: 6.5,
        sleepQuality: 1.4,
      },
      {
        userID: 14,
        date: "2023/03/24",
        hoursSlept: 5.3,
        sleepQuality: 4.7,
      },
      {
        userID: 15,
        date: "2023/03/24",
        hoursSlept: 10,
        sleepQuality: 2.4,
      },
      {
        userID: 16,
        date: "2023/03/24",
        hoursSlept: 6.7,
        sleepQuality: 2.9,
      },
      {
        userID: 17,
        date: "2023/03/24",
        hoursSlept: 6.3,
        sleepQuality: 3.6,
      },
      {
        userID: 18,
        date: "2023/03/24",
        hoursSlept: 4.2,
        sleepQuality: 4.6,
      },
      {
        userID: 19,
        date: "2023/03/24",
        hoursSlept: 9.9,
        sleepQuality: 4.7,
      },
      {
        userID: 20,
        date: "2023/03/24",
        hoursSlept: 7.4,
        sleepQuality: 1.7,
      },
      {
        userID: 21,
        date: "2023/03/24",
        hoursSlept: 10.9,
        sleepQuality: 3.3,
      },
      {
        userID: 22,
        date: "2023/03/24",
        hoursSlept: 8.9,
        sleepQuality: 2,
      },
      {
        userID: 23,
        date: "2023/03/24",
        hoursSlept: 5.7,
        sleepQuality: 3.4,
      },
      {
        userID: 24,
        date: "2023/03/24",
        hoursSlept: 8.9,
        sleepQuality: 1.2,
      },
      {
        userID: 25,
        date: "2023/03/24",
        hoursSlept: 6,
        sleepQuality: 3.4,
      },
      {
        userID: 26,
        date: "2023/03/24",
        hoursSlept: 8,
        sleepQuality: 1.5,
      },
      {
        userID: 27,
        date: "2023/03/24",
        hoursSlept: 9.6,
        sleepQuality: 4.9,
      },
      {
        userID: 28,
        date: "2023/03/24",
        hoursSlept: 10,
        sleepQuality: 4.9,
      },
      {
        userID: 29,
        date: "2023/03/24",
        hoursSlept: 7.9,
        sleepQuality: 2.2,
      },
      {
        userID: 30,
        date: "2023/03/24",
        hoursSlept: 5.5,
        sleepQuality: 2.3,
      },
      {
        userID: 31,
        date: "2023/03/24",
        hoursSlept: 4.9,
        sleepQuality: 4.9,
      },
      {
        userID: 32,
        date: "2023/03/24",
        hoursSlept: 11,
        sleepQuality: 4.7,
      },
      {
        userID: 33,
        date: "2023/03/24",
        hoursSlept: 6.2,
        sleepQuality: 1.2,
      },
      {
        userID: 34,
        date: "2023/03/24",
        hoursSlept: 7.8,
        sleepQuality: 3.2,
      },
      {
        userID: 35,
        date: "2023/03/24",
        hoursSlept: 5,
        sleepQuality: 1.5,
      },
      {
        userID: 36,
        date: "2023/03/24",
        hoursSlept: 6.4,
        sleepQuality: 1.4,
      },
      {
        userID: 37,
        date: "2023/03/24",
        hoursSlept: 6.6,
        sleepQuality: 4.3,
      },
      {
        userID: 38,
        date: "2023/03/24",
        hoursSlept: 6.3,
        sleepQuality: 1.6,
      },
      {
        userID: 39,
        date: "2023/03/24",
        hoursSlept: 7.7,
        sleepQuality: 2.1,
      },
      {
        userID: 40,
        date: "2023/03/24",
        hoursSlept: 6.9,
        sleepQuality: 1.2,
      },
      {
        userID: 41,
        date: "2023/03/24",
        hoursSlept: 6.1,
        sleepQuality: 3,
      },
      {
        userID: 42,
        date: "2023/03/24",
        hoursSlept: 4.7,
        sleepQuality: 2.9,
      },
      {
        userID: 43,
        date: "2023/03/24",
        hoursSlept: 8.2,
        sleepQuality: 4.8,
      },
      {
        userID: 44,
        date: "2023/03/24",
        hoursSlept: 4.6,
        sleepQuality: 2.6,
      },
      {
        userID: 45,
        date: "2023/03/24",
        hoursSlept: 10.5,
        sleepQuality: 4.9,
      },
      {
        userID: 46,
        date: "2023/03/24",
        hoursSlept: 8.8,
        sleepQuality: 4.8,
      },
      {
        userID: 47,
        date: "2023/03/24",
        hoursSlept: 7.5,
        sleepQuality: 1.1,
      },
      {
        userID: 48,
        date: "2023/03/24",
        hoursSlept: 10.1,
        sleepQuality: 1.8,
      },
      {
        userID: 49,
        date: "2023/03/24",
        hoursSlept: 7,
        sleepQuality: 2.3,
      },
      {
        userID: 50,
        date: "2023/03/24",
        hoursSlept: 4.2,
        sleepQuality: 3.1,
      },
    ];

    const averageSleepQuality = averageHoursSleptPerDay(sleepData, 19);

    expect(averageSleepQuality).to.equal(4.7);
  });
});
