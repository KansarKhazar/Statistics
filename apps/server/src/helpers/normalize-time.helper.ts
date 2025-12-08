export const normalizeTime = (value: string) => {
  if (/^\d{2}:\d{2}$/.test(value)) {
    const timeSplited = value.split(':');
    const hour = parseInt(timeSplited[0]);
    const minutes = parseInt(timeSplited[1]);
    // Return value in seconds
    return hour * 3600 + minutes * 60;
  } else {
    return 0;
  }
};
