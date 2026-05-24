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
        const scale = 0.4 + depth * 0.6; // Scale based on depth (0.4 to 1.0)
        const alpha = 0.4 + depth * 0.6; // Increased opacity for better visibility
        
        // Add dramatic wave/curve effect with multiple frequencies
        const wave1 = Math.sin(time + i * 0.05) * 80 * depth;
        const wave2 = Math.cos(time * 0.7 + i * 0.08) * 50 * (1 - depth);
        const yPosition = drops[i] * fontSize;
        const wave3 = Math.sin(yPosition * 0.01 + time) * 60 * depth;
        
        const xOffset = i * fontSize + wave1 + wave2 + wave3;
        
        // Adjust font size based on depth for perspective
        const adjustedFontSize = fontSize * scale;
        
        // Gradient from cyan (0, 255, 255) to purple (168, 85, 247)
        // Use position-based gradient for smooth transition
        const gradientPosition = (i / drops.length + time * 0.1) % 1;
        const r = Math.floor(0 + gradientPosition * 168);
        const g = Math.floor(255 - gradientPosition * 170);
        const b = Math.floor(255 - gradientPosition * 8);
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.font = `${adjustedFontSize}px monospace`;
        
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // Add rotation and skew for 3D effect
        ctx.save();
        ctx.translate(xOffset, yPosition);
        ctx.rotate((Math.sin(time + i * 0.1) * depth - 0.5) * 0.1); // Slight rotation
        ctx.scale(1 + Math.sin(time + i * 0.05) * 0.1 * depth, 1 + depth * 0.3); // Dynamic scaling
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
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40 dark:opacity-50"
      style={{ zIndex: 0 }}
    />
  );
}
