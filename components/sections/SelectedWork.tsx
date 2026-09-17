import { Container, Heading, Section, Text } from "@/components/ui";
import {
  getServerDictionary,
  getServerLocale,
} from "@/lib/i18n/getServerDictionary";
import { FeaturedProject } from "./work/FeaturedProject";
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

  // Meridian leads: clinics are the first commercial target, so it gets
  // the featured slot and the other two support it.
  const [featured, ...supporting] = dict.work.projects;
  const FeaturedPreview = previews[featured.id as keyof typeof previews];

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

        <div className="mt-14 flex flex-col gap-6">
          <FeaturedProject
            locale={locale}
            project={featured}
            viewProjectLabel={dict.work.viewProject}
            preview={<FeaturedPreview />}
            mobilePreview={<FeaturedPreview />}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {supporting.map((project) => {
              const Preview = previews[project.id as keyof typeof previews];
              return (
                <ProjectCard
                  key={project.id}
                  locale={locale}
                  project={project}
                  viewProjectLabel={dict.work.viewProject}
                  preview={<Preview />}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
