import { ProjectPreviewRoute } from "@/components/admin-components";

type PreviewProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PreviewProjectPage({ params }: PreviewProjectPageProps) {
  const { id } = await params;

  return <ProjectPreviewRoute id={id} />;
}

