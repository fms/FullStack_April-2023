import { useCallback, useState } from "react";
import _ from "lodash";

const debounce = (callback, wait) => {
  let timer;

  const debouncedFunc = () => {
    if (shouldCallCallback(Date.now())) {
      callback();
    } else {
      timer = startTimer(callback);
    }
  }

  return debouncedFunc;
}

const shouldCallCallback = (currentTime) => {
  // Implement a condition to check if the waiting time has passed
  // For example, you can compare the currentTime with the last time the callback was called
  return true;
}

const startTimer = (callback) => {
  // Implement a function to set a timer that will call the callback after the specified delay
  // You can use setTimeout for this
  return setTimeout(callback, 1000);
}

export { debounce };