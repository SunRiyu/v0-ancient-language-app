import { Question, Etymology } from "./quiz-types";

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
export const QUIZ_QUESTIONS: Question[] = [
  {
    id: "1",
    question: "語根 'spect' の本来の意味は何ですか？",
    options: ["聞く", "言う", "見る", "運ぶ"],
    correctAnswer: "見る",
    explanation: "ラテン語の 'spectare' に由来し、『見る』という意味を持ちます。inspect（中を見る＝検査する）などに使われます。",
    category: "Roots",
    etymology: ETIMOLOGY_DATA[0],
    allParts: ["in", "spect", "re", "pro"],
    targetWord: "inspect"
  },
  {
    id: "2",
    question: "'predict' という単語の成り立ちは？",
    options: ["pre (前) + dict (言う)", "pre (前) + dict (見る)", "pro (前) + dict (運ぶ)", "re (再び) + dict (言う)"],
    correctAnswer: "pre (前) + dict (言う)",
    explanation: "起こる『前』に『言う』ことから『予言する』という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[1],
    allParts: ["pre", "dict", "ion", "ed"],
    targetWord: "predict"
  },
  {
    id: "3",
    question: "『外に(ex)』『運ぶ(port)』から成り立つ単語は何ですか？",
    options: ["import", "export", "transport", "support"],
    correctAnswer: "export",
    explanation: "ex（外へ）+ port（運ぶ）で、国外へ荷物を出す『輸出』を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[2],
    allParts: ["ex", "port", "im", "er"],
    targetWord: "export"
  },
  {
    id: "4",
    question: "語根 'ced / cess' が持つ主な意味は何ですか？",
    options: ["取る", "行く", "書く", "投げる"],
    correctAnswer: "行く",
    explanation: "Latin 'cedere' に由来し、『行く』または『譲る』という意味を持ちます。proceed（前に行く＝前進する）などが代表例です。",
    category: "Roots",
    etymology: ETIMOLOGY_DATA[0], // 仮で紐付け
    allParts: ["pro", "ceed", "ac", "cess"],
    targetWord: "proceed"
  },
  {
    id: "5",
    question: "'accept' (受け入れる) の成り立ちは？",
    options: ["ad (〜へ) + cept (取る)", "ex (外へ) + cept (取る)", "con (共に) + cept (取る)", "re (再び) + cept (取る)"],
    correctAnswer: "ad (〜へ) + cept (取る)",
    explanation: "ad（〜の方へ）+ cept（取る）で、自分の方へ取り込むことから『受け入れる』となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[0],
    allParts: ["ad", "cept", "ex", "re"],
    targetWord: "accept"
  },
  {
    id: "6",
    question: "『越えて(trans)』『運ぶ(fer)』から成り立つ、移動を意味する単語は？",
    options: ["refer", "transfer", "offer", "prefer"],
    correctAnswer: "transfer",
    explanation: "trans（向こう側へ）+ fer（運ぶ）で、場所や物を移動させることを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[0],
    allParts: ["trans", "fer", "re", "of"],
    targetWord: "transfer"
  },
  {
    id: "7",
    question: "'dismiss' (解散させる) の 'dis-' の意味は？",
    options: ["一つに", "反対に", "離れて", "強めて"],
    correctAnswer: "離れて",
    explanation: "dis（離れて）+ miss（送る）で、人々をバラバラの方向に送り出す＝解散させる、となります。",
    category: "Prefix",
    etymology: ETIMOLOGY_DATA[3],
    allParts: ["dis", "miss", "al", "ed"],
    targetWord: "dismiss"
  },
  {
    id: "8",
    question: "'stable' (安定した) の語源的な意味は？",
    options: ["動き回れる", "立っていられる", "座っている", "見えている"],
    correctAnswer: "立っていられる",
    explanation: "sta（立つ）+ able（できる）で、しっかりと立っていられる状態を指します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[4],
    allParts: ["sta", "ble", "un", "in"],
    targetWord: "stable"
  },
  {
    id: "9",
    question: "『外に(ex)』『立ち現れる(sist)』から成り、この世に有ることを意味する単語は？",
    options: ["assist", "resist", "exist", "insist"],
    correctAnswer: "exist",
    explanation: "ex（外に）+ sist（立つ）で、外の世界に立ち現れて存在することを意味します。",
    category: "Roots",
    etymology: ETIMOLOGY_DATA[4],
    allParts: ["ex", "sist", "as", "re"],
    targetWord: "exist"
  },
  {
    id: "10",
    question: "'anticipate' (予期する) の語源的なイメージは？",
    options: ["後から取る", "前に取る", "一緒に取る", "外に取る"],
    correctAnswer: "前に取る",
    explanation: "anti（前）+ cip（取る）で、事態が起こる前にあらかじめ心に取っておくことが『予期する』の由来です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[0],
    allParts: ["anti", "cip", "ate", "ed"],
    targetWord: "anticipate"
  },
  {
    id: "11",
    question: "『手(main)』で『保つ(tain)』ことから、『維持する』という意味になる単語は？",
    options: ["contain", "retain", "maintain", "obtain"],
    correctAnswer: "maintain",
    explanation: "main(手) + tain(保つ) が組み合わさり、手入れをして状態を保つことを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[0],
    allParts: ["main", "tain", "con", "re"],
    targetWord: "maintain"
  },
  {
    id: "12",
    question: "語根 'scrib / script' の意味は何ですか？",
    options: ["引く", "書く", "走る", "呼ぶ"],
    correctAnswer: "書く",
    explanation: "Latin 'scribere' に由来し、describe(書き写す＝描写する)などの単語を作ります。",
    category: "Roots",
    etymology: ETIMOLOGY_DATA[0],
    allParts: ["de", "scribe", "pre", "sub"],
    targetWord: "describe"
  }
];
export const AD_QUIZ_QUESTIONS: Question[] = [
  {
    id: "ad-1",
    question: "「ad (〜の方へ)」＋「[ ? ] (正しい・適正な)」で、「正しい状態へ向かわせる ＝ 調整する」という意味になる単語 'adjust' の、[ ? ] に入る語源は？",
    options: ["just", "dict", "rect", "apt"],
    correctAnswer: "just",
    explanation: "ad（〜の方へ）+ just（正しい）で、物事を正しい状態へ持っていくことから「調整する・適合させる」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[5], // 仮のインデックス
    allParts: ["ad", "just", "ment", "re"],
    targetWord: "adjust"
  },
  {
    id: "ad-2",
    question: "「ac (adの変形：〜の方へ)」＋「[ ? ] (呼ぶ)」で、「〜の方へ声をかける ＝ 告白する・認める」という意味になる単語 'acknowledge' の、[ ? ] に当たる要素は？",
    options: ["know", "cept", "voke", "claim"],
    correctAnswer: "know",
    explanation: "ac(〜へ) + know(知る/認める) + ledge(名詞語尾)から、事実を自分の方へ引き受けて「認める」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[5],
    allParts: ["ac", "know", "ledge", "ment"],
    targetWord: "acknowledge"
  },
  {
    id: "ad-3",
    question: "「ap (adの変形：〜の方へ)」＋「[ ? ] (包み・束)」で、「〜の方へひとまとめにする ＝ 適用・応用する」という意味になる単語 'apply' の、[ ? ] に入る語源は？",
    options: ["ply", "port", "point", "pear"],
    correctAnswer: "ply",
    explanation: "plyは「折る・重ねる」を意味します。ad(〜へ) + ply(重ねる)で、あるものを別のものにピタッと重ね合わせることから「適用する」となりました。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[5],
    allParts: ["ap", "ply", "li", "cation"],
    targetWord: "apply"
  },
  {
    id: "ad-4",
    question: "「as (adの変形：〜の方へ)」＋「[ ? ] (星)」で、「星の方へ（運命が変わる） ＝ 驚かせる」という由来を持つ単語 'astonish' の、[ ? ] に入る語源は？",
    options: ["ton", "struct", "spect", "sign"],
    correctAnswer: "ton",
    explanation: "語源的には ad(〜へ) + ton(雷/音) で「雷に打たれたように驚く」が由来です。現代では「驚愕させる」という意味で使われます。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[5],
    allParts: ["as", "ton", "ish", "ing"],
    targetWord: "astonish"
  },
  {
    id: "ad-5",
    question: "「ad (〜の方へ)」＋「[ ? ] (適した)」で、「〜の方へ適応させる」という意味になる単語 'adapt' の、[ ? ] に入る語源は？",
    options: ["apt", "opt", "ept", "act"],
    correctAnswer: "apt",
    explanation: "ad(〜の方へ) + apt(適した) で、環境などに自分を「適合させる」という意味になります。optionの語源 opt(選ぶ) と混同しやすいので注意です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[5],
    allParts: ["ad", "apt", "er", "able"],
    targetWord: "adapt"
  }
];
export const CON_QUIZ_QUESTIONS: Question[] = [
  {
    id: "con-1",
    question: "「com (共に)」＋「[ ? ] (運ぶ)」で、「共に運ぶ ＝ 合成する・構成する」という意味になる単語 'compose' の、[ ? ] に入る要素は？",
    options: ["pose", "port", "press", "pare"],
    correctAnswer: "pose",
    explanation: "com（共に）+ pose（置く）で、バラバラのものを一箇所に置くことから「構成する」「作曲する」などの意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[6],
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
    etymology: ETIMOLOGY_DATA[6],
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
    etymology: ETIMOLOGY_DATA[6],
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
    etymology: ETIMOLOGY_DATA[6],
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
    etymology: ETIMOLOGY_DATA[6],
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
    etymology: ETIMOLOGY_DATA[6],
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
    etymology: ETIMOLOGY_DATA[6],
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
    etymology: ETIMOLOGY_DATA[6],
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
    etymology: ETIMOLOGY_DATA[6],
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
    etymology: ETIMOLOGY_DATA[6],
    allParts: ["com", "pare", "ison", "ative"],
    targetWord: "compare"
  }
];
export const DE_QUIZ_QUESTIONS: Question[] = [
  {
    id: "de-1",
    question: "「de (下に)」＋「[ ? ] (書く)」で、「書き留める ＝ 描写する・述べる」という意味になる単語 'describe' の、[ ? ] は？",
    options: ["scribe", "script", "scope", "serve"],
    correctAnswer: "scribe",
    explanation: "de（下に）+ scribe（書く）で、紙などに書き留めて実態を「描写する」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
    allParts: ["de", "ter", "rent", "rence"],
    targetWord: "deter"
  },
  {
    id: "de-14",
    question: "「de (離れて)」＋「[ ? ] (導く)」で、「（本流から）導き出す ＝ 推論する」という意味の 'deduce' の、[ ? ] は？",
    options: ["duce", "duct", "dict", "dure"],
    correctAnswer: "duce",
    explanation: "de（離れて/下に）+ duce（導く）で、前提から結論を「導き出す」という意味になりま���。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
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
    etymology: ETIMOLOGY_DATA[7],
    allParts: ["de", "grade", "ation", "ing"],
    targetWord: "degrade"
  }
];
export const EX_QUIZ_QUESTIONS: Question[] = [
  {
    id: "ex-1",
    question: "「ex (外に)」＋「[ ? ] (運ぶ)」で、「（荷物を）外へ運ぶ ＝ 輸出する」という意味になる単語 'export' の、[ ? ] は？",
    options: ["port", "pose", "press", "part"],
    correctAnswer: "port",
    explanation: "ex（外へ）+ port（運ぶ）で、港（port）から外へ出すことから「輸出」を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "port", "ation", "er"],
    targetWord: "export"
  },
  {
    id: "ex-2",
    question: "「ex (外に)」＋「[ ? ] (置く)」で、「外にさらす ＝ 露出する・さらす」を意味する 'expose' の、[ ? ] は？",
    options: ["pose", "posit", "pact", "point"],
    correctAnswer: "pose",
    explanation: "ex（外へ）+ pose（置く）で、隠れていたものを外に出して「さらす」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "pose", "ure", "ition"],
    targetWord: "expose"
  },
  {
    id: "ex-3",
    question: "「ex (外に)」＋「[ ? ] (引く)」で、「外へ引き出す ＝ 抽出する・抜粋する」という意味の 'extract' の、[ ? ] は？",
    options: ["tract", "tract", "tribute", "trude"],
    correctAnswer: "tract",
    explanation: "ex（外へ）+ tract（引く）で、全体から必要な部分を「引き抜く」という意味です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "tract", "ion", "or"],
    targetWord: "extract"
  },
  {
    id: "ex-4",
    question: "「e (exの変形：外へ)」＋「[ ? ] (動く)」で、「心が外へ動く ＝ 感情」を意味する 'emotion' の、[ ? ] は？",
    options: ["mot", "mov", "mit", "miss"],
    correctAnswer: "mot",
    explanation: "e（外へ）+ mot（動く）で、内面的な心の動きが外に現れる「感情」を指します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["e", "mot", "ion", "al"],
    targetWord: "emotion"
  },
  {
    id: "ex-5",
    question: "「ex (外に)」＋「[ ? ] (去る)」で、「外へ去る ＝ 出口」を意味する単語 'exit' の、[ ? ] は？",
    options: ["it", "ist", "is", "ive"],
    correctAnswer: "it",
    explanation: "ex（外へ）+ it（行く：transitのitと同根）で、「外へ行くこと＝出口」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "it", "ing", "ed"],
    targetWord: "exit"
  },
  {
    id: "ex-6",
    question: "「ex (外に)」＋「[ ? ] (導く)」で、「（正しい道から）外へ導く ＝ 教育する」という意味の 'educate' の、[ ? ] は？",
    options: ["duc", "duct", "duce", "dict"],
    correctAnswer: "duc",
    explanation: "e（外へ）+ duc（導く）で、本人が持つ才能を「引き出す」ことが「教育」の本来の語源です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["e", "duc", "ate", "ion"],
    targetWord: "educate"
  },
  {
    id: "ex-7",
    question: "「ex (外に)」＋「[ ? ] (投げる)」で、「外に投げ出す ＝ 追い出す・噴出する」を意味する 'eject' の、[ ? ] は？",
    options: ["ject", "join", "just", "judge"],
    correctAnswer: "ject",
    explanation: "e（外へ）+ ject（投げる）で、中のものを「外に放り出す」という意味です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["e", "ject", "ion", "or"],
    targetWord: "eject"
  },
  {
    id: "ex-8",
    question: "「ex (外に)」＋「[ ? ] (立つ)」で、「外に立っている ＝ 存在する」という意味の 'exist' の、[ ? ] は？",
    options: ["sist", "sta", "stit", "st"],
    correctAnswer: "sist",
    explanation: "ex（外に）+ sist（立つ）で、外の世界に立ち現れてそこに「在る」ことを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "ist", "ence", "ent"],
    targetWord: "exist"
  },
  {
    id: "ex-9",
    question: "「ex (外に)」＋「[ ? ] (膨らむ)」で、「外へ広がる ＝ 拡大する」という意味の 'expand' の、[ ? ] は？",
    options: ["pand", "pend", "pact", "press"],
    correctAnswer: "pand",
    explanation: "ex（外へ）+ pand（広げる）で、範囲や面積を「広げる」ことを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "pand", "sion", "sive"],
    targetWord: "expand"
  },
  {
    id: "ex-10",
    question: "「ex (外に)」＋「[ ? ] (期待する)」で、「外を見張る ＝ 期待・予想する」という意味の 'expect' の、[ ? ] は？",
    options: ["spect", "spire", "spise", "scribe"],
    correctAnswer: "spect",
    explanation: "ex（外を）+ spect（見る）で、何かが来るのを外を向いて見守ることから「期待する」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "pect", "ation", "ed"],
    targetWord: "expect"
  },
  {
    id: "ex-11",
    question: "「ex (外に)」＋「[ ? ] (呼ぶ)」で、「外へ呼び出す ＝ 呼び起こす」という意味の 'evoke' の、[ ? ] は？",
    options: ["voke", "voice", "vail", "vive"],
    correctAnswer: "voke",
    explanation: "e（外へ）+ voke（呼ぶ）で、記憶や感情を「呼び起こす」ことを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["e", "voke", "ation", "ative"],
    targetWord: "evoke"
  },
  {
    id: "ex-12",
    question: "「ex (外に)」＋「[ ? ] (踏む)」で、「外へ踏み出す ＝ 遠征」を意味する 'expedition' の、[ ? ] は？",
    options: ["ped", "pod", "path", "pel"],
    correctAnswer: "ped",
    explanation: "ex（外へ）+ ped（足）で、足を外へ向けて歩き出す「遠征・探検」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "ped", "ition", "ary"],
    targetWord: "expedition"
  },
  {
    id: "ex-13",
    question: "「ex (外に)」＋「[ ? ] (押し出す)」で、「外へ押し出す ＝ 追放する」という意味の 'expel' の、[ ? ] は？",
    options: ["pel", "pul", "press", "port"],
    correctAnswer: "pel",
    explanation: "ex（外へ）+ pel（押す/駆り立てる）で、組織などから「追い出す」という意味です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "pel", "sion", "led"],
    targetWord: "expel"
  },
  {
    id: "ex-14",
    question: "「ex (外に)」＋「[ ? ] (平らにする)」で、「外にはっきりさせる ＝ 説明する」を意味する 'explain' の、[ ? ] は？",
    options: ["plain", "plan", "play", "plode"],
    correctAnswer: "plain",
    explanation: "ex（外へ）+ plain（平らな/明快な）で、複雑なことを平らにして分かりやすく「説明する」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "plain", "ation", "atory"],
    targetWord: "explain"
  },
  {
    id: "ex-15",
    question: "「ex (外に)」＋「[ ? ] (息をする)」で、「（最後に）外へ息を吐く ＝ 期限が切れる」という意味の 'expire' の、[ ? ] は？",
    options: ["spire", "spect", "spise", "serve"],
    correctAnswer: "spire",
    explanation: "ex（外に）+ spire（息をする）で、息を引き取る、あるいは契約などの有効期限が「終了する」ことを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "pire", "y", "ation"],
    targetWord: "expire"
  },
  {
    id: "ex-16",
    question: "「ex (外に)」＋「[ ? ] (流れる)」で、「外へ流れ出す ＝ 流出・影響」を意味する 'effluence' の、[ ? ] は？",
    options: ["flu", "flex", "flict", "flect"],
    correctAnswer: "flu",
    explanation: "ef（exの変形：外へ）+ flu（流れる）で、外へ「流れ出すこと」を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ef", "flu", "ence", "ent"],
    targetWord: "effluence"
  },
  {
    id: "ex-17",
    question: "「ex (外に)」＋「[ ? ] (価値を高める)」で、「（価値を）外に引き出す ＝ 非常に優れた」という意味の 'excellent' の、[ ? ] は？",
    options: ["cel", "cell", "call", "cur"],
    correctAnswer: "cel",
    explanation: "ex（外に）+ cel（そびえる/高い）で、他より抜きん出て高い「優秀な」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "cel", "lent", "lence"],
    targetWord: "excellent"
  },
  {
    id: "ex-18",
    question: "「ex (外に)」＋「[ ? ] (叫ぶ)」で、「外に向かって叫ぶ ＝ 叫ぶ・感嘆する」という意味の 'exclaim' の、[ ? ] は？",
    options: ["claim", "clare", "close", "clude"],
    correctAnswer: "claim",
    explanation: "ex（外へ）+ claim（叫ぶ）で、驚きなどで声を上げる「叫ぶ」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "claim", "ation", "atory"],
    targetWord: "exclaim"
  },
  {
    id: "ex-19",
    question: "「ex (外に)」＋「[ ? ] (閉じる)」で、「外に出して閉じる ＝ 除外する」を意味する 'exclude' の、[ ? ] は？",
    options: ["clude", "close", "claim", "clare"],
    correctAnswer: "clude",
    explanation: "ex（外へ）+ clude（閉じる）で、中に入れないように外側で閉める「除外する」という意味です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "clude", "sion", "sive"],
    targetWord: "exclude"
  },
  {
    id: "ex-20",
    question: "「ex (完全に)」＋「[ ? ] (果たす)」で、「（任務を）完全に果たす ＝ 実行する」という意味の 'execute' の、[ ? ] は？",
    options: ["cute", "cur", "course", "cept"],
    correctAnswer: "cute",
    explanation: "ex（完全に）+ cute（続く/追う：sequenceと同根）で、最後までやり抜く「実行する」あるいは「死刑執行する」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[8],
    allParts: ["ex", "ecut", "ive", "ion"],
    targetWord: "execute"
  }
];
export const IN_IM_QUIZ_QUESTIONS: Question[] = [
  {
    id: "in-1",
    question: "「in (中に)」＋「[ ? ] (運ぶ)」で、「（荷物を）中に運ぶ ＝ 輸入する」という意味になる単語 'import' の、[ ? ] は？",
    options: ["port", "pose", "press", "part"],
    correctAnswer: "port",
    explanation: "im（中に）+ port（運ぶ）で、港から中へ入れることから「輸入」を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["im", "port", "ation", "er"],
    targetWord: "import"
  },
  {
    id: "in-2",
    question: "「in (否定)」＋「[ ? ] (能力がある)」で、「能力がない ＝ 無能な」という意味の 'incapable' の、[ ? ] は？",
    options: ["capable", "capt", "cept", "cip"],
    correctAnswer: "capable",
    explanation: "in（否定）+ capable（できる）で、することができない「無能な」という意味になります。",
    category: "Prefix",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "cap", "able", "ity"],
    targetWord: "incapable"
  },
  {
    id: "in-3",
    question: "「in (中に)」＋「[ ? ] (見る)」で、「中を見る ＝ 検査する・調査する」を意味する 'inspect' の、[ ? ] は？",
    options: ["spect", "spire", "scribe", "sist"],
    correctAnswer: "spect",
    explanation: "in（中に）+ spect（見る）で、細部まで���をじっくり見ることから「検査する」となります。",
    category: "Roots",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "spect", "ion", "or"],
    targetWord: "inspect"
  },
  {
    id: "in-4",
    question: "「im (中に)」＋「[ ? ] (押す)」で、「（心の中に）押しつける ＝ 印象づける」という意味の 'impress' の、[ ? ] は？",
    options: ["press", "praise", "pose", "prive"],
    correctAnswer: "press",
    explanation: "im（中に）+ press（押す）で、心にグッと押し跡をつけるイメージから「印象を与える」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["im", "press", "ion", "ive"],
    targetWord: "impress"
  },
  {
    id: "in-5",
    question: "「in (否定)」＋「[ ? ] (有限の)」で、「限りがない ＝ 無限の」という意味になる 'infinite' の、[ ? ] は？",
    options: ["finite", "fine", "final", "finish"],
    correctAnswer: "finite",
    explanation: "in（否定）+ finite（終わりのある/限定された）で、終わりのない「無限」を意味します。",
    category: "Prefix",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "fin", "ite", "ly"],
    targetWord: "infinite"
  },
  {
    id: "in-6",
    question: "「in (中に)」＋「[ ? ] (導く)」で、「（中に）導き入れる ＝ 紹介する・導入する」を意味する 'introduce' の、[ ? ] は？",
    options: ["duce", "duct", "duc", "dict"],
    correctAnswer: "duce",
    explanation: "intro（中に：inの拡張形）+ duce（導く）で、新しいものを中に連れてくる「紹介・導入」を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["intro", "duce", "tion", "tory"],
    targetWord: "introduce"
  },
  {
    id: "in-7",
    question: "「in (否定)」＋「[ ? ] (見える)」で、「見ることができない ＝ 目に見えない」という意味の 'invisible' の、[ ? ] は？",
    options: ["vis", "vid", "view", "vise"],
    correctAnswer: "vis",
    explanation: "in（否定）+ vis（見る）+ ible（できる）で、見ることが不可能な状態を指します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "vis", "ible", "ity"],
    targetWord: "invisible"
  },
  {
    id: "in-8",
    question: "「in (中に)」＋「[ ? ] (吹く)」で、「（中に）息を吹き込む ＝ 刺激を与える・鼓舞する」という意味の 'inspire' の、[ ? ] は？",
    options: ["spire", "spect", "spise", "serve"],
    correctAnswer: "spire",
    explanation: "in（中に）+ spire（息をする/吹く）で、魂に息を吹き込んで「やる気にさせる」という意味になります。",
    category: "Roots",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "spire", "ation", "ing"],
    targetWord: "inspire"
  },
  {
    id: "in-9",
    question: "「im (否定)」＋「[ ? ] (礼儀正しい)」で、「礼儀正しくない ＝ 失礼な」という意味の 'impolite' の、[ ? ] は？",
    options: ["polite", "policy", "police", "pose"],
    correctAnswer: "polite",
    explanation: "im（否定）+ polite（磨かれた/礼儀正しい）で、ぶしつけな「失礼な」となります。",
    category: "Prefix",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["im", "polite", "ly", "ness"],
    targetWord: "impolite"
  },
  {
    id: "in-10",
    question: "「in (中に)」＋「[ ? ] (含む)」で、「中に閉じ込める ＝ 含む」という意味の 'include' の、[ ? ] は？",
    options: ["clude", "close", "claim", "clare"],
    correctAnswer: "clude",
    explanation: "in（中に）+ clude（閉じる）で、枠の中に閉じ込める＝「含める」となります。excludeの反対語です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "clude", "sion", "sive"],
    targetWord: "include"
  },
  {
    id: "in-11",
    question: "「in (否定)」＋「[ ? ] (依存している)」で、「依存していない ＝ 独立した」を意味する 'independent' の、[ ? ] は？",
    options: ["dependent", "pend", "pact", "part"],
    correctAnswer: "dependent",
    explanation: "in（否定）+ de（下に）+ pend（ぶら下がる）で、誰かの下にぶら下がっていない「独立」を意味します。",
    category: "Prefix",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "de", "pend", "ence"],
    targetWord: "independent"
  },
  {
    id: "in-12",
    question: "「in (中に)」＋「[ ? ] (住む)」で、「（中に）住んでいる人 ＝ 住民」を意味する 'inhabitant' の、[ ? ] は？",
    options: ["habit", "hibit", "hail", "hale"],
    correctAnswer: "habit",
    explanation: "in（中に）+ habit（持つ/住む）で、ある場所に住み着いている人を指します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "habit", "ant", "ance"],
    targetWord: "inhabitant"
  },
  {
    id: "in-13",
    question: "「im (否定)」＋「[ ? ] (可能な)」で、「可能ではない ＝ 不可能な」を意味する 'impossible' の、[ ? ] は？",
    options: ["possible", "pose", "pote", "part"],
    correctAnswer: "possible",
    explanation: "im（否定）+ possible（できる）で、実現できないことを意味します。",
    category: "Prefix",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["im", "poss", "ible", "ity"],
    targetWord: "impossible"
  },
  {
    id: "in-14",
    question: "「in (中に)」＋「[ ? ] (投げる)」で、「（中に）投げ入れる ＝ 注入する」という意味の 'inject' の、[ ? ] は？",
    options: ["ject", "join", "just", "judge"],
    correctAnswer: "ject",
    explanation: "in（中に）+ ject（投げる）で、液体などを体内に投げ入れる「注射・注入」を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "ject", "ion", "or"],
    targetWord: "inject"
  },
  {
    id: "in-15",
    question: "「in (否定)」＋「[ ? ] (正義)」で、「正義がない ＝ 不正・不法」という意味の 'injustice' の、[ ? ] は？",
    options: ["justice", "just", "judge", "jury"],
    correctAnswer: "justice",
    explanation: "in（否定）+ justice（正義）で、不公平や不正な行為を意味します。",
    category: "Prefix",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "just", "ice", "ly"],
    targetWord: "injustice"
  },
  {
    id: "in-16",
    question: "「in (中に)」＋「[ ? ] (傾く)」で、「（心が中に）傾く ＝ 〜したいと思わせる」を意味する 'incline' の、[ ? ] は？",
    options: ["cline", "clude", "claim", "clare"],
    correctAnswer: "cline",
    explanation: "in（中に）+ cline（傾く）で、ある方向に心が傾く「傾向がある」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "cline", "ation", "ed"],
    targetWord: "incline"
  },
  {
    id: "in-17",
    question: "「in (中に)」＋「[ ? ] (光る)」で、「（中に）光を入れる ＝ 照らす・解明する」という意味の 'illuminate' の、[ ? ] は？",
    options: ["lumin", "luc", "lux", "lust"],
    correctAnswer: "lumin",
    explanation: "il（inの変形：中に）+ lumin（光）で、光を当てて「照らす」ことを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["il", "lumin", "ate", "ation"],
    targetWord: "illuminate"
  },
  {
    id: "in-18",
    question: "「im (否定)」＋「[ ? ] (死ぬべき)」で、「死なない ＝ 不死の・不朽の」を意味する 'immortal' の、[ ? ] は？",
    options: ["mortal", "mort", "mount", "mode"],
    correctAnswer: "mortal",
    explanation: "im（否定）+ mortal（死ぬ運命の）で、永遠に生き続ける「不死」を意味します。",
    category: "Prefix",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["im", "mort", "al", "ity"],
    targetWord: "immortal"
  },
  {
    id: "in-19",
    question: "「in (否定)」＋「[ ? ] (正確な)」で、「正確ではない ＝ 不正確な」という意味の 'inaccurate' の、[ ? ] は？",
    options: ["accurate", "cure", "care", "case"],
    correctAnswer: "accurate",
    explanation: "in（否定）+ accurate（注意深い/正確な）で、間違いがあることを意味します。",
    category: "Prefix",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["in", "ac", "cur", "ate"],
    targetWord: "inaccurate"
  },
  {
    id: "in-20",
    question: "「in (中に)」＋「[ ? ] (入る)」で、「中に入ること ＝ 入場・入り口」という意味の 'entrance' の、[ ? ] は？",
    options: ["trance", "it", "entry", "tent"],
    correctAnswer: "trance",
    explanation: "en（inの変形：中に）+ trance（通ること：transitと同根）で、「中に入ること」を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[9],
    allParts: ["en", "trance", "ry", "ed"],
    targetWord: "entrance"
  }
];
export const PER_QUIZ_QUESTIONS: Question[] = [
  {
    id: "per-1",
    question: "「per (通って)」＋「[ ? ] (行く)」で、「（困難の中を）最後まで行く ＝ 耐える・持ちこたえる」という意味の 'persist' の、[ ? ] は？",
    options: ["sist", "sta", "stit", "st"],
    correctAnswer: "sist",
    explanation: "per（最後まで）+ sist（立つ）で、最後まで立ち続けることから「固執する」「持続する」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
    allParts: ["per", "man", "ent", "ly"],
    targetWord: "permanent"
  },
  {
    id: "per-11",
    question: "「per (通って)」＋「[ ? ] (送る)」で、「（中を）通り抜けさせる ＝ 許可する」という意味�� 'permit' の、[ ? ] は？",
    options: ["mit", "miss", "mote", "move"],
    correctAnswer: "mit",
    explanation: "per（通して）+ mit（送る）で、通行を許可する、あるいは何かをさせる「許可」を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
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
    etymology: ETIMOLOGY_DATA[10],
    allParts: ["per", "il", "ous", "ly"],
    targetWord: "peril"
  }
];
export const PRE_QUIZ_QUESTIONS: Question[] = [
  {
    id: "pre-1",
    question: "「pre (前に)」＋「[ ? ] (言う)」で、「起こる前に言う ＝ 予言する・予測する」という意味の 'predict' の、[ ? ] は？",
    options: ["dict", "duc", "scribe", "voke"],
    correctAnswer: "dict",
    explanation: "pre（前に）+ dict（言う）で、事態が起こる前に口にすることから「予測する」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "dict", "ion", "able"],
    targetWord: "predict"
  },
  {
    id: "pre-2",
    question: "「pre (前に)」＋「[ ? ] (備える)」で、「前もって備える ＝ 準備する」という意味の 'prepare' の、[ ? ] は？",
    options: ["pare", "part", "pair", "pact"],
    correctAnswer: "pare",
    explanation: "pre（前に）+ pare（並べる/整える）で、事前に必要なものを揃えておく「準備する」という意味です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "pare", "ation", "ed"],
    targetWord: "prepare"
  },
  {
    id: "pre-3",
    question: "「pre (前に)」＋「[ ? ] (防ぐ/来る)」で、「（問題が）来る前に手を打つ ＝ 妨げる・予防する」という意味の 'prevent' の、[ ? ] は？",
    options: ["vent", "vade", "vert", "vail"],
    correctAnswer: "vent",
    explanation: "pre（前に）+ vent（来る：eventのventと同根）で、相手が来る前に前に立ちはだかる「妨げる」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "vent", "ion", "ative"],
    targetWord: "prevent"
  },
  {
    id: "pre-4",
    question: "「pre (前に)」＋「[ ? ] (選ぶ)」で、「他よりも前に選ぶ ＝ 〜を好む」を意味する 'prefer' の、[ ? ] は？",
    options: ["fer", "fill", "fect", "fess"],
    correctAnswer: "fer",
    explanation: "pre（前に）+ fer（運ぶ）で、他のものより自分の前に運んでくることから「好む」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "fer", "ence", "able"],
    targetWord: "prefer"
  },
  {
    id: "pre-5",
    question: "「pre (前に)」＋「[ ? ] (書く)」で、「（薬などを）前もって書く ＝ 処方する・規定する」を意味する 'prescribe' の、[ ? ] は？",
    options: ["scribe", "script", "scend", "serve"],
    correctAnswer: "scribe",
    explanation: "pre（前に）+ scribe（書く）で、あらかじめルールや薬の指示を書いておくことを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "scribe", "ption", "ptive"],
    targetWord: "prescribe"
  },
  {
    id: "pre-6",
    question: "「pre (前に)」＋「[ ? ] (置く)」で、「前もって置く ＝ 仮定する・前提とする」という意味の 'presuppose' の、[ ? ] は？",
    options: ["suppose", "pose", "posit", "pound"],
    correctAnswer: "suppose",
    explanation: "pre（前に）+ suppose（仮定する）で、議論の前にあらかじめ仮定しておく「前提とする」という意味です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "sup", "pose", "ition"],
    targetWord: "presuppose"
  },
  {
    id: "pre-7",
    question: "「pre (前に)」＋「[ ? ] (行く)」で、「（時間的に）前に行く ＝ 先行する」という意味の 'precede' の、[ ? ] は？",
    options: ["cede", "ceed", "cess", "cess"],
    correctAnswer: "cede",
    explanation: "pre（前に）+ cede（行く）で、時間や順序が先になることを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "cede", "nt", "ence"],
    targetWord: "precede"
  },
  {
    id: "pre-8",
    question: "「pre (前に)」＋「[ ? ] (保つ)」で、「（状態を）前と同じく保つ ＝ 保存する」という意味の 'preserve' の、[ ? ] は？",
    options: ["serve", "sert", "serve", "serve"],
    correctAnswer: "serve",
    explanation: "pre（前に）+ serve（守る/保つ）で、傷まないように前もって守っておく「保存する」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "serve", "ation", "ative"],
    targetWord: "preserve"
  },
  {
    id: "pre-9",
    question: "「pre (前に)」＋「[ ? ] (居る)」で、「（人の）前に居ること ＝ 出席・存在」を意味する 'presence' の、[ ? ] は？",
    options: ["sence", "sent", "stance", "sist"],
    correctAnswer: "sence",
    explanation: "pre（前に）+ sence（存在する：essenceのsenceと同根）で、目の前に居ることを指します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "sence", "ent", "ently"],
    targetWord: "presence"
  },
  {
    id: "pre-10",
    question: "「pre (前に)」＋「[ ? ] (価値を付ける)」で、「前もって価値を判断する ＝ 偏見」を意味する 'prejudice' の、[ ? ] は？",
    options: ["judice", "just", "judge", "jury"],
    correctAnswer: "judice",
    explanation: "pre（前に）+ judice（判断：judgeと同根）で、事実を知る前に判断を下してしまう「偏見」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "jud", "ice", "icial"],
    targetWord: "prejudice"
  },
  {
    id: "pre-11",
    question: "「pre (前に)」＋「[ ? ] (見る)」で、「前もって見る ＝ 下見・試写」を意味する 'preview' の、[ ? ] は？",
    options: ["view", "vis", "vid", "vise"],
    correctAnswer: "view",
    explanation: "pre（前に）+ view（見る）で、本番の前に見ておくことを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "view", "ed", "ing"],
    targetWord: "preview"
  },
  {
    id: "pre-12",
    question: "「pre (前に)」＋「[ ? ] (つかむ)」で、「（心が）前もってつかむ ＝ 予感」を意味する 'presentiment' の、[ ? ] は？",
    options: ["senti", "sense", "sens", "sent"],
    correctAnswer: "senti",
    explanation: "pre（前に）+ senti（感じる：sentimentと同根）で、何かが起こる前の「予感」を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "senti", "ment", "s"],
    targetWord: "presentiment"
  },
  {
    id: "pre-13",
    question: "「pre (前に)」＋「[ ? ] (支配する)」で、「他より前に立って支配する ＝ 優位に立つ」を意味する 'predominate' の、[ ? ] は？",
    options: ["dominate", "dome", "dorm", "done"],
    correctAnswer: "dominate",
    explanation: "pre（前に/超えて）+ dominate（支配する）で、他を圧倒して優勢であることを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "domin", "ate", "ance"],
    targetWord: "predominate"
  },
  {
    id: "pre-14",
    question: "「pre (前に)」＋「[ ? ] (占める)」で、「（場所や心を）前もって占める ＝ 夢中にさせる」を意味する 'preoccupy' の、[ ? ] は？",
    options: ["occupy", "occur", "ocean", "oct"],
    correctAnswer: "occupy",
    explanation: "pre（前に）+ occupy（占める）で、あらかじめ心を占領する、つまり「没頭させる」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "oc", "cupy", "ied"],
    targetWord: "preoccupy"
  },
  {
    id: "pre-15",
    question: "「pre (前に)」＋「[ ? ] (注意)」で、「前もっての注意 ＝ 用心・警戒」を意味する 'precaution' の、[ ? ] は？",
    options: ["caution", "cause", "case", "call"],
    correctAnswer: "caution",
    explanation: "pre（前に）+ caution（警告/注意）で、トラブルを防ぐための事前の備えを指します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "cau", "tion", "ary"],
    targetWord: "precaution"
  },
  {
    id: "pre-16",
    question: "「pre (前に)」＋「[ ? ] (歴史)」で、「歴史（記録）が始まる前 ＝ 先史時代」を意味する 'prehistoric' の、[ ? ] は？",
    options: ["historic", "history", "story", "hiss"],
    correctAnswer: "historic",
    explanation: "pre（前に）+ historic（歴史の）で、文字記録が残る以前の時代を指します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "hist", "or", "ic"],
    targetWord: "prehistoric"
  },
  {
    id: "pre-17",
    question: "「pre (前に)」＋「[ ? ] (言う)」で、「（本の）前に語る ＝ 序文・前置き」を意味する 'preface' の、[ ? ] は？",
    options: ["face", "fact", "fess", "fame"],
    correctAnswer: "face",
    explanation: "pre（前に）+ face（話す：fableと同根）で、本編の前に述べる「序文」を指します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "face", "atory", "d"],
    targetWord: "preface"
  },
  {
    id: "pre-18",
    question: "「pre (前に)」＋「[ ? ] (熟した)」で、「前もって熟した ＝ 時期尚早の」という意味の 'premature' の、[ ? ] は？",
    options: ["mature", "match", "meter", "mount"],
    correctAnswer: "mature",
    explanation: "pre（前に）+ mature（熟した）で、適切な時��より前に出来上がってしまう「早すぎる」状態を指します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "matur", "e", "ity"],
    targetWord: "premature"
  },
  {
    id: "pre-19",
    question: "「pre (前に)」＋「[ ? ] (公式)」で、「前もって決めた形 ＝ 予備の・準備の」という意味の 'preliminary' の、[ ? ] に近い意味の語源は？",
    options: ["limin", "limit", "line", "light"],
    correctAnswer: "limin",
    explanation: "pre（前に）+ limin（しきい値/境界）で、本番のしきい値をまたぐ前の「予備的な」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "limin", "ary", "ies"],
    targetWord: "preliminary"
  },
  {
    id: "pre-20",
    question: "「pre (前に)」＋「[ ? ] (前提)」で、「議論の前に送る ＝ 根拠・敷地」を意味する 'premise' の、[ ? ] は？",
    options: ["mise", "miss", "mit", "mission"],
    correctAnswer: "mise",
    explanation: "pre（前に）+ mise（送る：promiseのmiseと同根）で、あらかじめ提示された「前提」や、法的な文脈から「敷地」を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[11],
    allParts: ["pre", "mise", "s", "d"],
    targetWord: "premise"
  }
];
export const PRO_QUIZ_QUESTIONS: Question[] = [
  {
    id: "pro-1",
    question: "「pro (前に)」＋「[ ? ] (行く)」で、「前に行く ＝ 前進する・続行する」という意味の 'proceed' の、[ ? ] は？",
    options: ["ceed", "cede", "cess", "it"],
    correctAnswer: "ceed",
    explanation: "pro（前に）+ ceed（行く）で、立ち止まらずに先へ進むことを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
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
    etymology: ETIMOLOGY_DATA[12],
    allParts: ["pro", "hibit", "ion", "ive"],
    targetWord: "prohibit"
  },
  {
    id: "pro-20",
    question: "���pro (前に)」＋「[ ? ] (流れる)」で、「（言葉が）前に流れ出る ＝ 豊富な」という意味の 'profuse' の、[ ? ] は？",
    options: ["fuse", "flu", "flex", "flect"],
    correctAnswer: "fuse",
    explanation: "pro（前に）+ fuse（注ぐ：confuseのfuseと同根）で、溢れんばかりに注ぎ出される「豊富な」という意味です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[12],
    allParts: ["pro", "fuse", "ly", "ion"],
    targetWord: "profuse"
  }
];
export const RE_QUIZ_QUESTIONS: Question[] = [
  {
    id: "re-1",
    question: "「re (後ろに)」＋「[ ? ] (置く)」で、「元の場所に置く ＝ 置き換える・戻す」という意味の 'replace' の、[ ? ] は？",
    options: ["place", "pact", "pose", "part"],
    correctAnswer: "place",
    explanation: "re（元の場所へ）+ place（置く）で、古いものをどけて新しいものを置く「取り替える」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
    allParts: ["re", "fer", "ence", "ral"],
    targetWord: "refer"
  },
  {
    id: "re-13",
    question: "「re (後ろに)」＋「[ ? ] (閉じる)」で、「（秘密の扉を）後ろに開く ＝ 明らかにする」という意味の 'reveal' の、[ ? ] は？",
    options: ["veal", "veal", "vail", "vail"],
    correctAnswer: "veal",
    explanation: "re（反対に）+ veal（ベール/覆い）で、覆いを取り除く「明らかにす���」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
    allParts: ["re", "mem", "ber", "ance"],
    targetWord: "remember"
  },
  {
    id: "re-18",
    question: "「re (後ろに)」＋「[ ? ] (保つ)」で、「（手元に）後ろに持ち続ける ＝ 保持する」を意味する 'retain' の、[ ? ] は？",
    options: ["tain", "tain", "tent", "tend"],
    correctAnswer: "tain",
    explanation: "re（後ろに）+ tain（保つ：containと同根）で、手放さずに「保持する」��いう意味です。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
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
    etymology: ETIMOLOGY_DATA[13],
    allParts: ["re", "gist", "er", "ration"],
    targetWord: "register"
  }
];
export const SUB_QUIZ_QUESTIONS: Question[] = [
  {
    id: "sub-1",
    question: "「sub (下に)」＋「[ ? ] (道)」で、「道の下を通る ＝ 地下鉄」という意味になる単語 'subway' の、[ ? ] は？",
    options: ["way", "walk", "ward", "wait"],
    correctAnswer: "way",
    explanation: "sub（下に）+ way（道）で、地上道路の下を通る交通機関「地下鉄」を指します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "way", "s", "ed"],
    targetWord: "subway"
  },
  {
    id: "sub-2",
    question: "「sub (下に)」＋「[ ? ] (海)」で、「海の下（を潜るもの） ＝ 潜水艦」という意味の 'submarine' の、[ ? ] は？",
    options: ["marine", "mare", "merge", "mount"],
    correctAnswer: "marine",
    explanation: "sub（下に）+ marine（海の）で、海面下を航行する船を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "mar", "ine", "s"],
    targetWord: "submarine"
  },
  {
    id: "sub-3",
    question: "「sub (下に)」＋「[ ? ] (置く)」で、「（代わりのものを）下に置く ＝ 代用する」を意味する 'substitute' の、[ ? ] は？",
    options: ["stitute", "stance", "sist", "stroy"],
    correctAnswer: "stitute",
    explanation: "sub（下に/代わりに）+ stitute（立てる/置く）で、本来のものの代わりに別のものを立てる「代用する」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "stitu", "te", "tion"],
    targetWord: "substitute"
  },
  {
    id: "sub-4",
    question: "「sub (下に)」＋「[ ? ] (立つ)」で、「（性質が）下に立っている（潜んでいる） ＝ 物質・実体」を意味する 'substance' の、[ ? ] は？",
    options: ["stance", "sist", "stitute", "serve"],
    correctAnswer: "stance",
    explanation: "sub（下に）+ stance（立つ：standと同根）で、表面からは見えないが根底にある「実体」を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "stan", "ce", "tial"],
    targetWord: "substance"
  },
  {
    id: "sub-5",
    question: "「sup (subの変形：下から)」＋「[ ? ] (運ぶ)」で、「下から支えて運ぶ ＝ 支持する・支える」を意味する 'support' の、[ ? ] は？",
    options: ["port", "pose", "press", "part"],
    correctAnswer: "port",
    explanation: "sup（下から）+ port（運ぶ）で、重みを下から支える「支持する」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sup", "port", "er", "ive"],
    targetWord: "support"
  },
  {
    id: "sub-6",
    question: "「sub (下に)」＋「[ ? ] (投げる)」で、「（支配の）下に投げ出す ＝ 支配下にある・題名」を意味する 'subject' の、[ ? ] は？",
    options: ["ject", "join", "judge", "just"],
    correctAnswer: "ject",
    explanation: "sub（下に）+ ject（投げる）で、王の支配下に投げられた「臣民」や、議論の下に置かれた「主題」を意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "ject", "ive", "ion"],
    targetWord: "subject"
  },
  {
    id: "sub-7",
    question: "「sub (下に)」＋「[ ? ] (書く)」で、「（書類の）下に書く ＝ 署名する・定期購読する」という意味の 'subscribe' の、[ ? ] は？",
    options: ["scribe", "script", "scend", "serve"],
    correctAnswer: "scribe",
    explanation: "sub（下に）+ scribe（書く）で、同意して名前を下に書くことから「署名する」や「購読する」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "scrib", "e", "ption"],
    targetWord: "subscribe"
  },
  {
    id: "sub-8",
    question: "「suc (subの変形：下に)」＋「[ ? ] (行く)」で、「（あとに続いて）下に行く ＝ 成功する・継承する」を意味する 'succeed' の、[ ? ] は？",
    options: ["ceed", "cede", "cess", "course"],
    correctAnswer: "ceed",
    explanation: "suc（下に/あとに）+ ceed（行く）で、前の人のあとに続く「継承する」、あるいは物事が良い結果に続く「成功する」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["suc", "ceed", "ed", "ion"],
    targetWord: "succeed"
  },
  {
    id: "sub-9",
    question: "「sub (下に)」＋「[ ? ] (引く)」で、「（全体から）下へ引く ＝ 引き算する」という意味の 'subtract' の、[ ? ] は？",
    options: ["tract", "tribute", "trude", "tend"],
    correctAnswer: "tract",
    explanation: "sub（下に）+ tract（引く）で、全体から一部を下に抜き取る「差し引く」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "tract", "ion", "ed"],
    targetWord: "subtract"
  },
  {
    id: "sub-10",
    question: "「sup (subの変形：下に)」＋「[ ? ] (置く)」で、「（真実の）下に置く ＝ 仮定する・思う」という意味の 'suppose' の、[ ? ] は？",
    options: ["pose", "posit", "pound", "press"],
    correctAnswer: "pose",
    explanation: "sup（下に）+ pose（置く）で、土台として下に置いてみる「仮定する」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sup", "pose", "dly", "ition"],
    targetWord: "suppose"
  },
  {
    id: "sub-11",
    question: "「sub (下に)」＋「[ ? ] (送る)」で、「（意見を）下に送る ＝ 提出する・服従する」という意味の 'submit' の、[ ? ] は？",
    options: ["mit", "miss", "mote", "move"],
    correctAnswer: "mit",
    explanation: "sub（下に）+ mit（送る）で、権力者のもとに書類を送る「提出する」や、身を低くして「屈服する」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "mit", "ted", "sion"],
    targetWord: "submit"
  },
  {
    id: "sub-12",
    question: "「suf (subの変形：下から)」＋「[ ? ] (作る)」で、「（必要分を）下から作り出す ＝ 十分な」を意味する 'sufficient' の、[ ? ] は？",
    options: ["fici", "fact", "fect", "fess"],
    correctAnswer: "fici",
    explanation: "suf（下から/補って）+ fici（作る：factoryと同根）で、満たされるまで作る「十分な」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["suf", "fici", "ent", "ency"],
    targetWord: "sufficient"
  },
  {
    id: "sub-13",
    question: "「sub (下に)」＋「[ ? ] (沈む)」で、「（水面下に）沈む ＝ 水没させる」を意味する 'submerge' の、[ ? ] は？",
    options: ["merge", "mount", "move", "main"],
    correctAnswer: "merge",
    explanation: "sub（下に）+ merge（浸す/潜る）で、液体の中に完全に沈めることを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "merg", "e", "ence"],
    targetWord: "submerge"
  },
  {
    id: "sub-14",
    question: "「sub (近くに)」＋「[ ? ] (街)」で、「街の近く ＝ 郊外」を意味する 'suburb' の、[ ? ] は？",
    options: ["urb", "urban", "unit", "urge"],
    correctAnswer: "urb",
    explanation: "sub（近くに）+ urb（都市）で、都市の周辺地域を指す「郊外」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "urb", "an", "s"],
    targetWord: "suburb"
  },
  {
    id: "sub-15",
    question: "「sup (subの変形：下に)」＋「[ ? ] (押す)」で、「下に押しつける ＝ 抑圧する・抑える」という意味の 'suppress' の、[ ? ] は？",
    options: ["press", "praise", "prive", "prave"],
    correctAnswer: "press",
    explanation: "sup（下に）+ press（押す）で、反乱や感情を力ずくで抑え込むことを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sup", "press", "ion", "ive"],
    targetWord: "suppress"
  },
  {
    id: "sub-16",
    question: "「sub (下に)」＋「[ ? ] (意識)」で、「意識の下にある ＝ 潜在意識」を意味する 'subconscious' の、[ ? ] は？",
    options: ["conscious", "conscience", "science", "sense"],
    correctAnswer: "conscious",
    explanation: "sub（下に）+ conscious（意識している）で、自覚できない心の奥底を指します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "con", "scious", "ly"],
    targetWord: "subconscious"
  },
  {
    id: "sub-17",
    question: "「sub (下に)」＋「[ ? ] (続く)」で、「（あとに）続いて起こる ＝ 次の・後続の」という意味の 'subsequent' の、[ ? ] は？",
    options: ["sequent", "secute", "sent", "sist"],
    correctAnswer: "sequent",
    explanation: "sub（下に/あとに）+ sequent（続く：sequenceと同根）で、時間的にあとに来ることを意味します。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "sequ", "ent", "ly"],
    targetWord: "subsequent"
  },
  {
    id: "sub-18",
    question: "「sub (下に)」＋「[ ? ] (保つ)」で、「（命を）下から支えて保つ ＝ 維持する・生きながらえる」という意味の 'subsist' の、[ ? ] は？",
    options: ["sist", "serve", "sert", "solve"],
    correctAnswer: "sist",
    explanation: "sub（下から）+ sist（立つ）で、最低限の生活を支えて「生き延びる」という意味になります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "sist", "ence", "ent"],
    targetWord: "subsist"
  },
  {
    id: "sub-19",
    question: "「sub (下に)」＋「[ ? ] (傾く)」で、「（価値が）下に傾く ＝ 補助金」を意味する 'subsidy' の、[ ? ] に近い語源は？",
    options: ["sid", "sed", "set", "sit"],
    correctAnswer: "sid",
    explanation: "sub（下に）+ sid（座る：sit/sedentaryと同根）で、後ろに控えて座って支える控えの兵、転じて「補助金」となりました。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "sid", "y", "ize"],
    targetWord: "subsidy"
  },
  {
    id: "sub-20",
    question: "「sub (下に)」＋「[ ? ] (吸い込む)」で、「下へ吸い込む ＝ 吸収する」という意味の 'subsume' の、[ ? ] は？",
    options: ["sume", "serve", "solve", "scribe"],
    correctAnswer: "sume",
    explanation: "sub（下に）+ sume（取る：assume/consumeと同根）で、大きなカテゴリーの下に取り込む「含める��包含する」となります。",
    category: "Compound",
    etymology: ETIMOLOGY_DATA[14],
    allParts: ["sub", "sum", "e", "ption"],
    targetWord: "subsume"
  }
];

