import { Container, Heading, Section, Text } from "@/components/ui";
import { workProjects } from "@/lib/content/work";
import { ProjectCard } from "./work/ProjectCard";
import {
  ClinicPreview,
  ConsultingPreview,
  RestaurantPreview,
} from "./work/previews";

const previews = [
  <ClinicPreview key="clinic" />,
  <RestaurantPreview key="restaurant" />,
  <ConsultingPreview key="consulting" />,
];

export function SelectedWork() {
  return (
    <Section id="work" ariaLabelledBy="work-heading">
      <Container>
        <div className="max-w-xl">
          <Heading id="work-heading" size="h2">
            Selected work.
          </Heading>
          <Text tone="secondary" className="mt-4">
            Conceptual projects built to show range — real case studies coming
            soon.
          </Text>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          {workProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              preview={previews[i]}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
