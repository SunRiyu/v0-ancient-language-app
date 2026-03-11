'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { PageHeader } from '@/components/page-header'
import { BackButton } from '@/components/back-button'

// app/page.tsx からコピー、または共通定数ファイルからインポート
const PREFIX_LIST = [
  { id: 'ad', title: 'ad- (〜の方へ)' },
  { id: 'con', title: 'con- (共に)' },
  { id: 'de', title: 'de- (離れて)' },
  { id: 'ex', title: 'ex- (外へ)' },
  { id: 'in', title: 'in- (中へ/不)' },
  { id: 'per', title: 'per- (通って)' },
  { id: 'pre', title: 'pre- (前に)' },
  { id: 'pro', title: 'pro- (前に/前方に)' },
  { id: 're', title: 're- (再び/後ろに)' },
  { id: 'sub', title: 'sub- (下に)' },
]

export default function PrefixSelectPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const course = searchParams.get('course') || 'seeker'

  const handlePrefixClick = (id: string) => {
    // type に id（ad, con 等）を渡すことで、
    // クイズページ側で src/data/expolor/prefixes/ 内のファイルを自動判別させます
    router.push(`/quiz?course=${course}&type=${id}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BackButton />
        <PageHeader />
        
        <div className="mt-12 mb-8 text-center">
          <h2 className="text-3xl font-bold text-amber-200">接頭辞を選択</h2>
          <p className="text-amber-100/60 mt-2">学びたい語源を選んで、クイズを開始しましょう</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PREFIX_LIST.map((item) => (
            <button
              key={item.id}
              onClick={() => router.push(`/quiz?course=${course}&type=${item.id}`)}
              className="p-6 bg-stone-900/60 hover:bg-amber-900/40 border border-amber-900/30 hover:border-amber-500/50 text-amber-50 rounded-xl transition-all text-left group flex justify-between items-center"
            >
              <span className="text-lg font-bold group-hover:text-amber-200">{item.title}</span>
              <span className="text-amber-500 group-hover:translate-x-1 transition-transform">▶</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}