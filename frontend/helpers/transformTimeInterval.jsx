export const transformTimeInterval = (startTime, endTime, increment) => {
  startTime = startTime.toString().split(':');
  endTime = endTime.toString().split(':');
  increment = parseInt(increment, 10);

  const timeDecemal = (time) => parseInt(time, 10);

  const pad = function (n) {
    return (n < 10) ? '0' + n.toString() : n;
  };

  const startHr = timeDecemal(startTime[0]);
  const startMin = timeDecemal(startTime[1]);
  const endHr = timeDecemal(endTime[0]);
  const endMin = timeDecemal(endTime[1]);
  const currentHr = startHr;
  const currentMin = startMin;
  const previous = pad(currentHr) + ':' + pad(currentMin);
  const current = '';
  const r = [];

  do {
      currentMin += increment;
      if ((currentMin % 60) === 0 || currentMin > 60) {
          currentMin = (currentMin === 60) ? 0 : currentMin - 60;
          currentHr += 1;
      }
      current = pad(currentHr) + ':' + pad(currentMin);
      r.push(previous + ' - ' + current);
      previous = current;
} while (currentHr !== endHr);
  return r;
};