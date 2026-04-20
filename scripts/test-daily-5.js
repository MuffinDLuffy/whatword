import { getDailyWord } from '../src/utils/getDailyWord.js';
import fs from 'fs';

const word = getDailyWord(5);
console.log('daily word (5):', word);

const dict = fs.readFileSync('./src/data/dictionary.ts', 'utf8');
const exists = dict.includes(`"${word}"`);
console.log('found in dictionary.ts:', exists);

if (!exists) process.exitCode = 2;
