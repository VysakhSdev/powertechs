export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits?: string[];
}

export interface CapabilityCategory {
  id: 'design' | 'engineering' | 'audits' | 'maintenance';
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string; // Will map to a Lucide icon name or component
  image: string; // Path to generated image
  items: ServiceItem[];
  colorTheme: {
    primary: string;
    light: string;
    border: string;
    bg: string;
    accent: string;
  };
}

export interface TimelineStep {
  phase: string;
  title: string;
  description: string;
  icon: string;
}
