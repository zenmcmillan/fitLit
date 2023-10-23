import { expect } from "chai";


const { milesWalked, didMeetStepGoal } = require("../src/activity-functions.js");


describe("Calculate Miles Walked", () => {
  it("should return an estimate of the number of miles walked", () => {
    
    const activityData = [
      {
        userID: 1,
        date: "2023/03/24",
        numSteps: 7362,
        minutesActive: 261,
        flightsOfStairs: 26,
      },
    ];

    const users = [
      {
        id: 1,
        name: "Trystan Gorczany",
        address: "9484 Lucas Flat, West Kittymouth WA 67504",
        email: "Taurean_Pollich31@gmail.com",
        strideLength: 4,
        dailyStepGoal: 7000,
        friends: [5, 43, 46, 11],
      },
      {
        id: 2,
        name: "Tyreek VonRueden",
        address: "623 Koelpin Skyway, Lake Luigichester MN 77576-1678",
        email: "Nicolette_Halvorson43@yahoo.com",
        strideLength: 4.5,
        dailyStepGoal: 9000,
        friends: [13, 19, 3],
      },
    ];


    const milesWalked1 = milesWalked(activityData, users, 1, "2023/03/24");

    expect(milesWalked1).to.equal("On 2023/03/24 you walked 13.1 miles");
  });
});

const users = [
  {
    "id": 1,
    "name": "Trystan Gorczany",
    "address": "9484 Lucas Flat, West Kittymouth WA 67504",
    "email": "Taurean_Pollich31@gmail.com",
    "strideLength": 4,
    "dailyStepGoal": 7000,
    "friends": [5, 43, 46, 11]
  },
  {
    "id": 2,
    "name": "Tyreek VonRueden",
    "address": "623 Koelpin Skyway, Lake Luigichester MN 77576-1678",
    "email": "Nicolette_Halvorson43@yahoo.com",
    "strideLength": 4.5,
    "dailyStepGoal": 9000,
    "friends": [13, 19, 3]
  }
];

const activityData = [
  {
    "userID": 1,
    "date": "2023/03/24",
    "numSteps": 7362,
    "minutesActive": 261,
    "flightsOfStairs": 26
  },
  {
    "userID": 2,
    "date": "2023/03/24",
    "numSteps": 3049,
    "minutesActive": 125,
    "flightsOfStairs": 43
  }
];

describe('Step Goal Checker', () => {
  it('should return a success message when step goal is met', () => {


    const result = didMeetStepGoal(activityData, users, 1, "2023/03/24");
    expect(result).to.equal('On 2023/03/24 you met your step goal! Congrats!');
  });

  it('should return a failure message when step goal is not met', () => {
    const result = didMeetStepGoal(activityData, users, 2, "2023/03/24");
    expect(result).to.equal('On 2023/03/24 you did not meet your step goal!');
  });
});