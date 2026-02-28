'use client'

import { useState, useEffect } from 'react'
import { CombinationQuestion } from '@/lib/quiz-types'
import { GameButton } from '@/components/game-button'

interface CompoundQuizProps {
  question: CombinationQuestion
  questionNumber: number
  totalQuestions: number
  onAnswer: (selectedParts: string[]) => void
  isAnswered?: boolean
  resetKey?: number | string
}

export function CompoundQuiz({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  isAnswered = false,
  resetKey,
}: CompoundQuizProps) {
  const [selectedParts, setSelectedParts] = useState<string[]>([])
  const [availableParts, setAvailableParts] = useState(question.allParts)
  const [submitted, setSubmitted] = useState(false)

  // Reset state when resetKey changes or question changes
  useEffect(() => {
    setSelectedParts([])
    setAvailableParts(question.allParts)
    setSubmitted(false)
  }, [resetKey, question.id, question.allParts])

  const handleSelectPart = (part: string) => {
    if (!isAnswered && !submitted) {
      setSelectedParts([...selectedParts, part])
      setAvailableParts(availableParts.filter(p => p !== part))
    }
  }

  const handleRemovePart = (index: number) => {
    const removed = selectedParts[index]
    setSelectedParts(selectedParts.filter((_, i) => i !== index))
    setAvailableParts([...availableParts, removed])
  }

  const handleSubmit = () => {
    setSubmitted(true)
    onAnswer(selectedParts)
  }

  const isCorrect = selectedParts.join('') === question.targetWord

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
              <p className="text-amber-100 font-bold text-lg">{question.etymology.name}</p>
            </div>
            <div>
              <p className="text-amber-300/60 text-xs uppercase tracking-wide">原始言語</p>
              <p className="text-amber-100 font-semibold">{question.etymology.language}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Parts Display */}
      <div className="mb-6 p-4 bg-amber-900/20 border-2 border-dashed border-amber-500/50 rounded-lg min-h-16 flex items-center">
        {selectedParts.length === 0 ? (
          <p className="text-amber-300/60 text-center w-full">ここにパーツを選んでください</p>
        ) : (
          <div className="flex flex-wrap gap-2 w-full">
            {selectedParts.map((part, index) => (
              <button
                key={index}
                onClick={() => handleRemovePart(index)}
                className="px-3 py-2 bg-amber-500 text-amber-950 font-bold rounded hover:bg-amber-400 transition-colors"
              >
                {part} ✕
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Available Parts */}
      <div className="mb-8">
        <p className="text-amber-300 font-semibold mb-3">利用可能なパーツ</p>
        <div className="flex flex-wrap gap-2">
          {availableParts.map((part) => (
            <button
              key={part}
              onClick={() => handleSelectPart(part)}
              disabled={submitted || isAnswered}
              className={`px-4 py-2 rounded font-semibold transition-all ${
                submitted || isAnswered
                  ? 'bg-stone-700/50 text-stone-400 cursor-not-allowed'
                  : 'bg-stone-700 text-amber-50 hover:bg-stone-600 cursor-pointer hover:border-amber-400'
              } border border-stone-600`}
            >
              {part}
            </button>
          ))}
        </div>
      </div>

      {/* Result Display */}
      {submitted && (
        <div className={`mb-6 p-4 rounded-lg border-2 ${
          isCorrect
            ? 'bg-green-900/40 border-green-500 text-green-100'
            : 'bg-red-900/40 border-red-500 text-red-100'
        }`}>
          <p className="font-bold mb-2">
            {isCorrect ? '✓ 正解！' : '✗ 不正解'}
          </p>
          <p>正解の単語：<span className="font-bold">{question.targetWord}</span></p>
          <p className="text-sm mt-2">あなたの答え：<span className="font-bold">{selectedParts.join('') || '未入力'}</span></p>
        </div>
      )}

      {/* Explanation */}
      {submitted && (
        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <h3 className="text-amber-200 font-bold mb-2">解説</h3>
          <p className="text-amber-100/90">{question.explanation}</p>
        </div>
      )}

      {/* Submit Button */}
      {!submitted && (
        <div className="flex justify-center">
          <GameButton
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={selectedParts.length === 0}
          >
            答える
          </GameButton>
        </div>
      )}
    </div>
  )
}
