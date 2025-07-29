import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const StarTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      addStar(e.clientX, e.clientY);
    };

    const addStar = (x: number, y: number) => {
      const star: Star = {
        x,
        y,
        size: Math.random() * 4 + 2,
        opacity: 1,
        speed: Math.random() * 3 + 2
      };
      stars.current.push(star);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.current = stars.current.filter((star: Star) => {
        star.opacity -= 0.02;
        star.size -= 0.1;

        if (star.opacity <= 0 || star.size <= 0) return false;

        // Draw star shape
        const outerRadius = star.size;
        const innerRadius = star.size / 2;
        let rotation = Math.PI / 2 * 3; // Start at top
        const step = Math.PI / 4; // 8 points for a 4-pointed star

        ctx.beginPath();
        ctx.moveTo(star.x, star.y - outerRadius);

        for (let i = 0; i < 8; i++) {
          let r = (i % 2 === 0) ? outerRadius : innerRadius;
          let x = star.x + Math.cos(rotation) * r;
          let y = star.y + Math.sin(rotation) * r;
          ctx.lineTo(x, y);
          rotation += step;
        }

        ctx.closePath();
        ctx.fillStyle = `rgba(59, 130, 246, ${star.opacity})`;
        ctx.fill();

        // Add glow effect (still using a circle around the star's center)
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2); // Slightly larger glow radius
        ctx.fillStyle = `rgba(59, 130, 246, ${star.opacity * 0.2})`; // Slightly reduced glow opacity
        ctx.fill();

        return true;
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ opacity: 0.8 }}
    />
  );
};

export default StarTrail; 