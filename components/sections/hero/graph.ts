export interface GraphNode {
  id: string;
  label: string;
  /** Normalized [0,1] position within the visualization's bounding box. */
  x: number;
  y: number;
}

export interface GraphEdge {
  from: string;
  to: string;
}

// A loose client -> interface -> API -> {capabilities} system diagram,
// positioned right-of-center so it sits behind/beside the hero copy rather
// than under it. Reused (and evolved) by the Phase 3 scroll sequence.
export const heroNodes: GraphNode[] = [
  { id: "client", label: "CLIENT", x: 0.44, y: 0.22 },
  { id: "interface", label: "INTERFACE", x: 0.56, y: 0.46 },
  { id: "api", label: "API", x: 0.72, y: 0.34 },
  { id: "database", label: "DATABASE", x: 0.88, y: 0.14 },
  { id: "payments", label: "PAYMENTS", x: 0.9, y: 0.46 },
  { id: "automation", label: "AUTOMATION", x: 0.82, y: 0.7 },
  { id: "analytics", label: "ANALYTICS", x: 0.62, y: 0.85 },
];

export const heroEdges: GraphEdge[] = [
  { from: "client", to: "interface" },
  { from: "interface", to: "api" },
  { from: "api", to: "database" },
  { from: "api", to: "payments" },
  { from: "api", to: "automation" },
  { from: "api", to: "analytics" },
];

// Below `lg` the hero copy stacks full-width instead of sharing the row
// with the graph, so the desktop layout (nodes bunched right-of-center in
// a wide, short box) doesn't translate directly to a narrow, tall one.
// Hero.tsx adds extra bottom padding on mobile specifically so this has a
// dedicated open zone below the copy (measured: the CTA row ends at ~64%
// of the section height) — these nodes stay entirely within that zone
// (0.70–0.97) so the graph never sits behind the text.
export const heroNodesMobile: GraphNode[] = [
  { id: "client", label: "CLIENT", x: 0.14, y: 0.74 },
  { id: "interface", label: "INTERFACE", x: 0.4, y: 0.85 },
  { id: "api", label: "API", x: 0.66, y: 0.73 },
  { id: "database", label: "DATABASE", x: 0.86, y: 0.7 },
  { id: "payments", label: "PAYMENTS", x: 0.86, y: 0.85 },
  { id: "automation", label: "AUTOMATION", x: 0.6, y: 0.95 },
  { id: "analytics", label: "ANALYTICS", x: 0.22, y: 0.96 },
];
