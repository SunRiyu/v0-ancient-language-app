// Quiz system types and interfaces

export type EtymologyType = 'prefix' | 'suffix' | 'root'
export type CoursePath = 'seeker' | 'sage'

export interface DerivedWord {
  word: string;      // 例: "construct"
  meaning: string;   // 例: "組み立てる"
  example: string;   // 例: "They construct a bridge."
  usageCount: number; // 会話で使用した回数（5回で完全解放）
  isUnlocked: boolean; // クイズや会話で解放されたか
}

// 2. 既存の Etymology インターフェースを更新（words などを追加）
export interface Etymology {
  id: number
  name: string
  meaning: string
  language: string
  // examples: string[] // 既存のこれは words に統合されるため削除してもOK
  description: string; // 語源の詳しい由来を追加
  words: DerivedWord[]; // 派生単語のリストを追加
}

export type QuestionType = 'definition' | 'example' | 'identification' | 'combination'

export interface Question {
  id: string
  type: QuestionType
  etymology: Etymology
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface CombinationQuestion extends Question {
  targetWord: string;  // 正解となる完成した単語（例: "construction"）
  allParts: string[];   // 選択肢として画面に並べるバラバラのパーツ
}
export interface QuizRound {
  id: string
  course: CoursePath
  etymologyType: EtymologyType
  etymology: Etymology
  questions: Question[]
  startedAt: number
}

export interface QuizAnswer {
  questionId: string
  selectedIndex: number
  isCorrect: boolean
  timestamp: number
}

export interface QuizResult {
  roundId: string
  answers: QuizAnswer[]
  score: number
  totalQuestions: number
  passed: boolean
  lastFiveCorrect: number
  completedAt: number
}

export interface UnlockProgress {
  seeker: {
    prefix: number[]
    suffix: number[]
    root: number[]
  }
  sage: {
    prefix: number[]
    suffix: number[]
    root: number[]
  }
}

// Utility for getting ancient world flavor text
export const ANCIENT_WORLD_FLAVORS = {
  definition: [
    'この古代の言葉の意味は何だろうか？',
    '古の書物に記された言葉の真の意味は？',
    'この語源が表す深い意味とは？',
  ],
  example: [
    'どの言葉にこの語源が隠されているだろうか？',
    '古代の言語がどう形を変えたのか、見極めよ。',
    'この語根を含む言葉はどれだろう？',
  ],
  identification: [
    'この言葉にはどの語源が含まれているか？',
    '古代の知識で言葉の秘密を解き明かせ。',
    '言葉の根源となる要素は何か？',
  ],
  combination: [
    'この接頭辞と語根が組み合わさると、どんな意味になるか？',
    '古代の言語の組み合わせが生み出す意味は？',
    '二つの古い要素が一つになるとき、新しい意味が生まれる。',
  ],
}

export const UNLOCK_MESSAGES = {
  seeker: [
    '探索者よ、古代の知識が樹に刻まれた。',
    '語源の秘密が一つ、明かされた。',
    '樹の一つの枝が光に包まれた。',
  ],
  sage: [
    '賢者よ、深い知識が樹を潤す。',
    '古代の言語の謎が解き明かされた。',
    '樹の奥底に隠された叡智が光を放つ。',
  ],
}
