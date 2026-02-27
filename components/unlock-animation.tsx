'use client'

import { useEffect, useState } from 'react'
import { UNLOCK_MESSAGES } from '@/lib/quiz-types'

interface UnlockAnimationProps {
  isVisible: boolean
  course: 'seeker' | 'sage'
  etymologyName: string
  onComplete?: () => void
}

export function UnlockAnimation({
  isVisible,
  course,
  etymologyName,
  onComplete,
}: UnlockAnimationProps) {
  const [showAnimation, setShowAnimation] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setShowAnimation(true)
      const messageTimer = setTimeout(() => setShowMessage(true), 800)
      const completeTimer = setTimeout(() => {
        onComplete?.()
        setShowAnimation(false)
        setShowMessage(false)
      }, 3500)

      return () => {
        clearTimeout(messageTimer)
        clearTimeout(completeTimer)
      }
    }
  }, [isVisible, onComplete])

  if (!showAnimation) return null

  const messages = UNLOCK_MESSAGES[course]
  const message = messages[Math.floor(Math.random() * messages.length)]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative">
        {/* Outer seal ring animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="absolute w-64 h-64 rounded-full border-2 border-amber-400 opacity-0 animate-ping"
            style={{
              animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) 1',
            }}
          />
        </div>

        {/* Main unlock effect */}
        <div className="relative w-80 flex flex-col items-center">
          {/* Seal symbol */}
          <div
            className={`transition-all duration-700 ${
              showMessage ? 'scale-110 opacity-100' : 'scale-100 opacity-80'
            }`}
          >
            <svg
              className="w-24 h-24 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Unlock message */}
          {showMessage && (
            <div className="mt-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-amber-200 mb-3 text-balance">
                {etymologyName} がアンロックされた
              </h2>
              <p className="text-amber-100 text-lg font-semibold italic">
                {message}
              </p>
            </div>
          )}

          {/* Particle effects */}
          {showMessage && (
            <>
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2
                const distance = 100
                const x = Math.cos(angle) * distance
                const y = Math.sin(angle) * distance

                return (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-300 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animation: `fadeOut 1s ease-out forwards`,
                      animationDelay: `${i * 50}ms`,
                    }}
                  />
                )
              })}
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: translate(var(--x), var(--y)) scale(0.5);
          }
        }
      `}</style>
    </div>
  )
}
