'use client'

import { cn } from '@/lib/utils'
import { GameButton } from './game-button'

interface CourseCardProps {
  title: string
  subtitle: string
  description: string
  level: string
  onClick: () => void
  isSelected: boolean
}

export function CourseCard({
  title,
  subtitle,
  description,
  level,
  onClick,
  isSelected,
}: CourseCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'group relative p-8 rounded-xl transition-all duration-300 cursor-pointer',
        'bg-gradient-to-br from-stone-700 to-stone-900',
        'border-2 border-stone-600/50 hover:border-green-600/50',
        'shadow-xl hover:shadow-2xl transform hover:scale-105',
        'before:absolute before:inset-0 before:rounded-xl before:pointer-events-none',
        'before:bg-gradient-to-br before:from-green-900/10 before:via-transparent before:to-amber-900/10',
        isSelected && 'ring-2 ring-green-600 border-green-600'
      )}
    >
      {/* Moss/Lichen texture overlay */}
      <div className="absolute inset-0 rounded-xl opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/20 via-transparent to-amber-700/20 rounded-xl" />
        <div className="absolute top-2 left-2 w-16 h-16 bg-green-700/20 blur-xl rounded-full" />
        <div className="absolute bottom-3 right-4 w-20 h-20 bg-amber-700/15 blur-lg rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-50 mb-1">
              {title}
            </h3>
            <p className="text-sm text-green-300 font-semibold">{subtitle}</p>
          </div>
          {isSelected && (
            <div className="text-2xl">✓</div>
          )}
        </div>

        <p className="text-amber-100/70 mb-6 text-sm sm:text-base">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="inline-block px-3 py-1 bg-green-900/50 border border-green-700/50 rounded-full text-xs sm:text-sm text-green-200 font-semibold">
            {level}
          </span>
          <span className="text-amber-50 text-lg opacity-50 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </div>
      </div>

      {/* Stone texture highlight */}
      <div className="absolute inset-0 rounded-xl overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%221%22 numOctaves=%223%22/></filter><rect width=%22100%22 height=%22100%22 fill=%22%23000%22 filter=%22url(%23noise)%22/></svg>')]" />
      </div>
    </div>
  )
}
