'use client';

import { useEffect } from 'react';

type WindowWithPagefind = Window & {
  PagefindUI?: new (options: {
    element: string;
    showSubResults?: boolean;
    showImages?: boolean;
  }) => unknown;
  __pagefindMountedIds?: Record<string, boolean>;
};

interface PagefindSearchProps {
  containerId?: string;
}

const PagefindSearch = ({ containerId = 'search' }: PagefindSearchProps) => {
  useEffect(() => {
    const w = window as WindowWithPagefind;
    const elementSelector = `#${containerId}`;
    const target = document.querySelector(elementSelector) as HTMLElement | null;

    if (!target) {
      return;
    }

    w.__pagefindMountedIds = w.__pagefindMountedIds || {};

    if (w.__pagefindMountedIds[containerId]) {
      return;
    }

    w.__pagefindMountedIds[containerId] = true;

    const runInit = () => {
      if (!w.PagefindUI) {
        w.__pagefindMountedIds![containerId] = false;
        return;
      }

      target.innerHTML = '';

      new w.PagefindUI({
        element: elementSelector,
        showSubResults: true,
        showImages: true,
      });
    };

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '/pagefind/pagefind-ui.css';
    document.head.appendChild(style);

    const script = document.createElement('script');
    script.src = '/pagefind/pagefind-ui.js';
    script.async = true;
    script.onload = runInit;
    document.body.appendChild(script);

    return () => {
      style.remove();
      script.remove();
    };
  }, [containerId]);

  return (
    <div
      id={containerId}
      className='w-full min-w-0 text-sm text-zinc-800 dark:text-zinc-100'
    >
      Search
    </div>
  );
};

export default PagefindSearch;