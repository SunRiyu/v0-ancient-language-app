export function PageHeader() {
  return (
    <div className="text-center mb-16 sm:mb-20">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-amber-50 drop-shadow-lg">
        Go-gen
      </h1>
      <p className="text-lg sm:text-xl text-amber-100/80 max-w-2xl mx-auto">
        古代の言語の断片を組み合わせ、未知の単語を解読する言語ハッキング・パズル
      </p>
      <div className="mt-6 h-1 w-24 bg-gradient-to-r from-amber-600 to-green-700 mx-auto rounded-full" />
    </div>
  )
}
