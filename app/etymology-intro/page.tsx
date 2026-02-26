'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { GameButton } from '@/components/game-button'
import { BackButton } from '@/components/back-button'
import { Card } from '@/components/ui/card'
import { BookOpen, ArrowRight } from 'lucide-react'
import { Suspense } from 'react'

function IntroContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || '接頭辞'

  const handleStartGame = () => {
    // 実際の学習画面（learning-pathなど）へ遷移
    router.push(`/learning-path?mode=study&type=${type}`)
  }

  return (
    <div className="w-full max-w-2xl">
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
              単語の**先頭**につくパーツのことです。
              例えば、「un-（〜でない）」や「re-（再び）」のように、その単語の「方向性」や「否定・肯定」などのニュアンスを決定づける重要な役割を持っています。
            </p>
          </div>

          <div className="bg-amber-900/10 p-4 rounded-lg border border-amber-500/10">
            <p className="text-sm text-amber-200/70 italic">
              「接頭辞を知ることは、単語の『心』を先読みすることに等しい。見知らぬ言葉に出会っても、その頭を見れば意味の予測がつくようになるだろう。」
            </p>
          </div>
        </Card>

        <div className="pt-8">
          <GameButton variant="primary" size="lg" onClick={handleStartGame} className="w-full sm:w-auto px-12 py-8 text-xl">
            <span>修練を開始する</span>
            <ArrowRight className="ml-2 size-6" />
          </GameButton>
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