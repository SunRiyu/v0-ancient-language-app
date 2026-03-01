'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { GameButton } from '@/components/game-button'
import { BackButton } from '@/components/back-button'
import { Card } from '@/components/ui/card'
import { BookOpen, ArrowRight, CheckCircle } from 'lucide-react'
import { Suspense } from 'react'
import { PREFIX_SETS } from '@/lib/quiz-utils'

function IntroContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || '接頭辞'
  const [selectedSet, setSelectedSet] = useState<string | null>(null)

  const handleStartGame = () => {
    if (selectedSet) {
      // 実際の学習画面（learning-pathなど）へ遷移
      router.push(`/learning-path?mode=study&type=${type}&set=${selectedSet}`)
    }
  }

  const prefixSets = Object.entries(PREFIX_SETS).map(([key, value]) => ({
    id: key,
    ...value,
  }))

  return (
    <div className="w-full max-w-4xl">
      <BackButton />
      
      <div className="mt-12 text-center space-y-6">
        <div className="inline-block p-4 rounded-full bg-amber-900/20 border border-amber-500/30 mb-4">
          <BookOpen className="size-12 text-amber-400" />
        </div>
        <h1 className="text-4xl font-bold text-amber-200 tracking-tighter">
          {type}の知識を授ける
        </h1>
        
        <Card className="bg-stone-900/50 border-amber-900/40 p-8 text-left space-y-6 backdrop-blur-sm">
          <div>
            <h2 className="text-xl font-bold text-amber-400 mb-2">{type}（Prefix）とは？</h2>
            <p className="text-amber-100/80 leading-relaxed">
              単語の<span className="font-bold">先頭</span>につくパーツのことです。
              例えば、「un-（〜でない）」や「re-（再び）」のように、その単語の「方向性」や「否定・肯定」などのニュアンスを決定づける重要な役割を持っています。
            </p>
          </div>

          <div className="bg-amber-900/10 p-4 rounded-lg border border-amber-500/10">
            <p className="text-sm text-amber-200/70 italic">
              「接頭辞を知ることは、単語の『心』を先読みすることに等しい。見知らぬ言葉に出会っても、その頭を見れば意味の予測がつくようになるだろう。」
            </p>
          </div>
        </Card>

        {/* セット選択 */}
        <div className="pt-8">
          <h2 className="text-2xl font-bold text-amber-200 mb-6">どの{type}を学びますか？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {prefixSets.map((set) => (
              <button
                key={set.id}
                onClick={() => setSelectedSet(set.id)}
                className={`relative p-6 rounded-2xl border-2 transition-all group ${
                  selectedSet === set.id
                    ? 'bg-amber-900/40 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                    : 'bg-stone-900/50 border-amber-900/30 hover:border-amber-500/50'
                }`}
              >
                <div className="absolute top-4 right-4">
                  {selectedSet === set.id && (
                    <CheckCircle className="size-6 text-amber-400 animate-in zoom-in" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-amber-200 mb-2 text-left">
                  {set.name}
                </h3>
                <p className="text-amber-100/70 text-sm text-left mb-3">
                  {set.description}
                </p>
                <div className="text-xs text-amber-300/60 text-left">
                  学習語根数: {set.roots.length}
                </div>
              </button>
            ))}
          </div>

          {selectedSet && (
            <GameButton 
              variant="primary" 
              size="lg" 
              onClick={handleStartGame} 
              className="px-12 py-8 text-xl animate-in fade-in slide-in-from-bottom-4 duration-300"
            >
              <span>修練を開始する</span>
              <ArrowRight className="ml-2 size-6" />
            </GameButton>
          )}
          {!selectedSet && (
            <div className="text-amber-300/60 text-sm">
              学びたいセットを選択してください
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function EtymologyIntroPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 p-6 flex flex-col items-center">
      <Suspense fallback={<div className="text-amber-200">読み込み中...</div>}>
        <IntroContent />
      </Suspense>
    </main>
  )
}
