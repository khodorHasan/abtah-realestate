"use client";
import { useState, useRef } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const NAV_LINKS = [
  { label: "من نحن", id: "about" },
  { label: "تواصل معنا", id: "contact" },
  { label: "خدماتنا", id: "services" },
  { label: "أبرز العروض", id: "listings" },
  { label: "الرئيسية", id: "hero" },
];

const CITIES = [
  "طرابلس",
  "المينا",
  "الضم والفرز",
  "الزاهرية",
  "المعرض",
  "الكورة",
];
const PROP_TYPES = ["شقة", "فيلا", "مكتب", "أرض", "محال تجارية", "عمارة"];
const PRICES = [
  "أقل من 50,000",
  "50,000 – 150,000",
  "150,000 – 300,000",
  "أكثر من 300,000",
];

type Step = "city" | "type" | "price" | null;

export default function HeroWithNav({ onPublish }: { onPublish: () => void }) {
  const [tab, setTab] = useState<"بيع" | "إيجار">("إيجار");
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  // Mobile wizard
  const [step, setStep] = useState<Step>(null);
  const [mobileCity, setMobileCity] = useState("");
  const [mobileType, setMobileType] = useState("");
  const [mobilePrice, setMobilePrice] = useState("");
  const [citySearch, setCitySearch] = useState("");

  const filteredCities = CITIES.filter((c) => c.includes(citySearch));

  const pillLabel = () => {
    const parts = [mobileCity, mobileType, mobilePrice].filter(Boolean);
    return parts.length ? parts.join("، ") : "اختر المدينة، النوع، السعر";
  };

  const openStep = (s: Step) => {
    setCitySearch("");
    setStep(s);
  };
  const closeSheet = () => setStep(null);

  const pickCity = (v: string) => {
    setMobileCity(v);
    setCitySearch("");
    setStep("type");
  };
  const pickType = (v: string) => {
    setMobileType(v);
    setStep("price");
  };
  const pickPrice = (v: string) => {
    setMobilePrice(v);
    setStep(null);
  };

  const sheetTitle = () =>
    step === "city"
      ? "اختر المدينة"
      : step === "type"
        ? "نوع العقار"
        : step === "price"
          ? "نطاق السعر (USD)"
          : "";

  return (
    <>
      <section id="hero" className="hero-section">
        {/* Backgrounds */}
        <div
          className="hero-bg hero-bg-desktop"
          style={{ backgroundImage: "url('/hero/desktop-hero-banner.jpg')" }}
        />
        <div
          className="hero-bg hero-bg-phone"
          style={{ backgroundImage: "url('/hero/phone-hero-banner.jpg')" }}
        />
        <div className="hero-overlay" />
        {/* ══ NAVBAR ══ */}
        <nav className="hero-nav">
          <div className="hero-nav-inner">
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-1">
              <img
                src="/logo-abtah.svg"
                alt="Logo"
                className="w-12 md:w-14 mt-1 md:mt-0"
              />
              <div>
                <p className="hero-logo-text mt-[2px] md:mt-0 mb-[1px]">
                  الأبطــــــح للعقـارات
                </p>
                <p className="hero-logo-sub">Abtah Real Estate</p>
              </div>
            </div>

            <div className="hero-nav-links">
              {NAV_LINKS.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="hero-nav-link">
                  {item.label}
                </a>
              ))}
            </div>

            <button onClick={onPublish} className="hero-cta-btn">
              نشر إعلان
            </button>

            <button
              className="hero-hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="فتح القائمة"
            >
              <span className="hero-hamburger-bar" />
              <span className="hero-hamburger-bar" />
              <span className="hero-hamburger-bar" />
            </button>
          </div>

          {menuOpen && (
            <div className="hero-mobile-menu">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="hero-mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button onClick={onPublish} className="hero-cta-btn w-fit">
                نشر إعلان
              </button>
            </div>
          )}
        </nav>
        {/* ══ HERO BODY ══ */}ب
        <div className="hero-body mt-8 md:mt-4">
          <div className="hero-content">
            <h1 className="hero-title">
              نساعدك تشتري، تبيع،
              <br />
              تؤجر، وتدير عقارك
            </h1>
            <p className="hero-subtitle">
              حلول عقارية متكاملة وخيارات متنوعة تناسب احتياجك وتساعدك على اتخاذ
              القرار المناسب.
            </p>

            {/* Tabs */}
            <div className="hero-tabs">
              <div className="hero-tabs-pill">
                {(["إيجار", "بيع"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`hero-tab-btn${tab === t ? " active" : ""}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* ── DESKTOP SEARCH BAR (Large Capsule matching reference) ── */}
            <div
              dir="rtl"
              className="hidden md:flex items-center justify-between bg-white rounded-full p-2.5 md:p-3 shadow-2xl max-w-4xl lg:max-w-8xl border border-gray-100 transition-all duration-300"
            >
              {/* Field 1: City */}
              <div className="flex-1 px-6 py-1.5 flex flex-col justify-center relative cursor-pointer group text-right">
                <span className="text-base font-regular text-gray-600 mb-0.5 block">
                  المدينة
                </span>
                <div className="relative flex items-center justify-between">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-transparent font-bold text-gray-900 text-base md:text-lg outline-none cursor-pointer appearance-none pl-6 pr-0 z-10"
                  >
                    <option value="">اختر المدينة</option>
                    {CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="w-5 h-5 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-[var(--blue)] transition-colors" />
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] h-10 bg-gray-200/80 flex-shrink-0 my-auto" />

              {/* Field 2: Property Type */}
              <div className="flex-1 px-6 py-1.5 flex flex-col justify-center relative cursor-pointer group text-right">
                <span className="text-base font-regular text-gray-600 mb-0.5 block">
                  نوع العقار
                </span>
                <div className="relative flex items-center justify-between">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-transparent font-bold text-gray-900 text-base md:text-lg outline-none cursor-pointer appearance-none pl-6 pr-0 z-10"
                  >
                    <option value="">جميع الأنواع</option>
                    {PROP_TYPES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="w-5 h-5 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-[var(--blue)] transition-colors" />
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] h-10 bg-gray-200/80 flex-shrink-0 my-auto" />

              {/* Field 3: Price */}
              <div className="flex-1 px-6 py-1.5 flex flex-col justify-center relative cursor-pointer group text-right">
                <span className="text-base font-regular text-gray-600 mb-0.5 block">
                  السعر
                </span>
                <div className="relative flex items-center justify-between">
                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-transparent font-bold text-gray-900 text-base md:text-lg outline-none cursor-pointer appearance-none pl-6 pr-0 z-10"
                  >
                    <option value="">بلا تحديد</option>
                    {PRICES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="w-5 h-5 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-[var(--blue)] transition-colors" />
                </div>
              </div>

              {/* Primary Search Button */}
              <button className="bg-[var(--blue)] hover:bg-blue-700 text-white font-bold text-base md:text-lg px-9 py-3.5 md:py-4 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-xl flex-shrink-0 mr-1">
                <FiSearch className="w-5 h-5 stroke-[2.5]" />
                <span>بحث</span>
              </button>
            </div>

            {/* ── MOBILE single pill ── */}
            <div className="flex md:hidden justify-center w-full px-4">
              <button
                onClick={() => openStep("city")}
                dir="rtl"
                className="flex items-center gap-3 bg-white rounded-full px-4 py-3 w-full max-w-sm shadow-xl"
              >
                {/* Blue circle search icon — LEFT side visually (start in LTR flex) */}
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1b5ebe] flex items-center justify-center ml-auto">
                  <SearchIcon color="white" size={15} />
                </span>
                {/* Label — right side text */}
                <span className="flex-1 text-right text-sm text-gray-400 truncate">
                  {pillLabel()}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MOBILE BOTTOM SHEET ══ */}
      {step && (
        <>
          {/* Backdrop — semi-transparent, hero still visible above */}
          <div
            className="fixed inset-0 z-[190] md:hidden"
            style={{ background: "rgba(0,0,0,0.15)" }}
            onClick={closeSheet}
          />

          {/* Sheet */}
          <div
            className="fixed bottom-0 left-0 right-0 z-[200] md:hidden bg-white"
            style={{
              borderRadius: "24px 24px 0 0",
              maxHeight: "70vh",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-gray-200" />
            </div>

            {/* Header */}
            <div
              className="flex items-center justify-between px-5 pb-3 pt-2"
              dir="rtl"
            >
              <p className="text-[17px] font-bold text-[#0e1f1a]">
                {sheetTitle()}
              </p>
              <button
                onClick={closeSheet}
                className="text-gray-400 text-lg w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Search input — only for city step */}
            {step === "city" && (
              <div className="px-4 pb-3" dir="rtl">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3">
                  <SearchIcon color="#9ca3af" size={16} />
                  <input
                    autoFocus
                    type="text"
                    placeholder="ابحث عن مدينة"
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-sm text-right text-gray-700 placeholder-gray-400"
                    dir="rtl"
                  />
                </div>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-4 pb-2" dir="rtl">
              {(step === "city"
                ? filteredCities
                : step === "type"
                  ? PROP_TYPES
                  : PRICES
              ).map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    step === "city"
                      ? pickCity(item)
                      : step === "type"
                        ? pickType(item)
                        : pickPrice(item)
                  }
                  className="w-full text-right px-2 py-4 text-[15px] text-[#0e1f1a] border-b border-gray-100 last:border-0 hover:text-[#1b5ebe] transition-colors block"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Bottom search button */}
            <div className="px-4 pb-7 pt-3">
              <button
                onClick={closeSheet}
                className="w-full bg-[#1b5ebe] text-white font-bold text-[16px] py-4 rounded-full flex items-center justify-center gap-2"
              >
                <SearchIcon color="white" size={17} />
                بحث
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function SearchIcon({
  color = "currentColor",
  size = 17,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
