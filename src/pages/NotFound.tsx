import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground text-sm">页面不存在</p>
      <Link to="/" className="text-sm text-blue-600 hover:underline">
        返回首页
      </Link>
    </div>
  );
}
