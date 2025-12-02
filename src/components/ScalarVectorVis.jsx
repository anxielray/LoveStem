import { useRef, useState, useEffect } from "react";

export default function ScalarVectorVisualizer() {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw axes
    // ctx.strokeStyle = "black";
    // ctx.lineWidth = 1;
    // ctx.beginPath();
    // ctx.moveTo(50, height - 50);
    // ctx.lineTo(width - 20, height - 50); // X-axis
    // ctx.moveTo(50, height - 50);
    // ctx.lineTo(50, 20); // Y-axis
    // ctx.stroke();

    // Draw scalar (line along X-axis, 2m)
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(200, height - 50);
    ctx.lineTo(150 + 150, height - 50); // 2m represented as 50px
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fillText("Scalar: 2 m", 100 + 125, height - 30);

    // Draw vector (30° from vertical, NE, 2m)
    // Draw scalar (line along X-axis, 2m)
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.lineWidth = 2;

    // Make dotted line → 5px dash, 5px gap
    ctx.setLineDash([5, 5]);

    ctx.moveTo(50, height - 50);
    ctx.lineTo(50 + 90, height - 50); // 2m represented as 90px
    ctx.stroke();

    // Reset dash so other lines draw normally
    ctx.setLineDash([]);

    const vectorLength = 100; // same scale as scalar
    const angleDeg = 30;
    const angleRad = (angleDeg * Math.PI) / 180;
    const dx = vectorLength * Math.cos(angleRad);
    const dy = vectorLength * Math.sin(angleRad);

    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, height - 50);
    ctx.lineTo(50 + dx, height - 50 - dy); // invert Y for canvas
    ctx.stroke();

    // Draw arrowhead
    const arrowSize = 10;
    const angle = Math.atan(-dy, dx);
    ctx.beginPath();
    ctx.moveTo(25 + dx, height - (30 + dy));
    ctx.lineTo(
      25 + dx - arrowSize * Math.cos(angle - Math.PI / 6),
      height - 30 - dy + arrowSize * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
      25 + dx - arrowSize * Math.cos(angle + Math.PI / 6),
      height - 30 - dy + arrowSize * Math.sin(angle + Math.PI / 6)
    );
    ctx.lineTo(25 + dx, height - 30 - dy);
    ctx.fill();
    ctx.fillText("Vector: 2 m, 30°", 50 + dx / 2, height - 70 - dy / 2 - 10);
  }, [running]);

  return (
    <div className="mt-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setRunning(!running)}
      >
        {running ? "Stop" : "Visualize"}
      </button>

      {running && (
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="border mt-4"
        />
      )}
    </div>
  );
}
