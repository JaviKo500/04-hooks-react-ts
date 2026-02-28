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

export type ScrambleWordsAction =
| {type: 'SET_GUESS', payload: string}
| {type: 'CHECK_ANSWER',}
export const scrambleWordsReducer = ( state: ScrambleWordsState, action: ScrambleWordsAction ): ScrambleWordsState => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_GUESS':{
      if ( !payload ) return { ...state};
      return {
        ...state,
        guess: payload,
      }
    }
    case 'CHECK_ANSWER': {
      if ( state.currentWord === state.guess ) {
        const updatedWords = state.words.slice(1);
        return {
          ...state,
          points: state.points + 1,
          currentWord: updatedWords[0] ?? '',
          scrambledWord: scrambleWord(updatedWords[0] ?? ''),
          guess: '',
          words: updatedWords,
        }
      }
      return {
        ...state,
        guess: '',
        errorCounter: state.errorCounter + 1,
        isGameOver: (state.errorCounter + 1) >= state.maxAllowErrors,
      };
    }
    default:
      return state;
  }
}