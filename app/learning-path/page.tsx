'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { GameButton } from '@/components/game-button'
import { PageHeader } from '@/components/page-header'
import { LearningOption } from '@/components/learning-option'

export default function LearningPathPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const coursePath = searchParams.get('path') || 'seeker'
  const courseTitle = coursePath === 'seeker' ? '探索者の道' : '賢者の道'

  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleStart = () => {
    if (selectedOption) {
      router.push(`/game?path=${coursePath}&type=${selectedOption}`)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden animate-zoom-in">
      {/* Ancient stone texture background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-green-900/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/></filter><rect width=%22200%22 height=%22200%22 fill=%22%23000%22 filter=%22url(%23noise)%22/></svg>')]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f5f1] text-center mb-2">
            {courseTitle}
          </h1>
          <p className="text-[#d4cfc9] text-center text-lg">何を学びますか？</p>
        </div>

        {/* Learning Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <LearningOption
            type="prefix"
            title="接頭辞"
            description="言葉の始まりに付く要素を学ぶ"
            icon="🌱"
            selected={selectedOption === 'prefix'}
            onClick={() => setSelectedOption('prefix')}
          />
          <LearningOption
            type="suffix"
            title="接尾辞"
            description="言葉の終わりに付く要素を学ぶ"
            icon="🍃"
            selected={selectedOption === 'suffix'}
            onClick={() => setSelectedOption('suffix')}
          />
          <LearningOption
            type="root"
            title="その他の語源"
            description="言葉の中核となる要素を学ぶ"
            icon="🌿"
            selected={selectedOption === 'root'}
            onClick={() => setSelectedOption('root')}
          />
        </div>

        {/* Start Button */}
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
