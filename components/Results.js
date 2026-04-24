import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ target, suffix='' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once:true })
  useEffect(() => {
    if (!inView) return
    const num = parseFloat(target), dur = 1800, start = performance.now()
    const tick = now => {
      const p = Math.min((now-start)/dur, 1)
      const e = 1 - Math.pow(1-p, 3)
      setCount(e * num)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])
  const display = Number.isInteger(parseFloat(target)) ? Math.round(count).toLocaleString() : count.toFixed(1)
  return <span ref={ref}>{display}{suffix}</span>
}

const stats = [
  { val:40,  suffix:'+', label:'Hours saved per week',     sub:'Per client on average',          color:'#0D9488' },
  { val:200, suffix:'+', label:'Workflows built',           sub:'Across all industries',           color:'#2DD4BF' },
  { val:98,  suffix:'%', label:'Client satisfaction',      sub:'Based on post-project reviews',   color:'#0F766E' },
  { val:5,   suffix:'×', label:'Average ROI',              sub:'Return on automation investment', color:'#134E4A' },
]

const testimonials = [
  { quote:"Aumatic saved my team 35 hours a week. They automated our entire onboarding flow, CRM updates, and weekly reporting. The ROI was clear within the first month.", name:"Alex Carter",     role:"COO @ Growthify",          avatar:'#0D9488' },
  { quote:"The AI chatbot they built handles 70% of our support tickets automatically. Our team went from drowning in tickets to focusing on real problems. Game changer.",   name:"Priya Sharma",    role:"Head of Support @ Stackly", avatar:'#2DD4BF' },
  { quote:"I was skeptical about AI automation until Aumatic showed me a live demo of what they built in 5 days. Fully custom, exactly what we needed. Worth every penny.",  name:"Marcus Webb",     role:"Founder @ Lunara Digital",  avatar:'#0F766E' },
  { quote:"From discovery to launch in 11 days. They automated our entire order fulfillment pipeline. Errors dropped to near zero and we've scaled 3x without hiring.",       name:"Sofia Torres",    role:"E-commerce Director @ Vellum", avatar:'#134E4A' },
  { quote:"Their automation blueprint alone was worth the engagement. Super detailed, clearly explained, and the final builds exceeded expectations.",                          name:"James Kim",       role:"CTO @ Nexaris",             avatar:'#0D9488' },
  { quote:"Aumatic connected 8 of our business tools into one seamless automated flow. What used to take my team a full day now runs itself overnight.",                       name:"Nia Jackson",     role:"Operations Manager @ Crestwave", avatar:'#2DD4BF' },
]

function TestimonialCard({ t, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6, delay }}
      whileHover={{ y:-4 }}
      style={{ padding:28, borderRadius:18, background:'rgba(255,255,255,0.8)', border:'1px solid rgba(13,148,136,0.12)', cursor:'default', boxShadow:'0 4px 20px rgba(13,148,136,0.06)', backdropFilter:'blur(8px)' }}>
      <div style={{ display:'flex', gap:3, marginBottom:16 }}>
        {[...Array(5)].map((_,i) => <span key={i} style={{ color:'#0D9488', fontSize:14 }}>★</span>)}
      </div>
      <p style={{ fontSize:14, color:'#155E59', lineHeight:1.75, marginBottom:20, fontStyle:'italic' }}>"{t.quote}"</p>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <div style={{ width:40, height:40, borderRadius:99, background:t.avatar, display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, fontWeight:800, color:'white' }}>{t.name[0]}</div>
        <div>
          <div style={{ fontSize:14, fontWeight:700, color:'#042F2E' }}>{t.name}</div>
          <div style={{ fontSize:12, color:'#5EADA6' }}>{t.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Results() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true })
  return (
    <section id="results" style={{ padding:'100px 24px', position:'relative', background:'linear-gradient(180deg,rgba(13,148,136,0.05) 0%,transparent 100%)' }}>
      <div style={{ position:'absolute', top:'5%',  right:'5%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'5%',left:'5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:64 }}>
          <span style={{ fontSize:12, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#0D9488' }}>Results</span>
          <h2 style={{ fontSize:'clamp(30px,4vw,52px)', fontWeight:900, letterSpacing:-1.5, color:'#042F2E', margin:'14px 0 16px' }}>
            Real Numbers.<br /><span className="text-gradient">Real Businesses.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((s,i) => {
            const r = useRef(null); const v = useInView(r, { once:true })
            return (
              <motion.div key={i} ref={r} initial={{ opacity:0, scale:0.9 }} animate={v ? { opacity:1, scale:1 } : {}} transition={{ duration:0.5, delay:i*0.08 }}
                whileHover={{ scale:1.03 }}
                style={{ padding:'28px 24px', borderRadius:18, textAlign:'center', background:'rgba(255,255,255,0.8)', border:`1px solid ${s.color}22`, boxShadow:`0 4px 20px ${s.color}10`, backdropFilter:'blur(8px)' }}>
                <div style={{ fontSize:40, fontWeight:900, letterSpacing:-1.5, marginBottom:8, background:`linear-gradient(135deg, ${s.color}, #134E4A)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                  <CountUp target={s.val} suffix={s.suffix} />
                </div>
                <div style={{ fontSize:15, fontWeight:700, color:'#042F2E', marginBottom:4 }}>{s.label}</div>
                <div style={{ fontSize:12, color:'#5EADA6' }}>{s.sub}</div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t,i) => <TestimonialCard key={i} t={t} delay={i*0.07} />)}
        </div>
      </div>
    </section>
  )
}
