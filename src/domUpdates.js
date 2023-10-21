//NOTE: Your DOM manipulation will occur in this file

import { averageStepGoals } from "../test/users-functions";

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
const exampleFunction1 = (person) => {
  console.log(`oh hi there ${person}`)
}

const exampleFunction2 = (person) => {
  console.log(`bye now ${person}`)
}

// query selectors

const profileSection = document.querySelector('#user-expandable-content');
const welcome = document.querySelector('.welcome-sign');
const averageSteps = document.querySelector("#user-average-steps")
const allUserAverageSteps = document.querySelector("#all-users-average-steps")
const hydrationContent = document.querySelector("#hydration-content")
const latestSleep = document.querySelector('#sleep-content')
const sleepContentSection = document.querySelector('#sleep-content')
const sleepContent = document.querySelector("#sleep-content")
const activityContent = document.querySelector('#activity-content')

const showUserActivity = (userId, data) => {
  const userActivities = data.find((activity) => activity.userID === userId)
    activityContent.innerHTML += `
      <p>Number of Steps: ${userActivities.numSteps}</p>
      <p>Minutes Active: ${userActivities.minutesActive}</p>
      <p>Flights of Stairs: ${userActivities.flightsOfStairs}</p>
    `
}

const showActivityInfo = (data) => {
activityContent.innerHTML += `${data}`

}

const showUserSleepInfo = (data) => {
  sleepContentSection.innerHTML += `<p>Average Hours Slept - ${data}</p>`
}

const showUserSleepInfo2 = (data) => {
  sleepContentSection.innerHTML += `<p>Average Sleep Quality - ${data}</p>`
}

const showWaterWeek = (waterWeek) =>{
  hydrationContent.innerHTML += `<p>${waterWeek}</p>`
}

const showAverages = (averages) => {
  allUserAverageSteps.innerHTML = ""
  allUserAverageSteps.innerHTML += `<p>${averages}</p>`
}

const showUserAverageSteps = () => {
  averageSteps.innerHTML +=`<p>${user.dailyStepGoal}</p>`
}

const showUserInfo = (userId, array) => {
  let user = array[userId - 1];
  
  welcome.innerHTML = "";

  welcome.innerHTML += `<p>Welcome ${user.name}</p>`;
  
  averageSteps.innerHTML +=`<p>${user.dailyStepGoal}</p>`
  
  profileSection.innerHTML = '';

  profileSection.innerHTML += `
     <p>Id Number: ${user.id}</p>
     <p>Name: ${user.name}</p>
     <p>Address: ${user.address}</p>
     <p>Email: ${user.email}</p>
     <p>Stride Length - ${user.strideLength}</p>
     <p>Daily Step Goal - ${user.dailyStepGoal}</p>
     <p>FRIENDS</p>
    `;
  const usersFriends = array[userId - 1].friends;

   usersFriends.forEach((friend) => {

    profileSection.innerHTML += `
    <p>${array[friend - 1].name}</p>
    `;
  });
};

const showSleepWeek = (sleepWeekHours, sleepWeekQuality) =>{
  sleepContentSection.innerHTML += `
  <p>Your sleep was crazy this week! Here is how much sleep you got, ${sleepWeekHours} hours and a quality of ${sleepWeekQuality}/5!</p>`
}
//hours slept and quality of sleep on specific day.
const gshowLatestSleep = (sleepToday, sleepQualityToday) => {
  latestSleep.innerHTML += `
  <p>You slept ${sleepToday} hours last night!</p>
  <p>Your sleep quality was ${sleepQualityToday} last night!`
}

export {
  showUserInfo,
  showAverages,
  showUserAverageSteps,
  showWaterWeek,
  showUserSleepInfo,
  showUserSleepInfo2,
  showActivityInfo,
  showUserActivity,
  exampleFunction1,
  exampleFunction2,
  showSleepWeek,
  showLatestSleep
};