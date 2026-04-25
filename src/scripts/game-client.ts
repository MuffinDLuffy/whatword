import { getWordData } from '../data/dictionary';
import { getDailyWord } from '../utils/getDailyWord';

// -- NAVIGATION LOGIC --
const startBtn = document.getElementById('start-btn') as HTMLElement | null;
const gameBoard = document.getElementById('game-board') as HTMLElement | null;

startBtn?.addEventListener('click', () => {
  gameBoard?.scrollIntoView({ behavior: 'smooth' });
});

// -- GAMEPLAY & ERROR PREVENTION LOGIC --
let currentGuess = "";
let currentAttempt = 0;
let isGameOver = false;
const WORD_LENGTH: number = (window as any).WORD_LENGTH ?? 4;
const MAX_ATTEMPTS: number = (window as any).MAX_ATTEMPTS ?? 5;
const LANG: string = (window as any).LANG ?? (localStorage.getItem('theword-lang') ?? 'es');

const UI_STRINGS: Record<string, any> = {
  en: {
    found: 'You found the word!',
    notFound: 'The word was...',
    etymology: 'Etymology',
    commonUses: 'Common Uses',
    inRealLife: 'In Real Life',
    close: 'Close & Return'
  },
  es: {
    found: '¡Has encontrado la palabra!',
    notFound: 'La palabra era...',
    etymology: 'Etimología',
    commonUses: 'Usos comunes',
    inRealLife: 'En la vida real',
    close: 'Cerrar y volver'
  }
};

function handleInput(key: string) {
  const isLetter = /^[a-zA-Z]$/.test(key);

  if (isGameOver) return; // ignore input after game ends

  // ERROR PREVENTION: Only accept letters if under limit
  if (isLetter && currentGuess.length < WORD_LENGTH) {
    currentGuess += key.toUpperCase();
  } else if (key === 'Backspace') {
    currentGuess = currentGuess.slice(0, -1);
  } else if (key === 'Enter' && currentGuess.length === WORD_LENGTH) {
    submitGuess();
  }
  updateGrid();
}

function updateGrid() {
  const tiles = document.querySelectorAll<HTMLElement>('.tile');
  const startIndex = currentAttempt * WORD_LENGTH;

  for (let i = 0; i < WORD_LENGTH; i++) {
    const tile = tiles[startIndex + i];
    if (tile) {
      tile.textContent = currentGuess[i] || '';
    }
  }
}

function submitGuess() {
  if (currentGuess.length !== WORD_LENGTH) return;

  evaluateGuess();

  if (currentGuess === targetWord) {
    // WIN CONDITION
    setTimeout(() => showPostGameScreen(true), 1500);
  } else if (currentAttempt === MAX_ATTEMPTS - 1) {
    // LOSS CONDITION
    setTimeout(() => showPostGameScreen(false), 1500);
  } else {
    // CONTINUE PLAYING
    currentAttempt++;
    currentGuess = "";
  }
}

function evaluateGuess() {
  const tiles = document.querySelectorAll<HTMLElement>('.tile');
  const startIndex = currentAttempt * WORD_LENGTH;

  // Convert words to arrays so we can mark off letters as we check them
  let targetArray: string[] = targetWord.split('');
  let guessArray: string[] = currentGuess.split('');
  let statuses = Array(WORD_LENGTH).fill('absent') as string[]; // Default to gray

  // PASS 1: Find Exact Matches (Green)
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessArray[i] === targetArray[i]) {
      statuses[i] = 'correct';
      targetArray[i] = ''; // Mark as used
      guessArray[i] = '';  // Mark as used
    }
  }

  // PASS 2: Find Partial Matches (Yellow)
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessArray[i] !== '' && targetArray.includes(guessArray[i])) {
      statuses[i] = 'present';
      // Remove the letter from target array so we don't double-count it
      targetArray[targetArray.indexOf(guessArray[i])] = '';
    }
  }

  // Paint the UI Grid and Keyboard
  for (let i = 0; i < WORD_LENGTH; i++) {
    const tile = tiles[startIndex + i];
    const letter = currentGuess[i];
    const status = statuses[i];

    // Add a slight delay for that classic cascading reveal effect
    setTimeout(() => {
      if (!(tile instanceof HTMLElement)) return;
      tile.style.backgroundColor = `var(--color-${status})`;
      tile.style.borderColor = `var(--color-${status})`;
      tile.style.color = 'var(--color-bg)'; // Dark text on light tiles for contrast

      // Update the virtual keyboard key color too
      updateKeyboardColor(letter, status);
    }, i * 250);
  }
}

