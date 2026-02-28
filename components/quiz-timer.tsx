'use client'

import { useEffect, useState } from 'react'

interface QuizTimerProps {
  totalSeconds: number
  isActive: boolean
  onTimeUp: () => void
  resetKey?: number | string
}

export function QuizTimer({
  totalSeconds,
  isActive,
  onTimeUp,
  resetKey,
}: QuizTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds)

  // Reset timer when resetKey changes
  useEffect(() => {
    setSecondsLeft(totalSeconds)
  }, [resetKey, totalSeconds])

  useEffect(() => {
    if (!isActive || secondsLeft <= 0) return

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1
        if (next <= 0) {
          // Defer the callback to avoid setState during render
          setTimeout(() => {
            onTimeUp()
          }, 0)
          return 0
        }
        return next
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isActive, secondsLeft, onTimeUp])

  const percentage = (secondsLeft / totalSeconds) * 100
  const isWarning = secondsLeft <= 3

  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex-1">
        <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              isWarning
                ? 'bg-red-500 animate-pulse'
                : 'bg-gradient-to-r from-green-500 to-amber-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <div
        className={`text-2xl font-bold font-mono w-12 text-right ${
          isWarning ? 'text-red-400 animate-pulse' : 'text-amber-300'
        }`}
      >
        {secondsLeft.toString().padStart(2, '0')}秒
      </div>
    </div>
  )
}
