/**
 * Normalizes a time string into a consistent "HH:MM:SS" format.
 *
 * Accepts input strings that match either:
 *  - "HH:MM" or "H:MM" (2 or 3 digit hours followed by minutes),
 *    e.g. "09:30", "9:30", "123:45"
 *
 * If the input does not match this pattern, returns the default
 * "00:00:00".
 *
 * @param value - The time string to normalize.
 * @returns A string in "HH:MM:SS" format, or "00:00:00" if the input is invalid.
 */
export const normalizeTime = (value: string) => {
  if (/^\d{2,3}:\d{2}$/.test(value)) {
    return `${value}:00`;
  } else {
    return '00:00:00';
  }
};
