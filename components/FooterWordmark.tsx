'use client';

import { useCallback, useEffect, useRef } from 'react';

const BASE_FONT_SIZE = 160;

export function FooterWordmark({ children }: { children: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const fit = useCallback(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    if (!wrap || !text) return;

    const styles = getComputedStyle(wrap);
    const available = wrap.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);

    text.style.fontSize = `${BASE_FONT_SIZE}px`;
    const measured = text.offsetWidth;
    if (measured > 0 && available > 0) {
      text.style.fontSize = `${BASE_FONT_SIZE * (available / measured)}px`;
    }
  }, []);

  useEffect(() => {
    fit();
    // Fallback-font metrics differ from Manrope, so re-fit once the webfont lands.
    document.fonts?.ready.then(fit).catch(() => {});
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [fit]);

  return (
    <div ref={wrapRef} className="overflow-hidden px-6 pb-3 text-center" aria-hidden="true">
      <span
        ref={textRef}
        className="inline-block font-display font-extrabold leading-[0.82] tracking-[-0.03em] whitespace-nowrap text-[#232323]"
        style={{ fontSize: BASE_FONT_SIZE }}
      >
        {children}
      </span>
    </div>
  );
}
