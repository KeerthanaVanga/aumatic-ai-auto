import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num:'01',
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    title:'Deep Analysis',
    desc:'We map every workflow, interview your team, and uncover where AI can create the biggest impact on your bottom line.',
    tags:['Workflow mapping','Opportunity scoring','ROI projections','Feasibility reports'],
  },
  {
    num:'02',
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    title:'Architecture & Design',
    desc:'We architect the perfect automation stack — integrating your existing tools while adding intelligent layers on top.',
    tags:['System design','Integration planning','Data flow architecture','Tool selection'],
  },
  {
    num:'03',
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    title:'Build & Deploy',
    desc:'Our engineers build, test, and deploy your custom automations with rigorous QA and real-time monitoring.',
    tags:['Custom AI agents','API integrations','Automated pipelines','Quality assurance'],
  },
  {
    num:'04',
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    title:'Train & Optimize',
    desc:'We train your team, set up dashboards, and continuously optimize for peak performance month over month.',
    tags:['Team workshops','Performance dashboards','Ongoing tuning','Dedicated support'],
  },
]

function StepCard({ s, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.6, delay:(i%2)*0.12, ease:[0.22,1,0.36,1] }}
      className="card"
      style={{ padding:'clamp(22px,3vw,34px)', position:'relative', overflow:'hidden' }}
    >
      {/* Subtle corner glow */}
      <div style={{ position:'absolute', top:-30, right:-30, width:100, height:100, borderRadius:'50%', background:'radial-gradient(circle,rgba(194,98,45,0.08),transparent 70%)', pointerEvents:'none' }} />

      {/* Number + icon row */}
      <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:22 }}>
        {/* Bright number – always visible */}
        <span style={{
          fontSize:'clamp(36px,5vw,52px)', fontWeight:900, lineHeight:1,
          fontFamily:"'Montserrat', sans-serif", letterSpacing:-2,
          background:'linear-gradient(135deg,#C2622D,#E8A060)',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          userSelect:'none', flexShrink:0,
        }}>{s.num}</span>

        {/* Icon badge */}
        <div style={{ width:44, height:44, borderRadius:13, background:'rgba(194,98,45,0.1)', border:'1.5px solid rgba(194,98,45,0.22)', display:'flex', alignItems:'center', justifyContent:'center', color:'#C2622D', flexShrink:0 }}>
          {s.icon}
        </div>
      </div>

      <h3 style={{ fontSize:'clamp(19px,2.2vw,23px)', fontWeight:800, color:'#1A0F0A', marginBottom:12, letterSpacing:-0.4, fontFamily:"'Montserrat', sans-serif" }}>{s.title}</h3>
      <p style={{ fontSize:15, color:'#5C3D2A', lineHeight:1.72, marginBottom:20 }}>{s.desc}</p>

      <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
        {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </motion.div>
  )
}

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="process" className="section-pad" style={{ background:'#F0E8DC', borderTop:'1px solid rgba(194,98,45,0.1)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:'clamp(44px,6vw,72px)' }}>
          <span className="label">Our Process</span>
          <h2 style={{ fontSize:'clamp(28px,4.5vw,56px)', fontWeight:900, letterSpacing:-2, color:'#1A0F0A', margin:'14px 0 16px', fontFamily:"'Montserrat', sans-serif" }}>
            A Proven Path to<br />Operational Excellence
          </h2>
          <p style={{ fontSize:'clamp(15px,1.8vw,17px)', color:'#5C3D2A', maxWidth:440, margin:'0 auto', lineHeight:1.65 }}>
            Four phases. Measurable outcomes. Every single time.
          </p>
        </motion.div>
        <div className="grid-2">
          {steps.map((s,i) => <StepCard key={i} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
