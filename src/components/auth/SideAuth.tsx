import React from "react";

export type SideAuthProps = {
  title: string;
  description: string;
  listPoints: string[];
};

export default function SideAuth({ title, description, listPoints }: SideAuthProps) {
  return (
    <div className="max-w-md text-white">
      <div className="text-4xl font-bold leading-tight mb-4">{title}</div>
      <p className="text-violet-200 text-base leading-relaxed">{description}</p>
      <div className="mt-10 flex flex-col gap-4">
        {listPoints.map((item) => (
          <div key={item} className="flex gap-3 items-center">
            <span className="flex items-center justify-center shrink-0 mt-0.5 text-xs w-5 h-5 rounded-full bg-white/20 ">
              ✓
            </span>
            <span className="text-sm text-violet-100">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
