'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { BackButton } from '@/components/back-button'
import { QuizQuestion } from '@/components/quiz-question'
import { QuizProgress } from '@/components/quiz-progress'
import { PreviousAnswersReview } from '@/components/previous-answers-review'
import { UnlockAnimation } from '@/components/unlock-animation'
import { GameButton } from '@/components/game-button'
import {
  generateQuestions,
  getRandomEtymology,
  calculateScore,
  checkPassCriteria,
} from '@/lib/quiz-utils'
import { CoursePath, EtymologyType, Question } from '@/lib/quiz-types'

function QuizContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const course = (searchParams.get('course') as CoursePath) || 'seeker'
  const type = (searchParams.get('type') as EtymologyType) || 'prefix'

  const [etymology, setEtymology] = useState<any>(null)
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

  // Initialize quiz on mount
  useEffect(() => {
    const selectedEtymology = getRandomEtymology(course, type)
    const generatedQuestions = generateQuestions(selectedEtymology, type)
    setEtymology(selectedEtymology)
    setQuestions(generatedQuestions)
    setIsLoaded(true)
  }, [course, type])

  const handleAnswer = (selectedIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex]
    const isCorrect = selectedIndex === currentQuestion.correctIndex
    
    setSelectedAnswer(selectedIndex)
    setIsAnswered(true)
    setAnswers([
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedIndex,
        isCorrect,
        timestamp: Date.now(),
      },
    ])
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setIsAnswered(false)
      setSelectedAnswer(null)
    } else {
      // Quiz finished
      handleQuizComplete()
    }
  }

  const handleQuizComplete = () => {
    const passed = checkPassCriteria(answers)
    if (passed) {
      setShowUnlock(true)
      // Save unlock to localStorage
      const unlockedKey = `unlockedEtymologies`
      const current = localStorage.getItem(unlockedKey)
      let unlocked = current ? JSON.parse(current) : {
        seeker: { prefix: [], suffix: [], root: [] },
        sage: { prefix: [], suffix: [], root: [] },
      }
      
      if (!unlocked[course][type].includes(etymology.id)) {
        unlocked[course][type].push(etymology.id)
        localStorage.setItem(unlockedKey, JSON.stringify(unlocked))
      }

      setTimeout(() => {
        router.push(`/quiz-result?course=${course}&type=${type}&passed=true&etymology=${etymology.id}`)
      }, 3500)
    } else {
      router.push(`/quiz-result?course=${course}&type=${type}&passed=false`)
    }
  }

  if (!isLoaded || !etymology || questions.length === 0) {
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
        title={`${etymology.name} - クイズ`}
        subtitle={`${etymology.language} · ${etymology.meaning}`}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <BackButton />

        {/* Show previous answers review when we have enough answers */}
        {answers.length >= 5 && (
          <PreviousAnswersReview
            questions={questions}
            answers={answers}
          />
        )}

        {/* Current question */}
        <div className="mb-12">
          <QuizQuestion
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            isAnswered={isAnswered}
            selectedAnswer={selectedAnswer ?? undefined}
          />
        </div>

        {/* Next button */}
        {isAnswered && (
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

      {/* Unlock Animation */}
      <UnlockAnimation
        isVisible={showUnlock}
        course={course}
        etymologyName={etymology.name}
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