/**
 * ユーティリティ関数（必要に応じて他のページから呼び出されます）
 */
export const getEtymologyById = (id: string) => {
  return ETIMOLOGY_DATA.find((e) => e.id === id);
};

export const getQuestionsByCategory = (category: string) => {
  return QUIZ_QUESTIONS.filter((q) => q.category === category);
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

export const generateQuestions = (params: any, type: string): Question[] => {
  // QUIZ_QUESTIONS からランダムに取得したり、カテゴリで絞り込んだりする処理
  return QUIZ_QUESTIONS;
};

/**
 * 接頭辞と対応する語根・語源のマッピング
 */
export const PREFIX_ETYMOLOGY_MAP: Record<string, { roots: string[]; questions: Question[] }> = {
  AD: {
    roots: ['just', 'apt', 'dict', 'rect'],
    questions: AD_QUIZ_QUESTIONS
  },
  CON: {
    roots: ['pose', 'struct', 'dur', 'test'],
    questions: CON_QUIZ_QUESTIONS
  },
  DE: {
    roots: ['scribe', 'script', 'struct', 'cide'],
    questions: DE_QUIZ_QUESTIONS
  },
  EX: {
    roots: ['port', 'tract', 'pose', 'claim'],
    questions: EX_QUIZ_QUESTIONS
  },
  'IN/IM': {
    roots: ['port', 'press', 'struct', 'fect'],
    questions: IN_IM_QUIZ_QUESTIONS
  },
  PER: {
    roots: ['sist', 'form', 'mit', 'ject'],
    questions: PER_QUIZ_QUESTIONS
  },
  PRE: {
    roots: ['dict', 'fer', 'fix', 'view'],
    questions: PRE_QUIZ_QUESTIONS
  },
  PRO: {
    roots: ['ceed', 'claim', 'duce', 'pose'],
    questions: PRO_QUIZ_QUESTIONS
  },
  RE: {
    roots: ['place', 'late', 'fer', 'view'],
    questions: RE_QUIZ_QUESTIONS
  },
  SUB: {
    roots: ['way', 'merge', 'ject', 'scribe'],
    questions: SUB_QUIZ_QUESTIONS
  }
};

/**
 * 接頭辞から対応するクイズ問題を取得
 */
export const getQuestionsByPrefix = (prefix: string): Question[] => {
  return PREFIX_ETYMOLOGY_MAP[prefix]?.questions || [];
};

/**
 * 接頭辞から対応する語根リストを取得
 */
export const getRootsByPrefix = (prefix: string): string[] => {
  return PREFIX_ETYMOLOGY_MAP[prefix]?.roots || [];
};

/**
 * 接頭辞と語根から対応する問題をフィルタリング
 */
export const getQuestionsByPrefixAndRoot = (prefix: string, root: string): Question[] => {
  const questions = getQuestionsByPrefix(prefix);
  // 問題内のテキストに語根が含まれているかチェック
  return questions.filter(q => 
    q.question.includes(root) || 
    q.options.some(opt => opt.includes(root)) ||
    q.correctAnswer.includes(root)
  );
};
