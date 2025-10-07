import { Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface PlayCardProps {
  title: string;
  description: string;
  cover: string;
  tags: string[];
  onClick: () => void;
}

export function PlayCard({ title, description, cover, tags, onClick }: PlayCardProps) {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer glass-card glass-card-hover overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <Play className="h-8 w-8 text-primary-foreground fill-current" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
