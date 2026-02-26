'use client'

import { cn } from '@/lib/utils'

interface LearningOptionProps {
  type: 'prefix' | 'suffix' | 'root'
  title: string
  description: string
  icon: string
  selected: boolean
  onClick: () => void
}

export function LearningOption({
  type,
  title,
  description,
  icon,
  selected,
  onClick,
}: LearningOptionProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'prefix':
        return {
          bg: 'from-[#6b9b7b] to-[#5a8b6b]',
          border: 'border-[#4a7a5b]',
          icon: '🌱',
        }
      case 'suffix':
        return {
          bg: 'from-[#5a8b6b] to-[#4a7a5b]',
          border: 'border-[#3a6a4b]',
          icon: '🍃',
        }
      case 'root':
        return {
          bg: 'from-[#7a9b7b] to-[#6a8b6b]',
          border: 'border-[#5a7a5b]',
          icon: '🌿',
        }
      default:
        return {
          bg: 'from-[#8b7355] to-[#7a6345]',
          border: 'border-[#6a5335]',
          icon: '🔮',
        }
    }
  }

  const colors = getTypeColor(type)

  return (
    <button
      onClick={onClick}
      className={cn(
        'relative group rounded-lg overflow-hidden transition-all duration-300 transform',
        'hover:scale-105 cursor-pointer h-full',
        selected ? 'scale-105 ring-2 ring-offset-2 ring-offset-stone-900' : '',
        'border-2',
        colors.border
      )}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${colors.bg} opacity-80`} />

      {/* Stone texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <filter id={`noise-${type}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
          </filter>
          <rect width="100%" height="100%" fill="currentColor" opacity="0.15" filter={`url(#noise-${type})`} />
        </svg>
      </div>

      {/* Moss overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
        <div className="absolute top-0 right-0 w-24 h-16 rounded-bl-full bg-gradient-radial from-green-400/30 to-transparent blur-2xl" />
        <div className="absolute bottom-0 left-0 w-20 h-12 rounded-tr-full bg-gradient-radial from-green-500/25 to-transparent blur-xl" />
      </div>

      {/* Hover shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* Selected ring effect */}
      {selected && (
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-b from-green-400/10 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col items-center justify-center h-full text-center">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#f5f5f1] mb-2">{title}</h3>
        <p className="text-[#d4cfc9] text-sm leading-relaxed">{description}</p>

        {selected && (
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-300 font-semibold">選択中</span>
          </div>
        )}
      </div>
    </button>
  )
}
