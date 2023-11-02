export const milesWalked = (array1, array2, id, date) => {
  
  let person = array1.find(
    (person) => person["userID"] === id && person["date"] === date
  );

  let miles = (
    (person["numSteps"] * array2[id - 1]["strideLength"]) /
    2250
  ).toFixed(1);

  return `On ${date} you walked ${miles} miles`;
};


export const didMeetStepGoal = (array1, array2, id, date) =>{

  let person = array1.find(
    (person) => person["userID"] === id && person["date"] === date
  )
  let stepReply = (
    person["numSteps"] - array2[id - 1]["dailyStepGoal"]
  )
  if (stepReply >= 1){
    return `On ${date} you met your step goal! Congrats!`
  } else {
    return `On ${date} you did not meet your step goal!`
  }
}

// export const addNewActivity = userActivities => {
//   activityContent.innerHTML += `
//       <p>UserID: ${userActivities.userID}</p>
//       <p>Date: ${userActivities.date}</p>
//       <p>Number of Steps: ${userActivities.numSteps}</p>
//       <p>Minutes Active: ${userActivities.minutesActive}</p>
//       <p>Flights of Stairs: ${userActivities.flightsOfStairs}</p>
//       `
// }

// const form = document.querySelector('form hidden')

// form.addEventListener('.submit-button', (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const newActivityData = {
//     userID: formData.get('user id'),
//     date: formData.get('date'),
//     numSteps: formData.get('number-of-steps'),
//     minutesActive: formData.get('minutes-active'),
//     flightsOfStairs: formData.get('flights-of-stairs')
//   };
//   if (!newActivityData.date || !newActivityData.numSteps|| !newActivityData.minutesActive || !newActivityData.flightsOfStairs || !newActivityData.userID){
//     alert("You need to fill all fields before proceeding!")
//     return
//   }
//   addNewActivity(newActivityData);
//   e.target.reset();
// });


