'use client';

import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    const depths: number[] = []; // Add depth for 3D effect
    let time = 0;

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
      depths[i] = Math.random(); // Random depth between 0 and 1
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      for (let i = 0; i < drops.length; i++) {
        // Calculate 3D perspective
        const depth = depths[i];
        const scale = 0.5 + depth * 0.5; // Scale based on depth (0.5 to 1.0)
        const alpha = 0.3 + depth * 0.7; // Opacity based on depth
        
        // Add wave/curve effect
        const wave = Math.sin(time + i * 0.1) * 30 * depth;
        const xOffset = i * fontSize + wave;
        
        // Adjust font size based on depth for perspective
        const adjustedFontSize = fontSize * scale;
        
        // Set color with depth-based opacity
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.font = `${adjustedFontSize}px monospace`;
        
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // Add slight rotation/skew for 3D effect
        ctx.save();
        ctx.translate(xOffset, drops[i] * fontSize);
        ctx.scale(1, 1 + depth * 0.2); // Slight vertical stretch based on depth
        ctx.fillText(text, 0, 0);
        ctx.restore();

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          depths[i] = Math.random(); // Reset depth
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-30"
      style={{ zIndex: 0 }}
    />
  );
}
