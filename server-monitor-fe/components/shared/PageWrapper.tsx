"use client";

import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

export default function PageWrapper({
  children,
  title,
}: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-slate-950 animate-page-transition">
      {title && (
        <div className="animate-slide-down">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-white">
              {title}
            </h1>
          </div>
        </div>
      )}
      <div className="animate-fade-in">
        {children}
      </div>
    </div>
  );
}
