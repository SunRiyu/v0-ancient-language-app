'use client'

import { cn } from '@/lib/utils'
import { Lock } from 'lucide-react'

interface DexCardProps {
  index: number
  locked: boolean
  name?: string
  count?: number
}

export function DexCard({ index, locked, name = '秘密の語根', count = 0 }: DexCardProps) {
  return (
    <div
      className={cn(
        'group relative aspect-square rounded-xl transition-all duration-300',
        'bg-gradient-to-br from-stone-700 to-stone-900',
        'border-2 border-stone-600/50 hover:border-green-600/50',
        'shadow-xl overflow-hidden',
        'before:absolute before:inset-0 before:rounded-xl before:pointer-events-none',
        'before:bg-gradient-to-br before:from-green-900/10 before:via-transparent before:to-amber-900/10',
        locked && 'hover:scale-105 cursor-pointer',
        !locked && 'hover:scale-105'
      )}
    >
      {/* Moss texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/20 via-transparent to-amber-700/20 rounded-xl" />
        <div className="absolute top-1 left-1 w-12 h-12 bg-green-700/30 blur-lg rounded-full" />
        <div className="absolute bottom-2 right-2 w-14 h-14 bg-amber-700/20 blur-lg rounded-full" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl">
        {locked ? (
          <div className="flex flex-col items-center gap-3 z-10">
            <Lock className="w-12 h-12 sm:w-16 sm:h-16 text-green-400/60 drop-shadow-lg" />
            <p className="text-xs sm:text-sm text-amber-100/60 font-semibold text-center px-2">
              未解放
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 z-10">
            <h3 className="text-sm sm:text-base font-bold text-amber-50 text-center px-2 drop-shadow-md">
              {name}
            </h3>
            <p className="text-xs text-green-300 font-semibold">
              {count}個の単語
            </p>
          </div>
        )}
      </div>

      {/* Ancient seal effect when locked */}
      {locked && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-950/30 via-stone-900/20 to-green-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Stone texture noise */}
      <div className="absolute inset-0 rounded-xl overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%221%22 numOctaves=%223%22/></filter><rect width=%22100%22 height=%22100%22 fill=%22%23000%22 filter=%22url(%23noise)%22/></svg>')]" />
      </div>
    </div>
  )
}
