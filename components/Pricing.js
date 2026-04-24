import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const plans = [
  { name:'Starter', price:{ monthly:997,  annual:797  }, desc:'Perfect for small businesses ready to automate their first workflows.',              features:['3 custom automation workflows','Up to 5 tool integrations','Basic AI chatbot setup','2 revision rounds','14-day post-launch support','Video walkthrough included'],                                                    cta:'Get Started', color:'#0D9488', popular:false },
  { name:'Growth',  price:{ monthly:2497, annual:1997 }, desc:'For growing teams who want to automate across their entire business stack.',         features:['10 custom automation workflows','Unlimited tool integrations','Advanced AI agent / chatbot','Lead scoring & CRM automation','30-day post-launch support','Priority Slack support channel','Monthly optimization review','Custom reporting dashboard'], cta:'Get Started', color:'#2DD4BF', popular:true  },
  { name:'Scale',   price:{ monthly:'Custom', annual:'Custom' }, desc:'Full-service automation partnership for scaling companies.',                  features:['Unlimited workflows & automations','Dedicated automation engineer','Full AI infrastructure build','Ongoing maintenance & support','Weekly strategy calls','SLA with uptime guarantees','Custom integrations & APIs','Team training included'],          cta:'Book a Call', color:'#134E4A', popular:false },
]

