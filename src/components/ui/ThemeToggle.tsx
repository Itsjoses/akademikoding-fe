"use client";

import { useTheme } from "@/hooks/useTheme";
import { Monitor, Moon, Sun, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const options = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "system", icon: Monitor, label: "System" },
  { value: "dark", icon: Moon, label: "Dark" },
] as const;

const icons = { light: Sun, system: Monitor, dark: Moon };

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const Icon = icons[theme];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle theme"
        className={`flex items-center justify-center w-9 h-9 rounded-lg transition-all ${
          open
            ? "bg-neutral-100 dark:bg-zinc-700 text-neutral-900 dark:text-zinc-100"
            : "text-neutral-400 dark:text-zinc-500 hover:bg-neutral-100 dark:hover:bg-zinc-800 hover:text-neutral-700 dark:hover:text-zinc-300"
        }`}
      >
        <Icon size={17} strokeWidth={1.8} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl border border-neutral-100 dark:border-zinc-700/60 bg-white dark:bg-zinc-900 shadow-xl shadow-black/5 dark:shadow-black/30 overflow-hidden z-50">
          <div className="px-3 pt-2.5 pb-1.5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-zinc-500">
              Appearance
            </p>
          </div>
          <div className="p-1.5 flex flex-col gap-0.5">
            {options.map(({ value, icon: OptionIcon, label }) => {
              const active = theme === value;
              return (
                <button
                  key={value}
                  onClick={() => { setTheme(value); setOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-all ${
                    active
                      ? "bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400"
                      : "text-neutral-600 dark:text-zinc-400 hover:bg-neutral-50 dark:hover:bg-zinc-800 hover:text-neutral-900 dark:hover:text-zinc-100"
                  }`}
                >
                  <OptionIcon size={14} strokeWidth={1.8} />
                  <span className="flex-1 text-left font-medium">{label}</span>
                  {active && <Check size={13} strokeWidth={2.5} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
