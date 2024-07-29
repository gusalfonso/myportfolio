import { ReactNode } from "react";

export interface TechIcon {
  title: string;
  href: string;
  svg: ReactNode;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techIcons: TechIcon[];
}

export interface CardProp {
  skill: string;
  svg: ReactNode;
}
