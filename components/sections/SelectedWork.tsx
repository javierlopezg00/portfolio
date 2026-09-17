import { Container, Heading, Section, Text } from "@/components/ui";
import {
  getServerDictionary,
  getServerLocale,
} from "@/lib/i18n/getServerDictionary";
import { ProjectCard } from "./work/ProjectCard";
import {
  ClinicPreview,
  ConsultingPreview,
  RestaurantPreview,
} from "./work/previews";

export async function SelectedWork() {
  const locale = await getServerLocale();
  const dict = await getServerDictionary();
  const { previewContent } = dict.work;
  const previews = {
    clinic: () => <ClinicPreview content={previewContent.clinic} />,
    restaurant: () => <RestaurantPreview content={previewContent.restaurant} />,
    consulting: () => <ConsultingPreview content={previewContent.consulting} />,
  };

  return (
    <Section id="work" ariaLabelledBy="work-heading">
      <Container>
        <div className="max-w-2xl">
          <Heading id="work-heading" size="h2">
            {dict.work.heading}
          </Heading>
          <Text tone="secondary" size="lg" className="mt-4">
            {dict.work.subhead}
          </Text>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          {dict.work.projects.map((project) => {
            const Preview = previews[project.id as keyof typeof previews];
            return (
              <ProjectCard
                key={project.id}
                locale={locale}
                project={project}
                viewProjectLabel={dict.work.viewProject}
                preview={<Preview />}
                mobilePreview={<Preview />}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
