import { Question, Etymology } from "./quiz-types";

/**
 * 接頭辞の定義
 */
export const PREFIX_SETS = {
  common: {
    name: '基本接頭辞',
    description: 'よく使われる接頭辞を学ぶ',
    roots: ['spect', 'dict', 'port', 'ced-cess', 'cap-cept'],
  },
  advanced: {
    name: '応用接頭辞',
    description: 'より複雑な接頭辞を学ぶ',
    roots: ['fer', 'mit-miss', 'sta-stit', 'ten-tain', 'scrib-script'],
  },
}

/**
 * 語源参考書に基づいた本格的な語源データ
 * 英語の語彙の約6〜7割を占めると言われるラテン語・ギリシャ語の語根を網羅しています。
 */
export const ETIMOLOGY_DATA: Etymology[] = [
  {
    id: "spect",
    root: "spect / spic",
    meaning: "見る (to look)",
    origin: "Latin 'spectare'",
    examples: [
      { word: "inspect", meaning: "検査する (中を見る)", components: "in (中) + spect (見る)" },
      { word: "respect", meaning: "尊敬する (繰り返し見る)", components: "re (再び) + spect (見る)" },
      { word: "prospect", meaning: "見込み (前を見る)", components: "pro (前) + spect (見る)" },
      { word: "suspect", meaning: "疑う (下からこっそり見る)", components: "sub (下) + spect (見る)" },
      { word: "spectacle", meaning: "壮観・光景 (見られるもの)", components: "spect (見る) + acle (もの)" }
    ]
  },
  {
    id: "dict",
    root: "dict",
    meaning: "言う (to say / to speak)",
    origin: "Latin 'dicere'",
    examples: [
      { word: "predict", meaning: "予言する (前に言う)", components: "pre (前) + dict (言う)" },
      { word: "contradict", meaning: "矛盾する (反対を言う)", components: "contra (反対) + dict (言う)" },
      { word: "dictate", meaning: "命令する / 書き取らせる (言ったことをさせる)", components: "dict (言う) + ate (動詞化)" },
      { word: "verdict", meaning: "判決 (真実を言う)", components: "ver (真実) + dict (言う)" },
      { word: "indicate", meaning: "指し示す (中に向かって言う)", components: "in (中) + dic (言う)" }
    ]
  },
  {
    id: "port",
    root: "port",
    meaning: "運ぶ (to carry)",
    origin: "Latin 'portare'",
    examples: [
      { word: "import", meaning: "輸入する (中に運ぶ)", components: "in (中) + port (運ぶ)" },
      { word: "export", meaning: "輸出する (外に運ぶ)", components: "ex (外) + port (運ぶ)" },
      { word: "transport", meaning: "輸送する (越えて運ぶ)", components: "trans (越えて) + port (運ぶ)" },
      { word: "portable", meaning: "持ち運び可能な", components: "port (運ぶ) + able (できる)" },
      { word: "support", meaning: "支える (下から運ぶ)", components: "sub (下) + port (運ぶ)" }
    ]
  },
  {
    id: "ced-cess",
    root: "ced / cess / ceed",
    meaning: "行く / 譲る (to go / yield)",
    origin: "Latin 'cedere'",
    examples: [
      { word: "proceed", meaning: "前進する (前に進む)", components: "pro (前) + ceed (行く)" },
      { word: "exceed", meaning: "超える (外へ/限度を超えて行く)", components: "ex (外) + ceed (行く)" },
      { word: "access", meaning: "接近 / 利用権 (〜へ行くこと)", components: "ad (〜へ) + cess (行く)" },
      { word: "recess", meaning: "休憩 (後ろへ退くこと)", components: "re (後ろ) + cess (行く)" },
      { word: "succeed", meaning: "成功する / 継承する (後に続く)", components: "sub (下/後に) + ceed (行く)" }
    ]
  },
  {
    id: "cap-cept",
    root: "cap / cept / cip",
    meaning: "取る / つかむ (to take / catch)",
    origin: "Latin 'capere'",
    examples: [
      { word: "accept", meaning: "受け入れる (〜へ取る)", components: "ad (〜へ) + cept (取る)" },
      { word: "except", meaning: "〜を除いて (外に取る)", components: "ex (外) + cept (取る)" },
      { word: "capture", meaning: "捕らえる (つかむこと)", components: "cap (取る) + ture (名詞化)" },
      { word: "anticipate", meaning: "予期する (前に取る)", components: "anti (前) + cip (取る) + ate (動詞化)" },
      { word: "capacity", meaning: "収容能力 (取れる量)", components: "cap (取る) + acity (名詞化)" }
    ]
  },
  {
    id: "fer",
    root: "fer",
    meaning: "運ぶ / もたらす (to carry / bring)",
    origin: "Latin 'ferre'",
    examples: [
      { word: "transfer", meaning: "移動させる (越えて運ぶ)", components: "trans (越えて) + fer (運ぶ)" },
      { word: "offer", meaning: "提供する (〜へ運ぶ)", components: "ob (〜へ) + fer (運ぶ)" },
      { word: "prefer", meaning: "〜を好む (前に運ぶ/置く)", components: "pre (前) + fer (運ぶ)" },
      { word: "refer", meaning: "言及する / 参照する (戻って運ぶ)", components: "re (戻る) + fer (運ぶ)" },
      { word: "suffer", meaning: "苦しむ (下で運ぶ/耐える)", components: "sub (下) + fer (運ぶ)" }
    ]
  },
  {
    id: "mit-miss",
    root: "mit / miss",
    meaning: "送る (to send)",
    origin: "Latin 'mittere'",
    examples: [
      { word: "admit", meaning: "認める (〜へ送る/入れる)", components: "ad (〜へ) + mit (送る)" },
      { word: "dismiss", meaning: "解散させる (バラバラに送る)", components: "dis (離れて) + miss (送る)" },
      { word: "transmit", meaning: "送信する (越えて送る)", components: "trans (越えて) + mit (送る)" },
      { word: "emit", meaning: "放出する (外に送る)", components: "e/ex (外) + mit (送る)" },
      { word: "mission", meaning: "使命 (送られたこと)", components: "miss (送る) + ion (名詞化)" }
    ]
  },
  {
    id: "sta-stit",
    root: "sta / stit / sist",
    meaning: "立つ (to stand)",
    origin: "Latin 'stare'",
    examples: [
      { word: "stable", meaning: "安定した (立っていられる)", components: "sta (立つ) + able (できる)" },
      { word: "distant", meaning: "遠い (離れて立っている)", components: "dis (離れて) + sta (立つ) + nt (形容詞化)" },
      { word: "assist", meaning: "援助する (側に立つ)", components: "ad (〜の側に) + sist (立つ)" },
      { word: "exist", meaning: "存在する (外に立ち現れる)", components: "ex (外) + sist (立つ)" },
      { word: "substitute", meaning: "代用する (下に立たせる)", components: "sub (下) + stit (立つ)" }
    ]
  },
  {
    id: "ten-tain",
    root: "ten / tain / tin",
    meaning: "保つ / 持つ (to hold)",
    origin: "Latin 'tenere'",
    examples: [
      { word: "maintain", meaning: "維持する (手で保つ)", components: "main (手) + tain (保つ)" },
      { word: "contain", meaning: "含む (共に持つ)", components: "con (共に) + tain (持つ)" },
      { word: "retain", meaning: "保持する (後ろに取っておく)", components: "re (後ろに) + tain (持つ)" },
      { word: "obtain", meaning: "手に入れる (〜に向かって持つ)", components: "ob (〜に対して) + tain (持つ)" },
      { word: "continue", meaning: "続ける (共に保ち続ける)", components: "con (共に) + tin (保つ) + ue (動詞化)" }
    ]
  },
  {
    id: "scrib-script",
    root: "scrib / script",
    meaning: "書く (to write)",
    origin: "Latin 'scribere'",
    examples: [
      { word: "describe", meaning: "描写する (書き留める)", components: "de (下に) + scribe (書く)" },
      { word: "subscribe", meaning: "署名する / 購読する (下に書く)", components: "sub (下に) + scribe (書く)" },
      { word: "prescribe", meaning: "処方する (前に書いておく)", components: "pre (前に) + scribe (書く)" },
      { word: "manuscript", meaning: "原稿 (手で書いたもの)", components: "manu (手) + script (書く)" },
      { word: "postscript", meaning: "追伸 (後に書いたもの)", components: "post (後に) + script (書く)" }
    ]
  }
];

