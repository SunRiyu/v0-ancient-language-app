import {
  Etymology,
  EtymologyType,
  Question,
  QuestionType,
  ANCIENT_WORLD_FLAVORS,
} from './quiz-types'

// Etymology library data
export const etymologyLibrary = {
  seeker: {
    prefix: [
      { id: 1, name: 'pre-', meaning: '前に、前の', language: 'ラテン語', examples: ['prefix', 'preview', 'prepare'] },
      { id: 2, name: 'un-', meaning: '〜でない、逆の', language: 'ゲルマン語', examples: ['unhappy', 'undo', 'unknown'] },
      { id: 3, name: 're-', meaning: '再び、戻す', language: 'ラテン語', examples: ['review', 'replay', 'reaction'] },
      { id: 4, name: 'mis-', meaning: '間違った、悪い', language: 'ゲルマン語', examples: ['mistake', 'mislead', 'misunderstand'] },
      { id: 5, name: 'over-', meaning: '超える、上に', language: 'ゲルマン語', examples: ['overcome', 'overlap', 'overwork'] },
    ],
    suffix: [
      { id: 1, name: '-tion', meaning: '行為、状態', language: 'ラテン語', examples: ['action', 'nation', 'education'] },
      { id: 2, name: '-able', meaning: '可能な', language: 'ラテン語', examples: ['readable', 'comfortable', 'valuable'] },
      { id: 3, name: '-ment', meaning: '状態、結果', language: 'ラテン語', examples: ['movement', 'agreement', 'environment'] },
      { id: 4, name: '-ness', meaning: '性質、状態', language: 'ゲルマン語', examples: ['happiness', 'darkness', 'kindness'] },
      { id: 5, name: '-ly', meaning: '〜のように、副詞形', language: 'ゲルマン語', examples: ['quickly', 'slowly', 'finally'] },
    ],
    root: [
      { id: 1, name: 'dict', meaning: '言う', language: 'ラテン語', examples: ['dictate', 'dictionary', 'predict'] },
      { id: 2, name: 'port', meaning: '運ぶ', language: 'ラテン語', examples: ['import', 'export', 'transport'] },
      { id: 3, name: 'scribe', meaning: '書く', language: 'ラテン語', examples: ['describe', 'prescribe', 'manuscript'] },
      { id: 4, name: 'graph', meaning: '書く', language: 'ギリシャ語', examples: ['photograph', 'biography', 'autograph'] },
      { id: 5, name: 'phon', meaning: '音', language: 'ギリシャ語', examples: ['telephone', 'microphone', 'symphony'] },
    ],
  },
  sage: {
    prefix: [
      { id: 6, name: 'pro-', meaning: '前へ、賛成して', language: 'ラテン語', examples: ['progress', 'produce', 'promote'] },
      { id: 7, name: 'con- / com-', meaning: '共に、完全に', language: 'ラテン語', examples: ['connect', 'combine', 'company'] },
      { id: 8, name: 'de-', meaning: '離れて、下に、否定', language: 'ラテン語', examples: ['depart', 'decrease', 'decline'] },
      { id: 9, name: 'dis-', meaning: '離れて、否定', language: 'ラテン語', examples: ['dislike', 'discover', 'distance'] },
      { id: 10, name: 'in- / im-', meaning: '中に、否定', language: 'ラテン語', examples: ['include', 'impossible', 'input'] },
    ],
    suffix: [
      { id: 6, name: '-ful', meaning: '〜に満ちた', language: 'ゲルマン語', examples: ['beautiful', 'useful', 'hopeful'] },
      { id: 7, name: '-less', meaning: '〜を欠いている', language: 'ゲルマン語', examples: ['careless', 'homeless', 'fearless'] },
      { id: 8, name: '-ist', meaning: '〜する人、主義者', language: 'ギリシャ語', examples: ['artist', 'scientist', 'pianist'] },
      { id: 9, name: '-ize', meaning: '〜化する', language: 'ギリシャ語', examples: ['realize', 'organize', 'specialize'] },
      { id: 10, name: '-ology', meaning: '学問、科学', language: 'ギリシャ語', examples: ['biology', 'psychology', 'ecology'] },
    ],
    root: [
      { id: 6, name: 'spect', meaning: '見る', language: 'ラテン語', examples: ['respect', 'inspect', 'spectator'] },
      { id: 7, name: 'vis / vid', meaning: '見る', language: 'ラテン語', examples: ['visit', 'visible', 'video'] },
      { id: 8, name: 'struct', meaning: '建てる', language: 'ラテン語', examples: ['structure', 'construct', 'destruct'] },
      { id: 9, name: 'tract', meaning: '引く', language: 'ラテン語', examples: ['attract', 'contract', 'abstract'] },
      { id: 10, name: 'bio', meaning: '生、生命', language: 'ギリシャ語', examples: ['biology', 'biography', 'antibiotic'] },
    ],
  },
}

