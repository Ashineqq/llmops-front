import { Moon, Sun } from 'lucide-react';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { themeModeAtom } from '@/store/atoms';

export function ThemeToggle() {
  const [mode, setMode] = useAtom(themeModeAtom);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="size-8" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      aria-label={mode === 'light' ? '切换暗色模式' : '切换亮色模式'}
    >
      {mode === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </Button>
  );
}
