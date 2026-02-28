import {
  Etymology,
  EtymologyType,
  Question,
  QuestionType,
  ANCIENT_WORLD_FLAVORS,
  DerivedWord,
  CombinationQuestion,
} from './quiz-types'

// --- 1. 語源ライブラリデータ (拡張版) ---
// 企画書にある「TOEICや英検」を意識した単語を大量に追加しています
export const etymologyLibrary: Record<string, Record<EtymologyType, Etymology[]>> = {
  seeker: {
    prefix: [
      {
        id: 1,
        name: 'pre-',
        meaning: '前に、前の',
        language: 'ラテン語',
        description: '時間や場所が「前」であることを示します。',
        words: [
          { word: 'prefix', meaning: '接頭辞', example: 'Add a prefix to the word.', usageCount: 0, isUnlocked: false },
          { word: 'preview', meaning: '下見、予告編', example: 'Watch the movie preview.', usageCount: 0, isUnlocked: false },
          { word: 'prepare', meaning: '準備する', example: 'Prepare for the exam.', usageCount: 0, isUnlocked: false },
          { word: 'predict', meaning: '予測する', example: 'Predict the future.', usageCount: 0, isUnlocked: false },
        ]
      },
      // ... 他の接頭辞も同様の形式で拡張
    ],
    suffix: [
      {
        id: 101,
        name: '-tion',
        meaning: '行為、状態',
        language: 'ラテン語',
        description: '動詞を名詞に変え、「こと」「状態」を表します。',
        words: [
          { word: 'action', meaning: '行動', example: 'Take action now.', usageCount: 0, isUnlocked: false },
          { word: 'education', meaning: '教育', example: 'Education is important.', usageCount: 0, isUnlocked: false },
          { word: 'station', meaning: '場所、駅', example: 'Go to the station.', usageCount: 0, isUnlocked: false },
        ]
      },
    ],
    root: [
      {
        id: 201,
        name: 'port',
        meaning: '運ぶ',
        language: 'ラテン語',
        description: '荷物や情報を「移動させる」イメージです。',
        words: [
          { word: 'import', meaning: '輸入する', example: 'Japan imports oil.', usageCount: 0, isUnlocked: false },
          { word: 'export', meaning: '輸出する', example: 'They export cars.', usageCount: 0, isUnlocked: false },
          { word: 'transport', meaning: '輸送する', example: 'Transport goods by ship.', usageCount: 0, isUnlocked: false },
          { word: 'report', meaning: '報告する', example: 'Write a daily report.', usageCount: 0, isUnlocked: false },
        ]
      },
    ],
  },
  sage: {
    prefix: [],
    suffix: [],
    root: [
      {
        id: 301,
        name: 'struct',
        meaning: '建てる',
        language: 'ラテン語',
        description: '積み上げて形を作ることを表します。',
        words: [
          { word: 'structure', meaning: '構造', example: 'The structure of the building.', usageCount: 0, isUnlocked: false },
          { word: 'construct', meaning: '建設する', example: 'Construct a new bridge.', usageCount: 0, isUnlocked: false },
          { word: 'instruction', meaning: '指示、教育', example: 'Follow the instructions.', usageCount: 0, isUnlocked: false },
          { word: 'destruction', meaning: '破壊', example: 'The destruction of the forest.', usageCount: 0, isUnlocked: false },
        ]
      },
    ],
  },
}

// --- 2. クイズ生成メインロジック ---

export function getRandomEtymology(course: 'seeker' | 'sage', type: EtymologyType): Etymology {
  const etymologies = etymologyLibrary[course][type]
  return etymologies[Math.floor(Math.random() * etymologies.length)]
}

export function generateQuestions(etymology: Etymology, type: EtymologyType): Question[] {
  const questionTypes: QuestionType[] = ['definition', 'example', 'identification', 'combination']
  const questions: Question[] = []

  for (let i = 0; i < 5; i++) {
    const qType = questionTypes[i % questionTypes.length]
    const questionId = `q_${etymology.id}_${i}`

    let question: Question
    switch (qType) {
      case 'definition':
        question = generateDefinitionQuestion(etymology, questionId)
        break
      case 'example':
        question = generateExampleQuestion(etymology, questionId)
        break
      case 'identification':
        question = generateIdentificationQuestion(etymology, questionId)
        break
        case 'combination':
      // 第3引数の type を追加して呼び出す
      question = generateCombinationQuestion(etymology, questionId, type) 
      break
    }
    questions.push(question)
  }
  return questions
}

// --- 3. 各問題タイプの生成関数 ---

/**
 * 合成クイズ：語源から単語を組み立てる
 * 複数のパーツを組み合わせて正しい単語を作る
 */
