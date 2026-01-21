import { useEffect, useRef } from 'react';

interface ThreadsProps {
  color?: string;
  count?: number;
  speed?: number;
  className?: string;
}

export const Threads = ({
  color = 'rgba(0, 82, 255, 0.15)',
  count = 8,
  speed = 0.5,
  className = ''
}: ThreadsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    interface Thread {
      x: number;
      y: number;
      length: number;
      angle: number;
      speed: number;
      wave: number;
      waveSpeed: number;
    }

    const threads: Thread[] = Array.from({ length: count }, (_, i) => ({
      x: (canvas.offsetWidth / (count + 1)) * (i + 1),
      y: 0,
      length: canvas.offsetHeight * 1.2,
      angle: Math.PI / 2 + (Math.random() - 0.5) * 0.2,
      speed: speed * (0.8 + Math.random() * 0.4),
      wave: Math.random() * Math.PI * 2,
      waveSpeed: 0.02 + Math.random() * 0.02,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      threads.forEach((thread) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;

        const segments = 50;
        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          const waveOffset = Math.sin(thread.wave + t * 4) * 20;
          const x = thread.x + waveOffset;
          const y = t * thread.length;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
        thread.wave += thread.waveSpeed;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [color, count, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};
