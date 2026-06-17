"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
  }

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <Link href="/" className="font-mono text-xl font-bold text-neutral-900">
          Akademi<span className="text-violet-600">Koding</span>
        </Link>
        <h1 className="mt-6 text-2xl font-semibold text-neutral-900">
          Selamat datang kembali
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Masuk ke akun kamu untuk melanjutkan belajar.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-neutral-700">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="kamu@email.com"
            className="w-full rounded-lg border border-neutral-200 px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-violet-500 focus:ring-3 focus:ring-violet-100 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-neutral-700">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-violet-600 hover:text-violet-700 transition"
            >
              Lupa password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="••••••••"
              className="w-full rounded-lg border border-neutral-200 px-3.5 py-2.5 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-violet-500 focus:ring-3 focus:ring-violet-100 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex items-center justify-center gap-2 w-full rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <LogIn size={16} />
          )}
          {loading ? "Memproses..." : "Masuk"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-500">
        Belum punya akun?{" "}
        <Link
          href="/register"
          className="font-medium text-violet-600 hover:text-violet-700 transition"
        >
          Daftar gratis
        </Link>
      </p>
    </div>
  );
}
