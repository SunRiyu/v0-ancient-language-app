import { Question,Etymology } from "@/lib/quiz-types";

const exEtymology: Etymology = {
  id: "prefix-ex",
  root: "ex-",
  meaning: "外へ、外に、完全に",
  origin: "Latin 'ex'",
  description: "「外へ出す」という方向性や、状態の「変化」、または「完全に（最後まで）」という強調を表す接頭辞。後ろに続く文字によって ef-, e- に変化する。"
};

export const EX_QUIZ_QUESTIONS: Question[] = [
  {
    id: "ex-1",
    question: "「ex (外に)」＋「[ ? ] (運ぶ)」で、「（荷物を）外へ運ぶ ＝ 輸出する」という意味になる単語 'export' の、[ ? ] は？",
    options: ["port", "pose", "press", "part"],
    correctAnswer: "port",
    explanation: "ex（外へ）+ port（運ぶ）で、港（port）から外へ出すことから「輸出」を意味します。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "port", "ation", "er"],
    targetWord: "export"
  },
  {
    id: "ex-2",
    question: "「ex (外に)」＋「[ ? ] (置く)」で、「外にさらす ＝ 露出する・さらす」を意味する 'expose' の、[ ? ] は？",
    options: ["pose", "posit", "pact", "point"],
    correctAnswer: "pose",
    explanation: "ex（外へ）+ pose（置く）で、隠れていたものを外に出して「さらす」という意味になります。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "pose", "ure", "ition"],
    targetWord: "expose"
  },
  {
    id: "ex-3",
    question: "「ex (外に)」＋「[ ? ] (引く)」で、「外へ引き出す ＝ 抽出する・抜粋する」という意味の 'extract' の、[ ? ] は？",
    options: ["tract", "tract", "tribute", "trude"],
    correctAnswer: "tract",
    explanation: "ex（外へ）+ tract（引く）で、全体から必要な部分を「引き抜く」という意味です。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "tract", "ion", "or"],
    targetWord: "extract"
  },
  {
    id: "ex-4",
    question: "「e (exの変形：外へ)」＋「[ ? ] (動く)」で、「心が外へ動く ＝ 感情」を意味する 'emotion' の、[ ? ] は？",
    options: ["mot", "mov", "mit", "miss"],
    correctAnswer: "mot",
    explanation: "e（外へ）+ mot（動く）で、内面的な心の動きが外に現れる「感情」を指します。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["e", "mot", "ion", "al"],
    targetWord: "emotion"
  },
  {
    id: "ex-5",
    question: "「ex (外に)」＋「[ ? ] (去る)」で、「外へ去る ＝ 出口」を意味する単語 'exit' の、[ ? ] は？",
    options: ["it", "ist", "is", "ive"],
    correctAnswer: "it",
    explanation: "ex（外へ）+ it（行く：transitのitと同根）で、「外へ行くこと＝出口」となります。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "it", "ing", "ed"],
    targetWord: "exit"
  },
  {
    id: "ex-6",
    question: "「ex (外に)」＋「[ ? ] (導く)」で、「（正しい道から）外へ導く ＝ 教育する」という意味の 'educate' の、[ ? ] は？",
    options: ["duc", "duct", "duce", "dict"],
    correctAnswer: "duc",
    explanation: "e（外へ）+ duc（導く）で、本人が持つ才能を「引き出す」ことが「教育」の本来の語源です。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["e", "duc", "ate", "ion"],
    targetWord: "educate"
  },
  {
    id: "ex-7",
    question: "「ex (外に)」＋「[ ? ] (投げる)」で、「外に投げ出す ＝ 追い出す・噴出する」を意味する 'eject' の、[ ? ] は？",
    options: ["ject", "join", "just", "judge"],
    correctAnswer: "ject",
    explanation: "e（外へ）+ ject（投げる）で、中のものを「外に放り出す」という意味です。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["e", "ject", "ion", "or"],
    targetWord: "eject"
  },
  {
    id: "ex-8",
    question: "「ex (外に)」＋「[ ? ] (立つ)」で、「外に立っている ＝ 存在する」という意味の 'exist' の、[ ? ] は？",
    options: ["sist", "sta", "stit", "st"],
    correctAnswer: "sist",
    explanation: "ex（外に）+ sist（立つ）で、外の世界に立ち現れてそこに「在る」ことを意味します。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "ist", "ence", "ent"],
    targetWord: "exist"
  },
  {
    id: "ex-9",
    question: "「ex (外に)」＋「[ ? ] (膨らむ)」で、「外へ広がる ＝ 拡大する」という意味の 'expand' の、[ ? ] は？",
    options: ["pand", "pend", "pact", "press"],
    correctAnswer: "pand",
    explanation: "ex（外へ）+ pand（広げる）で、範囲や面積を「広げる」ことを意味します。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "pand", "sion", "sive"],
    targetWord: "expand"
  },
  {
    id: "ex-10",
    question: "「ex (外に)」＋「[ ? ] (期待する)」で、「外を見張る ＝ 期待・予想する」という意味の 'expect' の、[ ? ] は？",
    options: ["spect", "spire", "spise", "scribe"],
    correctAnswer: "spect",
    explanation: "ex（外を）+ spect（見る）で、何かが来るのを外を向いて見守ることから「期待する」となります。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "pect", "ation", "ed"],
    targetWord: "expect"
  },
  {
    id: "ex-11",
    question: "「ex (外に)」＋「[ ? ] (呼ぶ)」で、「外へ呼び出す ＝ 呼び起こす」という意味の 'evoke' の、[ ? ] は？",
    options: ["voke", "voice", "vail", "vive"],
    correctAnswer: "voke",
    explanation: "e（外へ）+ voke（呼ぶ）で、記憶や感情を「呼び起こす」ことを意味します。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["e", "voke", "ation", "ative"],
    targetWord: "evoke"
  },
  {
    id: "ex-12",
    question: "「ex (外に)」＋「[ ? ] (踏む)」で、「外へ踏み出す ＝ 遠征」を意味する 'expedition' の、[ ? ] は？",
    options: ["ped", "pod", "path", "pel"],
    correctAnswer: "ped",
    explanation: "ex（外へ）+ ped（足）で、足を外へ向けて歩き出す「遠征・探検」という意味になります。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "ped", "ition", "ary"],
    targetWord: "expedition"
  },
  {
    id: "ex-13",
    question: "「ex (外に)」＋「[ ? ] (押し出す)」で、「外へ押し出す ＝ 追放する」という意味の 'expel' の、[ ? ] は？",
    options: ["pel", "pul", "press", "port"],
    correctAnswer: "pel",
    explanation: "ex（外へ）+ pel（押す/駆り立てる）で、組織などから「追い出す」という意味です。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "pel", "sion", "led"],
    targetWord: "expel"
  },
  {
    id: "ex-14",
    question: "「ex (外に)」＋「[ ? ] (平らにする)」で、「外にはっきりさせる ＝ 説明する」を意味する 'explain' の、[ ? ] は？",
    options: ["plain", "plan", "play", "plode"],
    correctAnswer: "plain",
    explanation: "ex（外へ）+ plain（平らな/明快な）で、複雑なことを平らにして分かりやすく「説明する」となります。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "plain", "ation", "atory"],
    targetWord: "explain"
  },
  {
    id: "ex-15",
    question: "「ex (外に)」＋「[ ? ] (息をする)」で、「（最後に）外へ息を吐く ＝ 期限が切れる」という意味の 'expire' の、[ ? ] は？",
    options: ["spire", "spect", "spise", "serve"],
    correctAnswer: "spire",
    explanation: "ex（外に）+ spire（息をする）で、息を引き取る、あるいは契約などの有効期限が「終了する」ことを意味します。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "pire", "y", "ation"],
    targetWord: "expire"
  },
  {
    id: "ex-16",
    question: "「ex (外に)」＋「[ ? ] (流れる)」で、「外へ流れ出す ＝ 流出・影響」を意味する 'effluence' の、[ ? ] は？",
    options: ["flu", "flex", "flict", "flect"],
    correctAnswer: "flu",
    explanation: "ef（exの変形：外へ）+ flu（流れる）で、外へ「流れ出すこと」を意味します。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ef", "flu", "ence", "ent"],
    targetWord: "effluence"
  },
  {
    id: "ex-17",
    question: "「ex (外に)」＋「[ ? ] (価値を高める)」で、「（価値を）外に引き出す ＝ 非常に優れた」という意味の 'excellent' の、[ ? ] は？",
    options: ["cel", "cell", "call", "cur"],
    correctAnswer: "cel",
    explanation: "ex（外に）+ cel（そびえる/高い）で、他より抜きん出て高い「優秀な」という意味になります。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "cel", "lent", "lence"],
    targetWord: "excellent"
  },
  {
    id: "ex-18",
    question: "「ex (外に)」＋「[ ? ] (叫ぶ)」で、「外に向かって叫ぶ ＝ 叫ぶ・感嘆する」という意味の 'exclaim' の、[ ? ] は？",
    options: ["claim", "clare", "close", "clude"],
    correctAnswer: "claim",
    explanation: "ex（外へ）+ claim（叫ぶ）で、驚きなどで声を上げる「叫ぶ」となります。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "claim", "ation", "atory"],
    targetWord: "exclaim"
  },
  {
    id: "ex-19",
    question: "「ex (外に)」＋「[ ? ] (閉じる)」で、「外に出して閉じる ＝ 除外する」を意味する 'exclude' の、[ ? ] は？",
    options: ["clude", "close", "claim", "clare"],
    correctAnswer: "clude",
    explanation: "ex（外へ）+ clude（閉じる）で、中に入れないように外側で閉める「除外する」という意味です。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "clude", "sion", "sive"],
    targetWord: "exclude"
  },
  {
    id: "ex-20",
    question: "「ex (完全に)」＋「[ ? ] (果たす)」で、「（任務を）完全に果たす ＝ 実行する」という意味の 'execute' の、[ ? ] は？",
    options: ["cute", "cur", "course", "cept"],
    correctAnswer: "cute",
    explanation: "ex（完全に）+ cute（続く/追う：sequenceと同根）で、最後までやり抜く「実行する」あるいは「死刑執行する」という意味になります。",
    category: "Prefix",
    etymology: exEtymology,
    allParts: ["ex", "ecut", "ive", "ion"],
    targetWord: "execute"
  }
];