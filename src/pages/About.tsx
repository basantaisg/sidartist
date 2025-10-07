import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/Section';
import portraitImage from '@/assets/portrait.jpg';

export default function About() {
  const milestones = [
    {
      year: '2024',
      title: 'Senior 3D Artist',
      description: 'Leading product visualization projects for tech and luxury brands'
    },
    {
      year: '2022',
      title: 'Freelance Success',
      description: 'Built portfolio with 50+ completed projects across various industries'
    },
    {
      year: '2020',
      title: 'Studio Experience',
      description: 'Joined creative studio focusing on product animation and commercials'
    },
    {
      year: '2018',
      title: 'First Steps',
      description: 'Graduated with honors in Digital Design and 3D Animation'
    }
  ];

  const skills = [
    { name: 'Blender', level: 80 },
    { name: 'Figma', level: 70 },
    { name: 'Photoshop', level: 87 },
    { name: 'Substance Painter', level: 90 },
    { name: 'Unreal Engine', level: 60 }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass-card">
              <img
                src={portraitImage}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl">
              <p className="text-4xl font-display font-bold gradient-text">5+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">About Me</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Creating <span className="gradient-text">visual experiences</span> that captivate
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a 3D artist and animator who loves turning ideas into vivid, moving stories. Whether it’s product modeling, motion design, or illustration, I focus on creating visuals that make people feel something. My goal is to help brands express their vision through art that’s both stunning and meaningful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work blends technical precision with artistic expression, aiming to create visuals that don’t just look beautiful but truly connect. I see every project as a chance to explore new ideas, challenge the limits of design, and craft something that feels alive and unforgettable.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:artist@example.com?subject=CV Request">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Journey</h2>
          <p className="text-muted-foreground text-lg">
            Key milestones in my creative career
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {milestones.map((milestone, index) => (
            <Card key={milestone.year} className="glass-card p-8 relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Skills & Tools</h2>
          <p className="text-muted-foreground text-lg">
            The technologies I work with daily
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="glass-card p-6 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-display font-bold">My Approach</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            "Every pixel matters. Every frame tells a story. I believe in the power of visual 
            storytelling to create emotional connections and lasting impressions. My work is about 
            more than just aesthetics—it's about crafting experiences that resonate."
          </p>
        </div>
      </Section>
    </div>
  );
}
