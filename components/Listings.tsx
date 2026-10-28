import React from "react";
import { IoLocationOutline, IoBedOutline } from "react-icons/io5";
import { BiBath, BiArea } from "react-icons/bi";

const properties = [
  {
    id: 1,
    title: "شقة مودرن للبيع",
    location: "طرابلس، الضم والفرز",
    price: "75,000",
    type: "للبيع",
    area: 140,
    rooms: 3,
    baths: 2,
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "فيلا فاخرة مع حديقة",
    location: "الكورة، العبدة",
    price: "280,000",
    type: "للبيع",
    area: 350,
    rooms: 5,
    baths: 4,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "شقة للإيجار - طابق أول",
    location: "طرابلس، الزاهرية",
    price: "600/شهر",
    type: "للإيجار",
    area: 110,
    rooms: 2,
    baths: 1,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "مكتب تجاري مميز",
    location: "طرابلس، المعرض",
    price: "45,000",
    type: "للبيع",
    area: 85,
    rooms: 4,
    baths: 2,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "أرض سكنية مميزة",
    location: "المينا، شاطئ الرمل",
    price: "120,000",
    type: "للبيع",
    area: 500,
    rooms: 0,
    baths: 0,
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "شقة للإيجار - طابق رابع",
    location: "طرابلس، البداوي",
    price: "400/شهر",
    type: "للإيجار",
    area: 90,
    rooms: 2,
    baths: 1,
    img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Listings() {
  return (
    <section id="listings" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-sm md:text-base font-bold text-[var(--blue)] mb-2 tracking-wide">
            العروض العقارية
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            نقدم لك مجموعة من أبرز عقاراتنا
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            مجموعة مختارة من أحدث وأبرز العقارات المتاحة لدينا في طرابلس والجوار
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {properties.map((p) => (
            <div key={p.id} className="group flex flex-col cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-5 bg-gray-200">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-sm font-bold shadow-md ${
                    p.type === "للبيع"
                      ? "bg-[var(--blue)] text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  {p.type}
                </div>
              </div>

              {/* Card Content Stack */}
              <div className="flex flex-col px-2 flex-grow">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[var(--blue)] transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1 text-gray-700 mb-3">
                  <IoLocationOutline className="w-5 h-5 flex-shrink-0" />
                  <span className="text-[15px] font-regular">{p.location}</span>
                </div>

                {/* Features (Area, Beds, Baths) */}
                <div className="flex flex-wrap items-center gap-5 text-gray-700 mb-6">
                  <div className="flex items-center gap-1.5">
                    <BiArea className="w-[18px] h-[18px] flex-shrink-0" />
                    <span className="text-[15px] font-regular">
                      {p.area} م²
                    </span>
                  </div>
                  {p.rooms > 0 && (
                    <div className="flex items-center gap-1.5">
                      <IoBedOutline className="w-[18px] h-[18px] flex-shrink-0" />
                      <span className="text-[15px] font-regular">
                        {p.rooms} غرف
                      </span>
                    </div>
                  )}
                  {p.baths > 0 && (
                    <div className="flex items-center gap-1.5">
                      <BiBath className="w-[18px] h-[18px] flex-shrink-0" />
                      <span className="text-[15px] font-regular">
                        {p.baths} حمام
                      </span>
                    </div>
                  )}
                </div>

                {/* Price & Action Row */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                  <div className="text-2xl font-bold text-gray-900 flex items-center gap-1.5 tracking-tight pt-3">
                    <span>{p.price}</span>
                    {!p.price.includes("شهر") && (
                      <span className="text-lg font-bold">$</span>
                    )}
                  </div>

                  {/* <a
                    href={`https://wa.me/96181270436?text=مرحباً، أود الاستفسار عن: ${p.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 bg-[var(--blue)] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    استفسر الآن
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-20">
          <button className="bg-[#f5f5f5] text-gray-900 px-10 py-3.5 rounded-full font-medium text-base hover:bg-[#ebebeb] transition-colors duration-300 ">
            المزيد من العروض
          </button>
        </div>
      </div>
    </section>
  );
}
