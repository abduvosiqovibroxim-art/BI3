"use client";

import { useEffect, useState, useCallback, useRef } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trails, setTrails] = useState<Array<{ id: number; x: number; y: number; timestamp: number }>>([]);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const lastTrailTime = useRef(0);
  const rafId = useRef<number>(0);
  const pendingPosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    pendingPosition.current = { x: e.clientX, y: e.clientY };

    // Use requestAnimationFrame for smooth updates
    if (!rafId.current) {
      rafId.current = requestAnimationFrame(() => {
        setPosition(pendingPosition.current);
        setIsVisible(true);

        // Throttle trail creation to every 50ms
        const now = Date.now();
        if (now - lastTrailTime.current > 50) {
          lastTrailTime.current = now;
          const newTrail = {
            id: now + Math.random(),
            x: pendingPosition.current.x,
            y: pendingPosition.current.y,
            timestamp: now,
          };
          setTrails((prev) => [...prev.slice(-8), newTrail]);
        }
        rafId.current = 0;
      });
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    setTrails([]);
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    setIsClicking(true);

    // Create sparks that shoot outward
    const newSparks: Spark[] = [];
    for (let i = 0; i < 6; i++) {
      newSparks.push({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
      });
    }
    setSparks((prev) => [...prev, ...newSparks]);

    // Remove sparks after animation
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.find((ns) => ns.id === s.id)));
    }, 500);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  useEffect(() => {
    // Remove trails older than 500ms
    const trailCleanup = setInterval(() => {
      const now = Date.now();
      setTrails((prev) => prev.filter((trail) => now - trail.timestamp < 500));
    }, 100);

    return () => {
      clearInterval(trailCleanup);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("clickable")
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Trail particles */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: (index + 1) / trails.length * 0.7,
            transform: `translate(-50%, -50%) scale(${0.3 + (index / trails.length) * 0.7})`,
            background: index % 3 === 0
              ? "var(--neon-blue)"
              : index % 3 === 1
              ? "var(--neon-pink)"
              : "var(--neon-purple)",
            boxShadow: index % 3 === 0
              ? "0 0 8px var(--neon-blue), 0 0 15px var(--neon-blue)"
              : index % 3 === 1
              ? "0 0 8px var(--neon-pink), 0 0 15px var(--neon-pink)"
              : "0 0 8px var(--neon-purple), 0 0 15px var(--neon-purple)",
          }}
        />
      ))}

      {/* Click sparks */}
      {sparks.map((spark, index) => {
        const angle = (index * 60) * (Math.PI / 180);
        return (
          <div
            key={spark.id}
            style={{
              position: "fixed",
              left: spark.x,
              top: spark.y,
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: index % 2 === 0 ? "var(--neon-blue)" : "var(--neon-pink)",
              boxShadow: index % 2 === 0
                ? "0 0 6px var(--neon-blue), 0 0 12px var(--neon-blue)"
                : "0 0 6px var(--neon-pink), 0 0 12px var(--neon-pink)",
              pointerEvents: "none",
              zIndex: 99999,
              animation: "spark-fly 0.4s ease-out forwards",
              transform: `translate(-50%, -50%)`,
              "--spark-x": `${Math.cos(angle) * 40}px`,
              "--spark-y": `${Math.sin(angle) * 40}px`,
            } as React.CSSProperties}
          />
        );
      })}

      {/* Inner rotating ring - pinned to cursor */}
      <div
        className={`cursor-inner-ring ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Outer rotating spiral ring - pinned to cursor */}
      <div
        className={`cursor-ring ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Center dot - pinned to cursor */}
      <div
        className={`cursor-dot ${isClicking ? "clicking" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
