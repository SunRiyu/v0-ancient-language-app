'use client'

import { useState, useEffect, Suspense, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { BackButton } from '@/components/back-button'
import { CompoundQuiz } from '@/components/compound-quiz'
import { QuizProgress } from '@/components/quiz-progress'
import { UnlockAnimation } from '@/components/unlock-animation'
import { GameButton } from '@/components/game-button'
import { ResultEffect } from '@/components/result-effect'
import { QuizTimer } from '@/components/quiz-timer'
import {
  generateQuestions,
  calculateScore,
  checkPassCriteria,
} from '@/lib/quiz-utils'
import { Question, CombinationQuestion } from '@/lib/quiz-types'

function QuizContent() {
  const router = useRouter()
  
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Array<{
    questionId: string
    selectedIndex: number
    isCorrect: boolean
    timestamp: number
  }>>([])
  const [isAnswered, setIsAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showUnlock, setShowUnlock] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showResultEffect, setShowResultEffect] = useState(false)
  const [lastIsCorrect, setLastIsCorrect] = useState(false)
  const [timerKey, setTimerKey] = useState(0)

  // Initialize quiz on mount
  useEffect(() => {
    // 常に合成クイズを生成（ダミーのparams使用）
    const generatedQuestions = generateQuestions({} as any, 'prefix')
    setQuestions(generatedQuestions)
    setIsLoaded(true)
  }, [])

  const handleAnswer = (selectedIndexOrParts: number | string[]) => {
    const currentQuestion = questions[currentQuestionIndex]
    let isCorrect = false
    let selectedIndex = 0

    // 合成クイズの場合は配列、通常クイズの場合は数値
    if (Array.isArray(selectedIndexOrParts)) {
      const selectedWord = selectedIndexOrParts.join('')
      const targetWord = (currentQuestion as CombinationQuestion).targetWord
      isCorrect = selectedWord === targetWord
      selectedIndex = isCorrect ? 0 : 1 // ダミーインデックス
    } else {
      isCorrect = selectedIndexOrParts === currentQuestion.correctIndex
      selectedIndex = selectedIndexOrParts
    }
    
    // タイマーを止める
    setTimerKey(prev => prev + 1)
    
    setSelectedAnswer(selectedIndex)
    setIsAnswered(true)
    setLastIsCorrect(isCorrect)
    setShowResultEffect(true)
    
    setAnswers([
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedIndex,
        isCorrect,
        timestamp: Date.now(),
      },
    ])

    // 1秒間エフェクトを表示してから次へ
    setTimeout(() => {
      setShowResultEffect(false)
      handleNext()
    }, 1000)
  }

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setIsAnswered(false)
      setSelectedAnswer(null)
      setShowResultEffect(false)
      setTimerKey(prev => prev + 1)
    } else {
      // Quiz finished
      handleQuizComplete()
    }
  }, [currentQuestionIndex, questions.length])

  const handleTimeUp = useCallback(() => {
    // Force answer as incorrect if time runs out
    if (!isAnswered) {
      const currentQuestion = questions[currentQuestionIndex]
      setSelectedAnswer(-1)
      setIsAnswered(true)
      setLastIsCorrect(false)
      setShowResultEffect(true)
      
      setAnswers(prev => [
        ...prev,
        {
          questionId: currentQuestion.id,
          selectedIndex: -1,
          isCorrect: false,
          timestamp: Date.now(),
        },
      ])

      setTimeout(() => {
        handleNext()
      }, 1000)
    }
  }, [currentQuestionIndex, questions, isAnswered, handleNext])

  const resetKey = `${currentQuestionIndex}-${isAnswered}`

  const handleQuizComplete = () => {
    const passed = checkPassCriteria(answers)
    if (passed) {
      setShowUnlock(true)
      setTimeout(() => {
        router.push(`/quiz-result?passed=true`)
      }, 3500)
    } else {
      router.push(`/quiz-result?passed=false`)
    }
  }

  if (!isLoaded || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-amber-50 text-lg">クイズを準備中...</p>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const { score } = calculateScore(answers)

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-green-900/20" />
      </div>

      <QuizProgress
        current={currentQuestionIndex + 1}
        total={questions.length}
        correct={score}
        title="単語合成クイズ"
        subtitle="2つの単語を組み合わせて、新しい単語を作ろう！"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <BackButton />



        {/* Timer */}
        <QuizTimer
          totalSeconds={10}
          isActive={!isAnswered}
          onTimeUp={handleTimeUp}
          resetKey={timerKey}
        />

        {/* Current question - Always compound quiz */}
        <div className="mb-12">
          <CompoundQuiz
            question={currentQuestion as CombinationQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={(parts) => handleAnswer(parts)}
            isAnswered={isAnswered}
            resetKey={resetKey}
          />
        </div>

        {/* Next button - Hidden, auto-advances after effect */}
        {isAnswered && !showResultEffect && (
          <div className="flex justify-center">
            <GameButton
              variant="primary"
              size="lg"
              onClick={handleNext}
              className="animate-in fade-in slide-in-from-bottom-4 duration-300"
            >
              {currentQuestionIndex === questions.length - 1
                ? '結果を見る'
                : '次へ'}
            </GameButton>
          </div>
        )}
      </div>

      {/* Result Effect */}
      <ResultEffect isCorrect={lastIsCorrect} isVisible={showResultEffect} />

      {/* Unlock Animation */}
      <UnlockAnimation
        isVisible={showUnlock}
        course="seeker"
        etymologyName="単語"
      />
    </main>
  )
}

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone-900 flex items-center justify-center text-amber-50">
          読み込み中...
        </div>
      }
    >
      <QuizContent />
    </Suspense>
  )
}
