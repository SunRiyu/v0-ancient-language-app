'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { BackButton } from '@/components/back-button'
import { GameButton } from '@/components/game-button'
import { CheckCircle, XCircle } from 'lucide-react'

function QuizResultContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const passed = searchParams.get('passed') === 'true'
  const course = searchParams.get('course') || 'seeker'
  const type = searchParams.get('type') || 'prefix'
  const etymologyId = searchParams.get('etymology')

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center text-amber-50">
        読み込み中...
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-green-900/20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 min-h-screen flex flex-col">
        <BackButton />

        <div className="flex-grow flex flex-col items-center justify-center">
          {/* Result Icon */}
          <div className="mb-8 animate-in zoom-in duration-500">
            {passed ? (
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-green-500/30 rounded-full" />
                <CheckCircle size={120} className="text-green-400 relative z-10" strokeWidth={1.5} />
              </div>
            ) : (
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-amber-500/30 rounded-full" />
                <XCircle size={120} className="text-amber-400 relative z-10" strokeWidth={1.5} />
              </div>
            )}
          </div>

          {/* Result Title */}
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 text-center text-balance ${
              passed ? 'text-green-400' : 'text-amber-300'
            }`}
          >
            {passed ? 'クリア！' : 'もう一度チャレンジ'}
          </h1>

          {/* Result Message */}
          <p className={`text-lg sm:text-xl mb-12 text-center max-w-2xl ${
            passed ? 'text-green-100/80' : 'text-amber-100/80'
          }`}>
            {passed
              ? '古代の知識をしっかりと習得しました。語源の樹にこの知識が刻まれました。'
              : '直近5問中4問以上の正解が必要です。もう一度挑戦して古代の知識を深めましょう。'}
          </p>

          {/* Results Details */}
          <div className="bg-stone-900/50 rounded-2xl border border-amber-900/30 p-8 mb-12 w-full max-w-md">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-amber-300/60">コース</span>
                <span className="text-amber-50 font-semibold">
                  {course === 'seeker' ? '探索者の道' : '賢者の道'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-amber-300/60">種類</span>
                <span className="text-amber-50 font-semibold">
                  {type === 'prefix' ? '接頭辞' : type === 'suffix' ? '接尾辞' : '語根'}
                </span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-amber-900/30">
                <span className="text-amber-300/60">ステータス</span>
                <span className={`font-bold ${passed ? 'text-green-400' : 'text-amber-400'}`}>
                  {passed ? '合格' : '不合格'}
                </span>
              </div>
            </div>
          </div>

          {/* Motivational Message */}
          <div className="bg-amber-900/20 rounded-xl border border-amber-500/50 p-6 mb-12 max-w-2xl">
            <p className="text-amber-100 text-center italic">
              {passed
                ? '「古代の言語は、時間を超えて我々に知識をもたらす。汝の学習は樹を再生させるのだ。」'
                : '「失敗は学びの道。何度もチャレンジすることで、古代の知識はより深く身につく。」'}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <GameButton
              variant="secondary"
              size="lg"
              onClick={() => router.push(`/learning-path?path=${course}`)}
            >
              学習に戻る
            </GameButton>
            <GameButton
              variant="primary"
              size="lg"
              onClick={() => {
                // Return to learning path and trigger another quiz
                router.push(`/quiz?course=${course}&type=${type}`)
              }}
            >
              {passed ? '別の語源に挑戦' : 'もう一度クイズ'}
            </GameButton>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function QuizResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone-900 flex items-center justify-center text-amber-50">
          読み込み中...
        </div>
      }
    >
      <QuizResultContent />
    </Suspense>
  )
}
