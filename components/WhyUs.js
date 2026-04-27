import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reasons = [
  {
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2622D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>,
    title:'Full-Stack AI Expertise',
    desc:"We don't just do one thing — we handle the entire automation lifecycle from strategy through deployment and optimization.",
  },
  {
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2622D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    title:'Guaranteed Results',
    desc:'We put our reputation on the line. Every engagement comes with measurable KPIs and a commitment to delivering ROI.',
  },
  {
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2622D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>,
    title:'Tool Agnostic Approach',
    desc:"We're not locked into any vendor. We choose the best technology for your specific problem, not the one that pays us commissions.",
  },
  {
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C2622D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    title:'Consultative Partnership',
    desc:"We embed with your team, understand your culture, and surface opportunities you didn't know existed.",
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true })
  return (
    <section id="why-us" className="section-pad" style={{ background:'#F0E8DC', borderTop:'1px solid rgba(194,98,45,0.1)' }}>
      <div style={{ maxWidth:1000, margin:'0 auto' }}>
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:'clamp(44px,6vw,72px)' }}>
          <span className="label">Why Aumatic</span>
          <h2 style={{ fontSize:'clamp(28px,5vw,60px)', fontWeight:900, letterSpacing:-2, color:'#1A0F0A', margin:'14px 0 16px', fontFamily:"'Montserrat', sans-serif" }}>
            Built Different. Proven Results.
          </h2>
          <p style={{ fontSize:'clamp(15px,1.8vw,17px)', color:'#5C3D2A', maxWidth:540, margin:'0 auto', lineHeight:1.65 }}>
            We take a consultative approach so you never miss hidden opportunities or fumble implementation.
          </p>
        </motion.div>

        <div className="grid-2" style={{ gap:'clamp(20px,3vw,36px)' }}>
          {reasons.map((r,i) => {
            const rRef = useRef(null)
            const rInView = useInView(rRef, { once:true, margin:'-40px' })
            return (
              <motion.div key={i} ref={rRef}
                initial={{ opacity:0, y:20 }} animate={rInView ? { opacity:1, y:0 } : {}}
                transition={{ duration:0.55, delay:(i%2)*0.1 }}
                style={{ display:'flex', gap:18, alignItems:'flex-start' }}
              >
                <div style={{ width:50, height:50, borderRadius:14, background:'rgba(194,98,45,0.1)', border:'1.5px solid rgba(194,98,45,0.2)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  {r.icon}
                </div>
                <div>
                  <h3 style={{ fontSize:'clamp(17px,2vw,20px)', fontWeight:800, color:'#1A0F0A', marginBottom:10, letterSpacing:-0.3, fontFamily:"'Montserrat', sans-serif" }}>{r.title}</h3>
                  <p style={{ fontSize:15, color:'#5C3D2A', lineHeight:1.72 }}>{r.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
