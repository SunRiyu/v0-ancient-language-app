import { Question, Etymology } from "./quiz-types";

/**
 * 語源参考書に基づいた本格的な語源データ
 * 英語の語彙の約6〜7割を占めると言われるラテン語・ギリシャ語の語根を網羅しています。
 */



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