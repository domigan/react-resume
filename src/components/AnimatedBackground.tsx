"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground({
  fillParent = false,
  invert = false,
}: {
  fillParent?: boolean;
  invert?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Set up the canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check if the canvas is supported
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set the canvas size
    const setCanvasSize = () => {
      if (fillParent) {
        const parent = canvas.parentElement;
        if (parent) {
          canvas.width = parent.clientWidth;
          canvas.height = parent.clientHeight;
        }
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setCanvasSize();

    // Create a gradient animation
    let gradientOffset = 0;

    // Function to draw the gradient
    const drawGradient = () => {
      if (!ctx) return;

      gradientOffset += 0.005; // Increase speed of the animation

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

      const color1 = invert ? "#000000" : "#00793d";
      const color2 = invert ? "#00793d" : "#00ff7f";
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(drawGradient);
    };

    drawGradient();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fillParent, invert]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: fillParent ? "absolute" : "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: fillParent ? "100%" : undefined,
        height: fillParent ? "100%" : undefined,
      }}
    />
  );
}
