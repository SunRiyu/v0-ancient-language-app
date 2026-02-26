'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { GameButton } from '@/components/game-button'
import { CourseCard } from '@/components/course-card'

export default function HomePage() {
  const router = useRouter()
  const [gender, setGender] = useState<'male' | 'female'>('male')

  const handleStart = (path: string) => {
    // 性別を保存して次画面へ
    localStorage.setItem('userGender', gender)
    router.push(`/learning-path?path=${path}`)
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-[#f5f5f1] font-serif">
      {/* ヒーローセクション */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/hero-bg.jpg" // 既存の背景画像など
            alt="Hero Background"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4 tracking-tighter">古代言語の深淵へ</h1>
          <p className="text-xl text-[#d4cfc9]">語源を辿り、言葉の真理を解き明かす旅</p>
        </div>
      </section>

      {/* 概要セクション（ここを修正） */}
      <section className="py-20 px-4 bg-[#262626]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#5a7a5b] pl-4">このアプリについて</h2>
            <p className="text-[#d4cfc9] leading-relaxed mb-6">
              言葉は生き物であり、その根源には数千年の歴史が息づいています。
              接頭辞、接尾辞、そして語源を学ぶことで、未知の単語の意味を推測し、
              言語の真の姿を理解する力を養います。
            </p>
          </div>
          
          {/* tree.jpg を表示するエリア */}
          <div className="flex-1 relative aspect-square w-full max-w-[300px] rounded-full overflow-hidden border-4 border-[#4a5a4b] shadow-2xl">
            <Image
              src={`/image/${gender === 'male' ? 'boy' : 'girl'}/tree.jpg`}
              alt="Learning Tree"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 性別選択とコース選択 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">冒険の準備</h2>
            
            {/* 性別切り替えスイッチ */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setGender('male')}
                className={`px-8 py-3 rounded-full transition-all ${
                  gender === 'male' ? 'bg-[#5a7a5b] text-white' : 'bg-[#333] text-[#888]'
                }`}
              >
                探索者（男）
              </button>
              <button
                onClick={() => setGender('female')}
                className={`px-8 py-3 rounded-full transition-all ${
                  gender === 'female' ? 'bg-[#5a7a5b] text-white' : 'bg-[#333] text-[#888]'
                }`}
              >
                冒険者（女）
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <CourseCard
              title="探索者の道"
              description="基礎から着実に語源の世界を学びます。"
              onClick={() => handleStart('seeker')}
            />
            <CourseCard
              title="冒険者の道"
              description="より深い言語の謎に挑戦します。"
              onClick={() => handleStart('adventurer')}
            />
          </div>
        </div>
      </section>
    </main>
  )
}