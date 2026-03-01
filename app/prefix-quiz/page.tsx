'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getQuestionsByPrefixAndRoot, checkPassCriteria } from '@/lib/quiz-utils';
import { Question } from '@/lib/quiz-types';
import { ArrowLeft } from 'lucide-react';

export default function PrefixQuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const prefix = searchParams.get('prefix') || '';
  const root = searchParams.get('root') || '';

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const quizQuestions = getQuestionsByPrefixAndRoot(prefix, root);
    setQuestions(quizQuestions);
  }, [prefix, root]);

  if (questions.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 p-6">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-amber-800 hover:text-amber-900 mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>戻る</span>
          </button>
          <Card className="p-8 bg-white border-2 border-amber-200 text-center">
            <p className="text-amber-800">
              申し訳ありません。このクイズのデータを読み込めません。
            </p>
          </Card>
        </div>
      </main>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // クイズ完了
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // 結果を計算
  const calculateResults = () => {
    const results = questions.map((q) => ({
      isCorrect: selectedAnswers[q.id] === q.correctAnswer,
    }));
    return results;
  };

  if (quizCompleted) {
    const results = calculateResults();
    const score = results.filter(r => r.isCorrect).length;
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
    const passed = checkPassCriteria(results);

    return (
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              クイズ完了！
            </h1>
          </div>

          {/* スコア表示 */}
          <Card className="p-8 bg-white border-2 border-amber-200 mb-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-amber-900 mb-2">
                {percentage.toFixed(0)}%
              </div>
              <p className="text-xl text-amber-800 mb-6">
                {score} / {totalQuestions} 問正解
              </p>

              {passed ? (
                <div className="bg-green-100 border-2 border-green-400 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-bold text-lg">
                    ✨ 合格です！おめでとうございます！
                  </p>
                </div>
              ) : (
                <div className="bg-red-100 border-2 border-red-400 rounded-lg p-4 mb-6">
                  <p className="text-red-800 font-bold text-lg">
                    もう一度チャレンジしてみましょう
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-3">
                <Button
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                    setSelectedAnswers({});
                    setQuizCompleted(false);
                  }}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                >
                  もう一度クイズを受ける
                </Button>
                <Button
                  onClick={() => router.push(`/prefix-etymology?prefix=${encodeURIComponent(prefix)}`)}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white"
                >
                  他の語根を選ぶ
                </Button>
                <Button
                  onClick={() => router.push('/prefix-selection')}
                  className="w-full bg-gray-400 hover:bg-gray-500 text-white"
                >
                  接頭辞選択に戻る
                </Button>
              </div>
            </div>
          </Card>

          {/* 詳細結果 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">詳細結果</h2>
            {questions.map((q, idx) => {
              const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
              return (
                <Card
                  key={q.id}
                  className={`p-4 border-2 ${
                    isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-xl font-bold ${
                      isCorrect ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {isCorrect ? '✓' : '✗'}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">
                        Q{idx + 1}: {q.question.substring(0, 60)}...
                      </p>
                      <p className={`text-sm mt-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        {isCorrect ? '正解' : `誤答: ${selectedAnswers[q.id] || '未回答'}`}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  const isAnswered = currentQuestion.id in selectedAnswers;
  const selectedAnswer = selectedAnswers[currentQuestion.id];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 p-6">
      <div className="max-w-2xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-6">
          <button
            onClick={() => router.push(`/prefix-etymology?prefix=${encodeURIComponent(prefix)}`)}
            className="flex items-center gap-2 text-amber-800 hover:text-amber-900 mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>戻る</span>
          </button>
          
          <h1 className="text-3xl font-bold text-amber-900">
            {prefix} - {root} のクイズ
          </h1>
          
          {/* プログレスバー */}
          <div className="mt-4 bg-amber-200 rounded-full h-2">
            <div
              className="bg-amber-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-amber-800 mt-2">
            {currentQuestionIndex + 1} / {questions.length}
          </p>
        </div>

        {/* 問題カード */}
        <Card className="p-8 bg-white border-2 border-amber-200 mb-6">
          <h2 className="text-xl font-bold text-amber-900 mb-6">
            {currentQuestion.question}
          </h2>

          {/* 選択肢 */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === option
                    ? 'bg-amber-200 border-amber-600 text-amber-900 font-semibold'
                    : 'bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </Card>

        {/* ナビゲーションボタン */}
        <div className="flex gap-3">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex-1 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white"
          >
            前へ
          </Button>
          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex-1 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300 text-white"
          >
            {currentQuestionIndex === questions.length - 1 ? '完了' : '次へ'}
          </Button>
        </div>
      </div>
    </main>
  );
}
