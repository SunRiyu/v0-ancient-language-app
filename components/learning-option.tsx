'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'

interface LearningOptionProps {
  type: 'prefix' | 'suffix' | 'root'
  title: string
  description: string
  selected: boolean
  onClick: () => void
  gender: 'male' | 'female'
}

export function LearningOption({
  type,
  title,
  description,
  selected,
  onClick,
  gender,
}: LearningOptionProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'prefix':
        return {
          bg: 'from-[#6b9b7b] to-[#5a8b6b]',
          border: 'border-[#4a7a5b]',
        }
      case 'suffix':
        return {
          bg: 'from-[#5a8b6b] to-[#4a7a5b]',
          border: 'border-[#3a6a4b]',
        }
      case 'root':
        return {
          bg: 'from-[#7a9b7b] to-[#6a8b6b]',
          border: 'border-[#5a7a5b]',
        }
      default:
        return {
          bg: 'from-[#8b7355] to-[#7a6345]',
          border: 'border-[#6a5335]',
        }
    }
  }

  const colors = getTypeColor(type)

  // 画像の入れ替え対応
  const getImagePath = (type: string, gender: 'male' | 'female') => {
    const folder = gender === 'male' ? 'boy' : 'girl'
    const fileName = {
      prefix: 'alligater.jpg',      // 接頭辞にワニ（元は接尾辞）を表示
      suffix: 'rock_push.jpg',      // 接尾辞に岩（元は接頭辞）を表示
      root: 'pushed_by_rock.jpg',   // その他の語源はそのまま
    }[type as 'prefix' | 'suffix' | 'root'] || 'rock_push.jpg'
    
    return `/image/${folder}/${fileName}`
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'relative group rounded-lg overflow-hidden transition-all duration-300 transform',
        'hover:scale-105 cursor-pointer h-full w-full', // w-fullで親のグリッド幅に合わせる
        selected ? 'scale-105 ring-2 ring-offset-2 ring-offset-stone-900' : '',
        'border-2',
        colors.border
      )}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${colors.bg} opacity-80`} />

      <div className="relative z-10 p-6 flex flex-col items-center justify-center h-full text-center">
        <div className="mb-4 relative w-full aspect-video rounded-lg border border-[#5a7a5b] overflow-hidden bg-stone-800">
          <Image
            src={getImagePath(type, gender)}
            alt={title}
            fill
            className="object-cover"
            loading="eager"
            priority
          />
        </div>
        
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
