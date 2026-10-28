"use client";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  type: "publish" | "request";
}

export default function Modal({ open, onClose, type }: ModalProps) {
  if (!open) return null;

  const isPublish = type === "publish";

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#fff", borderRadius: 18, padding: 36, width: "100%", maxWidth: 520,
        maxHeight: "90vh", overflowY: "auto"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "#0E1F1A" }}>
            {isPublish ? "نشر إعلان عقاري" : "طلب عقار بمواصفات خاصة"}
          </h2>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#5A6561" }}>✕</button>
        </div>

        {isPublish ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <select style={inp}>
              <option value="">نوع العقار</option>
              <option>شقة</option><option>فيلا</option><option>مكتب</option><option>أرض</option><option>محل تجاري</option>
            </select>
            <select style={inp}>
              <option value="">حالة العقار</option>
              <option>للبيع</option><option>للإيجار</option>
            </select>
            <input placeholder="المنطقة / الحي" style={inp} />
            <input placeholder="السعر المطلوب (USD)" style={inp} type="number" />
            <input placeholder="المساحة (م²)" style={inp} type="number" />
            <input placeholder="رقم التواصل" style={inp} />
            <textarea placeholder="تفاصيل إضافية..." rows={3} style={{ ...inp, resize: "vertical" }} />
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <select style={inp}>
              <option value="">نوع العقار المطلوب</option>
              <option>شقة</option><option>فيلا</option><option>مكتب</option><option>أرض</option>
            </select>
            <input placeholder="الميزانية التقريبية (USD)" style={inp} />
            <input placeholder="المنطقة المفضلة" style={inp} />
            <input placeholder="رقم الهاتف / واتساب" style={inp} />
            <textarea placeholder="ملاحظات خاصة..." rows={3} style={{ ...inp, resize: "vertical" }} />
          </div>
        )}

        <button style={{
          width: "100%", marginTop: 20, background: "#C5A265", color: "#0E1F1A",
          border: "none", borderRadius: 10, padding: "13px 0",
          fontFamily: "Cairo, sans-serif", fontWeight: 700, fontSize: 16, cursor: "pointer"
        }}>
          {isPublish ? "إرسال الإعلان" : "إرسال الطلب"}
        </button>
      </div>
    </div>
  );
}

const inp: React.CSSProperties = {
  padding: "11px 14px", borderRadius: 8, border: "1.5px solid #e8e4dc",
  fontFamily: "Cairo, sans-serif", fontSize: 14, color: "#0E1F1A", background: "#FAF8F5"
};
