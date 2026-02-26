'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GameButton } from '@/components/game-button'
import { BackButton } from '@/components/back-button'
import { EtymologyList } from '@/components/etymology-list'
import { AddEtymologyModal } from '@/components/add-etymology-modal'

const etymologyData = {
  prefix: [
    { id: 1, name: 'pre-', meaning: '前に、前の', language: 'ラテン語', examples: ['prefix', 'preview'] },
    { id: 2, name: 'un-', meaning: '〜でない、逆の', language: 'ゲルマン語', examples: ['unhappy', 'undo'] },
    { id: 3, name: 're-', meaning: '再び、戻す', language: 'ラテン語', examples: ['review', 'replay'] },
    { id: 4, name: 'mis-', meaning: '間違った、悪い', language: 'ゲルマン語', examples: ['mistake', 'mislead'] },
    { id: 5, name: 'over-', meaning: '超える、上に', language: 'ゲルマン語', examples: ['overcome', 'overlap'] },
  ],
  suffix: [
    { id: 1, name: '-tion', meaning: '行為、状態', language: 'ラテン語', examples: ['action', 'nation'] },
    { id: 2, name: '-able', meaning: '可能な', language: 'ラテン語', examples: ['readable', 'comfortable'] },
    { id: 3, name: '-ment', meaning: '状態、結果', language: 'ラテン語', examples: ['movement', 'agreement'] },
    { id: 4, name: '-ness', meaning: '性質、状態', language: 'ゲルマン語', examples: ['happiness', 'darkness'] },
    { id: 5, name: '-ly', meaning: '〜のように、副詞形', language: 'ゲルマン語', examples: ['quickly', 'slowly'] },
  ],
  root: [
    { id: 1, name: 'dict', meaning: '言う', language: 'ラテン語', examples: ['dictate', 'dictionary', 'predict'] },
    { id: 2, name: 'port', meaning: '運ぶ', language: 'ラテン語', examples: ['import', 'export', 'transport'] },
    { id: 3, name: 'scribe', meaning: '書く', language: 'ラテン語', examples: ['describe', 'prescribe'] },
    { id: 4, name: 'graph', meaning: '書く', language: 'ギリシャ語', examples: ['photograph', 'biography'] },
    { id: 5, name: 'phon', meaning: '音', language: 'ギリシャ語', examples: ['telephone', 'microphone'] },
  ],
}

export default function EtymologyLibraryPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'prefix' | 'suffix' | 'root'>('prefix')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [customEtymologies, setCustomEtymologies] = useState<Record<string, any[]>>({
    prefix: [],
    suffix: [],
    root: [],
  })

  const handleAddEtymology = (data: any) => {
    const newEtymology = {
      id: Date.now(),
      ...data,
    }
    setCustomEtymologies((prev) => ({
      ...prev,
      [activeTab]: [...(prev[activeTab] || []), newEtymology],
    }))
    setIsModalOpen(false)
  }

  const allEtymologies = {
    prefix: [...etymologyData.prefix, ...(customEtymologies.prefix || [])],
    suffix: [...etymologyData.suffix, ...(customEtymologies.suffix || [])],
    root: [...etymologyData.root, ...(customEtymologies.root || [])],
  }

  const getTabTitle = (tab: string) => {
    switch (tab) {
      case 'prefix':
        return '接頭辞'
      case 'suffix':
        return '接尾辞'
      case 'root':
        return 'その他の語源'
      default:
        return ''
    }
  }

  const getTabDescription = (tab: string) => {
    switch (tab) {
      case 'prefix':
        return '言葉の始まりに付く要素'
      case 'suffix':
        return '言葉の終わりに付く要素'
      case 'root':
        return '言葉の中核となる要素'
      default:
        return ''
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2a2520] via-[#3d3733] to-[#2a2520] relative overflow-hidden animate-zoom-in">
      {/* Ancient stone texture background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-green-900/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/></filter><rect width=%22200%22 height=%22200%22 fill=%22%23000%22 filter=%22url(%23noise)%22/></svg>')]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Back Button */}
        <BackButton />

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#f5f5f1] mb-2 text-center">語源の樹</h1>
          <p className="text-[#d4cfc9] text-center text-sm sm:text-base">古代の知識から学ぶ言語の秘密</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {(['prefix', 'suffix', 'root'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-gradient-to-b from-[#6b9b7b] to-[#5a8b6b] text-[#f5f5f1] shadow-lg'
                  : 'bg-[#4a4440] text-[#d4cfc9] hover:bg-[#5a5450]'
              }`}
            >
              {getTabTitle(tab)}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Add Button */}
          <div className="lg:col-span-1">
            <div className="sticky top-12 space-y-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-4 py-6 bg-gradient-to-b from-[#8b7355] to-[#7a6345] hover:from-[#9b8365] hover:to-[#8b7355] text-[#f5f5f1] font-bold rounded-lg border-2 border-[#6a5335] shadow-lg transition-all hover:scale-105 active:scale-98"
              >
                <div className="text-2xl mb-2">＋</div>
                <div className="text-sm">オリジナル</div>
                <div className="text-xs mt-1">{getTabTitle(activeTab)}</div>
                <div className="text-xs mt-1">を追加</div>
              </button>
            </div>
          </div>

          {/* Main Content - Etymology List */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#f5f5f1] mb-2">{getTabTitle(activeTab)}</h2>
              <p className="text-[#d4cfc9] text-sm">{getTabDescription(activeTab)}</p>
            </div>
            <EtymologyList items={allEtymologies[activeTab]} />
          </div>
        </div>
      </div>

      {/* Add Etymology Modal */}
      {isModalOpen && (
        <AddEtymologyModal
          type={activeTab}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddEtymology}
        />
      )}
    </main>
  )
}
