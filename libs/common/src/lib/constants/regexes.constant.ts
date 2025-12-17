/**
 * Regular expression to validate Persian (Jalali) dates in the format YYYY-MM-DD.
 *
 * Year part:
 *   - 1300–1999 (1[34]\d{2})
 *   - 2000–9999 ([2-9]\d{3})
 * Month part:
 *   - 01–09 (0[1-9])
 *   - 10–12 (1[0-2])
 * Day part:
 *   - 01–09 (0[1-9])
 *   - 10–29 ([12]\d)
 *   - 30–31 (3[01])
 *
 * @constant {RegExp} PERSIAN_DATE_REGEX
 */
export const PERSIAN_DATE_REGEX =
  /^(1[34]\d{2}|[2-9]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
