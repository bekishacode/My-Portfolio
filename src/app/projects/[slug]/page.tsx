import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";

// Define props type correctly for Next.js 15
type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

// Generate metadata for each project
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Handle both Promise and direct object
  const resolvedParams = params instanceof Promise ? await params : params;
  const project = projects.find(p => p.slug === resolvedParams.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Salesforce Projects`,
    description: project.shortDescription,
  };
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Main page component - fix for Next.js 15
export default async function ProjectPage({ params }: Props) {
  // In Next.js 15, params might be a Promise
  const resolvedParams = params instanceof Promise ? await params : params;
  
  // Find the project with matching slug
  const project = projects.find(p => p.slug === resolvedParams.slug);

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  // Pass the project data to the client component
  return <ProjectDetailClient project={project} />;
}