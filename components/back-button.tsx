'use client'

import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface BackButtonProps {
  className?: string
}

export function BackButton({ className }: BackButtonProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleBack = () => {
    // 学習選択ページからはホームへ、それ以外は戻る
    if (pathname.includes('/learning-path')) {
      router.push('/')
    } else {
      router.back()
    }
  }

  return (
    <button
      onClick={handleBack}
      className={cn(
        'mb-6 px-4 py-2 bg-[#4a4440] hover:bg-[#5a5450] text-[#d4cfc9] font-semibold rounded-lg',
        'border border-[#3a3a36] transition-all hover:scale-105 active:scale-95',
        'flex items-center gap-2',
        className
      )}
    >
      <span className="text-lg">←</span>
      <span>戻る</span>
    </button>
  )
}
