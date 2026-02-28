'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BackButton } from '@/components/back-button'
import { EtymologyList } from '@/components/etymology-list'
import { AddEtymologyModal } from '@/components/add-etymology-modal'


// --- 拡張されたデータ構造 ---
const etymologyData = {
  prefix: [
    { 
      id: 1, name: 'pre-', meaning: '前に、前の', language: 'ラテン語', 
      description: '時間や場所が「前」であることを示します。',
      words: [
        { word: 'prefix', meaning: '接頭辞', usageCount: 0, isUnlocked: true },
        { word: 'preview', meaning: '下見、予告編', usageCount: 0, isUnlocked: true },
        { word: 'prepare', meaning: '準備する', usageCount: 0, isUnlocked: true }
      ]
    },
    { 
      id: 7, name: 'con- / com-', meaning: '共に、完全に', language: 'ラテン語',
      description: '複数のものが集まる、あるいは動作を強調します。',
      words: [
        { word: 'connect', meaning: 'つなぐ', usageCount: 0, isUnlocked: true },
        { word: 'combine', meaning: '結合させる', usageCount: 0, isUnlocked: true },
        { word: 'company', meaning: '仲間、会社', usageCount: 0, isUnlocked: true }
      ]
    },
    // ... 他の接頭辞も同様に words 形式に書き換え
  ],
  suffix: [
    { 
      id: 101, name: '-tion', meaning: '行為、状態', language: 'ラテン語',
      description: '動詞を名詞化し、動作やその結果を表します。',
      words: [
        { word: 'action', meaning: '行動', usageCount: 0, isUnlocked: true },
        { word: 'education', meaning: '教育', usageCount: 0, isUnlocked: true }
      ]
    },
  ],
  root: [
    { 
      id: 201, name: 'struct', meaning: '建てる', language: 'ラテン語',
      description: '積み上げて形を作ることを表します。',
      words: [
        { word: 'structure', meaning: '構造', usageCount: 0, isUnlocked: true },
        { word: 'construct', meaning: '建設する', usageCount: 0, isUnlocked: true },
        { word: 'instruction', meaning: '指示、教育', usageCount: 0, isUnlocked: true }
      ]
    },
    { 
      id: 202, name: 'port', meaning: '運ぶ', language: 'ラテン語',
      description: '港(port)から荷物を移動させるイメージです。',
      words: [
        { word: 'import', meaning: '輸入する', usageCount: 0, isUnlocked: true },
        { word: 'export', meaning: '輸出する', usageCount: 0, isUnlocked: true }
      ]
    },
  ],
}

export default function EtymologyLibraryPage() {
  const [activeTab, setActiveTab] = useState<'prefix' | 'suffix' | 'root'>('prefix')
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 1. カテゴリごとの表示名
  const getTabTitle = (tab: string) => {
    switch (tab) {
      case 'prefix': return '接頭辞'
      case 'suffix': return '接尾辞'
      case 'root': return '語根'
      default: return ''
    }
  }

  // 2. 現在のタブのデータを取得
  const currentItems = etymologyData[activeTab]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2a2520] via-[#3d3733] to-[#2a2520] text-[#f5f5f1] relative overflow-hidden p-4 sm:p-8">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <BackButton />

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 tracking-widest text-amber-200">語源の参考書</h1>
          <p className="text-[#d4cfc9]">解放された古の知識を閲覧する</p>
        </header>

        {/* タブ切り替え */}
        <div className="flex justify-center gap-4 mb-10">
          {(['prefix', 'suffix', 'root'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl font-bold transition-all border-2 ${
                activeTab === tab
                  ? 'bg-amber-900/40 border-amber-400 text-amber-100 shadow-[0_0_15px_rgba(251,191,36,0.2)]'
                  : 'bg-stone-800/50 border-transparent text-stone-400 hover:border-stone-600'
              }`}
            >
              {getTabTitle(tab)}
            </button>
          ))}
        </div>

        {/* コンテンツエリア */}
        <div className="grid gap-8">
          {currentItems.map((item) => (
            <section key={item.id} className="bg-stone-900/60 border border-amber-900/30 rounded-2xl p-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-end gap-4 mb-4 border-b border-amber-900/20 pb-4">
                <h2 className="text-3xl font-bold text-amber-300">{item.name}</h2>
                <span className="text-amber-100/60 mb-1">意味：{item.meaning}</span>
                <span className="text-xs bg-stone-800 px-2 py-1 rounded mb-1 ml-auto">{item.language}</span>
              </div>
              
              <p className="text-sm text-[#d4cfc9] mb-6 italic">“ {item.description} ”</p>

              {/* 単語リストを表示（企画書にあるライブラリ機能） */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.words.map((w) => (
                  <div key={w.word} className="bg-stone-800/40 border border-stone-700 p-4 rounded-xl group hover:border-amber-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xl font-bold text-amber-50 group-hover:text-amber-200">{w.word}</span>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-stone-500 uppercase">Energy</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i < w.usageCount ? 'bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.8)]' : 'bg-stone-700'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[#d4cfc9]">{w.meaning}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
