
import { words4, words5, words6 } from '../data/word.js';

export function getDailyWord(categoryLength) {
  // 1. Define the launch date of your game
  const startDate = new Date('2026-04-19T00:00:00'); 
  
  // 2. Get the current date
  const today = new Date();
  
  // 3. Calculate the difference in time (milliseconds)
  const differenceInTime = today.getTime() - startDate.getTime();
  
  // 4. Convert time difference from milliseconds to days
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  
  // 5. Select the right dictionary based on the category passed
  let dictionary;
  if (categoryLength === 4) dictionary = words4;
  else if (categoryLength === 5) dictionary = words5;
  else if (categoryLength === 6) dictionary = words6;
  // Extend here for other lengths (7, 8, ...)

  // 6. Use the modulo operator (%) to loop back to the start of the array 
  // if you run out of words before adding more.
  const index = differenceInDays % dictionary.length;

  // Return uppercase so consumers (client logic, dictionary lookups) can use consistent keys
  return dictionary[index].toUpperCase();
}