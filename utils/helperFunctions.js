export const formateTimer = (totalSeconds) => {
  // mm:ss

  const seconds = totalSeconds % 60;

  const minutes = (totalSeconds - seconds) / 60;

  return appendValue(minutes) + ':' + appendValue(seconds);
};

const appendValue = (val) => {
  if (val <= 0 && val <= 9) {
    return '0' + val;
  }
  return val;
};
