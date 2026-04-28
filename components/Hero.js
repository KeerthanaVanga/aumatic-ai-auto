import { motion } from 'framer-motion'

const up = { hidden:{ opacity:0, y:28 }, show:(d=0)=>({ opacity:1, y:0, transition:{ duration:0.8, delay:d, ease:[0.22,1,0.36,1] }}) }

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      paddingTop: 96, paddingBottom: 80,
      background: 'linear-gradient(145deg, #E8D9C4 0%, #F0E3CF 40%, #E4D4BC 100%)',
    }}>

      <style>{`
        /* ── blob animations ── */
        @keyframes heroBlob1 {
          0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(60px,-45px) scale(1.12)} 66%{transform:translate(-30px,35px) scale(0.93)}
        }
        @keyframes heroBlob2 {
          0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-70px,40px) scale(0.92)} 66%{transform:translate(45px,-30px) scale(1.1)}
        }
        @keyframes heroBlob3 {
          0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-55px) scale(1.08)}
        }
        @keyframes heroBlob4 {
          0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(-40px,50px) scale(1.06)} 80%{transform:translate(50px,20px) scale(0.95)}
        }
        @keyframes heroRing {
          0%,100%{opacity:0.07;transform:translate(-50%,-50%) scale(1)} 50%{opacity:0.14;transform:translate(-50%,-50%) scale(1.04)}
        }
        @keyframes spinStar { to { transform: rotate(360deg); } }
        @keyframes shimmerSweep {
          0%   { left: -80%; }
          100% { left: 150%; }
        }

        /* ── Badge hover ── */
        .hero-badge {
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
        }
        .hero-badge:hover {
          background: rgba(255,255,255,0.95) !important;
          border-color: rgba(194,98,45,0.55) !important;
          box-shadow: 0 6px 28px rgba(194,98,45,0.22), 0 0 0 4px rgba(194,98,45,0.07) !important;
          transform: translateY(-3px) scale(1.04);
        }
        .hero-badge:hover .badge-star { animation: spinStar 0.55s cubic-bezier(0.22,1,0.36,1); }

        /* ── Heading word hover ── */
        .hero-word {
          position: relative;
          display: inline-block;
          cursor: default;
          transition: filter 0.3s ease;
        }
        .hero-word::after {
          content: '';
          position: absolute;
          left: 0; bottom: -6px;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #C2622D 0%, #F0A060 50%, #C2622D 100%);
          border-radius: 3px;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
        }
        .hero-word:hover::after { transform: scaleX(1); }
        .hero-word:hover { filter: brightness(1.15) drop-shadow(0 0 18px rgba(194,98,45,0.55)); }

        /* ── CTA shimmer sweep ── */
        .hero-cta {
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1) !important;
        }
        .hero-cta::after {
          content: '';
          position: absolute;
          top: 0; left: -80%;
          width: 55%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.32), transparent);
          transform: skewX(-18deg);
          pointer-events: none;
        }
        .hero-cta:hover::after {
          animation: shimmerSweep 0.55s ease forwards;
        }
        .hero-cta:hover {
          box-shadow: 0 14px 48px rgba(194,98,45,0.6) !important;
          transform: translateY(-3px) scale(1.03);
        }

        /* ── Trust badge hover ── */
        .trust-item {
          padding: 7px 16px;
          border-radius: 99px;
          border: 1px solid transparent;
          transition: background 0.28s ease, border-color 0.28s ease, transform 0.28s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
        }
        .trust-item:hover {
          background: rgba(194,98,45,0.09);
          border-color: rgba(194,98,45,0.25);
          transform: translateY(-3px);
        }
        .trust-dot {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .trust-item:hover .trust-dot {
          transform: scale(1.8);
          box-shadow: 0 0 14px rgba(194,98,45,0.9) !important;
        }
      `}</style>

      {/* ── Animated color blobs ── */}
      <div style={{ position:'absolute', top:'-15%', left:'-10%', width:750, height:750, borderRadius:'50%', pointerEvents:'none', filter:'blur(60px)', background:'radial-gradient(circle, rgba(194,98,45,0.38) 0%, rgba(210,130,55,0.18) 50%, transparent 70%)', animation:'heroBlob1 22s ease-in-out infinite' }} />
      <div style={{ position:'absolute', top:'-12%', right:'-8%', width:680, height:680, borderRadius:'50%', pointerEvents:'none', filter:'blur(55px)', background:'radial-gradient(circle, rgba(220,150,60,0.35) 0%, rgba(230,170,80,0.16) 50%, transparent 70%)', animation:'heroBlob2 26s ease-in-out infinite' }} />
      <div style={{ position:'absolute', bottom:'-18%', left:'15%', width:620, height:620, borderRadius:'50%', pointerEvents:'none', filter:'blur(65px)', background:'radial-gradient(circle, rgba(180,90,35,0.30) 0%, rgba(200,120,60,0.14) 50%, transparent 70%)', animation:'heroBlob3 30s ease-in-out infinite' }} />
      <div style={{ position:'absolute', bottom:'5%', right:'5%', width:500, height:500, borderRadius:'50%', pointerEvents:'none', filter:'blur(50px)', background:'radial-gradient(circle, rgba(230,165,70,0.28) 0%, transparent 65%)', animation:'heroBlob4 18s ease-in-out infinite' }} />

      {/* ── Center bright zone ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', background:'radial-gradient(ellipse 65% 55% at 50% 46%, rgba(255,248,238,0.68) 0%, transparent 70%)' }} />

      {/* ── Decorative rings ── */}
      <svg style={{ position:'absolute', top:'50%', left:'50%', width:'min(900px,90vw)', height:'min(900px,90vw)', pointerEvents:'none', animation:'heroRing 8s ease-in-out infinite' }} viewBox="0 0 900 900" fill="none">
        <circle cx="450" cy="450" r="380" stroke="rgba(194,98,45,0.10)" strokeWidth="1.5" strokeDasharray="6 14"/>
        <circle cx="450" cy="450" r="280" stroke="rgba(194,98,45,0.07)" strokeWidth="1"   strokeDasharray="4 18"/>
      </svg>

      {/* ── Grain texture ── */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.055, pointerEvents:'none' }} xmlns="http://www.w3.org/2000/svg">
        <filter id="hgrain"><feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
        <rect width="100%" height="100%" filter="url(#hgrain)"/>
      </svg>

      {/* ── Floating sparkle particles ── */}
      {[
        { l:'12%', t:'72%', s:4, o:0.7, d:0,   dur:9  },
        { l:'22%', t:'60%', s:3, o:0.5, d:1.5, dur:12 },
        { l:'35%', t:'78%', s:5, o:0.8, d:0.8, dur:10 },
        { l:'48%', t:'68%', s:3, o:0.6, d:3,   dur:14 },
        { l:'58%', t:'82%', s:4, o:0.7, d:2,   dur:11 },
        { l:'68%', t:'65%', s:3, o:0.5, d:4,   dur:13 },
        { l:'78%', t:'75%', s:5, o:0.8, d:1,   dur:9  },
        { l:'88%', t:'58%', s:3, o:0.6, d:2.5, dur:15 },
        { l:'18%', t:'88%', s:4, o:0.5, d:5,   dur:10 },
        { l:'42%', t:'55%', s:3, o:0.7, d:3.5, dur:12 },
        { l:'62%', t:'90%', s:5, o:0.6, d:1.8, dur:11 },
        { l:'82%', t:'85%', s:3, o:0.8, d:4.2, dur:13 },
      ].map((p, i) => (
        <div key={i} style={{ position:'absolute', left:p.l, top:p.t, width:p.s, height:p.s, borderRadius:'50%', background:'#C2622D', opacity:p.o, boxShadow:`0 0 ${p.s*2.5}px rgba(194,98,45,0.9), 0 0 ${p.s*5}px rgba(194,98,45,0.4)`, animation:`float-particle ${p.dur}s ease-in-out ${p.d}s infinite`, pointerEvents:'none' }} />
      ))}

      {/* ── Bottom wave ── */}
      <svg style={{ position:'absolute', bottom:0, left:0, right:0, width:'100%', opacity:0.55 }} viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
        <path d="M0,60 C360,100 720,20 1080,65 C1260,87 1380,45 1440,55 L1440,100 L0,100Z" fill="rgba(160,75,25,0.10)" />
        <path d="M0,80 C400,45 800,90 1200,60 C1320,48 1400,72 1440,80 L1440,100 L0,100Z" fill="rgba(160,75,25,0.06)" />
      </svg>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 clamp(16px,4vw,24px)', textAlign:'center', position:'relative', zIndex:3 }}>

        {/* Badge */}
        <motion.div variants={up} initial="hidden" animate="show" custom={0} className="hero-badge"
          style={{ display:'inline-flex', alignItems:'center', gap:9, padding:'8px 20px', borderRadius:99, background:'rgba(255,255,255,0.75)', border:'1px solid rgba(194,98,45,0.22)', boxShadow:'0 2px 16px rgba(194,98,45,0.1)', marginBottom:40 }}>
          <svg className="badge-star" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C2622D" strokeWidth="2" strokeLinecap="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span style={{ fontSize:14, fontWeight:600, color:'#3D2314', letterSpacing:0.2 }}>AI Automation Experts</span>
          <span style={{ width:7, height:7, borderRadius:99, background:'#C2622D', boxShadow:'0 0 8px rgba(194,98,45,0.6)', flexShrink:0 }} />
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={up} initial="hidden" animate="show" custom={0.1}
          style={{ fontFamily:"'Montserrat', sans-serif", fontSize:'clamp(52px,7vw,92px)', fontWeight:900, lineHeight:1.05, letterSpacing:'-3px', marginBottom:36, color:'#1A0F0A' }}>
          We Build & Deploy{' '}
          <span className="hero-word shimmer-text">Intelligent</span>
          {' '}
          <span className="hero-word shimmer-text" style={{ animationDelay:'0.6s' }}>Automation</span>
          {' '}for Your Business
        </motion.h1>

        {/* Sub */}
        <motion.p variants={up} initial="hidden" animate="show" custom={0.2}
          style={{ fontSize:'clamp(19px,2.2vw,24px)', lineHeight:1.85, color:'#5C3D2A', maxWidth:660, margin:'0 auto 56px', fontWeight:400 }}>
          We analyze your workflows, design custom AI systems, and deploy automations that save your team hundreds of hours every month.
        </motion.p>

        {/* CTA */}
        <motion.div variants={up} initial="hidden" animate="show" custom={0.3} style={{ marginBottom:52 }}>
          <a href="https://cal.com/chandan-kumar-zhrofj/30min" target="_blank" rel="noopener noreferrer" className="hero-cta"
            style={{ display:'inline-flex', alignItems:'center', gap:12, padding:'18px 42px', borderRadius:13, fontSize:18, fontWeight:700, background:'linear-gradient(135deg,#C2622D,#A8501F)', color:'white', textDecoration:'none', boxShadow:'0 8px 32px rgba(194,98,45,0.45)', letterSpacing:0.3 }}>
            Book a Free Call <span style={{ fontSize:18 }}>→</span>
          </a>
        </motion.div>

        {/* Trust row */}
        <motion.div variants={up} initial="hidden" animate="show" custom={0.4}
          style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'clamp(8px,2vw,16px)', flexWrap:'wrap' }}>
          {['Certified AI Partner','Top Rated Agency','100+ Automations Built'].map((text, i) => (
            <div key={i} className="trust-item" style={{ display:'flex', alignItems:'center', gap:8 }}>
              <span className="trust-dot" style={{ width:8, height:8, borderRadius:99, background:'#C2622D', boxShadow:'0 0 6px rgba(194,98,45,0.5)', flexShrink:0 }} />
              <span style={{ fontSize:15, color:'#5C3D2A', fontWeight:500 }}>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
