const links = [
  {
    title: '학습 도구 모음',
    description: '자주 사용하는 교육 사이트를 빠르게 이동합니다.',
    href: 'https://www.google.com',
    label: '바로가기'
  },
  {
    title: '포트폴리오 페이지',
    description: '프로젝트와 작업물을 모아두는 공간입니다.',
    href: 'https://www.example.com',
    label: '바로가기'
  },
  {
    title: '문서 저장소',
    description: '필요한 자료를 한 곳에서 관리하세요.',
    href: 'https://www.wikipedia.org',
    label: '바로가기'
  }
];

function App() {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <p className="inline-flex rounded-full bg-slate-800 px-4 py-1 text-sm text-sky-300">
            단일 페이지 링크 플랫폼
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            빠르게 이동하는 링크 컬렉션
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            자주 방문하는 사이트를 미리보기 버튼 형태로 모아놓은 공간입니다. 반응형 레이아웃으로 데스크톱과 모바일 모두에서 편리하게 사용할 수 있어요.
          </p>
        </header>

        <main className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <article
              key={link.href}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-sky-500/40"
            >
              <div className="mb-5 h-40 w-full rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-700 shadow-inner"></div>
              <h2 className="text-2xl font-semibold text-white">{link.title}</h2>
              <p className="mt-3 text-slate-300">{link.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                  미리보기
                </span>
                <a
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
