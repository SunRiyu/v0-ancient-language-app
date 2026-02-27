'use client'

interface QuizProgressProps {
  current: number
  total: number
  correct: number
  title: string
  subtitle?: string
}

export function QuizProgress({
  current,
  total,
  correct,
  title,
  subtitle,
}: QuizProgressProps) {
  const percentage = Math.round((current / total) * 100)
  const correctPercentage = Math.round((correct / current) * 100)

  return (
    <div className="w-full bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 sticky top-0 z-40 border-b border-amber-900/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header Info */}
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-amber-50 text-center">
            {title}
          </h1>
          {subtitle && (
            <p className="text-amber-100/60 text-center text-sm mt-1">{subtitle}</p>
          )}
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6 max-w-md mx-auto">
          <div className="bg-stone-800/50 rounded-lg p-3 border border-amber-900/30 text-center">
            <p className="text-amber-300/60 text-xs uppercase tracking-wide mb-1">進捗</p>
            <p className="text-amber-50 font-bold text-lg">
              {current}/{total}
            </p>
          </div>
          <div className="bg-stone-800/50 rounded-lg p-3 border border-amber-900/30 text-center">
            <p className="text-amber-300/60 text-xs uppercase tracking-wide mb-1">正解率</p>
            <p className="text-green-400 font-bold text-lg">
              {current > 0 ? correctPercentage : 0}%
            </p>
          </div>
          <div className="bg-stone-800/50 rounded-lg p-3 border border-amber-900/30 text-center">
            <p className="text-amber-300/60 text-xs uppercase tracking-wide mb-1">正解数</p>
            <p className="text-amber-50 font-bold text-lg">
              {correct}/{current}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3">
          <div className="flex-grow h-3 bg-stone-700 rounded-full overflow-hidden border border-amber-900/20">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-green-500 transition-all duration-500 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-amber-300 font-semibold text-sm min-w-fit">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  )
}
