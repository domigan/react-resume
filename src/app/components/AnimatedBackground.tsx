import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // set up the canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    // check if the canvqs is supported
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // set the canvas size to fill the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let gradientOffset = 0;

    // function to draw the gradient
    const drawGradient = () => {
      if (!ctx) return;

      gradientOffset += 0.01; // controls the speed of the animtion

      // define a fixed set of colors
      const colors = ["#1e3a8a", "#10b981", "#3b82f6"]; // dark blue, green, and light blue

      // calculate the gradient stops based on the fixed colors
      const colorIndex1 = Math.floor(gradientOffset) % colors.length;
      const colorIndex2 = (colorIndex1 + 1) % colors.length;

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(
        1,
        `hsl(${(gradientOffset * 40 + 120) % 360}, 70%, 30%)`
      gradient.addColorStop(0, colors[colorIndex1]);
      gradient.addColorStop(1, colors[colorIndex2]);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(drawGradient);
    };

    drawGradient();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
}
