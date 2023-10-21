// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

// An example of how you tell webpack to use a JS file
//import users from './data/users';
// import { hydrationData } from './data/hydration';
//console.log("User Data:", users);

// Example of one way to import functions from the domUpdates file.  You will delete these examples.
import { exampleFunction1, exampleFunction2, showUserInfo, showAverages,showWaterWeek, showUserSleepInfo, showUserSleepInfo2, showSleepWeek, showActivityInfo, showUserActivity, showLatestSleep } from './domUpdates';
import { averageStepGoals } from '../test/users-functions';
import { give7DayWaterConsumption } from '../test/hydration-functions';
import { fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData} from './apiCalls';
import { averageHoursSleptPerDay, averageSleepQuality, give7DaySleepHours, give7DaySleepQuality, hoursSleptOnDay, sleepQualityDay } from '../test/sleep-functions';
import { milesWalked, didMeetStepGoal } from '../test/activity-functions';

exampleFunction1('Travis');
exampleFunction2('Travis')

const populateDOM = (data) => {
  renderUserInfo(data)
  allAverages(data)
};

const populateDOM2 = (data) => {
  grabWaterWeek(data)
};

const populateDOM3 = (data) => {
  grabSleepWeek(data)
  renderSleepInfo(data)
  grapLatestSleep(data)
};
  
const populateDOM4 = (data, data1) => {
  renderActivityInfo(data, data1)
   renderActivityData(data)
};

window.addEventListener('load', () => {
  Promise.all([fetchUserData(), fetchHydrationData(), fetchSleepData(), fetchActivityData()])
    .then((data) => {
      const userData = data[0];
      const hydrationData = data[1];
      const sleepData = data[2];
      const activityData = data[3];
      populateDOM(userData);
      populateDOM2(hydrationData);
      populateDOM3(sleepData);
      populateDOM4(activityData, userData);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
});

let index 

// 2023/06/25 - 2023/07/01



const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
};

const renderUserInfo = (data) => {
     index = getRandomIndex(data)
    showUserInfo(index, data)
}

const renderActivityData = (data) =>{
  showUserActivity(index,data)
}

const renderSleepInfo = (data) => {
  let average = averageHoursSleptPerDay(data, index) 
  showUserSleepInfo(average)
  let sleepQuality = averageSleepQuality(data, index)
  showUserSleepInfo2(sleepQuality)
}

const grabWaterWeek = (data) =>{
    let waterWeek = give7DayWaterConsumption(data, index, "2023/06/25")
    showWaterWeek(waterWeek)
}


const allAverages = (data) =>{
    let averages = averageStepGoals(data)
    showAverages(averages)
  }

const grabSleepWeek = (data) => {
  let sleepWeekHours = give7DaySleepHours(data,index, "2023/06/25")
  let sleepWeekQuality = give7DaySleepQuality(data,index, "2023/06/25")
  showSleepWeek(sleepWeekHours, sleepWeekQuality)
  }

const renderActivityInfo = (data, data1) => {
  let miles = milesWalked(data, data1, index, '2023/03/24')
  let metGoal = didMeetStepGoal(data, data1, index, "2023/06/25")
  showActivityInfo(miles)    
  showActivityInfo(metGoal)
}

const grapLatestSleep = (data, data1) => {
let sleepToday = hoursSleptOnDay(data, data1, '2023/07/01')
let sleepQualityToday = sleepQualityDay(data, data1, '2023/07/01')
showLatestSleep(sleepToday, sleepQualityToday)
}






