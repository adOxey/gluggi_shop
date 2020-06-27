export const calculateNowTime = () => {
  const milliseconds = Date.now();
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  return {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
  };
};

export const calculateReceivedTime = (milliseconds) => {
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  return {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
  };
};

export const showCorrectTimestamp = (receivedMilliseconds) => {
  const timeNow = calculateNowTime();
  const receivedTime = calculateReceivedTime(receivedMilliseconds);
  const secondsAgo = timeNow.seconds - receivedTime.seconds;
  const minutesAgo = timeNow.minutes - receivedTime.minutes;
  const hoursAgo = timeNow.hours - receivedTime.hours;
  const daysAgo = timeNow.days - receivedTime.days;
  return {
    secondsAgo,
    minutesAgo,
    hoursAgo,
    daysAgo,
  };
};
