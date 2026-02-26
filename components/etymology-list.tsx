'use client'

import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface EtymologyItem {
  id: number
  name: string
  meaning: string
  language: string
  examples: string[]
}

interface EtymologyListProps {
  items: EtymologyItem[]
}

export function EtymologyList({ items }: EtymologyListProps) {
  const router = useRouter()
  return (
    <div className="space-y-4">
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[#d4cfc9] text-lg">まだ何も追加されていません</p>
        </div>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/etymology-mindmap?name=${encodeURIComponent(item.name)}`)}
            className={cn(
              'bg-gradient-to-r from-[#3d3733] to-[#4a4440]',
              'border-l-4 border-[#6b9b7b]',
              'rounded-lg p-6 transition-all hover:shadow-lg hover:scale-102',
              'hover:border-[#7ab86b] cursor-pointer'
            )}
          >
            {/* Header with name and language */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
              <div>
                <h3 className="text-xl font-bold text-[#f5f5f1]">{item.name}</h3>
                <p className="text-[#d4cfc9] text-sm">{item.meaning}</p>
              </div>
              <span className="inline-block px-3 py-1 bg-[#5a7a5b]/30 text-[#7ab86b] text-sm rounded-full border border-[#6b9b7b]/50 w-fit">
                {item.language}
              </span>
            </div>

            {/* Examples */}
            <div className="mt-4">
              <p className="text-[#a8a090] text-xs font-semibold mb-2">例：</p>
              <div className="flex flex-wrap gap-2">
                {item.examples.map((example, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#5a5450] text-[#d4cfc9] text-sm rounded border border-[#6a5335]"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
