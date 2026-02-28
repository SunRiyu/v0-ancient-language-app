import {
  Etymology,
  EtymologyType,
  Question,
  QuestionType,
  ANCIENT_WORLD_FLAVORS,
  DerivedWord,
  CombinationQuestion,
  CompoundWordEntry,
} from './quiz-types'

// === 1. 合成単語データベース ===
// 2つの単語（辞）を組み合わせて新しい単語を作る

export const compoundWords: CompoundWordEntry[] = [
  // 基本的な合成単語
  { id: 1, part1: 'sun', part2: 'flower', resultWord: 'sunflower', meaning: '向日葵', example: 'Sunflowers are yellow.' },
  { id: 2, part1: 'rain', part2: 'bow', resultWord: 'rainbow', meaning: '虹', example: 'A beautiful rainbow appeared.' },
  { id: 3, part1: 'blue', part2: 'bell', resultWord: 'bluebell', meaning: 'ヤマアジサイ', example: 'Bluebells grow in forests.' },
  { id: 4, part1: 'honey', part2: 'bee', resultWord: 'honeybee', meaning: '蜜蜂', example: 'Honeybees make honey.' },
  { id: 5, part1: 'water', part2: 'melon', resultWord: 'watermelon', meaning: 'スイカ', example: 'Watermelon is sweet and refreshing.' },
  { id: 6, part1: 'butter', part2: 'fly', resultWord: 'butterfly', meaning: '蝶々', example: 'A beautiful butterfly landed on the flower.' },
  { id: 7, part1: 'straw', part2: 'berry', resultWord: 'strawberry', meaning: 'イチゴ', example: 'Strawberries are delicious.' },
  { id: 8, part1: 'lady', part2: 'bug', resultWord: 'ladybug', meaning: 'テントウムシ', example: 'The ladybug is red and spotted.' },
  { id: 9, part1: 'tooth', part2: 'brush', resultWord: 'toothbrush', meaning: '歯ブラシ', example: 'Brush your teeth with a toothbrush.' },
  { id: 10, part1: 'tooth', part2: 'paste', resultWord: 'toothpaste', meaning: '歯磨き粉', example: 'Use toothpaste to clean your teeth.' },
  
  // 複合動詞・名詞
  { id: 11, part1: 'sun', part2: 'set', resultWord: 'sunset', meaning: '日没', example: 'The sunset was beautiful.' },
  { id: 12, part1: 'sun', part2: 'rise', resultWord: 'sunrise', meaning: '日の出', example: 'I woke up for the sunrise.' },
  { id: 13, part1: 'moon', part2: 'light', resultWord: 'moonlight', meaning: '月光', example: 'The moonlight illuminated the path.' },
  { id: 14, part1: 'star', part2: 'fish', resultWord: 'starfish', meaning: 'ヒトデ', example: 'Starfish live in the ocean.' },
  { id: 15, part1: 'fire', part2: 'fly', resultWord: 'firefly', meaning: 'ホタル', example: 'Fireflies glow in the dark.' },
  { id: 16, part1: 'snow', part2: 'man', resultWord: 'snowman', meaning: '雪だるま', example: 'We built a snowman in winter.' },
  { id: 17, part1: 'rain', part2: 'coat', resultWord: 'raincoat', meaning: 'レインコート', example: 'Wear a raincoat when it rains.' },
  { id: 18, part1: 'wind', part2: 'mill', resultWord: 'windmill', meaning: '風車', example: 'The windmill rotates in the wind.' },
  { id: 19, part1: 'sand', part2: 'box', resultWord: 'sandbox', meaning: '砂場', example: 'Children play in the sandbox.' },
  { id: 20, part1: 'foot', part2: 'ball', resultWord: 'football', meaning: 'サッカー/アメリカンフットボール', example: 'Football is a popular sport.' },
  
  // 複合名詞（建築物・場所）
  { id: 21, part1: 'light', part2: 'house', resultWord: 'lighthouse', meaning: '灯台', example: 'The lighthouse guides ships.' },
  { id: 22, part1: 'green', part2: 'house', resultWord: 'greenhouse', meaning: 'ビニールハウス', example: 'Plants grow in a greenhouse.' },
  { id: 23, part1: 'bird', part2: 'house', resultWord: 'birdhouse', meaning: '鳥小屋', example: 'We put up a birdhouse for the birds.' },
  { id: 24, part1: 'home', part2: 'work', resultWord: 'homework', meaning: '宿題', example: 'I finished my homework.' },
  { id: 25, part1: 'class', part2: 'room', resultWord: 'classroom', meaning: '教室', example: 'The classroom is full of students.' },
  { id: 26, part1: 'bed', part2: 'room', resultWord: 'bedroom', meaning: '寝室', example: 'My bedroom is very quiet.' },
  { id: 27, part1: 'bath', part2: 'room', resultWord: 'bathroom', meaning: 'トイレ/浴室', example: 'The bathroom is upstairs.' },
  { id: 28, part1: 'living', part2: 'room', resultWord: 'livingroom', meaning: 'リビング', example: 'We watch TV in the living room.' },
  { id: 29, part1: 'dining', part2: 'room', resultWord: 'diningroom', meaning: 'ダイニング', example: 'We eat in the dining room.' },
  { id: 30, part1: 'play', part2: 'ground', resultWord: 'playground', meaning: '遊び場', example: 'Children play in the playground.' },
  
  // 複合動詞・時間関連
  { id: 31, part1: 'day', part2: 'time', resultWord: 'daytime', meaning: '昼間', example: 'We work during daytime.' },
  { id: 32, part1: 'night', part2: 'time', resultWord: 'nighttime', meaning: '夜間', example: 'Owls hunt at nighttime.' },
  { id: 33, part1: 'week', part2: 'end', resultWord: 'weekend', meaning: '週末', example: 'I rest on the weekend.' },
  { id: 34, part1: 'birth', part2: 'day', resultWord: 'birthday', meaning: '誕生日', example: 'My birthday is in May.' },
  { id: 35, part1: 'every', part2: 'day', resultWord: 'everyday', meaning: '毎日', example: 'I exercise every day.' },
  { id: 36, part1: 'mid', part2: 'night', resultWord: 'midnight', meaning: '真夜中', example: 'The event ended at midnight.' },
  { id: 37, part1: 'after', part2: 'noon', resultWord: 'afternoon', meaning: '午後', example: 'We meet in the afternoon.' },
  { id: 38, part1: 'out', part2: 'side', resultWord: 'outside', meaning: '外側', example: 'Let\'s play outside.' },
  { id: 39, part1: 'up', part2: 'stairs', resultWord: 'upstairs', meaning: '階上', example: 'The bedroom is upstairs.' },
  { id: 40, part1: 'down', part2: 'stairs', resultWord: 'downstairs', meaning: '階下', example: 'The kitchen is downstairs.' },
  
  // 複合形容詞・その他
  { id: 41, part1: 'black', part2: 'board', resultWord: 'blackboard', meaning: '黒板', example: 'The teacher writes on the blackboard.' },
  { id: 42, part1: 'white', part2: 'board', resultWord: 'whiteboard', meaning: 'ホワイトボード', example: 'We use a whiteboard for presentations.' },
  { id: 43, part1: 'bed', part2: 'time', resultWord: 'bedtime', meaning: '就寝時刻', example: 'Bedtime is at 9 PM.' },
  { id: 44, part1: 'meal', part2: 'time', resultWord: 'mealtime', meaning: '食事時間', example: 'Mealtime is important for family.' },
  { id: 45, part1: 'free', part2: 'way', resultWord: 'freeway', meaning: 'フリーウェイ/高速道路', example: 'We drive on the freeway.' },
  { id: 46, part1: 'high', part2: 'way', resultWord: 'highway', meaning: '幹線道路', example: 'The highway is busy at rush hour.' },
  { id: 47, part1: 'air', part2: 'port', resultWord: 'airport', meaning: '空港', example: 'We arrived at the airport.' },
  { id: 48, part1: 'sea', part2: 'port', resultWord: 'seaport', meaning: '海港', example: 'Ships dock at the seaport.' },
  { id: 49, part1: 'rail', part2: 'way', resultWord: 'railway', meaning: '鉄道', example: 'The railway connects cities.' },
  { id: 50, part1: 'hand', part2: 'bag', resultWord: 'handbag', meaning: 'ハンドバッグ', example: 'She carries a designer handbag.' },
]

