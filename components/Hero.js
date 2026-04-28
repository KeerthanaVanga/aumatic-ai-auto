import { motion } from 'framer-motion'

const up = { hidden:{ opacity:0, y:28 }, show:(d=0)=>({ opacity:1, y:0, transition:{ duration:0.8, delay:d, ease:[0.22,1,0.36,1] }}) }

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      paddingTop: 96, paddingBottom: 80,
      background: 'linear-gradient(175deg, #F0E8DC 0%, #F5EFE8 40%, #EDE4D8 100%)',
    }}>
      {/* Large soft orbs – exact aumatic.ai look */}
      <div className="orb1" style={{ position:'absolute', top:'-12%', left:'-8%',  width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle, rgba(210,180,150,0.45) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div className="orb2" style={{ position:'absolute', top:'-8%',  right:'-6%', width:540, height:540, borderRadius:'50%', background:'radial-gradient(circle, rgba(200,165,135,0.35) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div className="orb3" style={{ position:'absolute', bottom:'5%',left:'25%',  width:460, height:460, borderRadius:'50%', background:'radial-gradient(circle, rgba(220,190,160,0.3) 0%, transparent 65%)',  pointerEvents:'none' }} />

      {/* Bottom wave */}
      <svg style={{ position:'absolute', bottom:0, left:0, right:0, width:'100%', opacity:0.6 }} viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
        <path d="M0,60 C360,100 720,20 1080,65 C1260,87 1380,45 1440,55 L1440,100 L0,100Z" fill="rgba(194,98,45,0.06)" />
        <path d="M0,80 C400,45 800,90 1200,60 C1320,48 1400,72 1440,80 L1440,100 L0,100Z" fill="rgba(194,98,45,0.04)" />
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
          style={{ fontFamily:"'Montserrat', sans-serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-1.5px', marginBottom:32, color:'#1A0F0A' }}>
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
