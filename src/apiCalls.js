// import

let activityPostURL = 'http://localhost:3001/api/v1/activity'

export const fetchUserData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } 
      return response.json();
    })
    .then((data) => {
       return data.users
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};

export const fetchHydrationData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } 
      return response.json();
    })
    .then((data) => {
       return data.hydrationData
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};


export const fetchSleepData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } 
      return response.json();
    })
    .then((data) => {
       return data.sleepData
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};

export const fetchActivityData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } 
      return response.json();
    })
    .then((data) => {
       return data.activityData
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};

export const postAcitivityData = (newActivityData) => { //Activity param placeholder
  fetch(activityPostURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }) // structure for post request with the URL using a variable established before
  .then((response) => {
    if (!response.ok) { // if the response fails then it immediately redirects to the error catch using throw
      throw new Error('POST request failed');
    }
    return response.json(); // if it succeeds then it returns the response
  })
  .then((responseData) => { // then we move to the second then which posts the new entry to the data in activity
    console.log('POST request successful');
    // (REPLACE THIS WITH THE PROPER FUNCTION NAME FOR WHAT WE NAME THE POST FUNCTION(responseData)); 
    //uncomment line 84 when we have the function for the post
  })
  .catch((error) => {
    console.error('POST request failed', error);//catch which tells you the error 
  });
};

