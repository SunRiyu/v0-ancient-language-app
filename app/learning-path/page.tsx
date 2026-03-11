'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { GameButton } from '@/components/game-button'
import { BackButton } from '@/components/back-button'
import { LearningOption } from '@/components/learning-option'

function LearningPathContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const coursePath = searchParams.get('path') || 'seeker'
  const courseTitle = coursePath === 'seeker' ? '探索者の道' : '賢者の道'

  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [userGender, setUserGender] = useState<'male' | 'female'>('male')

  // localStorageから選択された性別を取得
  useEffect(() => {
    const savedGender = localStorage.getItem('userGender') as 'male' | 'female' | null
    if (savedGender) {
      setUserGender(savedGender)
    }
  }, [])

const handleStart = () => {
  if (selectedOption === 'prefix') {
    // 接頭辞が選ばれている場合は、詳細選択画面へ飛ばす
    router.push(`/learning-path/prefix-select?course=${coursePath}`)
  } else {
    // 接尾辞や語根はこれまで通り（あるいは同様に詳細画面を作ってもOK）
    router.push(`/quiz?course=${coursePath}&type=${selectedOption}`)
  }
}

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden animate-zoom-in">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-green-900/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/></filter><rect width=%22200%22 height=%22200%22 fill=%22%23000%22 filter=%22url(%23noise)%22/></svg>')]" />
      </div>

      {/* max-w-4xl (896px) から max-w-6xl (1152px) に拡大 
        これにより、子要素のLearningOptionの幅が約1.25倍以上に広がります
      */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-24">
        {/* 戻るボタン */}
        <BackButton />

        {/* ヘッダー */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f5f1] text-center mb-2">
            {courseTitle}
          </h1>
          <p className="text-[#d4cfc9] text-center text-lg">何を学びますか？</p>
        </div>

        {/* 学習オプションのグリッド 
          gap-8 を指定してボタン間の余白を調整 
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <LearningOption
            type="prefix"
            title="接頭辞"
            description="言葉の始まりに付く要素を学ぶ"
            selected={selectedOption === 'prefix'}
            onClick={() => setSelectedOption('prefix')}
            gender={userGender}
          />
          <LearningOption
            type="suffix"
            title="接尾辞"
            description="言葉の終わりに付く要素を学ぶ"
            selected={selectedOption === 'suffix'}
            onClick={() => setSelectedOption('suffix')}
            gender={userGender}
          />
          <LearningOption
            type="root"
            title="その他の語源"
            description="言葉の中核となる要素を学ぶ"
            selected={selectedOption === 'root'}
            onClick={() => setSelectedOption('root')}
            gender={userGender}
          />
        </div>

        {/* 開始ボタン */}
        {selectedOption && (
          <div className="flex justify-center">
            <GameButton variant="primary" size="lg" onClick={handleStart}>
              学習を開始
            </GameButton>
          </div>
        )}
      </div>
    </main>
  )
}

export default function LearningPathPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-900 flex items-center justify-center text-amber-50">読み込み中...</div>}>
      <LearningPathContent />
    </Suspense>
  )
}
