"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Set up the canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check if the canvas is supported
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set the canvas size to fill the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create a gradient animation
    let gradientOffset = 0;

    // Function to draw the gradient
    const drawGradient = () => {
      if (!ctx) return;

      gradientOffset += 0.001; // Increase speed of the animation

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.sqrt(centerX ** 2 + centerY ** 2);

      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        maxRadius * Math.abs(Math.sin(gradientOffset)), // Animate radius
        centerX,
        centerY,
        maxRadius
      );
      gradient.addColorStop(0, `#00793d`);
      gradient.addColorStop(1, `#0F0079`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(drawGradient);
    };

    drawGradient();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

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
