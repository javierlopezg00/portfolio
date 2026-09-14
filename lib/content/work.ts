export interface WorkProject {
  id: string;
  name: string;
  vertical: string;
  description: string;
  tags: string[];
}

// Conceptual projects, not real clients — each is labeled as such in the
// UI. Names are deliberately generic/invented, never implying a real
// business. Real case studies replace/supplement these post-launch.
export const workProjects: WorkProject[] = [
  {
    id: "clinic",
    name: "Meridian Health",
    vertical: "Medical Clinic",
    description:
      "A booking-first website that gets patients from search to a scheduled appointment in three steps.",
    tags: ["Website", "Online Booking", "Responsive Design"],
  },
  {
    id: "restaurant",
    name: "Ember & Oak",
    vertical: "Restaurant",
    description:
      "A reservation-driven site built around the menu and the room — fast, visual, and easy to update.",
    tags: ["Website", "Reservations", "CMS"],
  },
  {
    id: "consulting",
    name: "Kestrel Partners",
    vertical: "Professional Services",
    description:
      "A corporate site that positions the firm for enterprise clients, with a lead-qualifying contact flow.",
    tags: ["Website", "Lead Capture", "CMS"],
  },
];