function PricingCard({ plan, i, annual }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-40px' })
  const price = annual ? plan.price.annual : plan.price.monthly
  const isCustom = price === 'Custom'

  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.6, delay:i*0.1, ease:[0.22,1,0.36,1] }}
      whileHover={{ y:-8, boxShadow: plan.popular ? '0 32px 80px rgba(45,212,191,0.25), 0 0 0 1px rgba(45,212,191,0.4)' : '0 24px 60px rgba(13,148,136,0.12)' }}
      style={{ padding: plan.popular ? 36 : 28, borderRadius:22,
        background: plan.popular ? 'linear-gradient(145deg,rgba(45,212,191,0.12),rgba(13,148,136,0.08))' : 'rgba(255,255,255,0.8)',
        border: plan.popular ? '1px solid rgba(45,212,191,0.35)' : '1px solid rgba(13,148,136,0.12)',
        position:'relative', overflow:'hidden', cursor:'default',
        boxShadow: plan.popular ? '0 0 60px rgba(45,212,191,0.12)' : '0 4px 20px rgba(13,148,136,0.06)',
        backdropFilter:'blur(12px)', transition:'box-shadow 0.3s',
      }}>
      {plan.popular && (
        <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', padding:'6px 20px', borderRadius:'0 0 12px 12px', background:'linear-gradient(135deg,#0D9488,#2DD4BF)', fontSize:11, fontWeight:800, color:'white', letterSpacing:0.5, whiteSpace:'nowrap' }}>✦ Most Popular</div>
      )}
      <div style={{ position:'absolute', top:-60, right:-60, width:160, height:160, borderRadius:'50%', background:`radial-gradient(circle, ${plan.color}15, transparent 70%)`, pointerEvents:'none' }} />
      <div style={{ paddingTop: plan.popular ? 16 : 0 }}>
        <div style={{ fontSize:12, fontWeight:700, color:plan.color, letterSpacing:1.5, textTransform:'uppercase', marginBottom:6 }}>{plan.name}</div>
        <div style={{ marginBottom:8 }}>
          {isCustom
            ? <span style={{ fontSize:36, fontWeight:900, color:'#042F2E', letterSpacing:-1 }}>Custom</span>
            : <>
                <AnimatePresence mode="wait">
                  <motion.span key={price} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} transition={{ duration:0.2 }}
                    style={{ fontSize:42, fontWeight:900, color:'#042F2E', letterSpacing:-1.5 }}>
                    ${price.toLocaleString()}
                  </motion.span>
                </AnimatePresence>
                <span style={{ fontSize:14, color:'#5EADA6', marginLeft:4 }}>/project</span>
              </>
          }
        </div>
        <p style={{ fontSize:13, color:'#155E59', lineHeight:1.6, marginBottom:24 }}>{plan.desc}</p>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
          {plan.features.map(f => (
            <div key={f} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
              <div style={{ width:18, height:18, borderRadius:99, background:`${plan.color}18`, border:`1px solid ${plan.color}44`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><polyline points="1.5,5 4,7.5 8.5,2.5" stroke={plan.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontSize:13, color:'#155E59', lineHeight:1.5 }}>{f}</span>
            </div>
          ))}
        </div>
        <motion.a href="#contact" whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
          style={{ display:'block', textAlign:'center', padding:'13px 24px', borderRadius:12, fontSize:14, fontWeight:800, textDecoration:'none', color:'white',
            background: plan.popular ? 'linear-gradient(135deg,#0D9488,#2DD4BF)' : `linear-gradient(135deg,${plan.color}cc,${plan.color})`,
            boxShadow: plan.popular ? '0 4px 24px rgba(13,148,136,0.35)' : `0 4px 16px ${plan.color}30`,
          }}>
          {plan.cta} →
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true })
  const [annual, setAnnual] = useState(false)
  return (
    <section id="pricing" style={{ padding:'100px 24px', borderTop:'1px solid rgba(13,148,136,0.1)', position:'relative', background:'linear-gradient(180deg,rgba(13,148,136,0.04) 0%,transparent 60%)' }}>
      <div style={{ position:'absolute', bottom:'10%', left:'50%', transform:'translateX(-50%)', width:700, height:400, background:'radial-gradient(ellipse, rgba(45,212,191,0.1) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:'20%', right:'5%', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle, rgba(13,148,136,0.07) 0%, transparent 65%)', pointerEvents:'none' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:56 }}>
          <span style={{ fontSize:12, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#0D9488' }}>Investment</span>
          <h2 style={{ fontSize:'clamp(30px,4vw,52px)', fontWeight:900, letterSpacing:-1.5, color:'#042F2E', margin:'14px 0 16px' }}>
            Simple, Transparent<br /><span className="text-gradient">Pricing</span>
          </h2>
          <p style={{ fontSize:17, color:'#155E59', maxWidth:480, margin:'0 auto 28px' }}>One-time project fees. No retainers, no surprises. Every package includes full builds, testing, and launch support.</p>

          {/* Toggle */}
          <div style={{ display:'inline-flex', alignItems:'center', gap:12, padding:'6px 8px', borderRadius:12, background:'rgba(13,148,136,0.07)', border:'1px solid rgba(13,148,136,0.15)' }}>
            <button onClick={() => setAnnual(false)} style={{ padding:'6px 16px', borderRadius:8, border:'none', cursor:'pointer', fontSize:13, fontWeight:600, transition:'all 0.2s', background: !annual ? 'rgba(13,148,136,0.2)' : 'transparent', color: !annual ? '#0D9488' : '#5EADA6' }}>One-time</button>
            <button onClick={() => setAnnual(true)}  style={{ padding:'6px 16px', borderRadius:8, border:'none', cursor:'pointer', fontSize:13, fontWeight:600, transition:'all 0.2s', background: annual ? 'rgba(13,148,136,0.2)' : 'transparent', color: annual ? '#0D9488' : '#5EADA6', display:'flex', alignItems:'center', gap:6 }}>
              Retainer
              <span style={{ fontSize:10, padding:'2px 6px', borderRadius:99, background:'rgba(13,148,136,0.15)', color:'#0D9488', fontWeight:700 }}>Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan,i) => <PricingCard key={i} plan={plan} i={i} annual={annual} />)}
        </div>

        {/* Guarantee */}
        <motion.div initial={{ opacity:0, y:16 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay:0.4, duration:0.6 }}
          style={{ marginTop:40, padding:'20px 28px', borderRadius:16, textAlign:'center', background:'rgba(13,148,136,0.07)', border:'1px solid rgba(13,148,136,0.2)', display:'flex', alignItems:'center', justifyContent:'center', gap:14 }}>
          <span style={{ fontSize:24 }}>🛡️</span>
          <div style={{ textAlign:'left' }}>
            <div style={{ fontSize:14, fontWeight:800, color:'#0D9488', marginBottom:2 }}>30-Day Results Guarantee</div>
            <div style={{ fontSize:13, color:'#155E59' }}>If your automations aren't saving you time in 30 days, we'll rebuild them for free — no questions asked.</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
