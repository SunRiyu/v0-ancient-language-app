'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getRootsByPrefix } from '@/lib/quiz-utils';
import { ArrowLeft } from 'lucide-react';

export default function PrefixEtymologyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const prefix = searchParams.get('prefix') || '';

  const roots = getRootsByPrefix(prefix);

  const handleRootSelect = (root: string) => {
    router.push(`/prefix-quiz?prefix=${encodeURIComponent(prefix)}&root=${encodeURIComponent(root)}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 p-6">
      <div className="max-w-2xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-amber-800 hover:text-amber-900 mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>戻る</span>
          </button>
          <h1 className="text-4xl font-bold text-amber-900 text-balance">
            {prefix}の語源を選ぼう
          </h1>
          <p className="text-amber-800 mt-2">
            接頭辞「{prefix}」に関連する語根を選んでクイズに挑戦しましょう
          </p>
        </div>

        {/* 語根カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roots.map((root) => (
            <Card
              key={root}
              className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer border-2 border-amber-200 hover:border-amber-400"
              onClick={() => handleRootSelect(root)}
            >
              <button
                onClick={() => handleRootSelect(root)}
                className="w-full text-left"
              >
                <h2 className="text-2xl font-bold text-amber-900 mb-2">
                  {root}
                </h2>
                <p className="text-amber-700 text-sm">
                  この語根を含むクイズに挑戦
                </p>
              </button>
            </Card>
          ))}
        </div>

        {/* 語根がない場合のメッセージ */}
        {roots.length === 0 && (
          <Card className="p-8 bg-white border-2 border-amber-200 text-center">
            <p className="text-amber-800">
              申し訳ありません。このカテゴリーのクイズはまだ準備中です。
            </p>
          </Card>
        )}
      </div>
    </main>
  );
}
