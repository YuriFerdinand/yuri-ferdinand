import { FaChevronUp } from "react-icons/fa"; 

export default function CareerPath() {
  const careers = [
    { year: "2025", title: "Web Developer", company: "Company A", desc: "Mengerjakan project Laravel & Next.js" },
    { year: "2024", title: "Frontend Intern", company: "Tech Studio", desc: "Belajar slicing UI dengan Tailwind CSS" },
    { year: "2023", title: "SMK RPL", company: "Sekolah", desc: "Mulai belajar dasar pemrograman Java & SQL" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-20 px-4 relative">
      <h2 className="text-3xl font-bold text-center mb-16">Career Path</h2>

      {/* Container Utama Timeline */}
      <div className="relative">
        
        {/* 1. Garis Tengah (The Path) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 rounded-full"></div>

        {/* 2. Panah ke Atas di paling ujung garis */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-blue-500 bg-white rounded-full">
          <FaChevronUp size={24} />
        </div>

        {/* 3. Mapping Career Items */}
        <div className="space-y-12">
          {careers.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Sisi Konten */}
              <div className="w-[45%] group">
                <div className={`p-6 bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}>
                  <span className="text-blue-600 font-bold">{item.year}</span>
                  <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                  <p className="text-sm font-medium text-gray-500">{item.company}</p>
                  <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                </div>
              </div>

              {/* Titik di Tengah Garis (Dot) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>

              {/* Sisi Kosong (Spacer) */}
              <div className="w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}