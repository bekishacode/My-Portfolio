import { projects } from "@/data/projects";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Salesforce Developer Portfolio",
  description: "Explore my Salesforce projects including integrations with SMS, Telegram, National ID, and custom LWC components.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}