// === 2. 語源ライブラリデータ (簡略版：合成単語用) ===
export const etymologyLibrary: Record<string, Record<EtymologyType, Etymology[]>> = {
  seeker: {
    prefix: [],
    suffix: [],
    root: [],
  },
  sage: {
    prefix: [],
    suffix: [],
    root: [],
  },
}

// === 3. クイズ生成メインロジック ===

export function getRandomEtymology(course: 'seeker' | 'sage', type: EtymologyType): Etymology {
  // 互換性のため空のオブジェクトを返す（使用されない）
  return { id: 0, name: '', meaning: '', language: '', description: '', words: [] }
}

export function generateQuestions(etymology: Etymology, type: EtymologyType): Question[] {
  // ランダムに5つの合成単語クイズを生成
  const selectedWords = getRandomCompoundWords(5)
  const questions: Question[] = selectedWords.map((compound, index) => 
    generateCompoundQuestionFromEntry(compound, `q_${index}`)
  )
  return questions
}

/**
 * ランダムに複数の合成単語を選択
 */
function getRandomCompoundWords(count: number): CompoundWordEntry[] {
  const shuffled = compoundWords.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, compoundWords.length))
}

/**
 * 合成単語エントリから問題を生成
 */
function generateCompoundQuestionFromEntry(
  compound: CompoundWordEntry,
  questionId: string
): CombinationQuestion {
  // 正解パーツ
  const correctParts = [compound.part1, compound.part2]
  
  // 干渉パーツを他の合成単語から取得
  const distractorParts = getDistractorWords(compound, 4)
  
  // すべてのパーツをシャッフル
  const allParts = shuffleArray([...correctParts, ...distractorParts])

  return {
    id: questionId,
    type: 'combination',
    etymology: { id: compound.id, name: compound.resultWord, meaning: compound.meaning, language: 'English', description: '', words: [] },
    question: `次の2つの単語を組み合わせて、新しい単語を作りなさい。`,
    options: allParts,
    correctIndex: 0,
    explanation: `「${compound.part1}」と「${compound.part2}」を組み合わせると「${compound.resultWord}」になります。意味：${compound.meaning}`,
    targetWord: compound.resultWord,
    allParts,
  } as CombinationQuestion
}

/**
 * 干渉パーツを取得（他の合成単語から無関係なパーツを取得）
 */
function getDistractorWords(currentCompound: CompoundWordEntry, count: number): string[] {
  const distractors: string[] = []
  const usedWords = new Set([currentCompound.part1, currentCompound.part2])
  
  // ランダムに他の単語を取得
  for (let i = 0; i < compoundWords.length && distractors.length < count; i++) {
    const randomCompound = compoundWords[Math.floor(Math.random() * compoundWords.length)]
    if (!usedWords.has(randomCompound.part1)) {
      distractors.push(randomCompound.part1)
      usedWords.add(randomCompound.part1)
    }
    if (distractors.length < count && !usedWords.has(randomCompound.part2)) {
      distractors.push(randomCompound.part2)
      usedWords.add(randomCompound.part2)
    }
  }
  
  return distractors.slice(0, count)
}

// === 4. ユーティリティ関数 ===

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
