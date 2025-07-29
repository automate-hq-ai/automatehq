import React, { useRef, useEffect } from 'react';

const stats = [
  { value: '90%', label: 'Faster Support Resolution' },
  { value: '$1.8T', label: 'AI Market by 2030' },
  { value: '42%', label: 'Cost Savings in HR & Supply Chain' },
  { value: '7%', label: 'Annual Productivity Growth' },
  { value: '82%', label: 'Companies Adopting AI' },
  { value: '66%', label: 'Performance Boost' },
];

const StatsTicker = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    const content = contentRef.current;
    if (!ticker || !content) return;

    let start: number | null = null;
    let req: number;
    let x = 0;
    let speed = 0.7; // px per frame, adjust for speed
    const contentWidth = content.scrollWidth / 2;

    function step(ts: number) {
      if (start === null) start = ts;
      x -= speed;
      if (-x >= contentWidth) {
        x = 0;
      }
      if (content) {
        content.style.transform = `translateX(${x}px)`;
      }
      req = requestAnimationFrame(step);
    }
    req = requestAnimationFrame(step);
    return () => cancelAnimationFrame(req);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden py-4 bg-gradient-to-r from-white via-slate-50 to-white">
      {/* Fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10" style={{background: 'linear-gradient(to right, #fff 80%, transparent)'}} />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10" style={{background: 'linear-gradient(to left, #fff 80%, transparent)'}} />
      <div ref={tickerRef} className="w-full h-28 relative">
        <div
          ref={contentRef}
          className="flex gap-4 absolute top-0 left-0"
          style={{ willChange: 'transform' }}
        >
          {[...stats, ...stats].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center flex-shrink-0 w-72 h-28 bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-4"
              style={{boxShadow: '0 2px 8px 0 rgba(30, 41, 59, 0.06)'}}
            >
              <span className="text-2xl font-bold text-blue-700 mb-1">{stat.value}</span>
              <span className="text-gray-700 text-xs md:text-sm text-center leading-tight max-w-full line-clamp-3" style={{overflowWrap: 'break-word'}}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default StatsTicker; 