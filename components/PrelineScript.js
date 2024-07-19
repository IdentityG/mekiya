"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PrelineScript() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const loadPreline = async () => {
        await import('preline/preline');

        if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
          window.HSStaticMethods.autoInit();
        }
      };

      loadPreline();
    }
  }, [isClient, router.pathname]);

  return null;
}
