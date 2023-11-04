// let activityPostURL = 'http://localhost:3001/api/v1/activity'

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

export const postActivityData = (activityObj) => {
  const activityPostURL = "http://localhost:3001/api/v1/activity";
  const options = {
    method: "POST",
    body: JSON.stringify(activityObj),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(activityPostURL, options)
    .then((response) => {
      if (!response.ok && response.status !== 422) {

        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("New activity data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};



