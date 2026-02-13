import type { ReactNode } from "react";
import { noop } from "../utils/util";

export interface CardItemProps {
  children: ReactNode;
  className?: string;
  onCardClick?: () => void;
}

/* 
  NOTE: 
  I made it as generic component, but if you want you can make specific compoent at this level
  Also you can creat other compoent like 'CardItem' and use it instead of 'CardItem', we have that much
  flexibility here
 */
export const CardItem = ({
  className,
  children,
  onCardClick,
}: CardItemProps) => {
  return (
    <div
      className={`flex h-20 justify-between items-center px-8 bg-gray-100 border-b border-gray-300 hover:bg-gray-300 ${className}`}
      onClick={onCardClick ? onCardClick : noop}
    >
      {children}
    </div>
  );
};
