import { BackButton } from '@/components/back-button'
import { Suspense } from 'react'

// コンテンツ部分を切り分ける
function MindmapContent({ etymologyName }: { etymologyName: string }) {

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2a2520] via-[#3d3733] to-[#2a2520] relative overflow-hidden animate-zoom-in">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-green-900/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/></filter><rect width=%22200%22 height=%22200%22 fill=%22%23000%22 filter=%22url(%23noise)%22/></svg>')]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <BackButton />
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#f5f5f1] mb-2 text-center">語源の展開図</h1>
          <p className="text-[#d4cfc9] text-center text-sm sm:text-base">
            「{etymologyName}」から広がる言葉たち
          </p>
        </div>

        <div className="relative w-full h-96 sm:h-screen flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-20">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[#6b9b7b] to-[#5a8b6b] border-3 border-[#afd2e1] shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[#f5f5f1] font-bold text-sm sm:text-lg text-pretty">
                    {etymologyName}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0">
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const angle = (i * 60) * (Math.PI / 180)
                  const distance = 120
                  const x = Math.cos(angle) * distance
                  const y = Math.sin(angle) * distance

                  return (
                    <div
                      key={i}
                      className="absolute w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`,
                      }}
                    >
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 64 64">
                        <line x1="32" y1="32" x2="32" y2="0" stroke="#5a8b6b" strokeWidth="2" opacity="0.5" />
                      </svg>
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br from-[#3d3733] to-[#2a2520] border-2 border-[#5a5450] shadow-lg flex items-center justify-center overflow-hidden group hover:border-[#afd2e1] transition-all duration-300">
                        <div className="flex flex-col items-center gap-1">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#afd2e1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          <span className="text-[#d4cfc9] text-xs font-semibold">未解放</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#3d3733]/50 border border-[#5a7a5b] rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#f5f5f1] mb-3">語源の情報</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#d4cfc9]/60 text-xs">形</p>
              <p className="text-[#f5f5f1] font-semibold">{etymologyName}</p>
            </div>
            <div>
              <p className="text-[#d4cfc9]/60 text-xs">登録単語数</p>
              <p className="text-[#f5f5f1] font-semibold">6個（未解放）</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// ページ全体をSuspenseでラップして書き出し
export default async function EtymologyMindmapPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const etymologyName = typeof params.name === 'string' ? params.name : '未知の語源'

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#2a2520] flex items-center justify-center text-[#f5f5f1]">読み込み中...</div>}>
      <MindmapContent etymologyName={etymologyName} />
    </Suspense>
  )
}
