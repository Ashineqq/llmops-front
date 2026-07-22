import { Outlet, Link } from 'react-router-dom';

import { ThemeToggle } from '@/components/ThemeToggle';

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex h-14 items-center border-b border-border bg-card px-6">
        <Link
          to="/"
          className="text-lg font-semibold text-foreground no-underline hover:text-foreground/80"
        >
          LLM Operations
        </Link>
        <div className="flex-1" />
        <ThemeToggle />
      </header>
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
