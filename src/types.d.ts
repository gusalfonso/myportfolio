import { ReactNode } from "react";

// NAVBAR PROPS
export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: any;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

export interface TechIcon {
  title: string;
  href?: string;
  svg: ReactNode;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techIcons: string[];
  links: ReadonlyArray<{ type: string; href: string }>;
}

export interface CardProp {
  skill: string;
  svg: ReactNode;
}

export interface Project {
  active: any;
  links: readonly { type: string; href: string }[];
  href: string;
  image: string;
  title: string;
  description: string;
  technologies: string[];
}
