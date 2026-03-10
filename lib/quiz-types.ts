/**
 * 語源学習システムの型定義
 */

// 1. 基本的な型定義
export type EtymologyType = 'prefix' | 'suffix' | 'root';
export type CoursePath = 'seeker' | 'sage';
export type QuestionType = "Roots" | "Compound" | "Prefix";

/**
 * 派生語の定義
 */
export interface DerivedWord {
  word: string;       // 例: "construct"
  meaning: string;    // 例: "組み立てる"
  example: string;    // 例: "They construct a bridge."
  usageCount: number; // 会話で使用した回数（5回で完全解放）
  isUnlocked: boolean; // クイズや会話で解放されたか
}

/**
 * 語源（接頭辞・接尾辞・語根）のマスターデータ
 */
export interface Etymology {
  id: string;
  root: string;       // 語源の綴り（例: "ad-", "con-"）
  meaning: string;    // 意味
  origin: string;     // 由来（例: "Latin 'ad'"）
  description?: string; // 詳しい解説
  examples?: { 
    word: string; 
    meaning: string; 
    components: string; 
  }[];                // 構成要素付きの例
  derivedWords?: DerivedWord[]; // 派生語リスト
}

/**
 * クイズ問題の基本構造
 */
export interface Question {
  id: string | number;
  category: QuestionType; // "Roots", "Compound", "Prefix"
  question: string;       // 問題文
  options: string[];      // 選択肢
  correctAnswer: string;  // 正解
  explanation: string;    // 解説
  etymology: Etymology;   // 関連する語源データ（必須）
  allParts?: string[];    // 単語を構成する全パーツ（分解クイズ用）
  targetWord?: string;    // 対象となる英単語
}

/**
 * 単語の組み合わせ（組み立て）問題用
 */
export interface CombinationQuestion extends Question {
  targetWord: string;  // 正解となる完成した単語
  allParts: string[];  // 画面に並べるバラバラのパーツ
}

// --- ゲーム進行・管理用の型 ---

export type GameStage = 'stage-select' | 'quiz' | 'library' | 'conversation' | 'boss-battle';

/**
 * 単語の習熟度
 */
export interface WordMastery {
  word: string;
  unlockedAt: number;
  usageCount: number;
  isMastered: boolean;
  lastUsedAt: number;
  nextReviewAt: number;
}

/**
 * 学習の進捗状況
 */
export interface GameProgress {
  currentStage: GameStage;
  completedStages: GameStage[];
  masteredWords: WordMastery[];
  energyPoints: number;
}

/**
 * クイズのセッション情報
 */
export interface QuizRound {
  id: string;
  course: CoursePath;
  etymologyType: EtymologyType;
  etymology: Etymology;
  questions: Question[];
  startedAt: number;
}

/**
 * 回答データ
 */
export interface QuizAnswer {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
  timestamp: number;
}

/**
 * クイズ結果
 */
export interface QuizResult {
  roundId: string;
  answers: QuizAnswer[];
  score: number;
  totalQuestions: number;
  passed: boolean;
  lastFiveCorrect: number;
  completedAt: number;
}

/**
 * ロック解除状況
 */
export interface UnlockProgress {
  seeker: {
    prefix: number[];
    suffix: number[];
    root: number[];
  };
  sage: {
    prefix: number[];
    suffix: number[];
    root: number[];
  };
}

// --- テキスト・フレーバーデータ ---

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
};

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
};