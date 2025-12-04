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
  const [sparks, setSparks] = useState<Spark[]>([]);
  const animationRef = useRef<number>(0);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  // Smooth lerp animation loop
  useEffect(() => {
    const smoothness = 0.035; // Ultra smooth cursor

    const animate = () => {
      // Lerp current position towards target
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * smoothness;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * smoothness;

      setPosition({ x: currentPosition.current.x, y: currentPosition.current.y });


      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    targetPosition.current = { x: e.clientX, y: e.clientY };
    setIsVisible(true);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
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
