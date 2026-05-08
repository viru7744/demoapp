import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@0;1&family=Poppins:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --mint: #d4f5ec;
    --teal: #0e9e74;
    --teal-light: #e1f5ee;
    --navy: #0d2a3b;
    --cream: #fdfaf5;
    --warm: #f5f0e8;
    --text: #1a2e3b;
    --muted: #5a7080;
  }
  body { font-family: 'Poppins', 'Noto Sans Devanagari', sans-serif; background: var(--cream); color: var(--text); overflow-x: hidden; }

  .ss-nav { position: sticky; top: 0; z-index: 100; background: rgba(253,250,245,0.94); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(14,158,116,0.15); display: flex; align-items: center; justify-content: space-between; padding: 0 5%; height: 70px; }
  .ss-logo { display: flex; align-items: center; gap: 10px; }
  .ss-logo-icon { width: 42px; height: 42px; background: var(--teal); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; }
  .ss-logo-text { font-family: 'Tiro Devanagari Hindi', serif; font-size: 19px; color: var(--navy); line-height: 1.2; }
  .ss-logo-text span { color: var(--teal); font-size: 13px; display: block; font-family: 'Poppins', sans-serif; font-weight: 500; }
  .ss-navlinks { display: flex; gap: 28px; list-style: none; }
  .ss-navlinks a { text-decoration: none; font-size: 14px; font-weight: 500; color: var(--muted); transition: color .2s; }
  .ss-navlinks a:hover { color: var(--teal); }
  .ss-nav-cta { background: var(--teal); color: white; border: none; padding: 10px 22px; border-radius: 50px; font-size: 14px; font-weight: 600; cursor: pointer; transition: transform .2s, box-shadow .2s; font-family: 'Poppins', sans-serif; }
  .ss-nav-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(14,158,116,0.35); }

  .ss-hero { padding: 80px 5% 60px; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; max-width: 1200px; margin: 0 auto; }
  .ss-badge { display: inline-flex; align-items: center; gap: 8px; background: var(--teal-light); color: var(--teal); font-size: 13px; font-weight: 600; padding: 6px 14px; border-radius: 50px; margin-bottom: 20px; border: 1px solid rgba(14,158,116,0.25); }
  .ss-h1 { font-family: 'Tiro Devanagari Hindi', serif; font-size: clamp(32px, 3.5vw, 52px); line-height: 1.2; color: var(--navy); margin-bottom: 18px; }
  .ss-h1 em { color: var(--teal); font-style: italic; }
  .ss-hero-desc { font-size: 15px; color: var(--muted); line-height: 1.8; margin-bottom: 32px; max-width: 440px; }
  .ss-btns { display: flex; gap: 14px; flex-wrap: wrap; }
  .ss-btn-primary { background: var(--navy); color: white; padding: 13px 26px; border-radius: 50px; border: none; font-size: 15px; font-weight: 600; cursor: pointer; font-family: 'Poppins', sans-serif; transition: background .2s, transform .2s; }
  .ss-btn-primary:hover { background: var(--teal); transform: translateY(-2px); }
  .ss-btn-secondary { background: transparent; color: var(--navy); padding: 13px 26px; border-radius: 50px; border: 1.5px solid rgba(13,42,59,0.2); font-size: 15px; font-weight: 500; cursor: pointer; font-family: 'Poppins', sans-serif; transition: border-color .2s, color .2s; }
  .ss-btn-secondary:hover { border-color: var(--teal); color: var(--teal); }
  .ss-stats { display: flex; gap: 32px; margin-top: 44px; padding-top: 32px; border-top: 1px solid rgba(13,42,59,0.1); }
  .ss-stat-num { font-family: 'Tiro Devanagari Hindi', serif; font-size: 28px; color: var(--navy); }
  .ss-stat-label { font-size: 12px; color: var(--muted); margin-top: 2px; }

  .ss-hero-visual { position: relative; display: flex; justify-content: center; align-items: center; }
  .ss-circle { width: 400px; height: 400px; background: linear-gradient(135deg, #e1f5ee 0%, #d4f5ec 100%); border-radius: 60% 40% 55% 45% / 45% 55% 45% 55%; display: flex; align-items: center; justify-content: center; font-size: 160px; animation: ssMorph 8s ease-in-out infinite; }
  @keyframes ssMorph { 0%,100%{border-radius:60% 40% 55% 45%/45% 55% 45% 55%} 25%{border-radius:45% 55% 40% 60%/55% 45% 55% 45%} 50%{border-radius:50% 50% 45% 55%/45% 55% 50% 50%} 75%{border-radius:55% 45% 55% 45%/40% 60% 40% 60%} }
  .ss-float { position: absolute; background: white; border-radius: 16px; padding: 13px 17px; box-shadow: 0 8px 32px rgba(13,42,59,0.12); font-size: 13px; font-weight: 500; }
  .ss-float.tl { top: 20px; left: -20px; }
  .ss-float.br { bottom: 30px; right: -10px; }
  .ss-float-icon { font-size: 20px; margin-bottom: 3px; }
  .ss-float-label { color: var(--muted); font-size: 11px; font-weight: 400; }
  .ss-float-val { color: var(--navy); font-size: 14px; font-weight: 600; }
  .ss-stars { color: #f59e0b; font-size: 12px; margin-bottom: 3px; }

  .ss-services { background: var(--navy); padding: 80px 5%; }
  .ss-section-tag { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--teal); display: block; text-align: center; margin-bottom: 12px; }
  .ss-section-title { font-family: 'Tiro Devanagari Hindi', serif; font-size: clamp(26px, 3vw, 40px); color: white; text-align: center; margin-bottom: 10px; }
  .ss-section-sub { text-align: center; color: rgba(255,255,255,0.5); font-size: 14px; margin-bottom: 52px; }
  .ss-services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 18px; max-width: 1100px; margin: 0 auto; }
  .ss-scard { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 28px 22px; transition: background .25s, transform .25s; cursor: default; }
  .ss-scard:hover { background: rgba(14,158,116,0.15); border-color: rgba(14,158,116,0.4); transform: translateY(-4px); }
  .ss-scard-emoji { font-size: 34px; margin-bottom: 16px; display: block; }
  .ss-scard-title { font-weight: 600; font-size: 16px; color: white; margin-bottom: 8px; }
  .ss-scard-desc { font-size: 12px; color: rgba(255,255,255,0.5); line-height: 1.6; }
  .ss-scard-link { margin-top: 18px; font-size: 12px; font-weight: 600; color: var(--teal); display: inline-flex; align-items: center; gap: 4px; }

  .ss-why { padding: 80px 5%; background: var(--cream); }
  .ss-why-inner { max-width: 1200px; margin: 0 auto; }
  .ss-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-top: 52px; }
  .ss-why-visual { background: var(--warm); border-radius: 28px; padding: 36px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .ss-why-feat { background: white; border-radius: 16px; padding: 22px; }
  .ss-why-feat.span2 { grid-column: span 2; background: var(--teal); }
  .ss-why-feat-icon { font-size: 26px; margin-bottom: 10px; display: block; }
  .ss-why-feat-title { font-weight: 600; font-size: 14px; color: var(--navy); margin-bottom: 5px; }
  .ss-why-feat.span2 .ss-why-feat-title { color: white; }
  .ss-why-feat-desc { font-size: 12px; color: var(--muted); line-height: 1.5; }
  .ss-why-feat.span2 .ss-why-feat-desc { color: rgba(255,255,255,0.75); }
  .ss-why-list { list-style: none; display: flex; flex-direction: column; gap: 18px; }
  .ss-why-item { display: flex; gap: 14px; align-items: flex-start; }
  .ss-why-check { width: 32px; height: 32px; border-radius: 50%; background: var(--teal-light); display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; margin-top: 2px; }
  .ss-why-item-title { font-weight: 600; font-size: 14px; color: var(--navy); margin-bottom: 3px; }
  .ss-why-item-desc { font-size: 12px; color: var(--muted); line-height: 1.5; }

  .ss-doctor { padding: 80px 5%; background: var(--warm); }
  .ss-doctor-card { max-width: 700px; margin: 52px auto 0; background: white; border-radius: 28px; overflow: hidden; display: grid; grid-template-columns: 240px 1fr; box-shadow: 0 20px 60px rgba(13,42,59,0.1); }
  .ss-doc-left { background: linear-gradient(160deg, var(--teal-light), var(--mint)); display: flex; align-items: center; justify-content: center; font-size: 100px; padding: 40px; }
  .ss-doc-right { padding: 36px 32px; }
  .ss-doc-badge { display: inline-block; background: var(--teal-light); color: var(--teal); font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 50px; margin-bottom: 14px; }
  .ss-doc-name { font-family: 'Tiro Devanagari Hindi', serif; font-size: 26px; color: var(--navy); margin-bottom: 4px; }
  .ss-doc-qual { font-size: 13px; color: var(--teal); font-weight: 600; margin-bottom: 16px; }
  .ss-doc-desc { font-size: 13px; color: var(--muted); line-height: 1.7; margin-bottom: 22px; }
  .ss-doc-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .ss-doc-tag { background: var(--warm); color: var(--navy); font-size: 12px; font-weight: 500; padding: 5px 12px; border-radius: 50px; border: 1px solid rgba(13,42,59,0.1); }

  .ss-appt { background: var(--teal); padding: 80px 5%; text-align: center; }
  .ss-appt-title { font-family: 'Tiro Devanagari Hindi', serif; font-size: clamp(26px, 3.5vw, 44px); color: white; margin-bottom: 14px; }
  .ss-appt-sub { color: rgba(255,255,255,0.75); font-size: 15px; margin-bottom: 40px; max-width: 480px; margin-left: auto; margin-right: auto; }
  .ss-appt-form { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; max-width: 640px; margin: 0 auto; }
  .ss-appt-form input, .ss-appt-form select { flex: 1; min-width: 150px; padding: 13px 18px; border-radius: 50px; border: 2px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.15); color: white; font-size: 14px; font-family: 'Poppins', sans-serif; outline: none; transition: border-color .2s; }
  .ss-appt-form input::placeholder { color: rgba(255,255,255,0.65); }
  .ss-appt-form input:focus, .ss-appt-form select:focus { border-color: white; }
  .ss-appt-form select option { color: var(--text); background: white; }
  .ss-btn-white { background: white; color: var(--teal); padding: 13px 26px; border-radius: 50px; border: none; font-size: 15px; font-weight: 700; cursor: pointer; font-family: 'Poppins', sans-serif; transition: transform .2s, box-shadow .2s; white-space: nowrap; }
  .ss-btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }

  .ss-testimonials { padding: 80px 5%; background: var(--cream); }
  .ss-test-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 22px; max-width: 1100px; margin: 52px auto 0; }
  .ss-tcard { background: white; border-radius: 20px; padding: 26px 24px; border: 1px solid rgba(13,42,59,0.07); }
  .ss-tcard-stars { color: #f59e0b; font-size: 14px; margin-bottom: 12px; }
  .ss-tcard-quote { font-size: 14px; line-height: 1.75; color: var(--text); margin-bottom: 20px; font-style: italic; }
  .ss-tcard-author { display: flex; align-items: center; gap: 12px; }
  .ss-tcard-avatar { width: 38px; height: 38px; border-radius: 50%; background: var(--teal-light); display: flex; align-items: center; justify-content: center; font-size: 17px; }
  .ss-tcard-name { font-weight: 600; font-size: 13px; color: var(--navy); }
  .ss-tcard-meta { font-size: 11px; color: var(--muted); }

  footer { background: var(--navy); padding: 56px 5% 32px; color: rgba(255,255,255,0.5); }
  .ss-footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 44px; }
  .ss-footer-logo { font-family: 'Tiro Devanagari Hindi', serif; font-size: 22px; color: white; margin-bottom: 10px; }
  .ss-footer-logo span { color: var(--teal); }
  .ss-footer-tagline { font-size: 12px; line-height: 1.7; max-width: 210px; }
  .ss-footer-col-title { font-size: 12px; font-weight: 600; color: white; margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.08em; }
  .ss-footer-links { list-style: none; display: flex; flex-direction: column; gap: 9px; }
  .ss-footer-links a { text-decoration: none; color: rgba(255,255,255,0.5); font-size: 13px; transition: color .2s; }
  .ss-footer-links a:hover { color: var(--teal); }
  .ss-footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 22px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; }
  .ss-social-links { display: flex; gap: 10px; }
  .ss-social-btn { width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 14px; cursor: pointer; transition: background .2s; border: none; color: white; }
  .ss-social-btn:hover { background: var(--teal); }

  .ss-overlay { position: fixed; inset: 0; background: rgba(13,42,59,0.55); z-index: 999; display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(4px); }
  .ss-modal { background: white; border-radius: 24px; padding: 36px 32px; width: 100%; max-width: 460px; position: relative; box-shadow: 0 30px 80px rgba(13,42,59,0.25); }
  .ss-modal-close { position: absolute; top: 16px; right: 18px; background: none; border: none; font-size: 22px; cursor: pointer; color: var(--muted); line-height: 1; }
  .ss-modal-close:hover { color: var(--navy); }
  .ss-modal-icon { font-size: 40px; margin-bottom: 10px; }
  .ss-modal-title { font-family: 'Tiro Devanagari Hindi', serif; font-size: 24px; color: var(--navy); margin-bottom: 4px; }
  .ss-modal-sub { font-size: 13px; color: var(--muted); margin-bottom: 24px; }
  .ss-modal label { display: block; font-size: 12px; font-weight: 600; color: var(--navy); margin-bottom: 6px; margin-top: 14px; }
  .ss-modal input, .ss-modal textarea { width: 100%; padding: 11px 14px; border-radius: 12px; border: 1.5px solid rgba(13,42,59,0.15); font-size: 14px; font-family: 'Poppins', sans-serif; color: var(--text); background: var(--cream); outline: none; transition: border-color .2s; }
  .ss-modal input:focus, .ss-modal textarea:focus { border-color: var(--teal); }
  .ss-modal textarea { resize: none; height: 80px; }
  .ss-modal-error { font-size: 12px; color: #e24b4a; margin-top: 10px; }
  .ss-modal-submit { width: 100%; margin-top: 20px; background: #25D366; color: white; border: none; padding: 14px; border-radius: 50px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: 'Poppins', sans-serif; display: flex; align-items: center; justify-content: center; gap: 10px; transition: transform .2s, box-shadow .2s; }
  .ss-modal-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,211,102,0.4); }

  @media (max-width: 768px) {
    .ss-hero { grid-template-columns: 1fr; }
    .ss-hero-visual { display: none; }
    .ss-why-grid { grid-template-columns: 1fr; }
    .ss-doctor-card { grid-template-columns: 1fr; }
    .ss-doc-left { padding: 32px; font-size: 70px; }
    .ss-footer-top { grid-template-columns: 1fr 1fr; }
    .ss-navlinks { display: none; }
  }
