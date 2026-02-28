export interface ScrambleWordsState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  totalWords: number;
}


const GAME_WORDS = [
  'REACT',
  // 'JAVASCRIPT',
  // 'TYPESCRIPT',
  'HTML',
  // 'ANGULAR',
  // 'SOLID',
  // 'NODE',
  // 'VUEJS',
  // 'SVELTE',
  // 'EXPRESS',
  // 'MONGODB',
  // 'POSTGRES',
  // 'DOCKER',
  // 'KUBERNETES',
  // 'WEBPACK',
  'VITE',
  // 'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.slice().sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export type ScrambleWordsAction =
| {type: 'init', payload: string}

export const getScrambleWordsInitState = (): ScrambleWordsState => {
  const shuffledWords = shuffleArray([...GAME_WORDS]);
  return ({
    currentWord: shuffledWords[0],
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffledWords[0]),
    skipCounter: 0,
    words: shuffledWords,
    totalWords: shuffledWords.length,
  });
}

export const scrambleWordsReducer = ( state: ScrambleWordsState, action: ScrambleWordsAction ): ScrambleWordsState => {
  
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}