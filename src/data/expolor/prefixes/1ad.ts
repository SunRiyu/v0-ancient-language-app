import { Question,Etymology } from "@/lib/quiz-types";

/**
 * 探究者の道：接頭辞「ad- (〜の方へ)」のクイズデータ
 */
const adEtymology: Etymology = {
  id: "prefix-ad",
  root: "ad-",
  meaning: "〜の方へ、付加",
  origin: "Latin 'ad'",
  description: "方向、変化、付加、強調などを表す接頭辞。後ろに続く文字によって ac-, ap-, as- などに変化する。"
};

export const AD_QUIZ_QUESTIONS: Question[] = [
{
    id: "ad-1",
    question: "「ad (〜の方へ)」＋「[ ? ] (正しい・適正な)」で、「正しい状態へ向かわせる ＝ 調整する」という意味になる単語 'adjust' の、[ ? ] に入る語源は？",
    options: ["just", "dict", "rect", "apt"],
    correctAnswer: "just",
    explanation: "ad（〜の方へ）+ just（正しい）で、物事を正しい状態へ持っていくことから「調整する・適合させる」という意味になります。",
    category: "Compound",
    etymology: adEtymology,
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
    etymology: adEtymology,
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
    etymology: adEtymology,
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
    etymology: adEtymology,
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
    etymology: adEtymology,
    allParts: ["ad", "apt", "er", "able"],
    targetWord: "adapt"
  }
];