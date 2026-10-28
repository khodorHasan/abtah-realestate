"use client";
import { useState } from "react";
import {
  FiChevronDown,
  FiSearch,
  FiX,
  FiMenu,
  FiMapPin,
  FiHome,
  FiDollarSign,
} from "react-icons/fi";

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

  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

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
      {/* ══ HERO SECTION ══ */}
      <section
        id="hero"
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 600,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Desktop BG */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero/desktop-hero-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        {/* Mobile BG */}
        <div
          className="block md:hidden"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero/phone-hero-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20,35,50,0.22)",
            zIndex: 1,
          }}
        />

        {/* ══ NAVBAR ══ */}
        <nav
          style={{
            position: "absolute" /* floats over the hero on ALL screen sizes */,
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            width: "100%",
          }}
        >
          {/*
           * Desktop:  fully transparent (sits on top of hero image)
           * Mobile:   white background
           */}
          <div
            className="md:bg-transparent"
            style={
              {
                /* applied only on mobile via inline; Tailwind class overrides on md+ */
              }
            }
          >
            {/* Inner row — white bg on mobile only */}
            <div
              className="bg-white md:bg-transparent"
              style={{
                maxWidth: 1280,
                margin: "0 auto",
                padding: "0 24px",
                height: 68,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                direction: "rtl",
              }}
            >
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                  src="/logo-abtah.svg"
                  alt="Logo"
                  style={{ width: 44, height: "auto" }}
                />
                <img
                  src="/typo-logo.svg"
                  alt="الأبطح للعقارات"
                  className="hidden md:block h-7 md:h-9 object-contain"
                />
                <img
                  src="/blue-typo-logo.svg"
                  alt="الأبطح للعقارات"
                  className="block md:hidden h-7 md:h-9 object-contain"
                />
              </div>

              {/* Desktop links */}
              <div
                className="hidden md:flex"
                style={{ gap: 36, alignItems: "center" }}
              >
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    style={{
                      color: "#ebebeb",
                      fontSize: 17,
                      fontWeight: 400,
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Desktop CTA */}
              <button
                onClick={onPublish}
                className="hidden md:inline-flex"
                style={{
                  background: "#1b5ebe",
                  color: "#fff",
                  border: "none",
                  borderRadius: 20,
                  padding: "10px 24px",
                  fontFamily: "ThmanyahSans, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  alignItems: "center",
                }}
              >
                نشر إعلان
              </button>

              {/* Mobile hamburger — dark icon because bg is white */}
              <button
                className="flex md:hidden"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="فتح القائمة"
                style={{
                  background: "rgba(27,94,190,0.08)",
                  border: "1.5px solid rgba(27,94,190,0.18)",
                  borderRadius: 10,
                  width: 42,
                  height: 42,
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 5,
                  padding: 0,
                }}
              >
                {menuOpen ? (
                  <FiX size={20} color="#1b5ebe" strokeWidth={2.2} />
                ) : (
                  <FiMenu size={20} color="#1b5ebe" strokeWidth={2.2} />
                )}
              </button>
            </div>

            {/* ── Mobile dropdown menu ── */}
            {menuOpen && (
              <div
                className="md:hidden"
                style={{
                  background: "rgba(255,255,255,0.97)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderTop: "1px solid rgba(27,94,190,0.08)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.13)",
                  borderRadius: "0 0 24px 24px",
                  padding: "8px 16px 20px",
                  direction: "rtl",
                }}
              >
                {NAV_LINKS.map((item, i) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      padding: "13px 12px",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#1a2a24",
                      textDecoration: "none",
                      borderBottom:
                        i < NAV_LINKS.length - 1
                          ? "1px solid rgba(0,0,0,0.05)"
                          : "none",
                      borderRadius: 12,
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(27,94,190,0.06)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {item.label}
                  </a>
                ))}

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: "rgba(0,0,0,0.07)",
                    margin: "10px 0 14px",
                  }}
                />

                <button
                  onClick={() => {
                    onPublish();
                    setMenuOpen(false);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    background: "#1b5ebe",
                    color: "#fff",
                    border: "none",
                    borderRadius: 20,
                    padding: "13px 24px",
                    fontFamily: "ThmanyahSans, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  نشر إعلان
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* ══ HERO BODY ══ */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 5,
            padding: "0 24px",
            direction: "rtl",
            marginTop: 8,
          }}
          className="md:mt-4"
        >
          <div style={{ width: "100%", maxWidth: 860, textAlign: "center" }}>
            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.3,
                marginBottom: 20,
              }}
            >
              نساعدك تشتري، تبيع،
              <br />
              تؤجر، وتدير عقارك
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: 17,
                lineHeight: 1.75,
                maxWidth: 560,
                margin: "0 auto 40px",
              }}
            >
              حلول عقارية متكاملة وخيارات متنوعة تناسب احتياجك وتساعدك على اتخاذ
              القرار المناسب.
            </p>

            {/* Tabs */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: 50,
                  padding: 4,
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {(["إيجار", "بيع"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    style={{
                      padding: "10px 40px",
                      borderRadius: 50,
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "ThmanyahSans, sans-serif",
                      fontWeight: 600,
                      fontSize: 15,
                      transition: "all 0.2s",
                      background: tab === t ? "#fff" : "transparent",
                      color: tab === t ? "#0e1f1a" : "rgba(255,255,255,0.85)",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* ── DESKTOP SEARCH BAR ── */}
            <div
              dir="rtl"
              className="hidden md:flex"
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                borderRadius: 9999,
                padding: "10px 12px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                maxWidth: "100%",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* City */}
              <div
                style={{
                  flex: 1,
                  padding: "6px 24px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "right",
                  position: "relative",
                }}
              >
                <span
                  style={{ fontSize: 13, color: "#6b7280", marginBottom: 2 }}
                >
                  المدينة
                </span>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      fontWeight: 700,
                      color: "#111827",
                      fontSize: 17,
                      outline: "none",
                      cursor: "pointer",
                      appearance: "none",
                      paddingLeft: 24,
                      border: "none",
                      fontFamily: "ThmanyahSans, sans-serif",
                    }}
                  >
                    <option value="">اختر المدينة</option>
                    {CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown
                    size={18}
                    color="#9ca3af"
                    style={{
                      position: "absolute",
                      left: 0,
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  width: 1,
                  height: 40,
                  background: "#e5e7eb",
                  flexShrink: 0,
                }}
              />

              {/* Property Type */}
              <div
                style={{
                  flex: 1,
                  padding: "6px 24px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "right",
                  position: "relative",
                }}
              >
                <span
                  style={{ fontSize: 13, color: "#6b7280", marginBottom: 2 }}
                >
                  نوع العقار
                </span>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      fontWeight: 700,
                      color: "#111827",
                      fontSize: 17,
                      outline: "none",
                      cursor: "pointer",
                      appearance: "none",
                      paddingLeft: 24,
                      border: "none",
                      fontFamily: "ThmanyahSans, sans-serif",
                    }}
                  >
                    <option value="">جميع الأنواع</option>
                    {PROP_TYPES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown
                    size={18}
                    color="#9ca3af"
                    style={{
                      position: "absolute",
                      left: 0,
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  width: 1,
                  height: 40,
                  background: "#e5e7eb",
                  flexShrink: 0,
                }}
              />

              {/* Price */}
              <div
                style={{
                  flex: 1,
                  padding: "6px 24px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "right",
                  position: "relative",
                }}
              >
                <span
                  style={{ fontSize: 13, color: "#6b7280", marginBottom: 2 }}
                >
                  السعر
                </span>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      fontWeight: 700,
                      color: "#111827",
                      fontSize: 17,
                      outline: "none",
                      cursor: "pointer",
                      appearance: "none",
                      paddingLeft: 24,
                      border: "none",
                      fontFamily: "ThmanyahSans, sans-serif",
                    }}
                  >
                    <option value="">بلا تحديد</option>
                    {PRICES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown
                    size={18}
                    color="#9ca3af"
                    style={{
                      position: "absolute",
                      left: 0,
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              {/* Search button */}
              <button
                style={{
                  background: "#1b5ebe",
                  color: "#fff",
                  border: "none",
                  borderRadius: 9999,
                  padding: "14px 36px",
                  fontFamily: "ThmanyahSans, sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexShrink: 0,
                  marginRight: 4,
                  boxShadow: "0 4px 16px rgba(27,94,190,0.35)",
                }}
              >
                <FiSearch size={18} strokeWidth={2.5} />
                <span>بحث</span>
              </button>
            </div>

            {/* ── MOBILE pill ── */}
            <div className="flex md:hidden justify-center w-full px-4">
              <button
                onClick={() => openStep("city")}
                dir="rtl"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#fff",
                  borderRadius: 9999,
                  padding: "10px 14px",
                  width: "100%",
                  maxWidth: 360,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#1b5ebe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "auto",
                  }}
                >
                  <FiSearch size={15} color="#fff" strokeWidth={2.5} />
                </span>
                <span
                  style={{
                    flex: 1,
                    textAlign: "right",
                    fontSize: 14,
                    color: "#9ca3af",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
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
          <div
            className="fixed inset-0 md:hidden"
            style={{ background: "rgba(0,0,0,0.18)", zIndex: 190 }}
            onClick={closeSheet}
          />
          <div
            className="fixed bottom-0 left-0 right-0 md:hidden bg-white"
            style={{
              borderRadius: "24px 24px 0 0",
              maxHeight: "70vh",
              display: "flex",
              flexDirection: "column",
              zIndex: 200,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "12px 0 4px",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 4,
                  borderRadius: 9999,
                  background: "#e5e7eb",
                }}
              />
            </div>

            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 20px 12px",
                direction: "rtl",
              }}
            >
              <p style={{ fontSize: 17, fontWeight: 700, color: "#0e1f1a" }}>
                {sheetTitle()}
              </p>
              <button
                onClick={closeSheet}
                style={{
                  background: "#f3f4f6",
                  border: "none",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FiX size={16} color="#6b7280" />
              </button>
            </div>

            {/* City search input */}
            {step === "city" && (
              <div style={{ padding: "0 16px 12px", direction: "rtl" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    borderRadius: 16,
                    padding: "10px 14px",
                  }}
                >
                  <FiSearch size={16} color="#9ca3af" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="ابحث عن مدينة"
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                    dir="rtl"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      fontSize: 14,
                      color: "#374151",
                      textAlign: "right",
                      fontFamily: "ThmanyahSans, sans-serif",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Items list */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "0 16px 8px",
                direction: "rtl",
              }}
            >
              {(step === "city"
                ? filteredCities
                : step === "type"
                  ? PROP_TYPES
                  : PRICES
              ).map((item, i, arr) => (
                <button
                  key={item}
                  onClick={() =>
                    step === "city"
                      ? pickCity(item)
                      : step === "type"
                        ? pickType(item)
                        : pickPrice(item)
                  }
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "right",
                    padding: "15px 8px",
                    fontSize: 15,
                    color: "#0e1f1a",
                    borderBottom:
                      i < arr.length - 1 ? "1px solid #f3f4f6" : "none",
                    background: "none",
                    border: i < arr.length - 1 ? "none" : "none",
                    borderBottomWidth: i < arr.length - 1 ? 1 : 0,
                    borderBottomStyle: "solid",
                    borderBottomColor: "#f3f4f6",
                    cursor: "pointer",
                    fontFamily: "ThmanyahSans, sans-serif",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Bottom search button */}
            <div style={{ padding: "12px 16px 32px" }}>
              <button
                onClick={closeSheet}
                style={{
                  width: "100%",
                  background: "#1b5ebe",
                  color: "#fff",
                  border: "none",
                  borderRadius: 9999,
                  padding: "15px 24px",
                  fontFamily: "ThmanyahSans, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <FiSearch size={17} strokeWidth={2.5} />
                بحث
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
