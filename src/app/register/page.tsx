import RegisterForm from "@/components/auth/RegisterForm";
import SideAuth, { SideAuthProps } from "@/components/auth/SideAuth";

export default function RegisterPage() {
  const sideAuthData: SideAuthProps = {
    title: "Mulai perjalanan coding kamu hari ini.",
    description:
      "Daftar dan langsung akses ratusan materi belajar yang dirancang khusus untuk pemula hingga profesional.",
    listPoints: [
      "Akses materi sepenuhnya",
      "Sertifikat penyelesaian untuk setiap kursus",
      "Belajar kapan saja dan di mana saja",
    ],
  };
  return (
    <main className="min-h-screen flex">
      {/* Left panel - decorative */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-violet-600 px-16 py-12">
        <SideAuth
          title={sideAuthData.title}
          description={sideAuthData.description}
          listPoints={sideAuthData.listPoints}
        />
        {/* <div className="max-w-md text-white">
          <div className="text-4xl font-bold leading-tight mb-4">
            Mulai perjalanan coding kamu hari ini.
          </div>
          <p className="text-violet-200 text-base leading-relaxed">
            Daftar gratis dan langsung akses ratusan materi belajar yang
            dirancang khusus untuk pemula hingga profesional.
          </p>
          <div className="mt-10 flex flex-col gap-4">
            {[
              "Akses materi dasar sepenuhnya gratis",
              "Sertifikat penyelesaian untuk setiap kursus",
              "Belajar kapan saja dan di mana saja",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                  ✓
                </span>
                <span className="text-sm text-violet-100">{item}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Right panel - form */}
      <div className="flex flex-1 items-center justify-center px-8 py-12">
        <RegisterForm />
      </div>
    </main>
  );
}
