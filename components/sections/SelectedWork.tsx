import { Container, Heading, Section, Text } from "@/components/ui";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import { ProjectCard } from "./work/ProjectCard";
import {
  ClinicPreview,
  ConsultingPreview,
  RestaurantPreview,
} from "./work/previews";

export async function SelectedWork() {
  const dict = await getServerDictionary();
  const { previewContent } = dict.work;
  const previews = [
    <ClinicPreview key="clinic" content={previewContent.clinic} />,
    <RestaurantPreview key="restaurant" content={previewContent.restaurant} />,
    <ConsultingPreview key="consulting" content={previewContent.consulting} />,
  ];

  return (
    <Section id="work" ariaLabelledBy="work-heading">
      <Container>
        <div className="max-w-xl">
          <Heading id="work-heading" size="h2">
            {dict.work.heading}
          </Heading>
          <Text tone="secondary" className="mt-4">
            {dict.work.subhead}
          </Text>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          {dict.work.projects.map((project, i) => (
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
