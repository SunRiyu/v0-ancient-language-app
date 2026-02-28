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
import { Info, RefreshCcw, TreeDeciduous, Clock, BookOpen } from 'lucide-react'

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

  // 「語源の樹」カードを表示するかどうかのステート
  const [showEtymologyTree, setShowEtymologyTree] = useState(false)

  // アンロック状態を管理するステート
  const [unlockedEtymologies, setUnlockedEtymologies] = useState<Record<string, Record<string, number[]>>>({
    seeker: { prefix: [], suffix: [], root: [] },
    sage: { prefix: [], suffix: [], root: [] },
  })

  useEffect(() => {
    const savedGender = localStorage.getItem('userGender') as 'male' | 'female' | null
    if (savedGender) {
      setUserGender(savedGender)
    }

    // localStorageからアンロック状態を読み込む
    const savedUnlocks = localStorage.getItem('unlockedEtymologies')
    if (savedUnlocks) {
      try {
        setUnlockedEtymologies(JSON.parse(savedUnlocks))
      } catch (e) {
        console.error('Failed to parse unlocked etymologies:', e)
      }
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

  // 接頭辞などのカードをクリックした時の遷移処理
  const handleDexCardClick = (label: string) => {
    if (label === '接頭辞') {
      router.push(`/etymology-intro?type=${encodeURIComponent(label)}`)
    }
    // 接尾辞や語根の場合も必要に応じてここに追加
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
                  <Image
                    src={userGender === 'male' ? "/image/boy_image.png" : "/image/girl_image.png"}
                    alt="Current Character"
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
            {/* 主人公アイコン: w-16 h-16 から w-32 h-32 (2倍) に拡大 */}
            <div className="w-32 h-32 relative mb-6">
              <Image
                src={userGender === 'male' ? "/image/boy_image.png" : "/image/girl_image.png"}
                alt="Avatar"
                fill
                className="rounded-full border-4 border-amber-500/50 shadow-[0_0_20px_rgba(251,191,36,0.3)] object-cover"
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
          <GameButton
            variant="secondary"
            size="lg"
            onClick={() => router.push('/etymology-library')}
            className="w-full sm:w-auto"
          >
            📖 語源の参考書（ライブラリ）を見る
          </GameButton>
        </section>

        {/* 成果セクション */}
        <section className="bg-stone-900/40 rounded-3xl p-8 border border-amber-900/20 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 text-center tracking-widest">成果</h2>

          {/* 3つの成果切替ボタン */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <button
              onClick={() => setShowEtymologyTree(!showEtymologyTree)}
              className={`flex items-center justify-center gap-3 py-4 px-6 rounded-xl border transition-all group ${showEtymologyTree ? 'bg-amber-900/60 border-amber-400 text-amber-50' : 'bg-stone-800/60 border-amber-500/20 text-amber-100 hover:bg-amber-900/40'}`}
            >
              <TreeDeciduous className={`size-5 transition-transform group-hover:scale-110 ${showEtymologyTree ? 'text-amber-200' : 'text-amber-400'}`} />
              <span className="font-bold">語源の樹</span>
            </button>

            <button className="flex items-center justify-center gap-3 py-4 px-6 bg-stone-800/60 hover:bg-amber-900/40 text-amber-100 rounded-xl border border-amber-500/20 transition-all group">
              <Clock className="size-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="font-bold">時間</span>
            </button>

            <button className="flex items-center justify-center gap-3 py-4 px-6 bg-stone-800/60 hover:bg-amber-900/40 text-amber-100 rounded-xl border border-amber-500/20 transition-all group">
              <BookOpen className="size-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="font-bold">学習単語数</span>
            </button>
          </div>

          {/* 語源の樹ボタンが押された時のみ鍵穴のカードを表示 */}
          {showEtymologyTree && (
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
              {[
                { label: '接頭辞', type: 'prefix', indices: [0, 1] },
                { label: '接尾辞', type: 'suffix', indices: [2, 3] },
                { label: '語根', type: 'root', indices: [4, 5] },
              ].map((category) => {
                const seekerUnlocked = unlockedEtymologies.seeker[category.type as 'prefix' | 'suffix' | 'root'].length;
                const sageUnlocked = unlockedEtymologies.sage[category.type as 'prefix' | 'suffix' | 'root'].length;
                const isLocked = seekerUnlocked === 0 && sageUnlocked === 0;

                return (
                  <div
                    key={category.type}
                    onClick={() => {
                      console.log("Clicked:", category.label);
                      handleDexCardClick(category.label);
                    }}
                    className="cursor-pointer active:scale-95 transition-transform"
                  >
                    <div className="pointer-events-none">
                      <DexCard
                        index={category.indices[0]}
                        locked={isLocked}
                        label={category.label}
                        name={category.label}
                        count={seekerUnlocked + sageUnlocked}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
