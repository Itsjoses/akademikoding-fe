"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "Courses", href: "" },
  { label: "Fitur", href: "" },
  { label: "Tentang", href: "" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <div className="px-8 py-5 flex items-center justify-between shadow-sm border-b border-neutral-100 dark:border-zinc-800 relative z-40">
      <div className="font-mono font-bold text-xl text-neutral-900 dark:text-zinc-50">
        Akademi
        <span className="text-violet-600 dark:text-violet-400">Koding</span>
      </div>
      <div className="gap-8 hidden md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-neutral-500 dark:text-zinc-400 hover:text-neutral-900 dark:hover:text-zinc-100 transition hover:cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-3">
        <ThemeToggle />
        <span className="text-black-white-reverse">|</span>
        <Link
          href="/login"
          className="text-sm text-neutral-500 dark:text-zinc-400 hover:text-neutral-900 dark:hover:text-zinc-100 transition"
        >
          Masuk
        </Link>
        <Link
          href="/register"
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 transition"
        >
          Daftar Gratis
        </Link>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex items-center justify-center text-neutral-500 dark:text-zinc-400 w-9 h-9 hover:text-neutral-900 dark:hover:text-zinc-100 hover:bg-neutral-100 dark:hover:bg-zinc-800 rounded-lg transition hover:cursor-pointer"
      >
        <Menu size={20} />
      </button>

      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed md:hidden h-full bg-white dark:bg-zinc-900 w-72 z-50 top-0 bottom-0 right-0 flex flex-col transition-transform duration-300 ease-in-out ${open ? "translate-x-0 shadow-2xl" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 dark:border-zinc-800">
          <div className="font-bold text-lg font-mono text-neutral-900 dark:text-zinc-50">
            Akademi
            <span className="text-violet-600 dark:text-violet-400">Koding</span>
          </div>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-lg text-neutral-500 dark:text-zinc-400 hover:text-neutral-900 dark:hover:text-zinc-100 hover:bg-neutral-100 dark:hover:bg-zinc-800 transition hover:cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-2 px-6 py-6 border-t border-neutral-100 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-1">
            <ThemeToggle />
          </div>
          <Link
            href="/login"
            className="w-full text-center rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-violet-500 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
