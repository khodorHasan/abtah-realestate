import React from "react";

export default function ActionCards({
  onPublish,
  onRequest,
}: {
  onPublish: () => void;
  onRequest: () => void;
}) {
  const cards = [
    {
      title: "هل تريد بيع أو تأجير عقارك؟",
      desc: "شارك معنا تفاصيل عقارك وسيقوم فريقنا بمراجعة طلبك والتواصل معك لإتمام الإجراءات ونشر إعلانك في قائمة عروضنا",
      btn: "انشر إعلانك",
      action: onPublish,
    },
    {
      title: "هل تبحث عن عقار بمواصفات معينة؟",
      desc: "إذا لم تجد العقار المناسب بين إعلاناتنا، أرسل لنا طلبك وسيتولى فريقنا البحث والتواصل معك حتى نجد ما يلائم احتياجاتك",
      btn: "ابحث عن عقار",
      action: onRequest,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header (Right Aligned in RTL) */}
        <div className="mb-20 text-center">
          <span className="block text-sm md:text-base text-gray-500 mb-1">
            خدماتنا العقارية
          </span>
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900">
            كيف نستطيع مساعدتك؟
          </h2>
        </div>

        {/* Action Blocks (Split Layout with Vertical Divider) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 relative">
          {/* Subtle Vertical Divider for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-300 transform -translate-x-1/2"></div>

          {cards.map((card, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-4 md:px-12 lg:px-20 ${
                i === 0 ? "md:pl-16 lg:pl-24" : "md:pr-16 lg:pr-24"
              }`}
            >
              <h3 className="text-gray-900 text-xl lg:text-[26px] font-medium mb-3 leading-tight">
                {card.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-md font-regular">
                {card.desc}
              </p>

              <button
                onClick={card.action}
                className="w-full bg-[var(--blue)] text-white py-2.5 rounded-full font-medium text-base hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                {card.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
