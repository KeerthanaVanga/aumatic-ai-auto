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
        @keyframes heroBlob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(60px,-45px) scale(1.12); }
          66%      { transform: translate(-30px,35px) scale(0.93); }
        }
        @keyframes heroBlob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-70px,40px) scale(0.92); }
          66%      { transform: translate(45px,-30px) scale(1.1); }
        }
        @keyframes heroBlob3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(30px,-55px) scale(1.08); }
        }
        @keyframes heroBlob4 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-40px,50px) scale(1.06); }
          80%      { transform: translate(50px,20px) scale(0.95); }
        }
        @keyframes heroRing {
          0%,100% { opacity:0.07; transform:scale(1); }
          50%      { opacity:0.13; transform:scale(1.04); }
        }
      `}</style>

      {/* ── Animated color blobs ── */}
      <div style={{
        position:'absolute', top:'-15%', left:'-10%', width:750, height:750,
        borderRadius:'50%', pointerEvents:'none', filter:'blur(60px)',
        background:'radial-gradient(circle, rgba(194,98,45,0.38) 0%, rgba(210,130,55,0.18) 50%, transparent 70%)',
        animation:'heroBlob1 22s ease-in-out infinite',
      }} />
      <div style={{
        position:'absolute', top:'-12%', right:'-8%', width:680, height:680,
        borderRadius:'50%', pointerEvents:'none', filter:'blur(55px)',
        background:'radial-gradient(circle, rgba(220,150,60,0.35) 0%, rgba(230,170,80,0.16) 50%, transparent 70%)',
        animation:'heroBlob2 26s ease-in-out infinite',
      }} />
      <div style={{
        position:'absolute', bottom:'-18%', left:'15%', width:620, height:620,
        borderRadius:'50%', pointerEvents:'none', filter:'blur(65px)',
        background:'radial-gradient(circle, rgba(180,90,35,0.30) 0%, rgba(200,120,60,0.14) 50%, transparent 70%)',
        animation:'heroBlob3 30s ease-in-out infinite',
      }} />
      <div style={{
        position:'absolute', bottom:'5%', right:'5%', width:500, height:500,
        borderRadius:'50%', pointerEvents:'none', filter:'blur(50px)',
        background:'radial-gradient(circle, rgba(230,165,70,0.28) 0%, transparent 65%)',
        animation:'heroBlob4 18s ease-in-out infinite',
      }} />

      {/* ── Center bright zone for readability ── */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:'radial-gradient(ellipse 65% 55% at 50% 46%, rgba(255,248,238,0.68) 0%, transparent 70%)',
      }} />

      {/* ── Decorative rings ── */}
      <svg style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'min(900px,90vw)', height:'min(900px,90vw)', pointerEvents:'none', animation:'heroRing 8s ease-in-out infinite' }} viewBox="0 0 900 900" fill="none">
        <circle cx="450" cy="450" r="380" stroke="rgba(194,98,45,0.10)" strokeWidth="1.5" strokeDasharray="6 14"/>
        <circle cx="450" cy="450" r="280" stroke="rgba(194,98,45,0.07)" strokeWidth="1"   strokeDasharray="4 18"/>
      </svg>

      {/* ── Grain texture ── */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.055, pointerEvents:'none' }} xmlns="http://www.w3.org/2000/svg">
        <filter id="hgrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#hgrain)"/>
      </svg>

      {/* ── Bottom wave ── */}
      <svg style={{ position:'absolute', bottom:0, left:0, right:0, width:'100%', opacity:0.55 }} viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
        <path d="M0,60 C360,100 720,20 1080,65 C1260,87 1380,45 1440,55 L1440,100 L0,100Z" fill="rgba(160,75,25,0.10)" />
        <path d="M0,80 C400,45 800,90 1200,60 C1320,48 1400,72 1440,80 L1440,100 L0,100Z" fill="rgba(160,75,25,0.06)" />
      </svg>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 clamp(16px,4vw,24px)', textAlign:'center', position:'relative', zIndex:1 }}>

        {/* Badge */}
        <motion.div variants={up} initial="hidden" animate="show" custom={0}
          style={{ display:'inline-flex', alignItems:'center', gap:9, padding:'8px 20px', borderRadius:99, background:'rgba(255,255,255,0.75)', border:'1px solid rgba(194,98,45,0.22)', boxShadow:'0 2px 16px rgba(194,98,45,0.1)', marginBottom:40 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C2622D" strokeWidth="2" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <span style={{ fontSize:14, fontWeight:600, color:'#3D2314', letterSpacing:0.2 }}>AI Automation Experts</span>
          <span style={{ width:7, height:7, borderRadius:99, background:'#C2622D', boxShadow:'0 0 8px rgba(194,98,45,0.6)', flexShrink:0 }} />
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={up} initial="hidden" animate="show" custom={0.1}
          style={{ fontFamily:"'Montserrat', sans-serif", fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-2.5px', marginBottom:32, color:'#1A0F0A' }}>
          We Build & Deploy{' '}
          <span style={{ color:'#C2622D' }}>Intelligent</span>
          {' '}
          <span style={{ color:'#C2622D' }}>Automation</span>
          {' '}for Your Business
        </motion.h1>

        {/* Sub */}
        <motion.p variants={up} initial="hidden" animate="show" custom={0.2}
          style={{ fontSize:'clamp(18px,2.2vw,22px)', lineHeight:1.8, color:'#5C3D2A', maxWidth:640, margin:'0 auto 52px', fontWeight:400 }}>
          We analyze your workflows, design custom AI systems, and deploy automations that save your team hundreds of hours every month.
        </motion.p>

        {/* CTA */}
        <motion.div variants={up} initial="hidden" animate="show" custom={0.3} style={{ marginBottom:52 }}>
          <motion.a href="https://cal.com/chandan-kumar-zhrofj/30min" target="_blank" rel="noopener noreferrer" whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
            style={{ display:'inline-flex', alignItems:'center', gap:12, padding:'18px 42px', borderRadius:13, fontSize:18, fontWeight:700, background:'linear-gradient(135deg,#C2622D,#A8501F)', color:'white', textDecoration:'none', boxShadow:'0 8px 32px rgba(194,98,45,0.45)', letterSpacing:0.3 }}>
            Book a Free Call <span style={{ fontSize:18 }}>→</span>
          </motion.a>
        </motion.div>

        {/* Trust row */}
        <motion.div variants={up} initial="hidden" animate="show" custom={0.4}
          style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'clamp(16px,4vw,40px)', flexWrap:'wrap' }}>
          {[
            { dot: true, text:'Certified AI Partner' },
            { dot: true, text:'Top Rated Agency' },
            { dot: true, text:'100+ Automations Built' },
          ].map((b,i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ width:8, height:8, borderRadius:99, background:'#C2622D', boxShadow:'0 0 6px rgba(194,98,45,0.5)' }} />
              <span style={{ fontSize:15, color:'#5C3D2A', fontWeight:500 }}>{b.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