export function getRandomEtymology(
  course: 'seeker' | 'sage',
  type: EtymologyType
): Etymology {
  const etymologies = etymologyLibrary[course][type]
  return etymologies[Math.floor(Math.random() * etymologies.length)]
}

export function generateQuestions(etymology: Etymology, type: EtymologyType): Question[] {
  const questionTypes: QuestionType[] = ['definition', 'example', 'identification', 'combination']
  const questions: Question[] = []

  // Generate 4-6 questions with different types
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
        question = generateCombinationQuestion(etymology, questionId, type)
        break
    }

    questions.push(question)
  }

  return questions
}

function generateDefinitionQuestion(etymology: Etymology, questionId: string): Question {
  const wrongAnswers = getWrongDefinitions(etymology)
  const options = shuffleArray([etymology.meaning, ...wrongAnswers])
  const correctIndex = options.indexOf(etymology.meaning)

  return {
    id: questionId,
    type: 'definition',
    etymology,
    question: `「${etymology.name}」の意味は何ですか？`,
    options,
    correctIndex,
    explanation: `「${etymology.name}」は${etymology.language}で「${etymology.meaning}」という意味です。`,
  }
}

function generateExampleQuestion(etymology: Etymology, questionId: string): Question {
  const correctExample = etymology.examples[0]
  const wrongExamples = getWrongExamples(etymology)
  const options = shuffleArray([correctExample, ...wrongExamples])
  const correctIndex = options.indexOf(correctExample)

  return {
    id: questionId,
    type: 'example',
    etymology,
    question: `「${etymology.name}」を含む単語はどれですか？`,
    options,
    correctIndex,
    explanation: `「${correctExample}」は「${etymology.name}」（${etymology.meaning}）を含んでいます。`,
  }
}

function generateIdentificationQuestion(etymology: Etymology, questionId: string): Question {
  const correctExample = etymology.examples[Math.floor(Math.random() * etymology.examples.length)]
  const options = [etymology.name, ...getWrongEtymologyNames(etymology)]
  const shuffled = shuffleArray(options)
  const correctIndex = shuffled.indexOf(etymology.name)

  return {
    id: questionId,
    type: 'identification',
    etymology,
    question: `「${correctExample}」に含まれる語源要素は何ですか？`,
    options: shuffled,
    correctIndex,
    explanation: `「${correctExample}」は「${etymology.name}」（${etymology.meaning}）を含んでいます。`,
  }
}

function generateCombinationQuestion(
  etymology: Etymology,
  questionId: string,
  type: EtymologyType
): Question {
  // For combination questions, we create scenarios about prefix + root combinations
  const meanings = [
    `${etymology.meaning}の状態`,
    `${etymology.meaning}を行う`,
    `${etymology.meaning}されたもの`,
    `${etymology.meaning}できない`,
  ]

  const options = shuffleArray(meanings)
  const correctIndex = 0

  return {
    id: questionId,
    type: 'combination',
    etymology,
    question: `「${etymology.name}」と他の要素が組み合わさるとき、どのような意味が生まれやすいですか？`,
    options,
    correctIndex,
    explanation: `「${etymology.name}」（${etymology.meaning}）という意味の語源要素を組み合わせることで、様々な単語が作られます。`,
  }
}

function getWrongDefinitions(etymology: Etymology): string[] {
  const definitions = [
    '次の、後ろの',
    'から遠く離れた',
    'の中の小さな',
    '完全に失われた',
  ]
  return definitions.filter(d => d !== etymology.meaning).slice(0, 3)
}

function getWrongExamples(etymology: Etymology): string[] {
  const allExamples = ['kitchen', 'mountain', 'elephant', 'bicycle', 'calendar', 'computer', 'library']
  return allExamples.filter(ex => !etymology.examples.includes(ex)).slice(0, 3)
}

function getWrongEtymologyNames(etymology: Etymology): string[] {
  const names = ['pre-', 'un-', 're-', 'mis-', '-tion', '-able', '-ment', 'dict', 'port', 'graph', 'phon']
  return names.filter(n => n !== etymology.name).slice(0, 3)
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function calculateScore(answers: Array<{ isCorrect: boolean }>): {
  score: number
  total: number
  percentage: number
} {
  const total = answers.length
  const score = answers.filter(a => a.isCorrect).length
  return {
    score,
    total,
    percentage: Math.round((score / total) * 100),
  }
}

export function checkPassCriteria(answers: Array<{ isCorrect: boolean }>): boolean {
  // Last 5 answers: need 4 or more correct
  if (answers.length < 5) return false
  const lastFive = answers.slice(-5)
  const correctCount = lastFive.filter(a => a.isCorrect).length
  return correctCount >= 4
}

export function getAncientFlavorText(type: QuestionType): string {
  const flavors = ANCIENT_WORLD_FLAVORS[type]
  return flavors[Math.floor(Math.random() * flavors.length)]
}
