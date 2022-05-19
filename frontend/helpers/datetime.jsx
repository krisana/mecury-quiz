export const getDatesInRange = (startDate, endDate) => {
  const date = new Date(startDate.getTime());

  // Exclude start date
  date.setDate(date.getDate());

  const dates = [];

  // Exclude end date
  while (date < endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

export const timeRemoveSecond = (time) => {
  const newTime = time.toString().split(':');
  return newTime[0] + ':' + newTime[1];
}

export const transformTime = (time) => {
  time = time.toString().split(':');
  return time[0] + ':' + time[1];
}