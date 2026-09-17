"use client";

import { useEffect, useRef, useState } from "react";
import { Badge, Button } from "@/components/ui";
import { cn } from "@/lib/cn";
import { gsap } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";

interface FlowNode {
  id: string;
  label: string;
  x: number;
  y: number;
}

const NODES: FlowNode[] = [
  { id: "website", label: "WEBSITE", x: 0.5, y: 0.08 },
  { id: "api", label: "API", x: 0.5, y: 0.36 },
  { id: "crm", label: "CRM", x: 0.2, y: 0.64 },
  { id: "payments", label: "PAYMENTS", x: 0.8, y: 0.64 },
  { id: "database", label: "DATABASE", x: 0.5, y: 0.92 },
];

const EDGES: [string, string][] = [
  ["website", "api"],
  ["api", "crm"],
  ["api", "payments"],
  ["crm", "database"],
  ["payments", "database"],
];

const WIDTH = 320;
const HEIGHT = 320;

function nodePos(id: string) {
  const node = NODES.find((n) => n.id === id)!;
  return { x: node.x * WIDTH, y: node.y * HEIGHT };
}

export function IntegrationFlowDemo() {
  const dict = getDictionary(useLocale());
  const dotARef = useRef<SVGCircleElement>(null);
  const dotBRef = useRef<SVGCircleElement>(null);
  const timelineRef = useRef<ReturnType<typeof gsap.timeline> | null>(null);
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<"idle" | "running" | "success">("idle");
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      timelineRef.current?.kill();
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
    };
  }, []);

  function trigger() {
    if (status === "running") return;
    const dotA = dotARef.current;
    const dotB = dotBRef.current;
    if (!dotA || !dotB) return;

    if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
    setStatus("running");

    const duration = reducedMotion ? 0.01 : 0.5;
    const pause = reducedMotion ? 0 : 0.3;
    const ease = "power2.inOut";

    const website = nodePos("website");
    const api = nodePos("api");
    const crm = nodePos("crm");
    const payments = nodePos("payments");
    const database = nodePos("database");

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveNodes(new Set());
        setStatus("success");
        successTimeoutRef.current = setTimeout(
          () => setStatus("idle"),
          reducedMotion ? 1200 : 1600,
        );
      },
    });
    timelineRef.current = tl;

    tl.set(dotA, { attr: { cx: website.x, cy: website.y }, opacity: 1 });
    tl.call(() => setActiveNodes(new Set(["website"])));
    tl.to(dotA, { attr: { cx: api.x, cy: api.y }, duration, ease });
    tl.call(() => setActiveNodes(new Set(["api"])));
    tl.set(dotA, { opacity: 0 });
    tl.set([dotA, dotB], { attr: { cx: api.x, cy: api.y }, opacity: 1 });
    tl.to(dotA, { attr: { cx: crm.x, cy: crm.y }, duration, ease }, "<");
    tl.to(
      dotB,
      { attr: { cx: payments.x, cy: payments.y }, duration, ease },
      "<",
    );
    tl.call(() => setActiveNodes(new Set(["crm", "payments"])));
    tl.to(dotA, {
      attr: { cx: database.x, cy: database.y },
      duration,
      ease,
      delay: pause,
    });
    tl.to(
      dotB,
      { attr: { cx: database.x, cy: database.y }, duration, ease },
      "<",
    );
    tl.call(() => {
      setActiveNodes(new Set(["database"]));
      gsap.set(dotB, { opacity: 0 });
    });
    tl.to(dotA, {
      attr: { cx: api.x, cy: api.y },
      duration,
      ease,
      delay: pause,
    });
    tl.call(() => setActiveNodes(new Set(["api"])));
    tl.to(dotA, { attr: { cx: website.x, cy: website.y }, duration, ease });
    tl.call(() => setActiveNodes(new Set(["website"])));
    tl.to(dotA, { opacity: 0, duration: 0.2, delay: pause });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Badge>{dict.lab.demoBadge}</Badge>
        <div aria-live="polite" className="flex items-center gap-3">
          {status === "success" && (
            <span className="text-demo text-body-sm flex items-center gap-1.5">
              <CheckIcon />
              {dict.lab.integration.success}
            </span>
          )}
          <Button size="sm" onClick={trigger} disabled={status === "running"}>
            {status === "running"
              ? dict.lab.integration.running
              : dict.lab.integration.trigger}
          </Button>
        </div>
      </div>

      <div className="border-border bg-surface flex justify-center rounded-md border p-6">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full max-w-xs"
          role="img"
          aria-label={dict.lab.integration.diagramAriaLabel}
        >
          {EDGES.map(([from, to]) => {
            const a = nodePos(from);
            const b = nodePos(to);
            return (
              <line
                key={`${from}-${to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                className="stroke-border-strong"
                strokeWidth={1.5}
              />
            );
          })}

          {NODES.map((node) => {
            const pos = nodePos(node.id);
            const active = activeNodes.has(node.id);
            const labelBelow = node.y < 0.85;
            return (
              <g key={node.id}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={active ? 22 : 18}
                  className={cn(
                    "duration-fast transition-[r] ease-out",
                    active ? "fill-demo/15" : "fill-transparent",
                  )}
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={7}
                  strokeWidth={2}
                  className={cn(
                    "duration-fast transition-colors ease-out",
                    active
                      ? "fill-demo stroke-demo"
                      : "fill-surface stroke-border-strong",
                  )}
                />
                <text
                  x={pos.x}
                  y={labelBelow ? pos.y + 30 : pos.y - 24}
                  textAnchor="middle"
                  className={cn(
                    "duration-fast text-[9px] font-medium tracking-wide transition-colors ease-out",
                    active ? "fill-text" : "fill-text-secondary",
                  )}
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          <circle ref={dotARef} r={5} className="fill-demo opacity-0" />
          <circle ref={dotBRef} r={5} className="fill-demo opacity-0" />
        </svg>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={16}
      height={16}
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
