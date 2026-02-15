import type { ReactNode } from "react";

export enum CardType {
  STATIC = "static",
  NAVIGABLE = "navigable",
  SWITCHABLE = "switchable",
  CALANDER_BASED = "calander based",
}

interface BaseCardProps {
  id: string;
}

export interface StaticCardProps extends BaseCardProps {
  leftIcon: ReactNode;
  text: string;
  subText: string;
  className?: string;
  arrowAriaLabel?: string;
  onNavArrowClick: (id: string) => void;
}
