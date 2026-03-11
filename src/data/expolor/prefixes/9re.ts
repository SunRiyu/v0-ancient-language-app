import { Question,Etymology } from "@/lib/quiz-types";

const reEtymology: Etymology = {
  id: "prefix-re",
  root: "re-",
  meaning: "後ろに、再び、元に、反対に",
  origin: "Latin 're-'",
  description: "「後ろへ」という方向性や、繰り返しの「再び」、元の状態へ戻す「回復・返却」などを表す接頭辞。基本的にはそのままの形で使われる。"
};

export const RE_QUIZ_QUESTIONS: Question[] = [
  {
    id: "re-1",
    question: "「re (後ろに)」＋「[ ? ] (置く)」で、「元の場所に置く ＝ 置き換える・戻す」という意味の 'replace' の、[ ? ] は？",
    options: ["place", "pact", "pose", "part"],
    correctAnswer: "place",
    explanation: "re（元の場所へ）+ place（置く）で、古いものをどけて新しいものを置く「取り替える」となります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "place", "ment", "able"],
    targetWord: "replace"
  },
  {
    id: "re-2",
    question: "「re (再び)」＋「[ ? ] (作る)」で、「再び作る ＝ 再生する・再現する」という意味の 'reproduce' の、[ ? ] は？",
    options: ["produce", "pose", "pact", "part"],
    correctAnswer: "produce",
    explanation: "re（再び）+ produce（生産する）で、子孫を増やす「繁殖する」や「複製する」という意味になります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "pro", "duc", "tion"],
    targetWord: "reproduce"
  },
  {
    id: "re-3",
    question: "「re (後ろに)」＋「[ ? ] (運ぶ)」で、「（情報を）後ろへ運び返す ＝ 報告する」という意味の 'report' の、[ ? ] は？",
    options: ["port", "pose", "press", "part"],
    correctAnswer: "port",
    explanation: "re（後ろへ/戻って）+ port（運ぶ）で、現場から情報を持ち帰って「報告する」となります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "port", "er", "ing"],
    targetWord: "report"
  },
  {
    id: "re-4",
    question: "「re (後ろに)」＋「[ ? ] (引く)」で、「（注意を）後ろへ引き戻す ＝ 減らす・縮小する」を意味する 'reduce' の、[ ? ] は？",
    options: ["duce", "duct", "dict", "voke"],
    correctAnswer: "duce",
    explanation: "re（後ろへ）+ duce（導く）で、元の小さい方へ導き戻す「減らす」という意味になります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "duce", "r", "tion"],
    targetWord: "reduce"
  },
  {
    id: "re-5",
    question: "「re (後ろに)」＋「[ ? ] (見る)」で、「（過去を）後ろに振り返って見る ＝ 復習・批評」を意味する 'review' の、[ ? ] は？",
    options: ["view", "vis", "vid", "vise"],
    correctAnswer: "view",
    explanation: "re（再び/後ろに）+ view（見る）で、もう一度よく見直す「再検討」や「復習」を指します。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "view", "er", "ing"],
    targetWord: "review"
  },
  {
    id: "re-6",
    question: "「re (後ろに)」＋「[ ? ] (叫ぶ)」で、「（相手の言葉に）向かって叫び返す ＝ 反論する・拒絶する」を意味する 'reject' 以外の単語 'reclaim' の、[ ? ] は？",
    options: ["claim", "clare", "close", "clude"],
    correctAnswer: "claim",
    explanation: "re（元に）+ claim（叫ぶ）で、失った権利などを「返せと叫ぶ ＝ 取り戻す・更生させる」となります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "claim", "ation", "ing"],
    targetWord: "reclaim"
  },
  {
    id: "re-7",
    question: "「re (反対に)」＋「[ ? ] (立つ)」で、「（相手に）向かって立つ ＝ 抵抗する」という意味の 'resist' の、[ ? ] は？",
    options: ["sist", "sta", "stit", "st"],
    correctAnswer: "sist",
    explanation: "re（反対して）+ sist（立つ）で、屈せずに立ち向かう「抵抗する」という意味です。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "sist", "ance", "ant"],
    targetWord: "resist"
  },
  {
    id: "re-8",
    question: "「re (後ろに)」＋「[ ? ] (呼ぶ)」で、「（出したものを）後ろへ呼び戻す ＝ 思い出す・撤回する」を意味する 'recall' の、[ ? ] は？",
    options: ["call", "nounce", "voke", "claim"],
    correctAnswer: "call",
    explanation: "re（後ろへ）+ call（呼ぶ）で、記憶を呼び戻す「思い出す」や、欠陥品を「回収する」となります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "call", "ing", "ed"],
    targetWord: "recall"
  },
  {
    id: "re-9",
    question: "「re (後ろに)」＋「[ ? ] (送る)」で、「（光などを）後ろへ送り出す ＝ 反射する・反映する」を意味する 'reflect' の、[ ? ] は？",
    options: ["flect", "flex", "flict", "flu"],
    correctAnswer: "flect",
    explanation: "re（後ろへ）+ flect（曲げる）で、当たったものが後ろへ曲がって戻る「反射」を意味します。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "flect", "ion", "ive"],
    targetWord: "reflect"
  },
  {
    id: "re-10",
    question: "「re (再び)」＋「[ ? ] (組む)」で、「再び組み立てる ＝ 再建する」という意味の 'reconstruct' の、[ ? ] は？",
    options: ["struct", "stroy", "strict", "strain"],
    correctAnswer: "struct",
    explanation: "re（再び）+ con（共に）+ struct（築く）で、壊れたものを「再建する」ことを意味します。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "con", "struct", "ion"],
    targetWord: "reconstruct"
  },
  {
    id: "re-11",
    question: "「re (再び)」＋「[ ? ] (現れる)」で、「再び現れる ＝ 復活する・再現する」を意味する 'reappear' の、[ ? ] は？",
    options: ["appear", "appoint", "apply", "approve"],
    correctAnswer: "appear",
    explanation: "re（再び）+ appear（現れる）で、一度消えたものが「再び姿を現す」となります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "ap", "pear", "ance"],
    targetWord: "reappear"
  },
  {
    id: "re-12",
    question: "「re (後ろに)」＋「[ ? ] (向く)」で、「（注意を）後ろへ向ける ＝ 言及する・参照する」という意味の 'refer' の、[ ? ] は？",
    options: ["fer", "fill", "fact", "fess"],
    correctAnswer: "fer",
    explanation: "re（後ろへ）+ fer（運ぶ）で、意識を後ろ（関連箇所）へ運ぶことから「言及する」となります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "fer", "ence", "ral"],
    targetWord: "refer"
  },
  {
    id: "re-13",
    question: "「re (後ろに)」＋「[ ? ] (閉じる)」で、「（秘密の扉を）後ろに開く ＝ 明らかにする」という意味の 'reveal' の、[ ? ] は？",
    options: ["veal", "veal", "vail", "vail"],
    correctAnswer: "veal",
    explanation: "re（反対に）+ veal（ベール/覆い）で、覆いを取り除く「明らかにする」という意味になります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "veal", "ing", "ation"],
    targetWord: "reveal"
  },
  {
    id: "re-14",
    question: "「re (後ろに)」＋「[ ? ] (保つ)」で、「（手元に）後ろに取っておく ＝ 予約する・蓄える」を意味する 'reserve' の、[ ? ] は？",
    options: ["serve", "sert", "serve", "serve"],
    correctAnswer: "serve",
    explanation: "re（後ろに）+ serve（保つ/守る）で、他の人に渡さないよう取っておく「予約する」となります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "serve", "ation", "ed"],
    targetWord: "reserve"
  },
  {
    id: "re-15",
    question: "「re (後ろに)」＋「[ ? ] (解く)」で、「（固まったものを）後ろへ解きほぐす ＝ 解決する・決心する」という意味の 'resolve' の、[ ? ] は？",
    options: ["solve", "serve", "voke", "vise"],
    correctAnswer: "solve",
    explanation: "re（強意：完全に）+ solve（解く）で、問題をきれいに解く、あるいは心を「決心させる」という意味になります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "solve", "ution", "ved"],
    targetWord: "resolve"
  },
  {
    id: "re-16",
    question: "「re (後ろに)」＋「[ ? ] (投げる)」で、「（相手の要求を）後ろへ投げ返す ＝ 拒絶する」を意味する 'reject' の、[ ? ] は？",
    options: ["ject", "join", "just", "judge"],
    correctAnswer: "ject",
    explanation: "re（後ろへ）+ ject（投げる）で、受け取らずに放り出す「拒絶する」となります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "ject", "ion", "ed"],
    targetWord: "reject"
  },
  {
    id: "re-17",
    question: "「re (再び)」＋「[ ? ] (覚える)」で、「再び心に留める ＝ 思い出す」を意味する 'remember' の、[ ? ] は？",
    options: ["member", "memory", "mind", "ment"],
    correctAnswer: "member",
    explanation: "re（再び）+ member（記憶/心）で、忘れていたものを再び心に呼び戻す「覚えている」となります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "mem", "ber", "ance"],
    targetWord: "remember"
  },
  {
    id: "re-18",
    question: "「re (後ろに)」＋「[ ? ] (保つ)」で、「（手元に）後ろに持ち続ける ＝ 保持する」を意味する 'retain' の、[ ? ] は？",
    options: ["tain", "tain", "tent", "tend"],
    correctAnswer: "tain",
    explanation: "re（後ろに）+ tain（保つ：containと同根）で、手放さずに「保持する」という意味です。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "tain", "er", "ention"],
    targetWord: "retain"
  },
  {
    id: "re-19",
    question: "「re (再び)」＋「[ ? ] (生きる)」で、「再び生きる ＝ 生き返る・復活する」を意味する 'revive' の、[ ? ] は？",
    options: ["vive", "voke", "vail", "verse"],
    correctAnswer: "vive",
    explanation: "re（再び）+ vive（生きる：surviveと同根）で、元気を吹き返す「復活する」を意味します。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "viv", "al", "ing"],
    targetWord: "revive"
  },
  {
    id: "re-20",
    question: "「re (後ろに)」＋「[ ? ] (書く)」で、「（書いたものを）後ろへ戻して登録する ＝ 登録・記録する」を意味する 'register' の、[ ? ] に近い語源は？",
    options: ["gist", "gest", "graph", "gram"],
    correctAnswer: "gist",
    explanation: "re（後ろに）+ gist（運ぶ/運ばれたもの：digestと同根）で、提出されたものを公式帳簿へ「持ち帰って記録する」となります。",
    category: "Compound",
    etymology: reEtymology,
    allParts: ["re", "gist", "er", "ration"],
    targetWord: "register"
  }
];