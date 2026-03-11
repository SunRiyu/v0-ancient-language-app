import { Question,Etymology } from "@/lib/quiz-types";

const perEtymology: Etymology = {
  id: "prefix-per",
  root: "per-",
  meaning: "通って、完全に、過度に",
  origin: "Latin 'per'",
  description: "「〜を通り抜けて」という貫通や、最初から最後までやり遂げる「完全に（強調）」、または「過度に」を表す接頭辞。基本的には形の変化は少ない。"
};

export const PER_QUIZ_QUESTIONS: Question[] = [
  {
    id: "per-1",
    question: "「per (通って)」＋「[ ? ] (行く)」で、「（困難の中を）最後まで行く ＝ 耐える・持ちこたえる」という意味の 'persist' の、[ ? ] は？",
    options: ["sist", "sta", "stit", "st"],
    correctAnswer: "sist",
    explanation: "per（最後まで）+ sist（立つ）で、最後まで立ち続けることから「固執する」「持続する」という意味になります。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "sist", "ent", "ence"],
    targetWord: "persist"
  },
  {
    id: "per-2",
    question: "「per (通って)」＋「[ ? ] (鳴る)」で、「（仮面を）通して音が鳴る ＝ 人格・個人」を意味する 'person' の、[ ? ] は？",
    options: ["son", "phon", "ton", "sume"],
    correctAnswer: "son",
    explanation: "per（通して）+ son（音：soundと同根）で、役者の仮面を通して声が出ることから、その「役割・人間」を指すようになりました。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "son", "al", "ality"],
    targetWord: "person"
  },
  {
    id: "per-3",
    question: "「per (完全に)」＋「[ ? ] (作る)」で、「完全に作り上げる ＝ 完璧な」という意味の 'perfect' の、[ ? ] は？",
    options: ["fect", "fact", "fict", "flect"],
    correctAnswer: "fect",
    explanation: "per（完全に）+ fect（作る：factoryと同根）で、欠点なく作り終えた状態を指します。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "fect", "ly", "ion"],
    targetWord: "perfect"
  },
  {
    id: "per-4",
    question: "「per (通って)」＋「[ ? ] (形成する)」で、「（役割を）最後まで形にする ＝ 行う・演じる」を意味する 'perform' の、[ ? ] は？",
    options: ["form", "fact", "fess", "force"],
    correctAnswer: "form",
    explanation: "per（完全に）+ form（形作る）で、義務や役を最後まで形にすること、つまり「実行する」「演奏する」となります。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "form", "ance", "er"],
    targetWord: "perform"
  },
  {
    id: "per-5",
    question: "「per (通って)」＋「[ ? ] (来る)」で、「（心を）通り抜けてくる ＝ 説得する」という意味の 'persuade' の、[ ? ] は？",
    options: ["suade", "suage", "serve", "solve"],
    correctAnswer: "suade",
    explanation: "per（完全に）+ suade（甘くする/勧める）で、相手の心を完全にとろけさせて納得させる「説得する」という意味です。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "suade", "sion", "sive"],
    targetWord: "persuade"
  },
  {
    id: "per-6",
    question: "「per (通って)」＋「[ ? ] (見る)」で、「（全体を）通して見ること ＝ 視点・遠近法」を意味する 'perspective' の、[ ? ] は？",
    options: ["spect", "spise", "spire", "scribe"],
    correctAnswer: "spect",
    explanation: "per（通して）+ spect（見る）で、物事を見通す「視点」や「見通し」という意味になります。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "spect", "ive", "ly"],
    targetWord: "perspective"
  },
  {
    id: "per-7",
    question: "「per (通って)」＋「[ ? ] (息をする)」で、「（皮膚を）通して息をする ＝ 汗をかく」を意味する 'perspire' の、[ ? ] は？",
    options: ["spire", "spect", "sist", "serve"],
    correctAnswer: "spire",
    explanation: "per（通して）+ spire（息をする）で、皮膚の毛穴を通して水分が出る「発汗する」という意味です。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "spire", "ation", "ant"],
    targetWord: "perspire"
  },
  {
    id: "per-8",
    question: "「per (通って)」＋「[ ? ] (行く)」で、「（中を）通り抜ける ＝ 普及する・染み渡る」という意味の 'pervade' の、[ ? ] は？",
    options: ["vade", "vail", "voke", "verse"],
    correctAnswer: "vade",
    explanation: "per（通って）+ vade（行く：invadeのvadeと同根）で、隅々まで行き渡る「蔓延する」という意味になります。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "vade", "sive", "sion"],
    targetWord: "pervade"
  },
  {
    id: "per-9",
    question: "「per (通って)」＋「[ ? ] (捕らえる)」で、「（感覚を）通して捕らえる ＝ 知覚する」を意味する 'perceive' の、[ ? ] は？",
    options: ["ceive", "cept", "cip", "cap"],
    correctAnswer: "ceive",
    explanation: "per（完全に）+ ceive（取る/つかむ）で、情報を完全につかみ取る「気づく」「知覚する」となります。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "ceive", "ption", "ptible"],
    targetWord: "perceive"
  },
  {
    id: "per-10",
    question: "「per (ずっと)」＋「[ ? ] (とどまる)」で、「ずっととどまる ＝ 永続的な」という意味の 'permanent' の、[ ? ] は？",
    options: ["man", "main", "ment", "min"],
    correctAnswer: "man",
    explanation: "per（ずっと）+ man（とどまる：remainのmainと同根）で、途切れることなく続く「永遠の」を意味します。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "man", "ent", "ly"],
    targetWord: "permanent"
  },
  {
    id: "per-11",
    question: "「per (通って)」＋「[ ? ] (送る)」で、「（中を）通り抜けさせる ＝ 許可する」という意味の 'permit' の、[ ? ] は？",
    options: ["mit", "miss", "mote", "move"],
    correctAnswer: "mit",
    explanation: "per（通して）+ mit（送る）で、通行を許可する、あるいは何かをさせる「許可」を意味します。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "mit", "sion", "ted"],
    targetWord: "permit"
  },
  {
    id: "per-12",
    question: "「per (通って)」＋「[ ? ] (振る/回る)」で、「（本来の道から）通して回る ＝ 悪用する・ゆがめる」の意味の 'pervert' の、[ ? ] は？",
    options: ["vert", "verse", "voke", "vise"],
    correctAnswer: "vert",
    explanation: "per（離れて/悪く）+ vert（回る/向く）で、正しい方向からそらして「歪曲する」という意味です。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "vert", "sion", "ted"],
    targetWord: "pervert"
  },
  {
    id: "per-13",
    question: "「per (通って)」＋「[ ? ] (惑わす)」で、「完全に惑わす ＝ 困惑させる」という意味の 'perplex' の、[ ? ] は？",
    options: ["plex", "ply", "plore", "ploid"],
    correctAnswer: "plex",
    explanation: "per（完全に）+ plex（編む/重ねる）で、複雑に絡み合って「困惑させる」という意味になります。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "plex", "ity", "ed"],
    targetWord: "perplex"
  },
  {
    id: "per-14",
    question: "「per (通って)」＋「[ ? ] (追求する)」で、「最後まで追いかける ＝ 迫害する」を意味する 'persecute' の、[ ? ] は？",
    options: ["secute", "sequence", "serve", "sist"],
    correctAnswer: "secute",
    explanation: "per（最後まで）+ secute（続く/追う）で、執拗に追い回して「迫害する」となります。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "secut", "ion", "or"],
    targetWord: "persecute"
  },
  {
    id: "per-15",
    question: "「per (通って)」＋「[ ? ] (揺さぶる)」で、「（心を）激しく揺さぶる ＝ 不安にさせる」という意味の 'perturb' の、[ ? ] は？",
    options: ["turb", "turn", "ture", "tribute"],
    correctAnswer: "turb",
    explanation: "per（完全に）+ turb（乱す：disturbと同根）で、心をひどく「かき乱す」ことを意味します。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "turb", "ation", "ed"],
    targetWord: "perturb"
  },
  {
    id: "per-16",
    question: "「per (完全に)」＋「[ ? ] (取る)」で、「（権利を）完全に自分のものにする ＝ 適切な」という意味の 'pertinent' の、[ ? ] は？",
    options: ["tin", "tain", "tain", "tent"],
    correctAnswer: "tin",
    explanation: "per（完全に）+ tin（保持する/保つ）で、内容にしっかり結びついている「適切な・関連のある」という意味です。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "tin", "ent", "ence"],
    targetWord: "pertinent"
  },
  {
    id: "per-17",
    question: "「per (通って)」＋「[ ? ] (誓う)」で、「誓いを通り越す ＝ 偽証する」という意味の 'perjure' の、[ ? ] は？",
    options: ["jure", "just", "judge", "jury"],
    correctAnswer: "jure",
    explanation: "per（離れて/悪く）+ jure（誓う/法）で、正しい誓いを破って「偽証する」という意味になります。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "jur", "y", "ed"],
    targetWord: "perjure"
  },
  {
    id: "per-18",
    question: "「per (通って)」＋「[ ? ] (熟した)」で、「完全に熟した ＝ 前もっての・早すぎる」を意味する 'premature' の 'pre' ではなく 'perfect' と同種の 'per' 的用法を含む 'perish' の、[ ? ] は？",
    options: ["ish", "it", "ist", "is"],
    correctAnswer: "ish",
    explanation: "per（離れて/完全に）+ ish（行く：exitのitと同根）で、完全に去ってしまう「死ぬ・滅びる」という意味です。",
    category: "Roots",
    allParts: ["per", "ish", "able", "ed"],
    targetWord: "perish"
  },
  {
    id: "per-19",
    question: "「per (通って)」＋「[ ? ] (歩く)」で、「中を通って歩き回る ＝ 巡回する」という意味の 'perambulate' の、[ ? ] は？",
    options: ["ambul", "amble", "ample", "amble"],
    correctAnswer: "ambul",
    explanation: "per（通って）+ ambul（歩く：ambulanceと同根）で、歩き回る・検分するという意味です。",
    category: "Compound",
    etymology: perEtymology,
    allParts: ["per", "ambul", "ate", "or"],
    targetWord: "perambulate"
  },
  {
    id: "per-20",
    question: "「per (通って)」＋「[ ? ] (試す)」で、「（危険を）通って試す ＝ 危険」を意味する 'peril' の、[ ? ] は？",
    options: ["il", "ir", "el", "ol"],
    correctAnswer: "il",
    explanation: "per（試す：experienceと同根）で、試練を通り抜ける際の「危険」を意味するようになりました。",
    category: "Roots",
    allParts: ["per", "il", "ous", "ly"],
    targetWord: "peril"
  }
];