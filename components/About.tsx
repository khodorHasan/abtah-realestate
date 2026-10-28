const stats = [
  { value: "+500", label: "عميل راضٍ" },
  { value: "+100", label: "عقار مباع ومؤجر" },
  { value: "+10", label: "سنوات خبرة" },
  { value: "100%", label: "التزام وشفافية" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "80px 24px", background: "#FAF8F5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        {/* Text */}
        <div>
          <div style={{ display: "inline-block", background: "rgba(197,162,101,0.12)", color: "#C5A265", borderRadius: 6, padding: "4px 14px", fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
            من نحن
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#0E1F1A", marginBottom: 20, lineHeight: 1.4 }}>
            نعرف السوق العقاري في طرابلس أكثر من غيرنا
          </h2>
          <p style={{ color: "#5A6561", fontSize: 16, lineHeight: 1.9, marginBottom: 32 }}>
            نحن وكالة <strong style={{ color: "#0E1F1A" }}>الأبطح للعقارات</strong> المتخصصة في تقديم حلول عقارية شاملة للأفراد والمستثمرين في طرابلس وشمال لبنان. نضمن لعملائنا الشفافية المطلقة، السرعة في التنفيذ، والخبرة المحلية العميقة لحماية وتنمية استثماراتهم العقارية.
          </p>
          <div style={{ borderRight: "4px solid #C5A265", paddingRight: 20 }}>
            <p style={{ color: "#0E1F1A", fontStyle: "italic", fontWeight: 600, fontSize: 18 }}>
              "عقارك.. أولوية اهتمامنا"
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: i % 2 === 0 ? "#0E1F1A" : "#fff",
              borderRadius: 14, padding: 28, textAlign: "center",
              border: i % 2 !== 0 ? "2px solid #ede9e1" : "none"
            }}>
              <div style={{ fontSize: "2.4rem", fontWeight: 900, color: "#C5A265", marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 14, color: i % 2 === 0 ? "#8BA89E" : "#5A6561", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 768px) { #about > div { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
