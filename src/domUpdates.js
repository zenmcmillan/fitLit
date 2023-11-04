// query selectors

const profileSection = document.querySelector('.profile-content');
const friendsSection = document.querySelector('.friend-content')
const welcome = document.querySelector('.welcome-sign');
const userAverageSteps = document.querySelector('.user-average-steps')
const allUserAverageSteps = document.querySelector('.all-users-average-steps')
const hydrationContent = document.querySelector('.hydration-content')
const sleepContentSection = document.querySelector('.sleep-content')
const activityContent = document.querySelector('.activity-content')
const formContainer = document.querySelector('.form-container')
const addActivityButton = document.querySelector('.add-activity')
const inputBox = document.querySelectorAll('.input-box')
const checkBoxes = document.querySelectorAll('.checkbox')
const checkBoxContainer = document.querySelector('.checkbox-container')
const motivationLevel = document.querySelector('.motivation-level')
const checkBox1 = document.querySelector('.checkbox-1')
const checkBox2 = document.querySelector(".checkbox-2");
const checkBox3 = document.querySelector(".checkbox-3");
const checkBox4 = document.querySelector(".checkbox-4");
const checkBox5 = document.querySelector(".checkbox-5");



const showMotivationLevelResponse = () => {
   checkBoxContainer.classList.add("hidden");
  if (checkBox1.checked) {
    motivationLevel.innerHTML += `<p>1 - You're motivation is low today!</p>`
  }
  if (checkBox2.checked) {
    motivationLevel.innerHTML += `<p>2 - You're lacking motivation today!</p>`;
  }
  if (checkBox3.checked) {
    motivationLevel.innerHTML += `<p>3 - You're motivated today!</p>`;
  }
  if (checkBox4.checked) {
    motivationLevel.innerHTML += `<p>4 - You're highly motivated today!</p>`;
  }
  if (checkBox5.checked) {
    motivationLevel.innerHTML += `<p>5 - You're extremely motivated today!</p>`;
  }
}

const renderPostedData = (data) => {
  formContainer.classList.add('hidden')
  activityContent.classList.remove('hidden')
  addActivityButton.classList.remove('hidden')
  inputBox.forEach(input => input.value = '')

  activityContent.innerHTML = '';

  activityContent.innerHTML += `
  <p>Date - ${data.date}</p>
  <p>Number Of Steps - ${data.numSteps}</p>
  <p>minutes Active - ${data.minutesActive}</p>
  <p>flights Of Stairs - ${data.flightsOfStairs}</p>
  `;
}


const addActivityData = () => {
  formContainer.classList.remove('hidden')
  activityContent.classList.add('hidden')
  addActivityButton.classList.add('hidden')
};

const showUserActivity = (userId, data) => {
  const userActivities = data.find((activity) => activity.userID === userId)
    activityContent.innerHTML += `
      <p>Number of Steps: ${userActivities.numSteps}</p>
      <p>Minutes Active: ${userActivities.minutesActive}</p>
      <p>Flights of Stairs: ${userActivities.flightsOfStairs}</p>
    `
}

const showActivityInfo = (data) => {
activityContent.innerHTML += `<p>${data}</p>`

}

const showUserSleepInfo = (data) => {
  sleepContentSection.innerHTML += `<p>Average Hours Slept - ${data}</p>`
}

const showUserSleepInfo2 = (data) => {
  sleepContentSection.innerHTML += `<p>Average Sleep Quality - ${data}</p>`
}

const showWaterWeek = (waterWeek) =>{

  waterWeek.forEach(week => {

    hydrationContent.innerHTML += `<p>${week}</p>`
  })
  

}

const showUserInfo = (userId, array, averages) => {
  let user = array[userId - 1];

  welcome.innerHTML += `<p>Welcome ${user.name}</p>`;
  
  userAverageSteps.innerHTML +=`<p>Your average step count - ${user.dailyStepGoal}</p>`

  allUserAverageSteps.innerHTML += `<p>The average for everyone - ${averages}</p>`;
  
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

    friendsSection.innerHTML += `
    <p>${array[friend - 1].name}</p>
    `;
  });
};

const showSleepWeek = (sleepWeekHours) => {

  sleepWeekHours.forEach(week => {
    sleepContentSection.innerHTML += `
      <p>${week}<p>
    `
  })
}
  
const showLatestSleep = (sleepToday, sleepQualityToday) => {
  sleepContentSection.innerHTML += `
  <p>You slept ${sleepToday} hours last night!</p>
  <p>Your sleep quality was ${sleepQualityToday} last night!</p>
  `
}

export {
  showUserInfo,
  showWaterWeek,
  showUserSleepInfo,
  showUserSleepInfo2,
  showActivityInfo,
  showUserActivity,
  showSleepWeek,
  showLatestSleep,
  addActivityData,
  renderPostedData,
  showMotivationLevelResponse,
};