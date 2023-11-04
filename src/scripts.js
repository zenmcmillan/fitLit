import './css/styles.css';
import { showUserInfo,showWaterWeek, showUserSleepInfo, showUserSleepInfo2, showSleepWeek, showActivityInfo, showUserActivity, showLatestSleep, addActivityData, renderPostedData, showMotivationLevelResponse} from './domUpdates';
import { averageStepGoals } from './users-functions';
import { give7DayWaterConsumption } from './hydration-functions';
import { fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData, postActivityData} from './apiCalls';
import { averageHoursSleptPerDay, averageSleepQuality, give7DaySleepHours, give7DaySleepQuality, hoursSleptOnDay, sleepQualityDay } from './sleep-functions';
import { milesWalked, didMeetStepGoal } from './activity-functions';

const addActivityButton = document.querySelector(".add-activity");
const form = document.querySelector('form')
const checkBox1 = document.querySelector(".checkbox-1");
const checkBox2 = document.querySelector(".checkbox-2");
const checkBox3 = document.querySelector(".checkbox-3");
const checkBox4 = document.querySelector(".checkbox-4");
const checkBox5 = document.querySelector(".checkbox-5");

checkBox5.addEventListener("click", () => {
  showMotivationLevelResponse();
});

checkBox4.addEventListener("click", () => {
  showMotivationLevelResponse();
});

checkBox3.addEventListener("click", () => {
  showMotivationLevelResponse();
});

checkBox2.addEventListener("click", () => {
  showMotivationLevelResponse();
});

checkBox1.addEventListener('click', () => {
  showMotivationLevelResponse()
})


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {};

  data.userID = parseInt(formData.get("userID"));
  data.date = formData.get("date"); 
  data.numSteps = parseInt(formData.get("numSteps")); 
  data.minutesActive = parseInt(formData.get("minutesActive")); 
  data.flightsOfStairs = parseInt(formData.get("flightsOfStairs")); 

  console.log(data);

  postActivityData(data);
  renderPostedData(data)
});


addActivityButton.addEventListener('click', () => {
  addActivityData()
})

const populateDOM = (data) => {
  renderUserInfo(data)
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

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
};

const renderUserInfo = (data) => {
  index = getRandomIndex(data);
  let averages = averageStepGoals(data);
  showUserInfo(index, data, averages);
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

const grapLatestSleep = (data) => {
  let sleepToday = hoursSleptOnDay(data, index, '2023/07/01')
  let sleepQualityToday = sleepQualityDay(data, index, '2023/07/01')
  showLatestSleep(sleepToday, sleepQualityToday)
}






