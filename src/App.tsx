import { LINKS } from "./config";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-sky-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_20px_60px_-20px_rgba(251,113,133,0.25)] backdrop-blur-sm">
          <p className="inline-flex rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-700">
            Class Hub @ddiae
          </p>
          <h1 className="mt-5 tracking-tight text-rose-700 whitespace-pre-line italic">
            수업 자료 활용 문의는{" "}
            <span className="font-bold">visveryver2@gmail.com</span>
            으로 연락바랍니다.
          </h1>
        </header>

        <main className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_20px_80px_-40px_rgba(251,113,133,0.25)] transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-44 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-rose-200 via-amber-200 to-sky-200 text-4xl text-rose-900 shadow-inner">
                ✨
              </div>
              <h2 className="text-2xl font-semibold text-rose-900">
                {link.title}
              </h2>
              <p className="mt-3 text-slate-600">{link.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                  {link.label}
                </span>
              </div>
            </a>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
