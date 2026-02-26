'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { GameButton } from './game-button'

interface AddEtymologyModalProps {
  type: 'prefix' | 'suffix' | 'root'
  onClose: () => void
  onAdd: (data: any) => void
}

export function AddEtymologyModal({ type, onClose, onAdd }: AddEtymologyModalProps) {
  const [name, setName] = useState('')
  const [meaning, setMeaning] = useState('')
  const [language, setLanguage] = useState('ラテン語')
  const [examples, setExamples] = useState('')
  const [course, setCourse] = useState<'seeker' | 'sage' | 'both'>('both')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && meaning) {
      onAdd({
        name,
        meaning,
        language,
        course,
        examples: examples
          .split(',')
          .map((ex) => ex.trim())
          .filter((ex) => ex),
      })
      setName('')
      setMeaning('')
      setLanguage('ラテン語')
      setExamples('')
      setCourse('both')
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'prefix':
        return '接頭辞'
      case 'suffix':
        return '接尾辞'
      case 'root':
        return '語根'
      default:
        return ''
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-zoom-in">
      <div className="bg-gradient-to-b from-[#3d3733] to-[#2a2520] border-2 border-[#5a7a5b] rounded-lg shadow-2xl max-w-md w-full p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-[#f5f5f1] mb-2">
          オリジナルの{getTypeLabel(type)}を追加
        </h2>
        <p className="text-[#d4cfc9] text-sm mb-6">自分だけの語源を学習に加えましょう</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div>
            <label className="block text-[#d4cfc9] font-semibold mb-2 text-sm">
              {getTypeLabel(type)}の形
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="例：pre-, -tion"
              className={cn(
                'w-full px-4 py-2 bg-[#4a4440] border border-[#5a5450] rounded-lg',
                'text-[#f5f5f1] placeholder-[#9a9590]',
                'focus:outline-none focus:border-[#6b9b7b] focus:ring-2 focus:ring-[#6b9b7b]/30'
              )}
              required
            />
          </div>

          {/* Meaning Input */}
          <div>
            <label className="block text-[#d4cfc9] font-semibold mb-2 text-sm">意味</label>
            <input
              type="text"
              value={meaning}
              onChange={(e) => setMeaning(e.target.value)}
              placeholder="例：〜の前に"
              className={cn(
                'w-full px-4 py-2 bg-[#4a4440] border border-[#5a5450] rounded-lg',
                'text-[#f5f5f1] placeholder-[#9a9590]',
                'focus:outline-none focus:border-[#6b9b7b] focus:ring-2 focus:ring-[#6b9b7b]/30'
              )}
              required
            />
          </div>

          {/* Language Select */}
          <div>
            <label className="block text-[#d4cfc9] font-semibold mb-2 text-sm">言語</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={cn(
                'w-full px-4 py-2 bg-[#4a4440] border border-[#5a5450] rounded-lg',
                'text-[#f5f5f1]',
                'focus:outline-none focus:border-[#6b9b7b] focus:ring-2 focus:ring-[#6b9b7b]/30'
              )}
            >
              <option>ラテン語</option>
              <option>ギリシャ語</option>
              <option>ゲルマン語</option>
              <option>フランス語</option>
              <option>その他</option>
            </select>
          </div>

          {/* Examples Input */}
          <div>
            <label className="block text-[#d4cfc9] font-semibold mb-2 text-sm">
              例（カンマで区切る）
            </label>
            <input
              type="text"
              value={examples}
              onChange={(e) => setExamples(e.target.value)}
              placeholder="例：prefix, preview, prepare"
              className={cn(
                'w-full px-4 py-2 bg-[#4a4440] border border-[#5a5450] rounded-lg',
                'text-[#f5f5f1] placeholder-[#9a9590]',
                'focus:outline-none focus:border-[#6b9b7b] focus:ring-2 focus:ring-[#6b9b7b]/30'
              )}
            />
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-[#d4cfc9] font-semibold mb-3 text-sm">
              どの道に属しますか？
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="course"
                  value="seeker"
                  checked={course === 'seeker'}
                  onChange={(e) => setCourse(e.target.value as 'seeker' | 'sage' | 'both')}
                  className="w-4 h-4"
                />
                <span className="text-[#d4cfc9] text-sm">探索者の道のみ</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="course"
                  value="sage"
                  checked={course === 'sage'}
                  onChange={(e) => setCourse(e.target.value as 'seeker' | 'sage' | 'both')}
                  className="w-4 h-4"
                />
                <span className="text-[#d4cfc9] text-sm">賢者の道のみ</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="course"
                  value="both"
                  checked={course === 'both'}
                  onChange={(e) => setCourse(e.target.value as 'seeker' | 'sage' | 'both')}
                  className="w-4 h-4"
                />
                <span className="text-[#d4cfc9] text-sm">両方の道</span>
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-[#4a4440] hover:bg-[#5a5450] text-[#d4cfc9] font-bold rounded-lg border border-[#3a3a36] transition-all hover:scale-105 active:scale-95"
            >
              キャンセル
            </button>
            <div className="flex-1">
              <GameButton
                type="submit"
                variant="primary"
                className="w-full"
              >
                追加する
              </GameButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
