import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  container?: boolean;
}

export function Section({ children, className, container = true }: SectionProps) {
  return (
    <section className={cn('py-20', className)}>
      {container ? (
        <div className="container mx-auto px-4">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
