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
const sleepContentSection = document.querySelector('#sleep-content')
const sleepContent = document.querySelector("#sleep-content")
const activityContent = document.querySelector('#activity-content')

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
  <p>Your sleep was crazy this week! Here is how much sleep you got!${sleepWeekHours}hours and a quality of ${sleepWeekQuality}</p>`
}


export {
  showUserInfo,
  showAverages,
  showUserAverageSteps,
  showWaterWeek,
  showUserSleepInfo,
  showUserSleepInfo2,
  showActivityInfo,
  exampleFunction1,
  exampleFunction2,
  showSleepWeek
};