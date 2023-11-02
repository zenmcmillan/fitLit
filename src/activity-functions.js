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

export const addNewActivity = () => {
  newActivity.innerHTML += `<p>${activityData.date}</p>`;
}

form.addEventListener('.submit-button', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newActivityData = {
    // userID: current ID,
    date: formData.get('date'),
    numSteps: formData.get('numSteps'),
    minutesActive: formData.get('minutesActive'),
    flightsOfStairs: formData.get('flightsOfStairs')
  };
  if (!newActivityData.date || !newActivityData.numSteps|| !newActivityData.minutesActive || !newActivityData.flightsOfStairs){
    alert("You need to fill all fields before proceeding!")
    return
  }
  addNewActivity(newActivityData);
  e.target.reset();
});


