import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="flex h-dvh flex-col">
      <header className="flex h-14 items-center border-b px-6">
        <Link to="/" className="text-lg font-semibold">
          LLM Operations
        </Link>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
