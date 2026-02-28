'use client'

import { useState } from 'react'
import { Question } from '@/lib/quiz-types'
import { GameButton } from '@/components/game-button'
import EtymologyIntroPage from '@/app/etymology-intro/page'

interface QuizQuestionProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswer: (selectedIndex: number) => void
  isAnswered?: boolean
  selectedAnswer?: number
}

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  isAnswered = false,
  selectedAnswer,
}: QuizQuestionProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Question Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-amber-300">
            問題 {questionNumber} / {totalQuestions}
          </span>
          <div className="h-2 bg-stone-700 rounded-full w-32 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-amber-50 mb-4 leading-relaxed">
          {question.question}
        </h2>

        {/* Etymology Info */}
        <div className="bg-stone-900/50 rounded-lg p-4 border border-amber-900/30 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-amber-300/60 text-xs uppercase tracking-wide">語源要素</p>
              {/* name ではなく root を使う */}
              <p className="text-amber-100 font-bold text-lg">{question.etymology.root}</p>
            </div>
            <div>
              <p className="text-amber-300/60 text-xs uppercase tracking-wide">原始言語</p>
              {/* language ではなく origin を使う */}
              <p className="text-amber-100 font-semibold">{question.etymology.origin}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Answer Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => {
          // 「今の選択肢のテキスト」が「正解のテキスト」と一致するかで判定
          const isCorrect = option === question.correctAnswer;
          // ユーザーが選んだものがこの選択肢かどうか（ここは引数で渡された index を使用）
          const isSelected = selectedAnswer === index;
          const showResult = isAnswered && (isCorrect || isSelected);

          return (
            <button
              key={index}
              onClick={() => !isAnswered && onAnswer(index)}
              onMouseEnter={() => !isAnswered && setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              disabled={isAnswered}
              className={`w-full p-4 rounded-lg text-left transition-all duration-200 font-semibold ${isAnswered
                  ? isCorrect
                    ? 'bg-green-900/40 border-2 border-green-500 text-green-100'
                    : isSelected
                      ? 'bg-red-900/40 border-2 border-red-500 text-red-100'
                      : 'bg-stone-800/50 border-2 border-stone-700 text-stone-400'
                  : hovered === index
                    ? 'bg-amber-900/40 border-2 border-amber-400 text-amber-50'
                    : 'bg-stone-800/50 border-2 border-amber-900/20 text-amber-100 hover:bg-stone-800'
                } ${!isAnswered && 'cursor-pointer'}`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && (
                  <span className="text-lg">
                    {isCorrect ? '✓' : '✗'}
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Explanation (shown after answer) */}
      {isAnswered && (
        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <h3 className="text-amber-200 font-bold mb-2">解説</h3>
          <p className="text-amber-100/90">{question.explanation}</p>
        </div>
      )}

      {/* Note: Parent component handles the "Next" button */}
    </div>
  )
}
