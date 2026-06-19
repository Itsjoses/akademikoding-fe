import Link from "next/link";

import {
  BookOpen,
  Code2,
  Trophy,
  Users,
  Zap,
  CheckCircle2,
  Infinity,
  CalendarDays,
} from "lucide-react";
import Header from "@/components/layouts/Header";

const features = [
  {
    icon: BookOpen,
    title: "Kurikulum Terstruktur",
    desc: "Materi disusun dari dasar hingga mahir, cocok untuk pemula maupun yang ingin naik level.",
  },
  {
    icon: Code2,
    title: "Proyek Nyata",
    desc: "Setiap kursus dilengkapi proyek yang bisa langsung masuk portofolio kamu.",
  },
  {
    icon: Trophy,
    title: "Sertifikat Resmi",
    desc: "Dapatkan sertifikat penyelesaian yang bisa dibagikan ke LinkedIn atau CV.",
  },
  {
    icon: Users,
    title: "Komunitas Aktif",
    desc: "Bergabung dengan ribuan pelajar dan mentor yang siap bantu kamu berkembang.",
  },
  {
    icon: Zap,
    title: "Update Konten Rutin",
    desc: "Materi terus diperbarui mengikuti perkembangan teknologi terbaru di industri.",
  },
  {
    icon: CheckCircle2,
    title: "Quiz & Tantangan",
    desc: "Uji pemahaman kamu dengan kuis interaktif dan tantangan coding di setiap modul.",
  },
];

const annualIncludes = [
  "Akses semua kursus selama 1 tahun",
  "Sertifikat penyelesaian",
  "Akses komunitas member",
  "Update konten selama masa aktif",
  "Proyek portofolio guided",
];

const lifetimeIncludes = [
  "Akses semua kursus selamanya",
  "Sertifikat penyelesaian",
  "Akses komunitas member",
  "Update konten selamanya",
  "Proyek portofolio guided",
  "Akses materi baru di masa depan",
  "Priority support via komunitas",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-100 px-4 py-1.5 text-xs font-medium text-violet-600 mb-6">
          <Zap size={12} />
          Platform belajar coding #1 Indonesia
        </div>
        <h1 className="max-w-2xl text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight tracking-tight">
          Belajar coding lebih cepat,{" "}
          <span className="text-violet-600">lebih terarah.</span>
        </h1>
        <p className="mt-5 max-w-lg text-base text-neutral-500 leading-relaxed">
          Kurikulum terstruktur, proyek nyata, dan komunitas aktif — semua yang
          kamu butuhkan untuk jadi developer profesional.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/register"
            className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white hover:bg-violet-500 transition"
          >
            Mulai Gratis Sekarang
          </Link>
          <Link
            href="#fitur"
            className="rounded-lg border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition"
          >
            Lihat Fitur
          </Link>
        </div>
        <p className="mt-4 text-xs text-neutral-400">
          Tidak perlu kartu kredit · Gratis selamanya untuk materi dasar
        </p>
      </section>

      {/* Stats */}
      <section className="border-y border-neutral-100 py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "12.000+", label: "Pelajar aktif" },
            { value: "80+", label: "Kursus tersedia" },
            { value: "4.9/5", label: "Rating rata-rata" },
            { value: "95%", label: "Tingkat penyelesaian" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-neutral-900">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Fitur */}
      <section id="fitur" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-neutral-900">
              Semua yang kamu butuhkan
            </h2>
            <p className="mt-3 text-neutral-500 text-sm max-w-md mx-auto">
              Dirancang untuk membantu kamu belajar lebih efektif dan berkembang
              lebih cepat.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-neutral-100 p-6 hover:border-violet-100 hover:bg-violet-50/30 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 mb-4">
                  <f.icon size={18} />
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-neutral-900">
              Investasi terbaik untuk karirmu
            </h2>
            <p className="mt-3 text-neutral-500 text-sm max-w-md mx-auto">
              Pilih paket yang sesuai. Tidak ada biaya tersembunyi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Annual */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-8">
              <div className="flex items-center gap-2 mb-1">
                <CalendarDays size={16} className="text-neutral-400" />
                <span className="text-sm font-medium text-neutral-500">
                  Tahunan
                </span>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-neutral-900">
                  Rp 299K
                </span>
                <span className="text-neutral-400 text-sm mb-1">/tahun</span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">~Rp 25K per bulan</p>
              <ul className="mt-6 flex flex-col gap-3">
                {annualIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-neutral-600"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-violet-500 mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="mt-8 block w-full text-center rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition"
              >
                Pilih Tahunan
              </Link>
            </div>

            {/* Lifetime */}
            <div className="rounded-2xl bg-violet-600 p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-amber-900">
                  Best Value
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <Infinity size={16} className="text-violet-200" />
                <span className="text-sm font-medium text-violet-200">
                  Lifetime
                </span>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">Rp 799K</span>
                <span className="text-violet-200 text-sm mb-1">/selamanya</span>
              </div>
              <p className="mt-1 text-xs text-violet-300">
                Bayar sekali, akses selamanya
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {lifetimeIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-white"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-violet-200 mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="mt-8 block w-full text-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-violet-600 hover:bg-violet-50 transition"
              >
                Pilih Lifetime
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-neutral-400 mt-6">
            Semua paket dilengkapi garansi uang kembali 7 hari.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-900">
            Siap mulai perjalananmu?
          </h2>
          <p className="mt-3 text-neutral-500 text-sm">
            Ribuan developer sudah memulai dari sini. Sekarang giliran kamu.
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-8 py-3 text-sm font-medium text-white hover:bg-violet-500 transition"
          >
            Daftar Gratis Sekarang
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm font-bold text-neutral-900">
            Akademi<span className="text-violet-600">Koding</span>
          </div>
          <p className="text-xs text-neutral-400">
            © 2025 AkademiKoding. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
