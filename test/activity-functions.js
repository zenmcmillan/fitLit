export const milesWalked = (array1, array2, id, date) => {
  
  let person = array1.find(
    (person) => person["userID"] === id && person["date"] === date
  );

  let miles = (
    (person["numSteps"] * array2[id - 1]["strideLength"]) /
    2250
  ).toFixed(1);

  return `<br>On ${date} you walked ${miles} miles<br>`;
};


export const didMeetStepGoal = (array1, array2, id, date) =>{

  let person = array1.find(
    (person) => person["userID"] === id && person["date"] === date
  )
  let stepReply = (
    person["numSteps"] - array2[id - 1]["dailyStepGoal"]
  )
  if (stepReply >= 1){
    return `<br>On ${date} you met your step goal! Congrats!<br>`
  } else {
    return `<br>On ${date} you did not meet your step goal! Too Bad!<br>`
  }
}