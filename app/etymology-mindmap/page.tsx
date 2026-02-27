"use client";

import { useRouter, useSearchParams } from 'next/navigation'
import { BackButton } from '@/components/back-button'
import { Suspense } from 'react' // 追加

// 実際の中身を別関数に分ける
function MindmapContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const etymologyName = searchParams.get('name') || '未知の語源'

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2a2520] via-[#3d3733] to-[#2a2520] relative overflow-hidden animate-zoom-in">
      {/* ...既存の return の中身をそのままここに貼る... */}
    </main>
  )
}

// ページ全体を Suspense で囲って書き出す
export default function EtymologyMindmapPage() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <MindmapContent />
    </Suspense>
  )
}