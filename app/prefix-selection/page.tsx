'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { BackButton } from '@/components/back-button'
import { PageHeader } from '@/components/page-header'
import { GameButton } from '@/components/game-button'
import { LearningOption } from '@/components/learning-option'

const PREFIXES = [
  { id: 'ad', name: 'AD 接頭辞', description: '〜の方へ（向かう、近づく）', category: '接頭辞' },
  { id: 'con', name: 'CON 接頭辞', description: '共に、完全に', category: '接頭辞' },
  { id: 'de', name: 'DE 接頭辞', description: '下に、離れて', category: '接頭辞' },
  { id: 'ex', name: 'EX 接頭辞', description: '外に、外から', category: '接頭辞' },
  { id: 'in_im', name: 'IN/IM 接頭辞', description: '中に、内側に（否定の意でも）', category: '接頭辞' },
  { id: 'per', name: 'PER 接頭辞', description: 'で、を通して（完全に）', category: '接頭辞' },
  { id: 'pre', name: 'PRE 接頭辞', description: '前に、事前に', category: '接頭辞' },
  { id: 'pro', name: 'PRO 接頭辞', description: '前に、前方へ', category: '接頭辞' },
  { id: 're', name: 'RE 接頭辞', description: '再び、後ろに', category: '接頭辞' },
  { id: 'sub', name: 'SUB 接頭辞', description: '下に、下位の', category: '接頭辞' },
]

export default function PrefixSelectionPage() {
  const router = useRouter()
  const [selectedPrefix, setSelectedPrefix] = useState<string | null>(null)
  const [userGender, setUserGender] = useState<'male' | 'female'>('male')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedGender = localStorage.getItem('userGender') as 'male' | 'female' | null
    if (savedGender) {
      setUserGender(savedGender)
    }
    setIsLoaded(true)
  }, [])

  const handleStartQuiz = () => {
    if (selectedPrefix) {
      router.push(`/prefix-quiz?prefix=${selectedPrefix}`)
    }
  }

  if (!isLoaded) return <div className="min-h-screen bg-stone-950" />

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden animate-in fade-in duration-700">
      
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-green-900/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <BackButton />
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-200 tracking-widest mb-4">
            接頭辞を選択
          </h1>
          <p className="text-amber-100/60 text-lg">
            学びたい接頭辞を選んで、クイズに挑戦しよう！
          </p>
        </div>

        {/* Prefixes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PREFIXES.map((prefix) => (
            <button
              key={prefix.id}
              onClick={() => setSelectedPrefix(prefix.id)}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                selectedPrefix === prefix.id
                  ? 'bg-amber-900/60 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                  : 'bg-stone-800/40 border-amber-500/20 hover:bg-amber-900/30 hover:border-amber-400'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-amber-200">{prefix.name}</h3>
                {selectedPrefix === prefix.id && (
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  </div>
                )}
              </div>
              <p className="text-amber-100/70 text-sm leading-relaxed">{prefix.description}</p>
            </button>
          ))}
        </div>

        {/* Start Button */}
        {selectedPrefix && (
          <div className="flex justify-center">
            <GameButton 
              variant="primary" 
              size="lg" 
              onClick={handleStartQuiz}
              className="animate-in fade-in slide-in-from-bottom-4 duration-300"
            >
              {PREFIXES.find(p => p.id === selectedPrefix)?.name}のクイズを始める
            </GameButton>
          </div>
        )}
      </div>
    </main>
  )
}
