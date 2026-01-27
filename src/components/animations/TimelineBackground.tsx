import { useEffect, useRef } from "react";

interface Bar {
  y: number;
  width: number;
  height: number;
  speed: number;
  offset: number;
  color: string;
  blur: number;
}

export function TimelineBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const barsRef = useRef<Bar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Theme colors in HSL
    const colors = [
      "hsla(202, 85%, 44%, 0.6)",   // Primary blue
      "hsla(202, 85%, 44%, 0.4)",   // Primary blue lighter
      "hsla(224, 80%, 61%, 0.5)",   // Secondary blue
      "hsla(224, 80%, 61%, 0.35)",  // Secondary blue lighter
      "hsla(330, 68%, 58%, 0.45)",  // Accent pink
      "hsla(330, 68%, 58%, 0.3)",   // Accent pink lighter
      "hsla(202, 85%, 55%, 0.35)", // Lighter primary
      "hsla(330, 68%, 65%, 0.25)", // Lighter pink
    ];

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const initBars = () => {
      const rect = canvas.getBoundingClientRect();
      const barCount = 18; // Number of horizontal bars
      barsRef.current = [];

      for (let i = 0; i < barCount; i++) {
        // Distribute bars vertically with some randomness
        const baseY = (rect.height / barCount) * i;
        const yVariation = (Math.random() - 0.5) * 40;
        
        barsRef.current.push({
          y: baseY + yVariation,
          width: Math.random() * 400 + 200, // Random width between 200-600
          height: Math.random() * 25 + 15,  // Random height between 15-40
          speed: (Math.random() * 0.3 + 0.1) * (Math.random() > 0.5 ? 1 : -1), // Slow speed, random direction
          offset: Math.random() * rect.width * 2, // Random starting position
          color: colors[Math.floor(Math.random() * colors.length)],
          blur: Math.random() * 15 + 8, // Blur between 8-23px
        });
      }

      // Add some milestone dots (larger, more prominent bars)
      for (let i = 0; i < 6; i++) {
        barsRef.current.push({
          y: Math.random() * rect.height,
          width: Math.random() * 80 + 40,
          height: Math.random() * 12 + 8,
          speed: (Math.random() * 0.15 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
          offset: Math.random() * rect.width * 2,
          color: Math.random() > 0.5 
            ? "hsla(330, 68%, 58%, 0.7)" 
            : "hsla(202, 85%, 50%, 0.7)",
          blur: Math.random() * 5 + 3,
        });
      }
    };

    const drawBars = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      
      // Soft gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      bgGradient.addColorStop(0, "hsl(210, 20%, 98%)");
      bgGradient.addColorStop(0.5, "hsl(220, 25%, 96%)");
      bgGradient.addColorStop(1, "hsl(210, 20%, 97%)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      const bars = barsRef.current;

      // Draw each bar with blur effect
      bars.forEach((bar) => {
        // Calculate position with smooth looping
        const x = ((bar.offset + time * bar.speed) % (rect.width + bar.width * 2)) - bar.width;
        
        ctx.save();
        ctx.filter = `blur(${bar.blur}px)`;
        
        // Draw rounded rectangle bar
        ctx.beginPath();
        const radius = bar.height / 2;
        ctx.roundRect(x, bar.y, bar.width, bar.height, radius);
        ctx.fillStyle = bar.color;
        ctx.fill();
        
        ctx.restore();
      });

      // Add subtle horizontal grid lines for timeline effect
      ctx.save();
      ctx.filter = "blur(1px)";
      for (let i = 0; i < 8; i++) {
        const lineY = (rect.height / 8) * i + rect.height / 16;
        ctx.beginPath();
        ctx.moveTo(0, lineY);
        ctx.lineTo(rect.width, lineY);
        ctx.strokeStyle = "hsla(210, 20%, 80%, 0.3)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      animationRef.current = requestAnimationFrame(drawBars);
    };

    resizeCanvas();
    initBars();
    animationRef.current = requestAnimationFrame(drawBars);

    const handleResize = () => {
      resizeCanvas();
      initBars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
