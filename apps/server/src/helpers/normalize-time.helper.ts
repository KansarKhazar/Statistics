export const normalizeTime = (value: string) => {
  if (/^\d{2,3}:\d{2}$/.test(value)) {
    return `${value}:00`;
  } else {
    return '00:00:00';
  }
};
