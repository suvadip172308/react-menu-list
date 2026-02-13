import type { ReactNode } from "react";

interface MenuListProp {
  children: ReactNode;
  className?: string;
}

export const MenuList = ({ children, className }: MenuListProp) => {
  return <ul className={className}>{children}</ul>;
};
