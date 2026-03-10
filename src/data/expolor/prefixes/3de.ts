import { Question,Etymology } from "@/lib/quiz-types";

const deEtymology: Etymology = {
  id: "prefix-de",
  root: "de-",
  meaning: "離れて、下に、否定、完全",
  origin: "Latin 'de'",
  description: "「離れる」「下へ」という方向性や、反対の意味にする「否定・除去」、さらには「完全に」という強調を表す接頭辞。"
};

export const DE_QUIZ_QUESTIONS: Question[] = [
  {
    id: "de-1",
    question: "「de (下に)」＋「[ ? ] (書く)」で、「書き留める ＝ 描写する・述べる」という意味になる単語 'describe' の、[ ? ] は？",
    options: ["scribe", "script", "scope", "serve"],
    correctAnswer: "scribe",
    explanation: "de（下に）+ scribe（書く）で、紙などに書き留めて実態を「描写する」となります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "scribe", "tion", "tive"],
    targetWord: "describe"
  },
  {
    id: "de-2",
    question: "「de (離れて)」＋「[ ? ] (行く)」で、「（本来の道から）離れて行く ＝ 出発する」を意味する 'depart' の、[ ? ] は？",
    options: ["part", "port", "pass", "pave"],
    correctAnswer: "part",
    explanation: "de（離れて）+ part（分かれる/行く）で、今いる場所から分かれて「出発する」となります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "part", "ure", "ment"],
    targetWord: "depart"
  },
  {
    id: "de-3",
    question: "「de (下に)」＋「[ ? ] (座る)」で、「（底に）座り沈む ＝ 堆積物」を意味する単語 'deposit' の、[ ? ] は？",
    options: ["posit", "pose", "pact", "point"],
    correctAnswer: "posit",
    explanation: "de（下に）+ posit（置く）で、下に置くこと。転じて「預金」や「堆積物」を意味します。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "posit", "ion", "or"],
    targetWord: "deposit"
  },
  {
    id: "de-4",
    question: "「de (否定)」＋「[ ? ] (強める/固める)」で、「固まったものを否定する ＝ 定義する」という意味の 'define' の、[ ? ] は？",
    options: ["fine", "flect", "fect", "fict"],
    correctAnswer: "fine",
    explanation: "de（完全に/強意）+ fine（境界を引く/終わらせる）で、境界をはっきりさせて「定義する」となります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "fine", "ition", "ite"],
    targetWord: "define"
  },
  {
    id: "de-5",
    question: "「de (下に)」＋「[ ? ] (登る)」で、「下へ降りる ＝ 下降する」という意味になる単語 'descend' の、[ ? ] は？",
    options: ["scend", "scent", "serve", "serve"],
    correctAnswer: "scend",
    explanation: "de（下に）+ scend（登る/移る）で、下方向へ移動する「降りる」を意味します。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "scend", "ant", "ent"],
    targetWord: "descend"
  },
  {
    id: "de-6",
    question: "「de (離れて)」＋「[ ? ] (投げる)」で、「（元の場所から）離れて投げる ＝ 追い出す」という意味の 'deject' の、[ ? ] は？",
    options: ["ject", "join", "judge", "just"],
    correctAnswer: "ject",
    explanation: "de（下に/離れて）+ ject（投げる）で、気分を下に投げることから「落胆させる」という意味でよく使われます。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "ject", "ion", "ed"],
    targetWord: "deject"
  },
  {
    id: "de-7",
    question: "「de (下に)」＋「[ ? ] (押す)」で、「押し下げる ＝ 意気消沈させる」という意味の 'depress' の、[ ? ] は？",
    options: ["press", "praise", "prive", "prove"],
    correctAnswer: "press",
    explanation: "de（下に）+ press（押す）で、気持ちや景気を押し下げる「不況」や「憂鬱」を意味します。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "press", "ion", "ive"],
    targetWord: "depress"
  },
  {
    id: "de-8",
    question: "「de (離れて)」＋「[ ? ] (つかむ)」で、「（権利を）奪い取る ＝ 奪う」という意味になる 'deprive' の、[ ? ] は？",
    options: ["prive", "prise", "prave", "prove"],
    correctAnswer: "prive",
    explanation: "de（離れて）+ prive（個人の/奪う）で、必要なものを「奪う」という意味になります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "prive", "ation", "ed"],
    targetWord: "deprive"
  },
  {
    id: "de-9",
    question: "「de (否定)」＋「[ ? ] (組む)」で、「組み立てたものを壊す ＝ 破壊する」を意味する 'destroy' の、[ ? ] は？",
    options: ["stroy", "struct", "strict", "strain"],
    correctAnswer: "stroy",
    explanation: "de（否定/反対）+ stroy（築く：structureと同根）で、築いたものを「破壊する」となります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "stroy", "uction", "active"],
    targetWord: "destroy"
  },
  {
    id: "de-10",
    question: "「de (離れて)」＋「[ ? ] (引く)」で、「（注意を）引き離す ＝ 控除する・減じる」という意味の 'deduct' の、[ ? ] は？",
    options: ["duct", "dict", "duce", "dure"],
    correctAnswer: "duct",
    explanation: "de（離れて/下に）+ duct（導く/引く）で、全体から一部を「差し引く」という意味になります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "duct", "ion", "ible"],
    targetWord: "deduct"
  },
  {
    id: "de-11",
    question: "「de (下に)」＋「[ ? ] (見る)」で、「見下す ＝ 軽蔑する」を意味する単語 'despise' の、[ ? ] に入る要素は？",
    options: ["spise", "spect", "spire", "serve"],
    correctAnswer: "spise",
    explanation: "de（下に）+ spise（見る：spectの変形）で、相手を低く見る「軽蔑する」となります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "spise", "able", "al"],
    targetWord: "despise"
  },
  {
    id: "de-12",
    question: "「de (離れて)」＋「[ ? ] (つなぐ)」で、「つながりを離す ＝ 切り離す」という意味の 'detach' の、[ ? ] は？",
    options: ["tach", "tach", "tect", "tain"],
    correctAnswer: "tach",
    explanation: "de（離れて）+ tach（刺す/つける）で、ついていたものを「取り外す」という意味です。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "tach", "ment", "able"],
    targetWord: "detach"
  },
  {
    id: "de-13",
    question: "「de (完全に)」＋「[ ? ] (止める)」で、「（動きを）完全に止める ＝ 抑止する」を意味する 'deter' の、[ ? ] は？",
    options: ["ter", "tend", "test", "tract"],
    correctAnswer: "ter",
    explanation: "de（離れて/強意）+ ter（恐怖：terrorと同根）で、怖がらせて行動を「思いとどまらせる」が語源です。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "ter", "rent", "rence"],
    targetWord: "deter"
  },
  {
    id: "de-14",
    question: "「de (離れて)」＋「[ ? ] (導く)」で、「（本流から）導き出す ＝ 推論する」という意味の 'deduce' の、[ ? ] は？",
    options: ["duce", "duct", "dict", "dure"],
    correctAnswer: "duce",
    explanation: "de（離れて/下に）+ duce（導く）で、前提から結論を「導き出す」という意味になります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "duce", "tion", "ible"],
    targetWord: "deduce"
  },
  {
    id: "de-15",
    question: "「de (下に)」＋「[ ? ] (流れる)」で、「（価値が）下に流れる ＝ 衰退する」を意味する 'decline' の、[ ? ] は？",
    options: ["cline", "clude", "claim", "clare"],
    correctAnswer: "cline",
    explanation: "de（下に）+ cline（傾く）で、下の方へ傾くことから「衰退する」や「断る」という意味になります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "cline", "ation", "ing"],
    targetWord: "decline"
  },
  {
    id: "de-16",
    question: "「de (完全に)」＋「[ ? ] (叫ぶ)」で、「完全にはっきり叫ぶ ＝ 宣言する」という意味の 'declare' の、[ ? ] は？",
    options: ["clare", "claim", "close", "clude"],
    correctAnswer: "clare",
    explanation: "de（完全に）+ clare（明るくする/はっきりさせる）で、公に「宣言する」となります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "clare", "ation", "ative"],
    targetWord: "declare"
  },
  {
    id: "de-17",
    question: "「de (離れて)」＋「[ ? ] (道)」で、「道から外れる ＝ 逸脱する」を意味する単語 'deviate' の、[ ? ] は？",
    options: ["via", "voke", "verse", "void"],
    correctAnswer: "via",
    explanation: "de（離れて）+ via（道：viaホンのvia）で、本来のルートから「それる」という意味です。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "via", "te", "tion"],
    targetWord: "deviate"
  },
  {
    id: "de-18",
    question: "「de (離れて)」＋「[ ? ] (仕える)」で、「（務めを）離れる ＝ 見捨てる」を意味する 'desert' の、[ ? ] は？",
    options: ["sert", "serve", "serve", "sense"],
    correctAnswer: "sert",
    explanation: "de（否定）+ sert（つなぐ/結びつける）で、つながりを解くことから「見捨てる」や「砂漠（人が見捨てた場所）」となります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "sert", "er", "ion"],
    targetWord: "desert"
  },
  {
    id: "de-19",
    question: "「de (否定)」＋「[ ? ] (価値)」で、「価値を否定する ＝ 軽視する」という意味の 'despise' 以外の単語 'detract' の、[ ? ] は？",
    options: ["tract", "tract", "tribute", "trude"],
    correctAnswer: "tract",
    explanation: "de（離れて/下に）+ tract（引く）で、価値を引き離すことから「（価値を）損なう」という意味になります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "tract", "ion", "or"],
    targetWord: "detract"
  },
  {
    id: "de-20",
    question: "「de (下に)」＋「[ ? ] (程度)」で、「程度を下げる ＝ 低下させる」という意味の 'degrade' の、[ ? ] は？",
    options: ["grade", "gree", "gress", "graph"],
    correctAnswer: "grade",
    explanation: "de（下に）+ grade（階段/階級）で、ランクを「下げる」あるいは「悪化させる」という意味になります。",
    category: "Compound",
    etymology: deEtymology,
    allParts: ["de", "grade", "ation", "ing"],
    targetWord: "degrade"
  }
];