import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/Section';
import { PlayCard } from '@/components/PlayCard';
import { ProjectModal } from '@/components/ProjectModal';
import { projects, type ProjectCategory } from '@/data/projects';
import type { Project } from '@/data/projects';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Array<ProjectCategory | 'All'> = [
    'All',
    '3D Modeling',
    'Product Animation',
    'Artwork'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Portfolio</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of 3D modeling, product animations, and artistic work created for various 
            clients and personal exploration.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card hover:bg-card/80 text-foreground glass-card'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <PlayCard
                {...project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </Section>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
