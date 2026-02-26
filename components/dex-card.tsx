'use client'

import { cn } from '@/lib/utils'

interface DexCardProps {
  index: number
  locked: boolean
  name?: string
  count?: number
  label?: string
}

export function DexCard({ index, locked, name = '秘密の語根', count = 0, label = '' }: DexCardProps) {
  return (
    <div className="relative">
      {/* Label above card */}
      {label && (
        <div className="mb-1 text-center">
          <span className="text-white text-xs font-semibold">{label}</span>
        </div>
      )}
      <div
        className={cn(
          'group relative aspect-square rounded-lg transition-all duration-300',
          'bg-gradient-to-br from-[#3d3733] to-[#2a2520]',
          'border-2 border-[#5a5450] hover:border-[#afd2e1]',
          'shadow-lg overflow-hidden',
          'before:absolute before:inset-0 before:rounded-lg before:pointer-events-none',
          'before:bg-gradient-to-br before:from-[#6b9b7b]/10 before:via-transparent before:to-[#8b7355]/10',
          locked && 'hover:scale-105 cursor-pointer',
          !locked && 'hover:scale-105'
        )}
      >
      {/* Moss texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6b9b7b]/20 via-transparent to-[#8b7355]/20 rounded-xl" />
        <div className="absolute top-1 left-1 w-12 h-12 bg-[#6b9b7b]/30 blur-lg rounded-full" />
        <div className="absolute bottom-2 right-2 w-14 h-14 bg-[#8b7355]/20 blur-lg rounded-full" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl">
        {locked ? (
          <div className="flex flex-col items-center gap-3 z-10">
            {/* Lock icon with keyhole */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              {/* Lock body */}
              <svg
                className="w-full h-full text-[#afd2e1] drop-shadow-lg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              {/* Keyhole */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-1.5 h-1.5 bg-[#2a2520] rounded-full" />
                <div className="w-1 h-1 bg-[#2a2520] rounded-full mx-auto mt-0.5" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#d4cfc9]/60 font-semibold text-center px-2">
              未解放
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 z-10">
            <h3 className="text-sm sm:text-base font-bold text-[#f5f5f1] text-center px-2 drop-shadow-md">
              {name}
            </h3>
            <p className="text-xs text-[#7ab86b] font-semibold">
              {count}個の単語
            </p>
          </div>
        )}
      </div>

      {/* Ancient seal effect when locked */}
      {locked && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#8b7355]/30 via-[#2a2520]/20 to-[#6b9b7b]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Stone texture noise */}
      <div className="absolute inset-0 rounded-lg overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%221%22 numOctaves=%223%22/></filter><rect width=%22100%22 height=%22100%22 fill=%22%23000%22 filter=%22url(%23noise)%22/></svg>')]" />
      </div>
    </div>
    </div>
  )
}
