export interface SubSection {
  title?: string;
  items: string[];
}

export interface RuleSection {
  id: string;
  title: string;
  category: 'Administrative' | 'Team Formation' | 'Gameplay' | 'Conduct' | 'Specific Divisions';
  content?: string[];
  subSections?: SubSection[];
}
