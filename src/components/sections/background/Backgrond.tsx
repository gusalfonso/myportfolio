import { useEffect, useRef } from "react";

interface Ball {
  r: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
}

function Particles() {
  // En primer lugar creamos nuestro tablero. Usamos useRef para almacenar el elemento HTMLCanvasElement.
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    ctx.fillStyle = "#ffc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const balls: Ball[] = [];

    const numBalls = 75;

    for (let i = 0; i < numBalls; i++) {
      const r = Math.random() * 3 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const dx = (Math.random() - 0.5) * 1.5;
      const dy = (Math.random() - 0.5) * 1.5;
      balls.push({ r, x, y, dx, dy });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      balls.forEach((ball) => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(48, 69, 92, ${-0.2+ball.r / 4})`;
        ctx.fill();
      });
    };

    const moveBalls = () => {
      balls.forEach((ball) => {
        ball.x += ball.dx;
        ball.y += ball.dy;
        if (ball.x < 0 || ball.x > canvas.width) ball.dx *= -1;
        if (ball.y < 0 || ball.y > canvas.height) ball.dy *= -1;
      });
    };

    const lines = () => {
      balls.forEach((ball, index) => {
        for (let i = index + 1; i < balls.length; i++) {
          const other = balls[i];
          const distance = Math.sqrt(
            (ball.x - other.x) ** 2 + (ball.y - other.y) ** 2
          );
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(ball.x, ball.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(48, 69, 92, ${-0.2 + 1 - distance / 125})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });
    };
    const animate = () => {
      draw();
      moveBalls();
      lines();
      requestAnimationFrame(animate);
    };

    animate();
  });
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
}

export default Particles;
