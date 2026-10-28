import React from "react";
import {
  HiOutlineBuildingStorefront,
  HiOutlineScale,
  HiOutlineHomeModern,
} from "react-icons/hi2";

const services = [
  {
    icon: HiOutlineBuildingStorefront,
    title: "خدمات الوساطة العقارية",
    desc: "تسهيل عمليات الشراء والبيع والتأجير من خلال وسطاء متخصصين ذوي خبرة واسعة.",
  },
  {
    icon: HiOutlineScale,
    title: "الاستشارات القانونية العقارية",
    desc: "تقديم الدعم القانوني لضمان سلامة المعاملات وتوثيق العقود الرسمية.",
  },
  {
    icon: HiOutlineHomeModern,
    title: "إدارة العقارات",
    desc: "خدمات شاملة لإدارة العقارات وصيانتها وتأجيرها لتحقيق أعلى عائد للملاك.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="block text-sm md:text-base text-gray-500 mb-1">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900">
            ما نحرص دائمًا على تقديمه لعملائنا الكرام
          </h2>
        </div>

        {/* 3 Features Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center duration-300"
              >
                {/* Vector Icon */}
                <div className="mb-6 text-gray-800">
                  <IconComponent className="w-12 h-12 stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="text-gray-900 text-xl lg:text-[26px] font-medium mb-3 leading-tight">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-md font-regular">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
