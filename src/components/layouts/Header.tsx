"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
    <>
      <nav className="flex justify-between items-center px-8 py-5 border-b border-neutral-100 relative z-40 bg-white">
        <div className="font-mono text-xl font-bold text-neutral-900">
          Akademi<span className="text-violet-600">Koding</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition"
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
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition"
          onClick={() => setOpen(true)}
          aria-label="Buka menu"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <div className="font-mono text-lg font-bold text-neutral-900">
            Akademi<span className="text-violet-600">Koding</span>
          </div>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition"
            onClick={() => setOpen(false)}
            aria-label="Tutup menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav links */}
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
    </>
  );
}
