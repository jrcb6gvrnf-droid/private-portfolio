import type { Metadata } from "next";
import { defaultProjects, findProjectBySlug } from "@/lib/projects";
import { ProjectCaseStudyPage } from "@/components/public-components";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug(defaultProjects, slug);

  return {
    title: project ? project.title : "Project",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return <ProjectCaseStudyPage slug={slug} />;
}

