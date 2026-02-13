import type { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
  className?: string;
}

export const MenuItem = ({ children, className }: MenuItemProps) => {
  return (
    <li>
      <div className={className}>{children}</div>
    </li>
  );
};
