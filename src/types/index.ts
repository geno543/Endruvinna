import { type ReactNode } from 'react';

// Theme color definitions
export interface MarsTheme {
  chocolate: string;
  red: string;
  cream: string;
  white: string;
  blue: string;
}

// Component prop types
export interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export interface HeaderProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
}

// Page section identifiers
export type PageSection = 
  | 'intro-banner'
  | 'jezero-crater'
  | 'mission-objectives'
  | 'waste-management'
  | 'tools-equipment'
  | 'nasa-challenge';

// Navigation item type
export interface NavItem {
  label: string;
  href: string;
  section: PageSection;
}