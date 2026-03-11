import { Question,Etymology } from "@/lib/quiz-types";

const proEtymology: Etymology = {
  id: "prefix-pro",
  root: "pro-",
  meaning: "前に、前方に、賛成して",
  origin: "Latin 'pro', Greek 'pro'",
  description: "「前方へ進む」という動きや、時間的に「あらかじめ」、または「〜に賛成（支持）する」ことを表す接頭辞。基本的にはそのままの形で使われる。"
};

export const PRO_QUIZ_QUESTIONS: Question[] = [
  {
    id: "pro-1",
    question: "「pro (前に)」＋「[ ? ] (行く)」で、「前に行く ＝ 前進する・続行する」という意味の 'proceed' の、[ ? ] は？",
    options: ["ceed", "cede", "cess", "it"],
    correctAnswer: "ceed",
    explanation: "pro（前に）+ ceed（行く）で、立ち止まらずに先へ進むことを意味します。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "ceed", "ure", "ing"],
    targetWord: "proceed"
  },
  {
    id: "pro-2",
    question: "「pro (前に)」＋「[ ? ] (導く)」で、「（価値を）前へ導き出す ＝ 生産する」という意味の 'produce' の、[ ? ] は？",
    options: ["duce", "duct", "dict", "voke"],
    correctAnswer: "duce",
    explanation: "pro（前に）+ duce（導く）で、世の中に新しいものを生み出す「生産する」となります。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "duce", "r", "tion"],
    targetWord: "produce"
  },
  {
    id: "pro-3",
    question: "「pro (前に)」＋「[ ? ] (投げる)」で、「（案を）前に投げる ＝ 計画・投影」を意味する 'project' の、[ ? ] は？",
    options: ["ject", "join", "just", "jure"],
    correctAnswer: "ject",
    explanation: "pro（前に）+ ject（投げる）で、アイデアを前方に提示する「計画」や、光を前に投げる「投影」を意味します。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "ject", "ion", "or"],
    targetWord: "project"
  },
  {
    id: "pro-4",
    question: "「pro (前に)」＋「[ ? ] (動かす)」で、「前へ動かす ＝ 昇進させる・促進する」という意味の 'promote' の、[ ? ] は？",
    options: ["mote", "move", "mit", "miss"],
    correctAnswer: "mote",
    explanation: "pro（前に）+ mote（動く：motionと同根）で、地位を上げたり、販売を促進したりすることを意味します。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "mot", "er", "ion"],
    targetWord: "promote"
  },
  {
    id: "pro-5",
    question: "「pro (前に)」＋「[ ? ] (呼ぶ)」で、「（感情を）前に呼び出す ＝ 引き起こす・挑発する」という意味の 'provoke' の、[ ? ] は？",
    options: ["voke", "voice", "vide", "vise"],
    correctAnswer: "voke",
    explanation: "pro（前に）+ voke（呼ぶ）で、相手の反応をわざと引き出す「挑発する」となります。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "voke", "active", "ation"],
    targetWord: "provoke"
  },
  {
    id: "pro-6",
    question: "「pro (前に)」＋「[ ? ] (見る)」で、「前もって見る ＝ 供給する・備える」という意味の 'provide' の、[ ? ] は？",
    options: ["vide", "vise", "view", "vid"],
    correctAnswer: "vide",
    explanation: "pro（前に）+ vide（見る：visualと同根）で、将来必要になるものをあらかじめ見て準備しておく「提供する」という意味です。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "vid", "e", "er"],
    targetWord: "provide"
  },
  {
    id: "pro-7",
    question: "「pro (前に)」＋「[ ? ] (言う)」で、「（みんなの）前で言う ＝ 公表する・発音する」を意味する 'pronounce' の、[ ? ] は？",
    options: ["nounce", "note", "nounce", "name"],
    correctAnswer: "nounce",
    explanation: "pro（前に）+ nounce（報告する/告げる）で、公に言葉を発することを意味します。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "nounc", "e", "iation"],
    targetWord: "pronounce"
  },
  {
    id: "pro-8",
    question: "「pro (前に)」＋「[ ? ] (約束する)」で、「前に送り出す ＝ 約束する」という意味の 'promise' の、[ ? ] は？",
    options: ["mise", "miss", "mit", "main"],
    correctAnswer: "mise",
    explanation: "pro（前に）+ mise（送る：missionと同根）で、相手に対して言葉をあらかじめ送っておく「約束」となります。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "mise", "ing", "d"],
    targetWord: "promise"
  },
  {
    id: "pro-9",
    question: "「pro (前に)」＋「[ ? ] (進む)」で、「（段階を）前に進める ＝ 進歩・経過」を意味する 'progress' の、[ ? ] は？",
    options: ["gress", "grade", "graph", "gram"],
    correctAnswer: "gress",
    explanation: "pro（前に）+ gress（歩む/行く）で、一歩ずつ前に進む「進歩」を意味します。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "gress", "ive", "ion"],
    targetWord: "progress"
  },
  {
    id: "pro-10",
    question: "「pro (前に)」＋「[ ? ] (守る)」で、「（攻撃の）前に立って守る ＝ 保護する」という意味の 'protect' の、[ ? ] は？",
    options: ["tect", "tain", "tend", "tract"],
    correctAnswer: "tect",
    explanation: "pro（前に）+ tect（覆う：tileの語源と同根）で、覆いをして守ることを意味します。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "tect", "ion", "ive"],
    targetWord: "protect"
  },
  {
    id: "pro-11",
    question: "「pro (前に)」＋「[ ? ] (引き延ばす)」で、「（時間を）前に引き延ばす ＝ 延長する」という意味の 'prolong' の、[ ? ] は？",
    options: ["long", "large", "low", "last"],
    correctAnswer: "long",
    explanation: "pro（前に）+ long（長い）で、期間を長く引き延ばすことを意味します。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "long", "ation", "ed"],
    targetWord: "prolong"
  },
  {
    id: "pro-12",
    question: "「pro (前に)」＋「[ ? ] (書く)」で、「（計画を）前もって書く ＝ 番組・計画」を意味する 'program' の、[ ? ] は？",
    options: ["gram", "graph", "grade", "gress"],
    correctAnswer: "gram",
    explanation: "pro（前に）+ gram（書かれたもの）で、事前に行程が書かれた「予定表」を指します。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "gram", "me", "ming"],
    targetWord: "program"
  },
  {
    id: "pro-13",
    question: "「pro (前に)」＋「[ ? ] (言う)」で、「（神の）代わりに言う ＝ 預言者」を意味する 'prophet' の、[ ? ] は？",
    options: ["phet", "fact", "fess", "phone"],
    correctAnswer: "phet",
    explanation: "pro（前に/代わりに）+ phet（話す：fableと同根）で、神の言葉を代弁する人を指します。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "phet", "ic", "y"],
    targetWord: "prophet"
  },
  {
    id: "pro-14",
    question: "「pro (前に)」＋「[ ? ] (告白する)」で、「（みんなの）前で認める ＝ 公言する・職業とする」を意味する 'profess' の、[ ? ] は？",
    options: ["fess", "fact", "fect", "flect"],
    correctAnswer: "fess",
    explanation: "pro（前に）+ fess（話す：confessと同根）で、公然と言うこと。転じて、誓いを立てて就く「専門職」を意味します。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "fess", "ion", "ional"],
    targetWord: "profess"
  },
  {
    id: "pro-15",
    question: "「pro (前に)」＋「[ ? ] (差し出す)」で、「（意見を）前に出す ＝ 提案する」という意味の 'propose' の、[ ? ] は？",
    options: ["pose", "posit", "pound", "port"],
    correctAnswer: "pose",
    explanation: "pro（前に）+ pose（置く）で、考えを目の前に置く「提案する」という意味になります。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "pose", "al", "ition"],
    targetWord: "propose"
  },
  {
    id: "pro-16",
    question: "「pro (前に)」＋「[ ? ] (追いかける)」で、「（獲物を）最後まで追いかける ＝ 遂行する・起訴する」を意味する 'prosecute' の、[ ? ] は？",
    options: ["secute", "sist", "serve", "sent"],
    correctAnswer: "secute",
    explanation: "pro（前に/最後まで）+ secute（続く：sequenceと同根）で、法的に追い詰める「起訴する」などの意味を持ちます。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "secut", "ion", "or"],
    targetWord: "prosecute"
  },
  {
    id: "pro-17",
    question: "「pro (前に)」＋「[ ? ] (良くなる)」で、「前もって良くなる ＝ 利益・上達」を意味する 'profit' の、[ ? ] は？",
    options: ["fit", "fact", "fect", "fill"],
    correctAnswer: "fit",
    explanation: "pro（前に/有利に）+ fit（作る/行う：factの変形）で、得られた成果や「利益」を指します。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "fit", "able", "ably"],
    targetWord: "profit"
  },
  {
    id: "pro-18",
    question: "「pro (前に)」＋「[ ? ] (伸ばす)」で、「（手を）前に伸ばす ＝ 提供する」という意味の 'proffer' の、[ ? ] は？",
    options: ["fer", "fill", "fact", "fess"],
    correctAnswer: "fer",
    explanation: "pro（前に）+ fer（運ぶ：offerと同根）で、物を差し出す「提供する」という硬い表現です。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "ffer", "ed", "ing"],
    targetWord: "proffer"
  },
  {
    id: "pro-19",
    question: "「pro (前に)」＋「[ ? ] (禁止する)」で、「（法律を）前に出して止める ＝ 禁止する」という意味の 'prohibit' の、[ ? ] は？",
    options: ["hibit", "habit", "hail", "hale"],
    correctAnswer: "hibit",
    explanation: "pro（前に/離れて）+ hibit（持つ：exhibitと同根）で、遠ざけて持っておく「禁止する」という意味になります。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "hibit", "ion", "ive"],
    targetWord: "prohibit"
  },
  {
    id: "pro-20",
    question: "「pro (前に)」＋「[ ? ] (流れる)」で、「（言葉が）前に流れ出る ＝ 豊富な」という意味の 'profuse' の、[ ? ] は？",
    options: ["fuse", "flu", "flex", "flect"],
    correctAnswer: "fuse",
    explanation: "pro（前に）+ fuse（注ぐ：confuseのfuseと同根）で、溢れんばかりに注ぎ出される「豊富な」という意味です。",
    category: "Compound",
    etymology: proEtymology,
    allParts: ["pro", "fuse", "ly", "ion"],
    targetWord: "profuse"
  }
];