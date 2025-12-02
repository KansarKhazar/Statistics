export const normalizeTime = (value: string) => {
  if (/^\d{2}:\d{2}$/.test(value)) return value + ':00';
  return '00:00:00';
};
