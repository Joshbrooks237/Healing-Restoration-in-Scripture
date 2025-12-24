import { useEffect, useState, useRef } from 'react';

interface Dove {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  speed: number;
  direction: number;
}

export function FloatingDoves() {
  const [doves, setDoves] = useState<Dove[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Create doves with dynamic movement properties
    const doveArray: Dove[] = [];
    const numDoves = 12;

    for (let i = 0; i < numDoves; i++) {
      doveArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        targetX: Math.random() * 100,
        targetY: Math.random() * 100,
        size: Math.random() * 0.4 + 0.9,
        speed: Math.random() * 0.15 + 0.05, // Much slower speed between 0.05-0.2
        direction: Math.random() * Math.PI * 2, // Random direction
      });
    }

    setDoves(doveArray);

    // Animation loop
    const animate = () => {
      setDoves(prevDoves =>
        prevDoves.map(dove => {
          // Move towards target
          const dx = dove.targetX - dove.x;
          const dy = dove.targetY - dove.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 15) {
            // Reached target, pick new nearby target for drifting motion
            const driftRange = 30; // Smaller range for more local drifting
            return {
              ...dove,
              targetX: Math.max(0, Math.min(100, dove.x + (Math.random() - 0.5) * driftRange)),
              targetY: Math.max(0, Math.min(100, dove.y + (Math.random() - 0.5) * driftRange)),
            };
          }

          // Move towards target
          const moveX = (dx / distance) * dove.speed;
          const moveY = (dy / distance) * dove.speed;

          return {
            ...dove,
            x: Math.max(0, Math.min(100, dove.x + moveX)),
            y: Math.max(0, Math.min(100, dove.y + moveY)),
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {doves.map((dove) => (
        <div
          key={dove.id}
          className="absolute text-blue-300 opacity-40 select-none transition-all duration-3000 ease-out animate-gentle-float"
          style={{
            left: `${dove.x}%`,
            top: `${dove.y}%`,
            transform: `scale(${dove.size})`,
            fontSize: '2rem',
            textShadow: '0 0 5px rgba(255,255,255,0.5)',
            animationDelay: `${dove.id * 0.5}s`,
          }}
        >
          🕊️
        </div>
      ))}
    </div>
  );
}
