import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Sparkles, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/Section';
import { PlayCard } from '@/components/PlayCard';
import { ProjectModal } from '@/components/ProjectModal';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import heroImage from '@/assets/hero-bg.jpg';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.slice(0, 3);

  const services = [
    {
      icon: Box,
      title: '3D Modeling',
      points: [
        'Product visualization',
        'Character & asset creation',
        'Architectural renders'
      ]
    },
    {
      icon: Sparkles,
      title: 'Product Animation',
      points: [
        'Motion graphics',
        'Exploded view sequences',
        'Brand commercials'
      ]
    },
    {
      icon: Palette,
      title: 'Artistic Illustrations',
      points: [
        'Concept art',
        'Digital paintings',
        'Abstract compositions'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Absolutely stunning work. The attention to detail in every render is remarkable.",
      author: "Sarah Chen",
      role: "Creative Director, TechWear"
    },
    {
      quote: "Brought our product vision to life with incredible artistry and technical skill.",
      author: "Michael Torres",
      role: "CEO, AudioTech Co."
    },
    {
      quote: "A true artist who understands both aesthetics and functionality.",
      author: "Emma Wilson",
      role: "Brand Manager, Elegance Beauty"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Hero background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              Art, 3D, and <span className="gradient-text animate-gradient">Motion</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              I make products feel alive with design, modeling, and animation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link to="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg">
            A showcase of recent projects across 3D, animation, and art
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <PlayCard
              key={project.id}
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">What I Do</h2>
          <p className="text-muted-foreground text-lg">
            Specialized services to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="glass-card p-8 hover-tilt">
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-display font-semibold mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Client Love</h2>
          <p className="text-muted-foreground text-lg">
            What people say about working together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="glass-card p-8">
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-6">
            Let's build something <span className="gradient-text">vivid</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to bring your product or idea to life with stunning 3D visuals and animation?
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
