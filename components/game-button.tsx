'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GameButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export function GameButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
}: GameButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantClasses = {
    primary: 'bg-gradient-to-b from-[#5a8b6b] via-[#4a7a5b] to-[#3a6a4b] hover:from-[#6b9b7b] hover:via-[#5a8b6b] hover:to-[#4a7a5b] text-[#f5f5f1] border-2 border-[#3a6a4b] shadow-2xl hover:shadow-2xl',
    secondary: 'bg-gradient-to-b from-[#8b7355] via-[#7a6345] to-[#6a5335] hover:from-[#9b8365] hover:via-[#8b7355] hover:to-[#7a6345] text-[#f5f5f1] border-2 border-[#6a5335] shadow-2xl hover:shadow-2xl',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative font-bold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-98 overflow-hidden',
        sizeClasses[size],
        variantClasses[variant],
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        className
      )}
    >
      {/* Stone texture background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <filter id="stoneNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          <rect width="100%" height="100%" fill="currentColor" opacity="0.1" filter="url(#stoneNoise)" />
        </svg>
      </div>

      {/* Moss/algae overlay with organic patterns */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply">
        <div className="absolute top-2 left-2 w-16 h-12 rounded-full bg-gradient-radial from-green-400/30 to-transparent blur-xl" />
        <div className="absolute bottom-3 right-3 w-20 h-14 rounded-full bg-gradient-radial from-green-500/25 to-transparent blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-12 h-10 rounded-full bg-gradient-radial from-green-300/20 to-transparent blur-lg" />
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-lg" />
      </div>

      {/* Text with shadow */}
      <span className="relative z-10 drop-shadow-lg">{children}</span>
    </button>
  )
}
