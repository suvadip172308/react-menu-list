import type { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

export interface CardItemStaticProps {
  /** Text rendered in the middle of the card */
  id: string;
  text: string;
  subText: string;
  /** Icon rendered to the left of the text (configurable by consumers) */
  leftIcon: ReactNode;
  /** Called when the arrow on the right is clicked */
  onNavArrowClick?: (id: string) => void;
  /** Optional class name that will be added to the CardItem wrapper */
  className?: string;
  /** Optional aria-label override for the arrow button */
  arrowAriaLabel?: string;
}

export const CardItemNavigable = ({
  id,
  text,
  subText,
  leftIcon,
  onNavArrowClick,
  className,
  arrowAriaLabel = "navigate",
}: CardItemStaticProps) => {
  return (
    <div className={`flex w-full ${className ?? ""}`}>
      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="mr-10">{leftIcon}</div>
          <div className="flex flex-col items-start">
            <span className="text-md font-bold text-gray-900">{text}</span>
            <span className="text-sm text-gray-900">{subText}</span>
          </div>
        </div>
        <button
          type="button"
          aria-label={arrowAriaLabel}
          onClick={(event) => {
            event.stopPropagation();
            onNavArrowClick?.(id);
          }}
          className="flex items-center justify-center rounded-full p-1 text-gray-500 hover:text-gray-800"
        >
          <FiArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
