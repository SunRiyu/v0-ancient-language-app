'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GameButton } from '@/components/game-button'
import { PageHeader } from '@/components/page-header'
import { CourseCard } from '@/components/course-card'
import { DexCard } from '@/components/dex-card'

export default function HomePage() {
  const router = useRouter()
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const handleCourseStart = () => {
    if (selectedCourse) {
      router.push(`/learning-path?path=${selectedCourse}`)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden animate-zoom-in">
      {/* Ancient stone texture background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-green-900/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/></filter><rect width=%22200%22 height=%22200%22 fill=%22%23000%22 filter=%22url(%23noise)%22/></svg>')]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <PageHeader />

        {/* Courses Section */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-50 mb-3 text-center">古代の知識への道</h2>
          <p className="text-amber-100/70 text-center mb-10">どの道を進みますか？</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <CourseCard
              title="探索者の道"
              subtitle="初級〜中級"
              description="基礎的な言語の構造を学ぶ"
              level="2級〜3級"
              onClick={() => setSelectedCourse('seeker')}
              isSelected={selectedCourse === 'seeker'}
            />
            <CourseCard
              title="賢者の道"
              subtitle="上級"
              description="深い言語の秘密を解き明かす"
              level="準1級以上"
              onClick={() => setSelectedCourse('sage')}
              isSelected={selectedCourse === 'sage'}
            />
          </div>

          {selectedCourse && (
            <div className="flex justify-center">
              <GameButton variant="primary" size="lg" onClick={handleCourseStart}>
                {selectedCourse === 'seeker' ? '探索者の道へ' : '賢者の道へ'}進む
              </GameButton>
            </div>
          )}
        </section>

        {/* Dex Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-50 mb-3 text-center">語源の樹</h2>
          <p className="text-amber-100/70 text-center mb-10">解放した語根たちの系図</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <DexCard key={index} index={index} locked={true} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
