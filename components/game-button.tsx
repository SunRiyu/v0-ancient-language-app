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
    primary: 'bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 text-amber-50 border-2 border-green-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-b from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-amber-50 border-2 border-amber-800 shadow-lg hover:shadow-xl',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative font-bold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-98',
        'before:absolute before:inset-0 before:rounded-lg before:opacity-40 before:pointer-events-none',
        'before:bg-gradient-to-b before:from-green-400/20 before:to-transparent',
        'after:absolute after:inset-0 after:rounded-lg after:opacity-20 after:pointer-events-none',
        'after:bg-[linear-gradient(45deg,transparent_30%,rgba(139,121,85,0.3)_50%,transparent_70%)]',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span className="relative z-10 drop-shadow-md">{children}</span>
    </button>
  )
}