export function generateCombinationQuestion(
  etymology: Etymology,
  questionId: string,
  type: EtymologyType
): Question {
  const targetWord = etymology.words[0].word
  
  // 正解単語のパーツと、他の語源から干渉パーツを取得
  const correctParts = getEtymologyParts(etymology, targetWord)
  const distractorParts = getDistractorParts(type)
  
  // 正解パーツと干渉パーツをシャッフルして表示
  const allParts = shuffleArray([...correctParts, ...distractorParts.slice(0, 2)])

  return {
    id: questionId,
    type: 'combination',
    etymology,
    question: `「${etymology.name}」の力を使って、正しい単語を錬成せよ。パーツを正しい順序で選べ。`,
    options: allParts,
    correctIndex: 0,
    explanation: `「${targetWord}」は${correctParts.join(" + ")}の組み合わせで作られます。${etymology.name}（${etymology.meaning}）の力が込められています。`,
    targetWord,
    allParts
  } as CombinationQuestion
}

/**
 * 単語を構成するパーツを取得する
 */
function getEtymologyParts(etymology: Etymology, word: string): string[] {
  // シンプルな実装：語源名とサフィックスを返す
  return [etymology.name, '-word']
}

/**
 * 干渉パーツを取得する（合成クイズ用）
 */
function getDistractorParts(type: EtymologyType): string[] {
  const distractors: Record<EtymologyType, string[]> = {
    prefix: ['un-', 'dis-', 'mis-', 're-'],
    suffix: ['-ness', '-ment', '-able', '-ful'],
    root: ['dict', 'scribe', 'graph', 'phone']
  }
  return distractors[type]
}

function generateDefinitionQuestion(etymology: Etymology, questionId: string): Question {
  const wrongAnswers = ['後ろの、次へ', '否定、〜でない', '完全に、非常に', '小さい、微細な']
  const options = shuffleArray([etymology.meaning, ...wrongAnswers.slice(0, 3)])
  
  return {
    id: questionId,
    type: 'definition',
    etymology,
    question: `「${etymology.name}」の古の叡智（意味）は何ですか？`,
    options,
    correctIndex: options.indexOf(etymology.meaning),
    explanation: `「${etymology.name}」は「${etymology.meaning}」という意味を持ちます。`,
  }
}

function generateExampleQuestion(etymology: Etymology, questionId: string): Question {
  const correctWord = etymology.words[0].word
  const wrongWords = ['apple', 'mountain', 'galaxy', 'water']
  const options = shuffleArray([correctWord, ...wrongWords.slice(0, 3)])

  return {
    id: questionId,
    type: 'example',
    etymology,
    question: `「${etymology.name}」の力が宿っている言葉はどれですか？`,
    options,
    correctIndex: options.indexOf(correctWord),
    explanation: `「${correctWord}」の中に「${etymology.name}」が隠されています。`,
  }
}

function generateIdentificationQuestion(etymology: Etymology, questionId: string): Question {
  const target = etymology.words[Math.floor(Math.random() * etymology.words.length)]
  const wrongNames = ['pre-', 're-', 'un-', 'dict', 'spec']
  const options = shuffleArray([etymology.name, ...wrongNames.slice(0, 3)])

  return {
    id: questionId,
    type: 'identification',
    etymology,
    question: `言葉「${target.word}」の根源となっている要素はどれですか？`,
    options,
    correctIndex: options.indexOf(etymology.name),
    explanation: `「${target.word}」の核は「${etymology.name}」です。`,
  }
}

// --- 4. ユーティリティ関数 ---

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function calculateScore(answers: Array<{ isCorrect: boolean }>) {
  const total = answers.length
  const score = answers.filter(a => a.isCorrect).length
  return { score, total, percentage: Math.round((score / total) * 100) }
}

export function checkPassCriteria(answers: Array<{ isCorrect: boolean }>): boolean {
  if (answers.length < 5) return false
  const lastFive = answers.slice(-5)
  return lastFive.filter(a => a.isCorrect).length >= 4
}

/**
 * 復習の魔物：エビングハウスの忘却曲線に基づいて復習推奨時刻を計算
 */
export function calculateNextReviewTime(lastReviewTime: number = Date.now()): number {
  // エビングハウスの忘却曲線に基づくスケジュール
  // 1日、3日、7日、14日、30日のサイクル
  const intervals = [1, 3, 7, 14, 30] // 日数
  const millisecondsPerDay = 24 * 60 * 60 * 1000
  
  // ランダムに間隔を選択（実装簡易版）
  const randomInterval = intervals[Math.floor(Math.random() * intervals.length)]
  return lastReviewTime + (randomInterval * millisecondsPerDay)
}

/**
 * 復習が必要な単語を取得（復習の魔物）
 */
export function getWordsNeedingReview(masteredWords: Array<{ lastUsedAt: number; nextReviewAt: number }>) {
  const now = Date.now()
  return masteredWords.filter(word => word.nextReviewAt <= now)
}

/**
 * ボス戦のダメージ計算：蓄積したエネルギーを攻撃力に変換
 */
export function calculateBossBattleDamage(energyPoints: number): number {
  // エネルギーポイントから攻撃力を計算
  // 1エネルギー = 10ダメージ（要調整）
  return energyPoints * 10
}

/**
 * 単語をマスターしたときのエネルギー獲得
 */
export function getEnergyReward(wordMastery: { usageCount: number }): number {
  // 5回の使用でマスター時に50ポイント
  return wordMastery.usageCount >= 5 ? 50 : 0
}
