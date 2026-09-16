"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import type { GraphEdge, GraphNode } from "./graph";

// Canvas fillStyle/font strings can't resolve var(--x) themselves, so
// design tokens are read once via getComputedStyle instead of duplicating
// literal values here.
function readCSSVar(name: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value || fallback;
}

interface HeroVisualizationProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
  className: string;
}

export function HeroVisualization({
  nodes,
  edges,
  className,
}: HeroVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = {
      node: readCSSVar("--color-text", "#f4f4f5"),
      nodeActive: readCSSVar("--color-accent", "#4f7cff"),
      label: readCSSVar("--color-text-secondary", "#9ea3ae"),
      edge: readCSSVar("--color-border-strong", "rgba(244, 244, 245, 0.16)"),
      edgeActive: readCSSVar("--color-accent", "#4f7cff"),
    };
    const monoFont = readCSSVar("--font-mono", "ui-monospace, monospace");

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let running = false;
    let rafId = 0;
    const pointer = { x: -9999, y: -9999, active: false };
    const pointerFine =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;

    function resize() {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Zero size when the container is hidden by its className's
      // responsive classes (e.g. the desktop instance below `lg`) — don't
      // burn cycles animating a canvas nobody can see.
      const shouldRun = width > 0 && height > 0 && !reducedMotion;
      if (shouldRun && !running) {
        running = true;
        rafId = requestAnimationFrame(draw);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(rafId);
      }
      if (width > 0 && height > 0 && reducedMotion) {
        draw(performance.now());
      }
    }

    function draw(time: number) {
      if (!ctx) return;
      const elapsed = time / 1000;
      ctx.clearRect(0, 0, width, height);

      const positions = new Map<
        string,
        { x: number; y: number; near: number }
      >();

      for (const node of nodes) {
        const phase = node.x * 13 + node.y * 7;
        const driftX = reducedMotion ? 0 : Math.sin(elapsed * 0.5 + phase) * 6;
        const driftY = reducedMotion ? 0 : Math.cos(elapsed * 0.4 + phase) * 6;
        const x = node.x * width + driftX;
        const y = node.y * height + driftY;

        let near = 0;
        if (pointer.active) {
          const dist = Math.hypot(pointer.x - x, pointer.y - y);
          near = Math.max(0, 1 - dist / 160);
        }

        positions.set(node.id, { x, y, near });
      }

      ctx.lineWidth = 1;
      for (const edge of edges) {
        const from = positions.get(edge.from);
        const to = positions.get(edge.to);
        if (!from || !to) continue;
        const near = Math.max(from.near, to.near);
        ctx.strokeStyle = near > 0 ? colors.edgeActive : colors.edge;
        ctx.globalAlpha = near > 0 ? 0.35 + near * 0.4 : 1;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      ctx.font = `500 11px ${monoFont}`;
      ctx.textBaseline = "middle";
      for (const node of nodes) {
        const pos = positions.get(node.id);
        if (!pos) continue;
        const radius = 4 + pos.near * 3;

        if (pos.near > 0) {
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, radius + 10 * pos.near, 0, Math.PI * 2);
          ctx.fillStyle = colors.nodeActive;
          ctx.globalAlpha = 0.15 * pos.near;
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = pos.near > 0.3 ? colors.nodeActive : colors.node;
        ctx.fill();

        ctx.fillStyle = colors.label;
        if (node.x > 0.75) {
          ctx.textAlign = "right";
          ctx.fillText(node.label, pos.x - radius - 8, pos.y);
        } else {
          ctx.textAlign = "left";
          ctx.fillText(node.label, pos.x + radius + 8, pos.y);
        }
      }

      if (running) {
        rafId = requestAnimationFrame(draw);
      }
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    function handlePointerMove(event: PointerEvent) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    }
    function handlePointerLeave() {
      pointer.active = false;
    }
    if (pointerFine) {
      container.addEventListener("pointermove", handlePointerMove);
      container.addEventListener("pointerleave", handlePointerLeave);
    }

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!running && width > 0 && height > 0 && !reducedMotion) {
            running = true;
            rafId = requestAnimationFrame(draw);
          }
        } else if (running) {
          running = false;
          cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(container);

    function handleVisibilityChange() {
      if (document.hidden) {
        if (running) {
          running = false;
          cancelAnimationFrame(rafId);
        }
      } else if (!running && width > 0 && height > 0 && !reducedMotion) {
        running = true;
        rafId = requestAnimationFrame(draw);
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (pointerFine) {
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerleave", handlePointerLeave);
      }
    };
  }, [nodes, edges, reducedMotion]);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
