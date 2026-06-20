import { ReactNode } from "react";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedContainer({
  children,
  className = "",
  delay = 0,
}: AnimatedContainerProps) {
  return (
    <div
      className={`animate-fade-in ${className}`}
      style={{
        animationDelay: `${delay * 0.1}s`,
      }}
    >
      {children}
    </div>
  );
}
