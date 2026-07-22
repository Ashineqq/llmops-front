import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '@/api';
import { tokenAtom, userAtom } from '@/store/atoms';

export function LoginPage() {
  const navigate = useNavigate();
  const setToken = useSetAtom(tokenAtom);
  const setUser = useSetAtom(userAtom);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ username, password });
      setToken(res.token);
      setUser(res.user);
      navigate('/', { replace: true });
    } catch {
      // 错误已在拦截器统一处理
    }
  };

  return (
    <div className="flex h-dvh items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-80 flex-col gap-4 rounded-lg border p-6 shadow-sm"
      >
        <h1 className="text-center text-xl font-semibold">登录</h1>
        <input
          className="rounded-md border px-3 py-2 text-sm"
          placeholder="用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="rounded-md border px-3 py-2 text-sm"
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          登录
        </button>
      </form>
    </div>
  );
}
