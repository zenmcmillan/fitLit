import { expect } from 'chai';

const { getUserFromId, averageStepGoals } = require("../src/users-functions.js"); 

describe("User Function Tests", () => {
  let users;

  beforeEach(() => {
    users = [
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
  });

  it("should return a user's data based on their id", () => {
    const user1 = getUserFromId(1, users);

    expect(user1.id).to.equal(1);
    expect(user1.name).to.equal("Trystan Gorczany");
    expect(user1.address).to.equal("9484 Lucas Flat, West Kittymouth WA 67504");
    expect(user1.email).to.equal("Taurean_Pollich31@gmail.com");
    expect(user1.strideLength).to.equal(4);
    expect(user1.dailyStepGoal).to.equal(7000);
    expect(user1.friends).to.deep.equal([5, 43, 46, 11]);
  });

  it("should return user data for user id 2", () => {
    const user2 = getUserFromId(2, users);
  
    expect(user2.id).to.equal(2);
    expect(user2.name).to.equal("Tyreek VonRueden");
    expect(user2.address).to.equal("623 Koelpin Skyway, Lake Luigichester MN 77576-1678");
    expect(user2.email).to.equal("Nicolette_Halvorson43@yahoo.com");
    expect(user2.strideLength).to.equal(4.5);
    expect(user2.dailyStepGoal).to.equal(9000);
    expect(user2.friends).to.deep.equal([13, 19, 3]);
  });

  it("should return the average step goals for all the users in the dataset", () => {
    const average = averageStepGoals(users);

    expect(average).to.equal(8000);
  });
});