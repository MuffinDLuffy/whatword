
import { words4, words5, words6 } from '../data/word.js';

/**
 * Get a single daily word for the given category length.
 * Uses UTC-based day boundaries so all players see the same word worldwide.
 *
 * @param {number} categoryLength - word length (e.g., 4, 5, 6)
 * @param {Date|number|string} [date=new Date()] - optional date for testing (Date object, timestamp or parsable string)
 * @returns {string} the daily word in UPPERCASE
 */
export function getDailyWord(categoryLength, date = new Date()) {
  // Start date at UTC midnight: April 19, 2026 (months are 0-indexed)
  const START_DATE_UTC_MS = Date.UTC(2026, 3, 19);

  const d = date instanceof Date ? date : new Date(date);
  // UTC midnight for `d` so day boundaries are consistent globally
  const todayUtcMidnightMs = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());

  let differenceInDays = Math.floor((todayUtcMidnightMs - START_DATE_UTC_MS) / (1000 * 60 * 60 * 24));
  if (!Number.isFinite(differenceInDays) || differenceInDays < 0) differenceInDays = 0;

  // Select dictionary by length
  let dictionary;
  if (categoryLength === 4) dictionary = words4;
  else if (categoryLength === 5) dictionary = words5;
  else if (categoryLength === 6) dictionary = words6;

  if (!dictionary || dictionary.length === 0) {
    throw new Error(`No dictionary found for category length ${categoryLength}`);
  }

  const index = differenceInDays % dictionary.length;

  return String(dictionary[index]).toUpperCase();
}