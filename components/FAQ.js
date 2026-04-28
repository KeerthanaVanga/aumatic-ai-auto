import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  { q:"What tools and platforms do you build automations on?",               a:"We work across the full automation stack — Make.com (formerly Integromat), Zapier, n8n, and custom API builds. For AI, we use OpenAI (GPT-4o), Anthropic Claude, and custom fine-tuned models. We integrate with 100+ platforms including HubSpot, Salesforce, Notion, Slack, Airtable, Shopify, Stripe, Gmail, and virtually any tool with an API." },
  { q:"How long does it take to build and launch automations?",              a:"Most projects launch within 1–2 weeks. After our discovery call, we deliver a full automation blueprint within 48 hours. The build phase typically takes 5–10 business days depending on complexity, followed by a 2-day testing and QA phase before going live." },
  { q:"Do I need technical knowledge to work with you?",                     a:"Zero technical knowledge required. We handle everything — architecture, building, testing, and deployment. We also provide a detailed video walkthrough and documentation so you understand exactly how your automations work and can make basic edits yourself if needed." },
  { q:"What if something breaks after launch?",                              a:"Every package includes post-launch support (14–30 days depending on the plan). During this period, we monitor your automations, fix any issues, and optimize performance at no extra cost. For long-term peace of mind, we offer ongoing maintenance retainers." },
  { q:"How do you guarantee results?",                                       a:"We offer a 30-day results guarantee. If your automations aren't demonstrably saving you time and working as intended within 30 days of launch, we'll rebuild and optimize them for free — no questions asked. We've never had to invoke this for a client." },
  { q:"Can you automate workflows that involve AI and machine learning?",     a:"Absolutely — that's one of our core specialties. We build workflows that incorporate LLMs for tasks like email classification, lead scoring, content generation, data extraction, sentiment analysis, and conversational AI agents. We select the right model for each use case." },
  { q:"What's the difference between your plans?",                           a:"The Starter plan is ideal for businesses automating 2–3 key workflows. Growth covers your entire business stack with up to 10 workflows and advanced AI integration. Scale is a full ongoing partnership — unlimited workflows, dedicated engineer, and continuous optimization. All plans include full builds and testing." },
  { q:"Do you sign NDAs and how do you handle data security?",               a:"Yes, we sign NDAs before any discovery call if requested. We follow strict data security practices — all credentials are stored encrypted, we use OAuth where possible, and we never store your business data beyond what's needed for the build. We're happy to walk through our security approach on a call." },
]

function FAQItem({ faq, i }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity:0, y:16 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.5, delay:(i%4)*0.07 }}
      style={{ borderRadius:14, background: open ? 'rgba(13,148,136,0.06)' : 'rgba(255,255,255,0.75)', border: open ? '1px solid rgba(13,148,136,0.25)' : '1px solid rgba(13,148,136,0.12)', overflow:'hidden', transition:'background 0.3s, border-color 0.3s', boxShadow:'0 2px 12px rgba(13,148,136,0.04)' }}>
      <button onClick={() => setOpen(!open)} style={{ width:'100%', padding:'20px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, background:'none', border:'none', cursor:'pointer', textAlign:'left' }}>
        <span style={{ fontSize:15, fontWeight:700, color:'#042F2E', lineHeight:1.4 }}>{faq.q}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration:0.25 }}
          style={{ width:28, height:28, borderRadius:8, flexShrink:0, background: open ? 'rgba(13,148,136,0.15)' : 'rgba(13,148,136,0.07)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke={open ? '#0D9488' : '#5EADA6'} strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.3, ease:[0.22,1,0.36,1] }} style={{ overflow:'hidden' }}>
            <div style={{ padding:'0 24px 20px', borderTop:'1px solid rgba(13,148,136,0.1)' }}>
              <p style={{ fontSize:14, color:'#155E59', lineHeight:1.75, marginTop:16 }}>{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true })
  return (
    <section id="faq" style={{ padding:'100px 24px', background:'linear-gradient(180deg,rgba(204,251,241,0.3) 0%,transparent 100%)', borderTop:'1px solid rgba(13,148,136,0.1)' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:56 }}>
          <span style={{ fontSize:12, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#0D9488' }}>FAQ</span>
          <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:900, letterSpacing:-1.5, color:'#042F2E', margin:'14px 0 16px' }}>
            Everything You<br /><span className="text-gradient">Need to Know</span>
          </h2>
          <p style={{ fontSize:16, color:'#155E59', lineHeight:1.65 }}>
            Still have questions? <a href="https://cal.com/chandan-kumar-zhrofj/30min" target="_blank" rel="noopener noreferrer" style={{ color:'#0D9488', textDecoration:'none', fontWeight:600 }}>Book a free call</a> — we'll answer everything.
          </p>
        </motion.div>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {faqs.map((faq,i) => <FAQItem key={i} faq={faq} i={i} />)}
        </div>
      </div>
    </section>
  )
}
