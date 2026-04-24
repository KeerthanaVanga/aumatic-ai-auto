import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const rows = [
  { problem:'Low profit margins',        solution:'Displace labor with AI automation',          outcome:'Higher margins' },
  { problem:'Slow delivery',             solution:'Eliminate bottlenecks with smart workflows',  outcome:'2× faster output' },
  { problem:'Falling behind competitors',solution:'Deploy AI-powered capabilities',              outcome:'Market advantage' },
  { problem:'Overworked teams',          solution:'Automate repetitive tasks',                   outcome:'Freed-up capacity' },
  { problem:'Data silos everywhere',     solution:'Unify tools and sync data',                   outcome:'Single source of truth' },
  { problem:'Inconsistent quality',      solution:'Standardize with automated pipelines',        outcome:'Reliable output' },
  { problem:'High operational costs',    solution:'Replace manual workflows with AI',            outcome:'Cost reduction' },
  { problem:'Missed follow-ups',         solution:'Automated CRM triggers and sequences',        outcome:'More closed deals' },
]

export default function Impact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true })
  return (
    <section id="impact" className="section-pad" style={{ background:'linear-gradient(160deg,#2C1810 0%,#3D2314 100%)', position:'relative', overflow:'hidden' }}>
      {/* Warm glow orbs on dark bg */}
      <div style={{ position:'absolute', top:'-10%', right:'-5%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(194,98,45,0.12) 0%,transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-10%', left:'-5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(200,140,90,0.08) 0%,transparent 65%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:1000, margin:'0 auto', position:'relative', zIndex:1 }}>
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:'clamp(44px,6vw,72px)' }}>
          <span style={{ fontSize:11, fontWeight:700, letterSpacing:3.5, textTransform:'uppercase', color:'#D4784A' }}>Impact</span>
          <h2 style={{ fontSize:'clamp(28px,5vw,60px)', fontWeight:900, letterSpacing:-2, color:'#F5EFE8', margin:'14px 0 16px', fontFamily:"'Playfair Display',serif", lineHeight:1.1 }}>
            We Find Constraints,<br />Then Crush Them
          </h2>
          <p style={{ fontSize:'clamp(15px,1.8vw,17px)', color:'rgba(245,239,232,0.6)', maxWidth:520, margin:'0 auto', lineHeight:1.65 }}>
            Every automation compounds over time — creating a flywheel of profitability and competitive edge.
          </p>
        </motion.div>

        {/* Desktop table */}
        <div style={{ borderRadius:20, overflow:'hidden', border:'1px solid rgba(194,98,45,0.2)' }} className="hide-mobile">
          {/* Header */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.5fr 1fr', padding:'14px 36px', background:'rgba(194,98,45,0.1)', borderBottom:'1px solid rgba(194,98,45,0.18)' }}>
            {['PROBLEM','SOLUTION','OUTCOME'].map(h => (
              <span key={h} style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, color:'rgba(245,239,232,0.4)', textTransform:'uppercase' }}>{h}</span>
            ))}
          </div>
          {rows.map((row,i) => {
            const rRef = useRef(null)
            const rInView = useInView(rRef, { once:true, margin:'-20px' })
            return (
              <motion.div key={i} ref={rRef}
                initial={{ opacity:0, x:-14 }} animate={rInView ? { opacity:1, x:0 } : {}}
                transition={{ duration:0.48, delay:i*0.05 }}
                style={{ display:'grid', gridTemplateColumns:'1fr 1.5fr 1fr', padding:'20px 36px', borderBottom: i<rows.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none', transition:'background 0.2s', cursor:'default' }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(194,98,45,0.06)'}
                onMouseLeave={e => e.currentTarget.style.background='transparent'}
              >
                <span style={{ fontSize:15, color:'rgba(245,239,232,0.5)' }}>{row.problem}</span>
                <span style={{ fontSize:15, color:'rgba(245,239,232,0.85)', fontWeight:500 }}>{row.solution}</span>
                <span style={{ fontSize:15, color:'#D4784A', fontWeight:800 }}>{row.outcome}</span>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile cards */}
        <div style={{ display:'none', flexDirection:'column', gap:12 }} className="show-mobile">
          {rows.map((row,i) => {
            const rRef = useRef(null)
            const rInView = useInView(rRef, { once:true })
            return (
              <motion.div key={i} ref={rRef}
                initial={{ opacity:0, y:14 }} animate={rInView ? { opacity:1, y:0 } : {}}
                transition={{ duration:0.45, delay:i*0.04 }}
                style={{ padding:'18px 20px', borderRadius:14, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(194,98,45,0.18)' }}
              >
                <div style={{ fontSize:12, color:'rgba(245,239,232,0.45)', fontWeight:600, marginBottom:6, textTransform:'uppercase', letterSpacing:1 }}>Problem</div>
                <div style={{ fontSize:15, color:'rgba(245,239,232,0.6)', marginBottom:10 }}>{row.problem}</div>
                <div style={{ fontSize:15, color:'rgba(245,239,232,0.85)', fontWeight:500, marginBottom:10 }}>{row.solution}</div>
                <div style={{ fontSize:15, color:'#D4784A', fontWeight:800 }}>→ {row.outcome}</div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width:768px){.hide-mobile{display:none!important}.show-mobile{display:flex!important}}
        @media (min-width:769px){.show-mobile{display:none!important}}
      `}</style>
    </section>
  )
}
