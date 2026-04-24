import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  { icon:'🔄', title:'Workflow Automation',   desc:'We map and automate your most time-consuming business processes — from lead handling to invoicing — using Make, Zapier, and n8n.', features:['Multi-step workflows','Error handling & alerts','Custom triggers','API integrations'],       color:'#0D9488', accent:'rgba(13,148,136,0.08)',  border:'rgba(13,148,136,0.18)' },
  { icon:'🤖', title:'AI Agents & Chatbots',  desc:'Deploy intelligent AI assistants that handle customer queries, qualify leads, and take action — 24/7, without human intervention.',         features:['GPT-4o powered','CRM integration','Lead qualification','Multi-channel support'],    color:'#2DD4BF', accent:'rgba(45,212,191,0.10)',  border:'rgba(45,212,191,0.25)', featured:true },
  { icon:'📊', title:'Data & Reporting',      desc:'Automated reporting pipelines that pull data from all your tools and deliver real-time dashboards directly to your inbox or Slack.',          features:['Automated reports','Live dashboards','Slack/email delivery','Custom KPIs'],         color:'#0F766E', accent:'rgba(15,118,110,0.08)',  border:'rgba(15,118,110,0.18)' },
  { icon:'📧', title:'Email & Outreach',      desc:"AI-personalized cold email and follow-up sequences that scale your outreach without making it feel automated.",                              features:['AI personalization','A/B testing','Auto follow-ups','Reply detection'],             color:'#134E4A', accent:'rgba(19,78,74,0.07)',    border:'rgba(19,78,74,0.18)'  },
  { icon:'🛒', title:'E-commerce Automation', desc:'From order processing to inventory alerts, abandoned cart flows, and review requests — fully automated Shopify & WooCommerce ops.',          features:['Order automation','Inventory sync','Abandoned cart','Review requests'],            color:'#0D9488', accent:'rgba(13,148,136,0.08)',  border:'rgba(13,148,136,0.18)' },
  { icon:'🔗', title:'Systems Integration',   desc:'Connect your entire software stack — CRM, helpdesk, project management, billing — into one seamless automated ecosystem.',                  features:['Two-way sync','Webhook handling','Custom API builds','Legacy connectors'],          color:'#2DD4BF', accent:'rgba(45,212,191,0.08)',  border:'rgba(45,212,191,0.2)'  },
]

function ServiceCard({ s, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.6, delay:(i%3)*0.1, ease:[0.22,1,0.36,1] }}
      whileHover={{ y:-6, boxShadow: s.featured ? `0 24px 60px rgba(45,212,191,0.25), 0 0 0 1px rgba(45,212,191,0.35)` : `0 20px 50px rgba(13,148,136,0.12)` }}
      style={{ padding:28, borderRadius:20,
        background: s.featured ? 'linear-gradient(145deg,rgba(45,212,191,0.12),rgba(13,148,136,0.08))' : 'rgba(255,255,255,0.75)',
        border: s.featured ? '1px solid rgba(45,212,191,0.3)' : '1px solid rgba(13,148,136,0.12)',
        backdropFilter:'blur(12px)', position:'relative', overflow:'hidden', cursor:'default',
        boxShadow: s.featured ? '0 0 50px rgba(45,212,191,0.1)' : '0 4px 20px rgba(13,148,136,0.06)',
        transition:'box-shadow 0.3s',
      }}>
      {s.featured && (
        <div style={{ position:'absolute', top:16, right:16, padding:'4px 12px', borderRadius:99, background:'linear-gradient(135deg,#0D9488,#2DD4BF)', fontSize:11, fontWeight:700, color:'white' }}>Most Popular</div>
      )}
      <div style={{ position:'absolute', top:-40, right:-40, width:120, height:120, borderRadius:'50%', background:`radial-gradient(circle, ${s.color}18, transparent 70%)`, pointerEvents:'none' }} />
      <div style={{ width:48, height:48, borderRadius:14, background:s.accent, border:`1px solid ${s.border}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, marginBottom:20 }}>{s.icon}</div>
      <h3 style={{ fontSize:19, fontWeight:800, color:'#042F2E', marginBottom:10, letterSpacing:-0.3 }}>{s.title}</h3>
      <p style={{ fontSize:14, color:'#155E59', lineHeight:1.7, marginBottom:20 }}>{s.desc}</p>
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {s.features.map(f => (
          <div key={f} style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:16, height:16, borderRadius:99, background:`${s.color}18`, border:`1px solid ${s.color}44`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><polyline points="1.5,5 4,7.5 8.5,2.5" stroke={s.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ fontSize:13, color:'#155E59' }}>{f}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true })
  return (
    <section id="services" style={{ padding:'100px 24px', position:'relative', borderTop:'1px solid rgba(13,148,136,0.1)' }}>
      <div style={{ position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)', width:800, height:300, background:'radial-gradient(ellipse, rgba(45,212,191,0.08) 0%, transparent 70%)', pointerEvents:'none' }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:64 }}>
          <span style={{ fontSize:12, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#0D9488' }}>What We Do</span>
          <h2 style={{ fontSize:'clamp(30px,4vw,52px)', fontWeight:900, letterSpacing:-1.5, color:'#042F2E', margin:'14px 0 16px' }}>
            Everything You Need to<br /><span className="text-gradient">Automate & Scale</span>
          </h2>
          <p style={{ fontSize:17, color:'#155E59', maxWidth:520, margin:'0 auto', lineHeight:1.65 }}>
            We don't just set up automations — we architect intelligent systems that evolve with your business.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s,i) => <ServiceCard key={i} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
