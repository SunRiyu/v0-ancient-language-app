'use client'

import { Question } from '@/lib/quiz-types'

interface PreviousAnswersReviewProps {
  questions: Question[]
  answers: Array<{
    questionId: string
    selectedIndex: number
    isCorrect: boolean
  }>
}

export function PreviousAnswersReview({
  questions,
  answers,
}: PreviousAnswersReviewProps) {
  // Get last 5 answers for review
  const reviewAnswers = answers.slice(-5)
  
  // Count correct answers in last 5
  const correctInLastFive = reviewAnswers.filter(a => a.isCorrect).length

  return (
    <div className="w-full max-w-2xl mx-auto bg-stone-900/50 rounded-xl border border-amber-900/30 p-6 mb-8">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-amber-200 mb-2">直近の回答</h3>
        <p className="text-amber-100/60 text-sm">
          最後の5問中、{correctInLastFive}問正解
        </p>
      </div>

      <div className="space-y-3">
        {reviewAnswers.map((answer, index) => {
          const question = questions.find(q => q.id === answer.questionId)
          if (!question) return null

          return (
            <div
              key={`${answer.questionId}-${index}`}
              className={`flex items-start gap-3 p-3 rounded-lg border ${
                answer.isCorrect
                  ? 'bg-green-900/20 border-green-500/50'
                  : 'bg-red-900/20 border-red-500/50'
              }`}
            >
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                  answer.isCorrect
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                {answer.isCorrect ? '✓' : '✗'}
              </div>
              <div className="flex-grow">
                <p className="text-sm font-semibold text-amber-50">
                  {question.question}
                </p>
                <div className="mt-2 text-xs space-y-1">
                  <p className="text-amber-100/70">
                    <span className="text-amber-300">選択: </span>
                    {question.options[answer.selectedIndex]}
                  </p>
                  {!answer.isCorrect && (
                    <p className="text-green-300">
                      <span className="text-green-400">正解: </span>
                      {question.options[question.correctIndex]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Pass/Fail status for last 5 */}
      <div className="mt-6 pt-6 border-t border-amber-900/30">
        <p className={`text-center font-bold text-lg ${
          correctInLastFive >= 4 ? 'text-green-400' : 'text-amber-300'
        }`}>
          {correctInLastFive >= 4
            ? '合格へのパス達成！'
            : `あと ${4 - correctInLastFive} 問正解が必要です`}
        </p>
      </div>
    </div>
  )
}
