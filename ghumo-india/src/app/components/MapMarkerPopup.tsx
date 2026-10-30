import { Plus, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

interface MapMarkerPopupProps {
  title: string;
  description: string;
  image: string;
  category: string;
  onExplore: () => void;
  onAddToPlan: () => void;
}

export function MapMarkerPopup({
  title,
  description,
  image,
  category,
  onExplore,
  onAddToPlan,
}: MapMarkerPopupProps) {
  return (
    <div className="w-[280px] rounded-2xl overflow-hidden">
      <div className="h-[140px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)] font-bold">
              {category}
            </span>
          </div>
          <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-1">
            {title}
          </h3>
          <p className="text-[var(--text-secondary)] text-xs line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={onExplore}
            className="flex-1 text-xs h-8 border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-secondary)] hover:text-[var(--color-text-primary)] font-bold"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Explore
          </Button>
          <Button
            size="sm"
            onClick={onAddToPlan}
            className="flex-1 text-xs h-8 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-primary-foreground)]"
          >
            <Plus className="w-3 h-3 mr-1" />
            Add to Plan
          </Button>
        </div>
      </div>
    </div>
  );
}
