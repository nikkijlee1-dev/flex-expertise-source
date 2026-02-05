import { useEffect, useRef, useCallback, useReducer } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";

interface Bar {
  y: number;
  width: number;
  height: number;
  speed: number;
  offset: number;
  color: string;
  blur: number;
}

interface TimelineBackgroundProps {
  showDownloadButton?: boolean;
}

export function TimelineBackground({ showDownloadButton = false }: TimelineBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const barsRef = useRef<Bar[]>([]);
  const timeRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const isFrozenRef = useRef(false);
  const isRecordingRef = useRef(false);
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);

  // Theme colors in HSL
  const colors = [
    "hsla(202, 85%, 44%, 0.3)",
    "hsla(202, 85%, 44%, 0.2)",
    "hsla(224, 80%, 61%, 0.25)",
    "hsla(224, 80%, 61%, 0.18)",
    "hsla(330, 68%, 58%, 0.23)",
    "hsla(330, 68%, 58%, 0.15)",
    "hsla(202, 85%, 55%, 0.18)",
    "hsla(330, 68%, 65%, 0.12)",
  ];

  const downloadGif = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas || isRecordingRef.current) return;

    isRecordingRef.current = true;
    forceUpdate();

    try {
      const { encode } = await import("modern-gif");
      
      const dpr = window.devicePixelRatio || 1;
      const width = Math.floor(canvas.width / dpr);
      const height = Math.floor(canvas.height / dpr);
      
      const frames: ImageBitmap[] = [];
      const frameCount = 45;
      const frameDelay = 33;

      // Create temp canvas at display size
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = width;
      tempCanvas.height = height;
      const tempCtx = tempCanvas.getContext("2d");

      if (!tempCtx) throw new Error("Could not get canvas context");

      // Capture frames over time
      for (let i = 0; i < frameCount; i++) {
        tempCtx.drawImage(
          canvas,
          0, 0, canvas.width, canvas.height,
          0, 0, width, height
        );
        
        // Create ImageBitmap from the temp canvas
        const bitmap = await createImageBitmap(tempCanvas);
        frames.push(bitmap);

        await new Promise((resolve) => setTimeout(resolve, frameDelay));
      }

      // Encode GIF using ImageBitmap (CanvasImageSource) as data
      const output = await encode({
        width,
        height,
        frames: frames.map((bitmap) => ({
          data: bitmap,
          delay: frameDelay,
        })),
      });

      // Download
      const blob = new Blob([output], { type: "image/gif" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "timeline-animation.gif";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate GIF:", error);
    } finally {
      isRecordingRef.current = false;
      forceUpdate();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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
      const barCount = 18;
      barsRef.current = [];

      for (let i = 0; i < barCount; i++) {
        const baseY = (rect.height / barCount) * i;
        const yVariation = (Math.random() - 0.5) * 40;
        
        barsRef.current.push({
          y: baseY + yVariation,
          width: Math.random() * 400 + 200,
          height: Math.random() * 25 + 15,
          speed: (Math.random() * 0.3 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
          offset: Math.random() * rect.width * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          blur: Math.random() * 15 + 8,
        });
      }

      for (let i = 0; i < 6; i++) {
        barsRef.current.push({
          y: Math.random() * rect.height,
          width: Math.random() * 80 + 40,
          height: Math.random() * 12 + 8,
          speed: (Math.random() * 0.15 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
          offset: Math.random() * rect.width * 2,
          color: Math.random() > 0.5 
            ? "hsla(330, 68%, 58%, 0.35)" 
            : "hsla(202, 85%, 50%, 0.35)",
          blur: Math.random() * 5 + 3,
        });
      }
    };

    const drawBars = (time: number) => {
      // Track start time and freeze after 3 seconds
      if (startTimeRef.current === null) {
        startTimeRef.current = time;
      }
      
      const elapsed = time - startTimeRef.current;
      if (elapsed >= 3000) {
        isFrozenRef.current = true;
        // Don't request another frame - animation stops here
        // Canvas retains the last drawn frame automatically
        return;
      }
      
      timeRef.current = time;
      const rect = canvas.getBoundingClientRect();
      
      const bgGradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      bgGradient.addColorStop(0, "hsl(210, 20%, 98%)");
      bgGradient.addColorStop(0.5, "hsl(220, 25%, 96%)");
      bgGradient.addColorStop(1, "hsl(210, 20%, 97%)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      const bars = barsRef.current;

      bars.forEach((bar) => {
        const x = ((bar.offset + time * bar.speed) % (rect.width + bar.width * 2)) - bar.width;
        
        ctx.save();
        ctx.filter = `blur(${bar.blur}px)`;
        
        ctx.beginPath();
        const radius = bar.height / 2;
        ctx.roundRect(x, bar.y, bar.width, bar.height, radius);
        ctx.fillStyle = bar.color;
        ctx.fill();
        
        ctx.restore();
      });

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
      
      // Redraw current state on resize
      if (barsRef.current.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const bgGradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
        bgGradient.addColorStop(0, "hsl(210, 20%, 98%)");
        bgGradient.addColorStop(0.5, "hsl(220, 25%, 96%)");
        bgGradient.addColorStop(1, "hsl(210, 20%, 97%)");
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, rect.width, rect.height);
        
        barsRef.current.forEach((bar) => {
          const x = ((bar.offset + timeRef.current * bar.speed) % (rect.width + bar.width * 2)) - bar.width;
          ctx.save();
          ctx.filter = `blur(${bar.blur}px)`;
          ctx.beginPath();
          const radius = bar.height / 2;
          ctx.roundRect(x, bar.y, bar.width, bar.height, radius);
          ctx.fillStyle = bar.color;
          ctx.fill();
          ctx.restore();
        });
        
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
        
        // If not frozen, reinitialize and restart animation
        if (!isFrozenRef.current) {
          initBars();
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
          startTimeRef.current = null;
          animationRef.current = requestAnimationFrame(drawBars);
        }
      }
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
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      {showDownloadButton && (
        <Button
          onClick={downloadGif}
          disabled={isRecordingRef.current}
          className="absolute bottom-4 right-4 z-20"
          size="sm"
        >
          {isRecordingRef.current ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Recording...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download GIF
            </>
          )}
        </Button>
      )}
    </>
  );
}
