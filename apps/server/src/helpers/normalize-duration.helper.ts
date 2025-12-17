/**
 * Converts a duration string in "HH:MM" format into its total number of seconds.
 *
 * @param value - The duration string to normalize (e.g., "02:30", "123:45").
 * @returns The total duration in seconds, or 0 if the input does not match the expected format.
 */
export const normalizeDuration = (value: string): number => {
  if (/^\d{2,3}:\d{2}$/.test(value.trim())) {
    const timeSplited = value.trim().split(':');
    const hour = parseInt(timeSplited[0]);
    const minutes = parseInt(timeSplited[1]);
    // Return value in seconds
    return hour * 3600 + minutes * 60;
  } else {
    return 0;
  }
};
