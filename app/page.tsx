'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { GameButton } from '@/components/game-button'
import { PageHeader } from '@/components/page-header'
import { CourseCard } from '@/components/course-card'
import { DexCard } from '@/components/dex-card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Info, RefreshCcw } from 'lucide-react'

// --- キャラクター選択コンポーネント ---
function CharacterSelection({ onSelect }: { onSelect: (gender: 'male' | 'female') => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-950 text-amber-50 p-6 animate-in fade-in duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-amber-200 tracking-widest">探索者の選択</h1>
        <p className="text-amber-100/60">物語を共にするアバターを選んでください</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-4xl">
        {/* 男性キャラクター */}
        <div
          onClick={() => onSelect('male')}
          className="group cursor-pointer relative flex flex-col items-center"
        >
          <div className="relative w-64 h-80 mb-6 overflow-hidden rounded-2xl border-2 border-amber-900/50 bg-stone-900/50 group-hover:border-amber-400 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-500">
            <Image
              src="/image/boy_image.png"
              alt="Male Explorer"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />
          </div>
          <h2 className="text-3xl font-bold text-amber-100 group-hover:text-amber-400 transition-colors">少年</h2>
          <p className="text-amber-100/50 mt-2">未知なる言葉を追う勇気</p>
        </div>

        {/* 女性キャラクター */}
        <div
          onClick={() => onSelect('female')}
          className="group cursor-pointer relative flex flex-col items-center"
        >
          <div className="relative w-64 h-80 mb-6 overflow-hidden rounded-2xl border-2 border-amber-900/50 bg-stone-900/50 group-hover:border-amber-400 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-500">
            <Image
              src="/image/girl_image.png"
              alt="Female Explorer"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />
          </div>
          <h2 className="text-3xl font-bold text-amber-100 group-hover:text-amber-400 transition-colors">少女</h2>
          <p className="text-amber-100/50 mt-2">言語の深淵を解く知性</p>
        </div>
      </div>
    </div>
  )
}

// --- メインのHomePageコンポーネント ---
export default function HomePage() {
  const router = useRouter()
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [userGender, setUserGender] = useState<'male' | 'female' | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedGender = localStorage.getItem('userGender') as 'male' | 'female' | null
    if (savedGender) {
      setUserGender(savedGender)
    }
    setIsLoaded(true)
  }, [])

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setUserGender(gender)
    localStorage.setItem('userGender', gender)
  }

  const handleCourseStart = () => {
    if (selectedCourse) {
      router.push(`/learning-path?path=${selectedCourse}`)
    }
  }

  if (!isLoaded) return <div className="min-h-screen bg-stone-950" />

  if (!userGender) {
    return <CharacterSelection onSelect={handleGenderSelect} />
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden animate-in fade-in duration-700">

      {/* UIパーツ: 性別リセット & 概要 */}
      <div className="absolute top-4 right-4 z-50 flex gap-3">
        <button
          onClick={() => { localStorage.removeItem('userGender'); setUserGender(null); }}
          className="flex items-center gap-2 px-3 py-2 text-xs bg-stone-800/80 text-stone-400 hover:text-amber-200 rounded-lg border border-stone-700 backdrop-blur-sm transition-all"
          title="キャラクターを再選択"
        >
          <RefreshCcw size={14} />
          <span>変更</span>
        </button>

        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2 bg-amber-900/40 hover:bg-amber-800/60 text-amber-50 rounded-full border border-amber-500/30 transition-all backdrop-blur-sm shadow-lg">
              <Info className="size-4" />
              <span className="text-sm font-medium">概要</span>
            </button>
          </DialogTrigger>
          <DialogContent className="bg-stone-900/95 border-amber-500/30 text-amber-50 backdrop-blur-md">
            <DialogHeader>
              <DialogTitle className="text-xl text-amber-200 font-bold">アプリ概要</DialogTitle>
              <DialogDescription className="text-amber-100/70">
                現在の探索者: {userGender === 'male' ? '少年' : '少女'}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="flex justify-center">
                <div className="relative w-24 h-24 rounded-full border-2 border-amber-500/50 overflow-hidden">
                  {/* 画像を tree.jpg に変更 */}
                  <Image
                    src="/image/tree.jpg"
                    alt="Etymology Tree"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-sm text-amber-100/90 leading-relaxed text-center">
                古代の言語を学び、語源の樹を再生させる旅に出ましょう。
                あなたの選択したキャラクターが記録を紡ぎます。
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-green-900/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <PageHeader />

        <section className="mb-20">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 relative mb-4">
              {/* 性別によってメイン画面に出るミニアイコンを切り替え */}
              <Image
                src={userGender === 'male' ? "/image/boy_image.png" : "/image/girl_image.png"}
                alt="Avatar"
                fill
                className="rounded-full border-2 border-amber-500/50 object-cover"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-50 text-center">
              {userGender === 'male' ? '勇敢なる少年よ、道を選べ' : '賢明なる少女よ、道を選べ'}
            </h2>
          </div>

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
                旅を始める
              </GameButton>
            </div>
          )}
        </section>

        {/* 語源の樹 */}
        <section>
          <h2 className="text-2xl font-bold text-amber-50 mb-8 text-center">語源の樹</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <DexCard key={i} index={i} locked={true} label={i <= 2 ? '接頭辞' : i <= 4 ? '接尾辞' : '語根'} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}