'use client'

import { useEffect, useState } from 'react'

interface ResultEffectProps {
  isCorrect: boolean
  isVisible: boolean
}

export function ResultEffect({ isCorrect, isVisible }: ResultEffectProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setShow(true)
      // Hide after 1 second
      const timer = setTimeout(() => {
        setShow(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  if (!show) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      {isCorrect ? (
        // Green circle for correct answer
        <div className="animate-in fade-in zoom-in duration-300">
          <div className="relative">
            <div className="w-40 h-40 rounded-full border-8 border-green-400 animate-pulse" />
            <div className="absolute inset-0 w-40 h-40 rounded-full border-8 border-green-400 animate-ping opacity-75" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-green-400 text-9xl font-bold">●</div>
            </div>
          </div>
          <div className="text-center mt-8 text-green-400 text-3xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-300">
            正解！
          </div>
        </div>
      ) : (
        // Red X for wrong answer
        <div className="animate-in fade-in zoom-in duration-300">
          <div className="relative">
            <div className="w-40 h-40 rounded-full border-8 border-red-400 animate-pulse" />
            <div className="absolute inset-0 w-40 h-40 rounded-full border-8 border-red-400 animate-ping opacity-75" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-red-400 text-8xl font-bold">✕</div>
            </div>
          </div>
          <div className="text-center mt-8 text-red-400 text-3xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-300">
            不正解
          </div>
        </div>
      )}
    </div>
  )
}