`;

export default function App() {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [popup, setPopup] = useState(false);
  const [popForm, setPopForm] = useState({ name: "", phone: "", issue: "", date: "" });
  const [popError, setPopError] = useState("");

  const DR_WHATSAPP = "919770979779";

  const openPopup = () => {
    setPopForm({ name: "", phone: "", issue: "", date: "" });
    setPopError("");
    setPopup(true);
  };

  const closePopup = () => setPopup(false);

  const handlePopSubmit = () => {
    if (!popForm.name || !popForm.phone || !popForm.issue || !popForm.date) {
      setPopError("कृपया सभी जानकारी भरें।");
      return;
    }
    const msg =
      `नमस्ते डॉ. गौर साहब 🙏\n\n` +
      `*नया अपॉइंटमेंट अनुरोध*\n\n` +
      `👤 *नाम:* ${popForm.name}\n` +
      `📞 *मोबाइल:* ${popForm.phone}\n` +
      `🦷 *समस्या:* ${popForm.issue}\n` +
      `📅 *पसंदीदा तारीख:* ${popForm.date}\n\n` +
      `श्रीश्याम डेंटल क्लिनिक वेबसाइट से भेजा गया।`;
    window.open(`https://wa.me/${DR_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    setPopup(false);
  };

  return (
    <>
      <style>{styles}</style>

      {/* NAVBAR */}
      <nav className="ss-nav">
        <div className="ss-logo">
          <div className="ss-logo-icon">🦷</div>
          <div className="ss-logo-text">
            श्रीश्याम डेंटल क्लिनिक
            <span>ShreeShyam Dental Clinic</span>
          </div>
        </div>
        <ul className="ss-navlinks">
          <li><a href="#">होम</a></li>
          <li><a href="#">सेवाएं</a></li>
          <li><a href="#">डॉक्टर</a></li>
          <li><a href="#">संपर्क</a></li>
        </ul>
        <button className="ss-nav-cta" onClick={openPopup}>अपॉइंटमेंट लें</button>
      </nav>

      {/* HERO */}
      <section style={{ background: "var(--cream)", paddingBottom: 0 }}>
        <div className="ss-hero">
          <div>
            <div className="ss-badge">✅ 500+ मरीज़ों का भरोसा</div>
            <h1 className="ss-h1">
              आपकी मुस्कान को<br />
              <em>सुंदर बनाएं</em>
            </h1>
            <p className="ss-hero-desc">
              श्रीश्याम डेंटल क्लिनिक में आधुनिक तकनीक और अनुभवी डॉक्टर की देखरेख में पाएं बेहतरीन दांतों का इलाज — बिल्कुल दर्दरहित और किफ़ायती।
            </p>
            <div className="ss-btns">
              <button className="ss-btn-primary" onClick={openPopup}>📅 अपॉइंटमेंट बुक करें</button>
              <button className="ss-btn-secondary">सेवाएं देखें →</button>
            </div>
            <div className="ss-stats">
              <div>
                <div className="ss-stat-num">500+</div>
                <div className="ss-stat-label">खुश मरीज़</div>
              </div>
              <div>
                <div className="ss-stat-num">99%</div>
                <div className="ss-stat-label">संतुष्टि दर</div>
              </div>
              <div>
                <div className="ss-stat-num">6+</div>
                <div className="ss-stat-label">साल का अनुभव</div>
              </div>
            </div>
          </div>
          <div className="ss-hero-visual">
            <div className="ss-circle">🦷</div>
            <div className="ss-float tl">
              <div className="ss-stars">★★★★★</div>
              <div className="ss-float-val">4.9 / 5.0</div>
              <div className="ss-float-label">गूगल रिव्यू</div>
            </div>
            <div className="ss-float br">
              <div className="ss-float-icon">✅</div>
              <div className="ss-float-val">उसी दिन मिलेगा समय</div>
              <div className="ss-float-label">Same-day appointment</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ss-services">
        <span className="ss-section-tag">हमारी सेवाएं</span>
        <h2 className="ss-section-title">हर दांत की समस्या का हल</h2>
        <p className="ss-section-sub">सभी दंत चिकित्सा सेवाएं एक ही छत के नीचे।</p>
        <div className="ss-services-grid">
          {[
            { e: "🪥", t: "दांतों की सफाई", d: "पेशेवर डीप क्लीनिंग से दांत चमकदार और स्वस्थ बनाएं।" },
            { e: "🌟", t: "दांत सफेद करना", d: "एक ही बैठक में दांत 8 शेड तक सफेद करें।" },
            { e: "🔬", t: "रूट कैनाल", d: "दर्दरहित एन्डोडोंटिक उपचार से दांत बचाएं।" },
            { e: "💎", t: "डेंटल इम्प्लांट", d: "स्थायी और प्राकृतिक दिखने वाले नकली दांत।" },
            { e: "😁", t: "ब्रेसेस / अलाइनर", d: "टेढ़े दांतों को सीधा करें — आपकी पसंद के अनुसार।" },
            { e: "🧸", t: "बच्चों का इलाज", d: "छोटे बच्चों के लिए सौम्य और मज़ेदार दंत चिकित्सा।" },
          ].map((s, i) => (
            <div className="ss-scard" key={i}>
              <span className="ss-scard-emoji">{s.e}</span>
              <div className="ss-scard-title">{s.t}</div>
              <div className="ss-scard-desc">{s.d}</div>
              <div className="ss-scard-link">और जानें →</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="ss-why">
        <div className="ss-why-inner">
          <span className="ss-section-tag">हमें क्यों चुनें</span>
          <h2 className="ss-section-title" style={{ color: "var(--navy)" }}>भरोसेमंद दंत चिकित्सा</h2>
          <div className="ss-why-grid">
            <div className="ss-why-visual">
              <div className="ss-why-feat span2">
                <span className="ss-why-feat-icon">🏆</span>
                <div className="ss-why-feat-title">पुरस्कार विजेता क्लिनिक</div>
                <div className="ss-why-feat-desc">लगातार 3 साल सर्वश्रेष्ठ डेंटल क्लिनिक का पुरस्कार।</div>
              </div>
              <div className="ss-why-feat">
                <span className="ss-why-feat-icon">💻</span>
                <div className="ss-why-feat-title">डिजिटल X-Ray</div>
                <div className="ss-why-feat-desc">90% कम रेडिएशन।</div>
              </div>
              <div className="ss-why-feat">
                <span className="ss-why-feat-icon">💊</span>
                <div className="ss-why-feat-title">दर्दरहित इलाज</div>
                <div className="ss-why-feat-desc">उन्नत एनेस्थीसिया।</div>
              </div>
            </div>
            <ul className="ss-why-list">
              {[
                { i: "✅", t: "प्रमाणित विशेषज्ञ डॉक्टर", d: "हमारे सभी डॉक्टर पूरी तरह प्रमाणित और प्रशिक्षित हैं।" },
                { i: "🕐", t: "सुविधाजनक समय", d: "सुबह, शाम और रविवार को भी अपॉइंटमेंट मिलती है।" },
                { i: "💳", t: "किफ़ायती इलाज", d: "₹500 से शुरू। हर बजट में बेहतरीन इलाज।" },
                { i: "🛡️", t: "पूरी तरह स्वच्छ", d: "हर उपकरण को अस्पताल स्तर पर स्टरलाइज़ किया जाता है।" },
              ].map((w, i) => (
                <li className="ss-why-item" key={i}>
                  <div className="ss-why-check">{w.i}</div>
                  <div>
                    <div className="ss-why-item-title">{w.t}</div>
                    <div className="ss-why-item-desc">{w.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="ss-doctor">
        <span className="ss-section-tag">हमारे डॉक्टर</span>
        <h2 className="ss-section-title" style={{ color: "var(--navy)" }}>आपकी मुस्कान के पीछे के विशेषज्ञ</h2>
        <div className="ss-doctor-card">
          <div className="ss-doc-left">👨‍⚕️</div>
          <div className="ss-doc-right">
            <div className="ss-doc-badge">मुख्य चिकित्सक</div>
            <div className="ss-doc-name">डॉ. कृष्ण कुमार गौर</div>
            <div className="ss-doc-qual">BDS — दंत चिकित्सा विशेषज्ञ</div>
            <p className="ss-doc-desc">
              डॉ. कृष्ण कुमार गौर को दंत चिकित्सा में 6+ साल का अनुभव है। वे दांतों की हर समस्या को आधुनिक तकनीक और सौम्य तरीके से ठीक करते हैं। उनकी विशेषता है — मरीज़ को बिल्कुल आरामदायक और भरोसेमंद माहौल देना।
            </p>
            <div className="ss-doc-tags">
              {["कॉस्मेटिक डेंटिस्ट्री", "रूट कैनाल", "इम्प्लांट", "बच्चों का इलाज", "ऑर्थोडोंटिक्स"].map((tag, i) => (
                <span className="ss-doc-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section className="ss-appt">
        <span className="ss-section-tag" style={{ color: "rgba(255,255,255,0.7)" }}>आज ही बुक करें</span>
        <h2 className="ss-appt-title">क्या आप स्वस्थ दांत चाहते हैं?</h2>
        <p className="ss-appt-sub">नीचे अपनी जानकारी भरें — हम एक घंटे में समय पक्का करेंगे।</p>
        <div className="ss-appt-form">
          <input
            type="text" placeholder="आपका नाम"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="tel" placeholder="मोबाइल नंबर"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
          <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
            <option value="">सेवा चुनें</option>
            <option>दांतों की सफाई</option>
            <option>दांत सफेद करना</option>
            <option>रूट कैनाल</option>
            <option>डेंटल इम्प्लांट</option>
            <option>ब्रेसेस / अलाइनर</option>
          </select>
          <button className="ss-btn-white" onClick={openPopup}>बुक करें →</button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="ss-testimonials">
        <span className="ss-section-tag">मरीज़ों की राय</span>
        <h2 className="ss-section-title" style={{ color: "var(--navy)" }}>लोग क्या कहते हैं</h2>
        <div className="ss-test-grid">
          {[
            { q: '"मुझे दांतों के डॉक्टर से बहुत डर लगता था। डॉ. गौर साहब ने बिल्कुल दर्द नहीं होने दिया। अब मेरे दांत बिल्कुल सफेद हैं!"', n: "सुनीता देवी", m: "दांत सफेद करना · रायसेन", a: "😊" },
            { q: '"रूट कैनाल का नाम सुनकर डर गया था लेकिन इलाज बिल्कुल आसान रहा। क्लिनिक बहुत साफ है और डॉक्टर बहुत अच्छे हैं।"', n: "रामप्रसाद यादव", m: "रूट कैनाल · विदिशा", a: "🙂" },
            { q: '"मेरे बच्चे को दांत में दर्द था। डॉक्टर साहब ने बहुत प्यार से इलाज किया। बच्चा खुश होकर घर आया!"', n: "गीता शर्मा", m: "बच्चों का इलाज · सीहोर", a: "😄" },
          ].map((t, i) => (
            <div className="ss-tcard" key={i}>
              <div className="ss-tcard-stars">★★★★★</div>
              <div className="ss-tcard-quote">{t.q}</div>
              <div className="ss-tcard-author">
                <div className="ss-tcard-avatar">{t.a}</div>
                <div>
                  <div className="ss-tcard-name">{t.n}</div>
                  <div className="ss-tcard-meta">{t.m}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="ss-footer-top">
          <div>
            <div className="ss-footer-logo">श्री<span>श्याम</span> डेंटल</div>
            <div className="ss-footer-tagline">आधुनिक तकनीक, अनुभवी डॉक्टर और दिल से की गई देखभाल।</div>
          </div>
          <div>
            <div className="ss-footer-col-title">सेवाएं</div>
            <ul className="ss-footer-links">
              <li><a href="#">दांतों की सफाई</a></li>
              <li><a href="#">दांत सफेद करना</a></li>
              <li><a href="#">रूट कैनाल</a></li>
              <li><a href="#">डेंटल इम्प्लांट</a></li>
              <li><a href="#">ब्रेसेस</a></li>
            </ul>
          </div>
          <div>
            <div className="ss-footer-col-title">क्लिनिक</div>
            <ul className="ss-footer-links">
              <li><a href="#">हमारे बारे में</a></li>
              <li><a href="#">डॉक्टर</a></li>
              <li><a href="#">ब्लॉग</a></li>
              <li><a href="#">संपर्क</a></li>
            </ul>
          </div>
          <div>
            <div className="ss-footer-col-title">संपर्क</div>
            <ul className="ss-footer-links">
              <li><a href="#">📍 Main Bus Stand, Opp. BOI, Charnal, Sehore</a></li>
              <li><a href="#">📞 +91 9770979779</a></li>
              <li><a href="#">✉️ shreeshyamdental@gmail.com</a></li>
              <li><a href="#">🕐 सोम–शनि, सुबह 9 – शाम 8</a></li>
            </ul>
          </div>
        </div>
        <div className="ss-footer-bottom">
          <span>© 2026 श्रीश्याम डेंटल क्लिनिक। सर्वाधिकार सुरक्षित।</span>
          <div className="ss-social-links">
            <button className="ss-social-btn">📘</button>
            <button className="ss-social-btn">📸</button>
            <button className="ss-social-btn">▶️</button>
          </div>
        </div>
      </footer>

      {/* WHATSAPP POPUP MODAL — must be OUTSIDE all sections, directly inside <> fragment */}
      {popup && (
        <div
          className="ss-overlay"
          onClick={e => { if (e.target.className === "ss-overlay") closePopup(); }}
        >
          <div className="ss-modal">
            <button className="ss-modal-close" onClick={closePopup}>✕</button>
            <div className="ss-modal-icon">🦷</div>
            <div className="ss-modal-title">अपॉइंटमेंट बुक करें</div>
            <div className="ss-modal-sub">जानकारी भरें — WhatsApp पर डॉक्टर साहब को भेजी जाएगी</div>

            <label>आपका पूरा नाम *</label>
            <input
              type="text"
              placeholder="जैसे: रामप्रसाद यादव"
              value={popForm.name}
              onChange={e => setPopForm({ ...popForm, name: e.target.value })}
            />

            <label>मोबाइल नंबर *</label>
            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={popForm.phone}
              onChange={e => setPopForm({ ...popForm, phone: e.target.value })}
            />

            <label>दांत की समस्या / इलाज *</label>
            <textarea
              placeholder="जैसे: दांत में दर्द है, रूट कैनाल करवाना है..."
              value={popForm.issue}
              onChange={e => setPopForm({ ...popForm, issue: e.target.value })}
            />

            <label>पसंदीदा तारीख *</label>
            <input
              type="date"
              value={popForm.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={e => setPopForm({ ...popForm, date: e.target.value })}
            />

            {popError && <div className="ss-modal-error">⚠️ {popError}</div>}

            <button className="ss-modal-submit" onClick={handlePopSubmit}>
              <span style={{ fontSize: 20 }}>💬</span>
              WhatsApp पर भेजें
            </button>
          </div>
        </div>
      )}
    </>
  );
}
