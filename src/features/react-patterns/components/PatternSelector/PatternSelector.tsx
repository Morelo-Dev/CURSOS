import React from 'react';
import { 
  Layers, 
  RotateCcw, 
  Theater, 
  Palette, 
  Zap 
} from 'lucide-react';
import type { DemoType } from '../../data/reactPatternsData';

interface PatternSelectorProps {
  activeDemo: DemoType;
  onSetActiveDemo: (demo: DemoType) => void;
}

const patternIcons = {
  compound: Layers,
  renderProps: RotateCcw,
  hocs: Theater,
  slots: Palette,
  hooks: Zap
};

const patternLabels = {
  compound: 'Compound Components',
  renderProps: 'Render Props',
  hocs: 'HOCs',
  slots: 'Slot Composition',
  hooks: 'Custom Hooks'
};

export const PatternSelector: React.FC<PatternSelectorProps> = ({
  activeDemo,
  onSetActiveDemo
}) => {
  const patterns = ['compound', 'renderProps', 'hocs', 'slots', 'hooks'];

  return (
    <div className="pattern-selector">
      {patterns.map((pattern) => {
        const IconComponent = patternIcons[pattern as keyof typeof patternIcons];
        const label = patternLabels[pattern as keyof typeof patternLabels];
        
        return (
          <button 
            key={pattern}
            onClick={() => onSetActiveDemo(pattern as DemoType)}
            className={`pattern-tab ${activeDemo === pattern ? 'active' : ''}`}
          >
            <IconComponent size={16} />
            {label}
          </button>
        );
      })}
    </div>
  );
};