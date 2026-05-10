const links = [
  {
    title: "수업 자료실",
    description:
      "강의자료, 예제 코드, 과제 안내를 한 곳에서 빠르게 찾아보세요.",
    href: "https://www.google.com",
    label: "열기"
  },
  {
    title: "참고 사이트",
    description: "수업에 도움이 되는 외부 링크와 학습 자료를 모았습니다.",
    href: "https://www.example.com",
    label: "열기"
  },
  {
    title: "공유 노트",
    description: "필요한 정보를 한데 모아두고 손쉽게 이동해요.",
    href: "https://www.wikipedia.org",
    label: "열기"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-sky-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_20px_60px_-20px_rgba(251,113,133,0.25)] backdrop-blur-sm">
          <p className="inline-flex rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-700">
            Class Hub @ddiae
          </p>
          <h1 className="mt-5 tracking-tight text-rose-700 whitespace-pre-line">
            {`본 사이트는 수업 자료 공유를 위한 클래스 허브입니다. 활용 문의는 visveryver2@gmail.com으로 연락주세요.`}
          </h1>
        </header>

        <main className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <article
              key={link.href}
              className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_20px_80px_-40px_rgba(251,113,133,0.25)] transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-44 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-rose-200 via-amber-200 to-sky-200 text-4xl text-rose-900 shadow-inner">
                ✨
              </div>
              <h2 className="text-2xl font-semibold text-rose-900">
                {link.title}
              </h2>
              <p className="mt-3 text-slate-600">{link.description}</p>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