/**
 * ユーティリティ関数（必要に応じて他のページから呼び出されます）
 */
export const getEtymologyById = (id: string) => {
  return ETIMOLOGY_DATA.find((e) => e.id === id);
};

export const calculateScore = (answers: { isCorrect: boolean }[]) => {
  const score = answers.filter(a => a.isCorrect).length;
  return { score };
};

export const checkPassCriteria = (answers: { isCorrect: boolean }[]) => {
  if (answers.length === 0) return false;
  const score = answers.filter(a => a.isCorrect).length;
  const rate = score / answers.length;
  return rate >= 0.8; // 80%以上で合格とする場合
};

/**
 * 接頭辞セットから問題を生成する
 */
export const generateQuestions = (params: any, type: string): Question[] => {
  // 語源データから合成クイズ形式の問題を生成
  const questions: CombinationQuestion[] = ETIMOLOGY_DATA.map((etymology, index) => ({
    id: String(index + 1),
    type: 'combination',
    question: `『${etymology.root}』の意味から、正しい単語を作ってください。`,
    options: etymology.examples.slice(0, 4).map(ex => ex.word),
    correctAnswer: etymology.examples[0].word,
    correctIndex: 0,
    explanation: etymology.examples[0].components,
    category: 'Compound',
    etymology,
    allParts: etymology.root.split('/').map(r => r.trim()),
    targetWord: etymology.examples[0].word,
  }));
  
  return questions;
};
