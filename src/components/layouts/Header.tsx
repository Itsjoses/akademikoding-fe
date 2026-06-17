"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-neutral-100">
      <div className="font-mono text-xl font-bold text-neutral-900">
        Akademi<span className="text-violet-600">Koding</span>
      </div>
      <div className="hidden md:flex iterms-center gap-8">
        <Link
          href=""
          className="text-sm text-neutral-500 hover:text-neutral-900 transition"
        >
          Courses
        </Link>
        <Link
          href=""
          className="text-sm text-neutral-500 hover:text-neutral-900 transition"
        >
          Fitur
        </Link>
        <Link
          href=""
          className="text-sm text-neutral-500 hover:text-neutral-900 transition"
        >
          Tentang
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href=""
          className="text-sm text-neutral-500 hover:text-neutral-900 transition"
        >
          Masuk
        </Link>
        <Link
          href=""
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 transition"
        >
          Daftar Gratis
        </Link>
      </div>
    </nav>
  );
}
