"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Courses", href: "" },
  { label: "Fitur", href: "" },
  { label: "Tentang", href: "" },
];

export default function Header() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <div className="px-8 py-5 flex items-center justify-between border-b border-neutral-100 relative z-40">
      <div className="font-mono font-bold text-xl text-neutral-900">
        Akademi<span className="text-violet-600">Koding</span>
      </div>
      <div className="gap-8 hidden md:flex ">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-neutral-500 hover:text-neutral-900 transition hover:cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-3">
        <Link
          href="/login"
          className="text-sm text-neutral-500 hover:text-neutral-900 transition"
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
        className="md:hidden flex items-center justify-center text-neutral-500 w-9 h-9 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition hover:cursor-pointer"
      >
        <Menu size={20} />
      </button>

      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/40  backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed md:hidden h-full bg-white w-72 z-50 top-0 bottom-0 right-0 flex flex-col  transition-transform duration-300 ease-in-out ${open ? "translate-x-0 shadow-2xl" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <div className="font-bold text-lg font-mono">
            Akademi<span className="text-violet-600">Koding</span>
          </div>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition hover:cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col px-3 py-4 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Auth buttons */}
        <div className="flex flex-col gap-2 px-6 py-6 border-t border-neutral-100">
          <Link
            href="/login"
            className="w-full text-center rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="w-full text-center rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-violet-500 transition"
          >
            Daftar Gratis
          </Link>
        </div>
      </div>
    </div>
  );
}