function updateKeyboardColor(letter: string, status: string) {
  const keyBtn = document.querySelector<HTMLButtonElement>(`.kb-key[data-key="${letter}"]`);
  if (!keyBtn) return;

  // Wordle rule: Green overrides Yellow, Yellow overrides Gray.
  // We don't want to downgrade a green key to yellow if they guess it wrong later.
  const currentBg = keyBtn.style.backgroundColor;
  if (currentBg === 'var(--color-correct)') return;
  if (currentBg === 'var(--color-present)' && status === 'absent') return;

  keyBtn.style.backgroundColor = `var(--color-${status})`;
  keyBtn.style.color = 'var(--color-bg)';
}

// Hybrid Listeners
window.addEventListener('keydown', (e: KeyboardEvent) => handleInput(e.key));

document.getElementById('virtual-keyboard')?.addEventListener('click', (e: MouseEvent) => {
  const clicked = e.target;
  const keyEl = clicked instanceof Element ? clicked.closest('.kb-key') : null;
  const key = keyEl ? keyEl.getAttribute('data-key') : null;
  if (key) handleInput(key);
});

// Determine the daily target word based on the chosen length
const targetWord = getDailyWord(WORD_LENGTH);

function showPostGameScreen(isWin: boolean) {
  isGameOver = true;
  
  const overlay = document.getElementById('post-game-overlay');
  const data = getWordData(targetWord);
  

  if (!overlay || !data) return;

  // Update UI Elements
  const statusEl = document.getElementById('pg-status');
  const wordEl = document.getElementById('pg-word');
  const etymEl = document.getElementById('pg-etymology');
  const irlEl = document.getElementById('pg-irl');
  const usesList = document.getElementById('pg-uses');

  if (!statusEl || !wordEl || !etymEl || !irlEl || !usesList) return;

  const ui = UI_STRINGS[LANG] ?? UI_STRINGS.en;

  statusEl.textContent = isWin ? ui.found : ui.notFound;
  // Prefer translations if available
  wordEl.textContent = (data.translations && data.translations[LANG] && data.translations[LANG].word) || data.word;
  etymEl.textContent = (data.translations && data.translations[LANG] && data.translations[LANG].etymology) || data.etymology;
  irlEl.textContent = (data.translations && data.translations[LANG] && data.translations[LANG].inRealLife) || data.inRealLife;

  // Localize section headings and close button
  const etymTitle = document.getElementById('pg-etymology-title');
  const commonTitle = document.getElementById('pg-common-title');
  const irlTitle = document.getElementById('pg-irl-title');
  const closeBtn = document.getElementById('pg-close');
  if (etymTitle) etymTitle.textContent = ui.etymology;
  if (commonTitle) commonTitle.textContent = ui.commonUses;
  if (irlTitle) irlTitle.textContent = ui.inRealLife;
  if (closeBtn) closeBtn.textContent = ui.close;

  // Populate the list
  usesList.innerHTML = ''; // Clear existing
  data.commonUses.forEach(use => {
    const li = document.createElement('li');
    li.textContent = use;
    usesList.appendChild(li);
  });

  // Small delay for better UX before showing the screen
  setTimeout(() => {
    overlay.classList.remove('hidden');
    // Force reflow for animation
    void overlay.offsetWidth;
    overlay.classList.add('visible');
    overlay.setAttribute('aria-hidden', 'false');
  }, 1500); // 1.5s delay lets the user see their final grid outcome
}

// Close button listener
document.getElementById('pg-close')?.addEventListener('click', () => {
  const overlay = document.getElementById('post-game-overlay');
  if (!overlay) return;
  overlay.classList.remove('visible');
  setTimeout(() => overlay.classList.add('hidden'), 300); // Wait for transition
});
