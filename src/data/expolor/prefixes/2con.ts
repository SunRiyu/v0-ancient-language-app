import { Question,Etymology } from "@/lib/quiz-types";

const conEtymology: Etymology = {
  id: "prefix-con",
  root: "con-",
  meaning: "共に、完全に",
  origin: "Latin 'cum'",
  description: "「共に」「一緒に」という共同や、「完全に」という強調を表す接頭辞。後ろに続く文字によって com-, col-, cor-, co- などに変化する。"
};



export const CON_QUIZ_QUESTIONS: Question[] = [
  {
    id: "con-1",
    question: "「com (共に)」＋「[ ? ] (運ぶ)」で、「共に運ぶ ＝ 合成する・構成する」という意味になる単語 'compose' の、[ ? ] に入る要素は？",
    options: ["pose", "port", "press", "pare"],
    correctAnswer: "pose",
    explanation: "com（共に）+ pose（置く）で、バラバラのものを一箇所に置くことから「構成する」「作曲する」などの意味になります。",
    category: "Compound",
    etymology: conEtymology,
    allParts: ["com", "pose", "er", "ition"],
    targetWord: "compose"
  },
  {
    id: "con-2",
    question: "「con (共に)」＋「[ ? ] (行く/譲る)」で、「共に行く ＝ 認める・譲歩する」という意味になる単語 'concede' の、[ ? ] に入る語源は？",
    options: ["cede", "ceed", "cess", "cide"],
    correctAnswer: "cede",
    explanation: "con（完全に）+ cede（行く/譲る）で、相手に権利を譲る、あるいは事実を認める（譲歩する）という意味になります。",
    category: "Compound",
    etymology: conEtymology,   
    allParts: ["con", "cede", "re", "pre"],
    targetWord: "concede"
  },
  {
    id: "con-3",
    question: "「com (共に)」＋「[ ? ] (打つ)」で、「共に打ち合う ＝ 衝突・紛争」を意味する単語 'conflict' の、[ ? ] に入る語源は？",
    options: ["flict", "fact", "fect", "flect"],
    correctAnswer: "flict",
    explanation: "con（共に）+ flict（打つ/叩く）で、互いに叩き合うイメージから「衝突」や「葛藤」を意味します。",
    category: "Compound",
    etymology: conEtymology,
    allParts: ["con", "flict", "ing", "ed"],
    targetWord: "conflict"
  },
  {
    id: "con-4",
    question: "「con (強意：完全に)」＋「[ ? ] (振る)」で、「心を激しく振る ＝ 納得させる」という意味になる単語 'convince' の、[ ? ] に入る語源は？",
    options: ["vince", "voke", "verse", "vive"],
    correctAnswer: "vince",
    explanation: "con（完全に）+ vince（征服する）で、相手の心を完全に打ち負かして「納得させる・確信させる」となります。",
    category: "Compound",
    etymology: conEtymology,
    allParts: ["con", "vince", "ing", "ed"],
    targetWord: "convince"
  },
  {
    id: "con-5",
    question: "「com (共に)」＋「[ ? ] (歩む/段階)」で、「共に歩む ＝ 会議・議会」を意味する単語 'congress' の、[ ? ] に入る語源は？",
    options: ["gress", "graph", "grade", "gram"],
    correctAnswer: "gress",
    explanation: "con（共に）+ gress（行く/歩む）で、人々が同じ場所に集まってくることから「議会」を意味します。",
    category: "Compound",
    etymology: conEtymology,
    allParts: ["con", "gress", "ion", "ive"],
    targetWord: "congress"
  },
  {
    id: "con-6",
    question: "「com (共に)」＋「[ ? ] (押しつぶす)」で、「共に押しつぶす ＝ 圧縮する」という意味になる単語 'compress' の、[ ? ] に入る要素は？",
    options: ["press", "praise", "prise", "pose"],
    correctAnswer: "press",
    explanation: "com（共に）+ press（押す）で、周りから一緒に押して小さくする「圧縮する」という意味になります。",
    category: "Compound",
    etymology: conEtymology,
    allParts: ["com", "press", "ion", "or"],
    targetWord: "compress"
  },
  {
    id: "con-7",
    question: "「con (共に)」＋「[ ? ] (回る)」で、「（意見が）共に回る ＝ 会話する」という意味になる単語 'converse' の、[ ? ] に入る語源は？",
    options: ["verse", "vert", "vise", "vive"],
    correctAnswer: "verse",
    explanation: "con（共に）+ verse（向く/回る）で、互いに向き合って言葉を交わすことから「会話する」となります。",
    category: "Compound",
    etymology: conEtymology,
    allParts: ["con", "verse", "ation", "ly"],
    targetWord: "converse"
  },
  {
    id: "con-8",
    question: "「com (共に)」＋「[ ? ] (つかむ)」で、「（多くのものを）共に一気につかむ ＝ 含む・理解する」という意味の 'comprise' の、[ ? ] は？",
    options: ["prise", "praise", "pose", "pare"],
    correctAnswer: "prise",
    explanation: "com（共に）+ prise（つかむ）で、全体をガシッとつかんで「含む」「構成する」という意味になります。",
    category: "Compound",
    etymology: conEtymology,
    allParts: ["com", "prise", "ing", "ed"],
    targetWord: "comprise"
  },
  {
    id: "con-9",
    question: "「con (共に)」＋「[ ? ] (結ぶ)」で、「共に結びつく ＝ つながり」を意味する単語 'connect' の、[ ? ] に入る語源は？",
    options: ["nect", "rect", "lect", "spect"],
    correctAnswer: "nect",
    explanation: "con（共に）+ nect（結ぶ）で、複数のものを一つにつなぐことを意味します。annex（別館・付加する）も同根です。",
    category: "Compound",
    etymology: conEtymology,
    allParts: ["con", "nect", "ion", "ed"],
    targetWord: "connect"
  },
  {
    id: "con-10",
    question: "「com (共に)」＋「[ ? ] (等しい)」で、「等しいものと一緒に並べる ＝ 比較する」という意味になる単語 'compare' の、[ ? ] は？",
    options: ["pare", "part", "port", "pate"],
    correctAnswer: "pare",
    explanation: "com（共に）+ pare（並べる/等しくする）で、二つのものを並べて比べる「比較する」という意味になります。",
    category: "Compound",
    etymology: conEtymology,
    allParts: ["com", "pare", "ison", "ative"],
    targetWord: "compare"
  }
];