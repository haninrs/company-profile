import Link from "next/link";
import React from "react";
interface IButtonLink {
  children: string;
  href: string;
  className?: string;
}

export default function ButtonLinks({ children, href, className }: IButtonLink) {
  return (
    <Link href={href}>
      <button className={`text-slate-50 text-xl font-bold ${className}`}>{children}</button>
    </Link>
  );
}
