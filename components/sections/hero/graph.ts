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
