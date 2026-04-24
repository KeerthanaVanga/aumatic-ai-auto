import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { num:'01', title:'Discovery Call',               icon:'📞', desc:'We start with a free 30-min call to understand your biggest bottlenecks, current tools, and automation goals. No fluff — just figuring out where AI can save you the most time.',              detail:'30-minute call · Free · No commitment' },
  { num:'02', title:'Custom Automation Blueprint',  icon:'📐', desc:"Within 48 hours, we deliver a detailed automation roadmap — what we'll build, which tools we'll use, expected time savings, and ROI projections.",                                           detail:'Delivered in 48h · Full roadmap · ROI projections' },
  { num:'03', title:'Build & Test',                 icon:'⚙️', desc:"Our team builds your automations with real data from your systems. We test every edge case, add error handling, and ensure everything runs perfectly before going live.",               detail:'1–2 weeks build time · Full QA · Error handling' },
  { num:'04', title:'Launch & Optimize',            icon:'🚀', desc:"We deploy your workflows, walk you through how everything works, and monitor performance for 30 days — tweaking and improving as we gather real-world data.",                               detail:'30-day monitoring · Ongoing support · Guaranteed results' },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true })
  return (
    <section id="how-it-works" style={{ padding:'100px 24px', position:'relative', background:'linear-gradient(180deg,rgba(45,212,191,0.05) 0%,transparent 100%)', borderTop:'1px solid rgba(13,148,136,0.1)' }}>
      <div style={{ position:'absolute', top:'10%', right:'5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', left:'5%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div className="max-w-5xl mx-auto" style={{ position:'relative', zIndex:1 }}>
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:72 }}>
          <span style={{ fontSize:12, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#0D9488' }}>Our Process</span>
          <h2 style={{ fontSize:'clamp(30px,4vw,52px)', fontWeight:900, letterSpacing:-1.5, color:'#042F2E', margin:'14px 0 16px' }}>
            From Zero to Automated<br /><span className="text-gradient">in 2 Weeks</span>
          </h2>
          <p style={{ fontSize:17, color:'#155E59', maxWidth:480, margin:'0 auto' }}>A simple, battle-tested process we've refined across 200+ automation projects.</p>
        </motion.div>

        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute', left:28, top:32, bottom:32, width:2, background:'linear-gradient(to bottom, #2DD4BF, #0D9488, transparent)', borderRadius:99, opacity:0.4 }} />
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {steps.map((step,i) => {
              const r = useRef(null)
              const v = useInView(r, { once:true, margin:'-40px' })
              return (
                <motion.div key={i} ref={r}
                  initial={{ opacity:0, x:-20 }} animate={v ? { opacity:1, x:0 } : {}}
                  transition={{ duration:0.6, delay:i*0.1 }}
                  style={{ display:'flex', gap:24, paddingBottom: i < steps.length-1 ? 48 : 0 }}>
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
                    <div style={{ width:58, height:58, borderRadius:16, background:'linear-gradient(135deg,#0D9488,#2DD4BF)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, boxShadow:'0 6px 20px rgba(13,148,136,0.3)', zIndex:1 }}>{step.icon}</div>
                  </div>
                  <motion.div whileHover={{ x:6 }} transition={{ duration:0.2 }}
                    style={{ flex:1, padding:'20px 28px', borderRadius:18, background:'rgba(255,255,255,0.75)', border:'1px solid rgba(13,148,136,0.12)', backdropFilter:'blur(8px)', boxShadow:'0 4px 16px rgba(13,148,136,0.06)' }}>
                    <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:16, flexWrap:'wrap', marginBottom:10 }}>
                      <div>
                        <span style={{ fontSize:11, fontWeight:800, color:'#2DD4BF', letterSpacing:1.5, textTransform:'uppercase' }}>{step.num}</span>
                        <h3 style={{ fontSize:20, fontWeight:800, color:'#042F2E', letterSpacing:-0.4, marginTop:4 }}>{step.title}</h3>
                      </div>
                      <span style={{ fontSize:12, color:'#5EADA6', background:'rgba(13,148,136,0.07)', padding:'4px 12px', borderRadius:99, border:'1px solid rgba(13,148,136,0.12)', flexShrink:0 }}>{step.detail}</span>
                    </div>
                    <p style={{ fontSize:15, color:'#155E59', lineHeight:1.7, margin:0 }}>{step.desc}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
