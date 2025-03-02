import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const Kelebihan = [
    "Imajinatif",
    "Kreative",
    "Gigih",
    "Pantang Menyerah",
  ];

  const Kekurangan = ["Nggak Enakan", "Pendiam"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Saya saat ini punya keinginan menjadi seorang developer dan sedang mendalaminya
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Kelebihan</h3>
                <div className="flex flex-wrap gap-2">
                  {Kelebihan.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Kekurangan</h3>
                <div className="flex flex-wrap gap-2">
                  {Kekurangan.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Sekolah Dasar =</strong> SDI Darul Mu'Minin
                  (2012 - 2018)
                </li>
                <li>
                  <strong> SMP =</strong> SMP 66 Jakarta
                  (2018 - 2019)
                </li>
                <li>
                  <strong> SMP =</strong> SMP 4 Ujung Batu
                  (2019 - 2020)
                </li>
                <li>
                  <strong> SMA =</strong> Sma Salafiyah Babussalam
                  (2020-2023)
                </li><li>
                  <strong> Universitas =</strong> UIN Suska Riau
                  (2023 - Seterusnya)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Project Manager At FlashsoftIndonesia (2024 - Present)
                  </h4>
                  <p>
                  seorang yang bertanggung jawab untuk merencanakan, mengoordinasikan, dan mengawasi pelaksanaan proyek dari awal hingga penyelesaian. Tugas utamanya meliputi:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                    Menetapkan tujuan, lingkup, dan jadwal proyek sesuai kesepakatan stakeholder.
                    </li>
                    <li>
                    Mengelola sumber daya (manusia, anggaran, waktu, dan alat) secara optimal.
                    </li>
                    <li>
                    Memantau risiko, menyelesaikan konflik, dan memastikan proyek berjalan sesuai rencana.
                    </li>
                    <li>
                    Menjadi penghubung antara tim, klien, dan pihak terkait untuk memastikan komunikasi efektif.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Manajer Marketing At FlashsoftIndonesia (2025){" "}
                  </h4>
                  <p>
                    Mengatur Tentang strategi pemasaran, mengatur media sosial, mengatur event, mengatur konten, dan mengatur strategi pemasaran lainnya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
