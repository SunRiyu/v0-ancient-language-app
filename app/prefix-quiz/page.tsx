'use client'

import { useState, useEffect, Suspense, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { BackButton } from '@/components/back-button'
import { QuizProgress } from '@/components/quiz-progress'
import { UnlockAnimation } from '@/components/unlock-animation'
import { GameButton } from '@/components/game-button'
import { ResultEffect } from '@/components/result-effect'
import { QuizTimer } from '@/components/quiz-timer'
import { QuizQuestion } from '@/components/quiz-question'
import {
  AD_QUIZ_QUESTIONS,
  CON_QUIZ_QUESTIONS,
  DE_QUIZ_QUESTIONS,
  EX_QUIZ_QUESTIONS,
  IN_IM_QUIZ_QUESTIONS,
  PER_QUIZ_QUESTIONS,
  PRE_QUIZ_QUESTIONS,
  PRO_QUIZ_QUESTIONS,
  RE_QUIZ_QUESTIONS,
  SUB_QUIZ_QUESTIONS,
} from '@/lib/quiz-utils'
import { Question } from '@/lib/quiz-types'

const PREFIX_QUIZ_MAP: Record<string, Question[]> = {
  ad: AD_QUIZ_QUESTIONS,
  con: CON_QUIZ_QUESTIONS,
  de: DE_QUIZ_QUESTIONS,
  ex: EX_QUIZ_QUESTIONS,
  in_im: IN_IM_QUIZ_QUESTIONS,
  per: PER_QUIZ_QUESTIONS,
  pre: PRE_QUIZ_QUESTIONS,
  pro: PRO_QUIZ_QUESTIONS,
  re: RE_QUIZ_QUESTIONS,
  sub: SUB_QUIZ_QUESTIONS,
}

const PREFIX_NAMES: Record<string, string> = {
  ad: 'AD',
  con: 'CON',
  de: 'DE',
  ex: 'EX',
  in_im: 'IN/IM',
  per: 'PER',
  pre: 'PRE',
  pro: 'PRO',
  re: 'RE',
  sub: 'SUB',
}

function PrefixQuizContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const prefix = searchParams.get('prefix') || 'ad'

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
  const [score, setScore] = useState(0)

  // Initialize quiz on mount
  useEffect(() => {
    const prefixQuestions = PREFIX_QUIZ_MAP[prefix] || AD_QUIZ_QUESTIONS
    setQuestions(prefixQuestions)
    setIsLoaded(true)
  }, [prefix])

  // Update score when answers change
  useEffect(() => {
    const correctCount = answers.filter(a => a.isCorrect).length
    setScore(correctCount)
  }, [answers])

  const handleAnswer = (selectedIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex]
    const correctIndex = currentQuestion.options.indexOf(currentQuestion.correctAnswer)
    const isCorrect = selectedIndex === correctIndex

    // Stop timer
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

    // Show effect for 1 second then move to next
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

  const handleQuizComplete = () => {
    // Pass if 70% or more correct
    const passed = score >= Math.ceil(questions.length * 0.7)
    if (passed) {
      setShowUnlock(true)
      setTimeout(() => {
        router.push(`/quiz-result?passed=true&prefix=${prefix}`)
      }, 3500)
    } else {
      router.push(`/quiz-result?passed=false&prefix=${prefix}`)
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
  const resetKey = `${currentQuestionIndex}-${isAnswered}`

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
        title={`${PREFIX_NAMES[prefix]} 接頭辞クイズ`}
        subtitle="接頭辞の意味と用法をマスターしよう！"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <BackButton />

        {/* Timer */}
        <QuizTimer
          totalSeconds={15}
          isActive={!isAnswered}
          onTimeUp={handleTimeUp}
          resetKey={timerKey}
        />

        {/* Current question */}
        <div className="mb-12">
          <QuizQuestion
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            selectedIndex={selectedAnswer}
            isAnswered={isAnswered}
            resetKey={resetKey}
          />
        </div>

        {/* Next button - Auto-advances after effect */}
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
        etymologyName={`${PREFIX_NAMES[prefix]} 接頭辞`}
      />
    </main>
  )
}

export default function PrefixQuizPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone-900 flex items-center justify-center text-amber-50">
          読み込み中...
        </div>
      }
    >
      <PrefixQuizContent />
    </Suspense>
  )
}
