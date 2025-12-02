import { useRef, useState, useEffect } from "react";


export function ProjectileSimulator() {
  const canvasRef = useRef(null);
  const [angle, setAngle] = useState(45);
  const [speed, setSpeed] = useState(25);
  const [g, setG] = useState(9.81);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 240;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // ground
      ctx.fillStyle = '#071129';
      ctx.fillRect(0, canvas.height - 12, canvas.width, 12);

      // compute trajectory
      const rad = (angle * Math.PI) / 180;
      const vx = speed * Math.cos(rad);
      const vy = speed * Math.sin(rad);

      const flight = (2 * vy) / g; // time of flight
      const steps = 120;

      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const t = (i / steps) * flight;
        const x = vx * t;
        const y = vy * t - 0.5 * g * t * t;
        // scale to canvas
        const sx = 20 + x * 8; // scale factor
        const sy = canvas.height - 12 - y * 8;
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.strokeStyle = '#6ee7f5';
      ctx.lineWidth = 2;
      ctx.stroke();

      // projectile head
      const tx = vx * flight;
      const ty = 0;
      const hx = 20 + tx * 8;
      const hy = canvas.height - 12 - ty * 8;
      ctx.beginPath();
      ctx.arc(hx, hy, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#ffdd57';
      ctx.fill();

      // labels
      ctx.fillStyle = '#a3a3a3';
      ctx.font = '12px Inter, system-ui, sans-serif';
      ctx.fillText(`Angle: ${angle}°`, 10, 20);
      ctx.fillText(`Speed: ${speed} m/s`, 10, 36);
    }

    draw();
  }, [angle, speed, g]);

  return (
    <div>
      <canvas ref={canvasRef} className="w-full rounded-md border border-white/5" />
      <div className="mt-3 grid gap-2">
        <label className="text-sm text-slate-300">Angle: {angle}°</label>
        <input type="range" min="5" max="85" value={angle} onChange={(e) => setAngle(Number(e.target.value))} />
        <label className="text-sm text-slate-300">Speed: {speed} m/s</label>
        <input type="range" min="5" max="60" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
      </div>
    </div>
  );
}