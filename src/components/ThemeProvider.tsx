import { useAtomValue } from 'jotai';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { themeModeAtom } from '@/store/atoms';

export function ThemeProvider({ children }: PropsWithChildren) {
  const mode = useAtomValue(themeModeAtom);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode]);

  return <>{children}</>;
}
