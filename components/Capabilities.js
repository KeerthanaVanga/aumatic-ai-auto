import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cats = [
  { icon:'🧠', title:'AI & Machine Learning',  tags:['OpenAI / GPT','Claude AI','Custom LLMs','RAG Systems','Computer Vision'] },
  { icon:'⚡', title:'Automation Platforms',   tags:['Make.com','Zapier','n8n','Custom APIs','Webhooks'] },
  { icon:'📋', title:'CRM & Operations',       tags:['HubSpot','Salesforce','Pipedrive','Monday CRM','Airtable'] },
  { icon:'💻', title:'Development',            tags:['TypeScript','Python','REST APIs','GraphQL','Node.js'] },
  { icon:'🛠️', title:'Business Tools',         tags:['Slack','Google Workspace','Microsoft 365','Notion','Asana'] },
  { icon:'📈', title:'Data & Analytics',       tags:['BigQuery','Snowflake','Power BI','Looker','dbt'] },
]

function CapCard({ c, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-40px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.55, delay:(i%3)*0.1 }}
      className="card" style={{ padding:'clamp(20px,2.5vw,28px)' }}
    >
      <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
        <div style={{ width:40, height:40, borderRadius:11, background:'rgba(194,98,45,0.1)', border:'1px solid rgba(194,98,45,0.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:19, flexShrink:0 }}>{c.icon}</div>
        <h3 style={{ fontSize:'clamp(16px,1.9vw,19px)', fontWeight:700, color:'#1A0F0A', letterSpacing:-0.2 }}>{c.title}</h3>
      </div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
        {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </motion.div>
  )
}

export default function Capabilities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true })
  return (
    <section id="capabilities" className="section-pad" style={{ background:'#F5EFE8', borderTop:'1px solid rgba(194,98,45,0.1)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:'clamp(40px,6vw,64px)' }}>
          <span className="label">Capabilities</span>
          <h2 style={{ fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, letterSpacing:-2.5, color:'#1A0F0A', margin:'0 0 20px', lineHeight:1.08, fontFamily:"'Montserrat', sans-serif" }}>
            Technologies We Master
          </h2>
          <p style={{ fontSize:'clamp(16px,1.8vw,19px)', color:'#5C3D2A', maxWidth:520, margin:'0 auto', lineHeight:1.7 }}>
            Platform-agnostic expertise. We pick the right tools for your unique needs.
          </p>
        </motion.div>
        <div className="grid-3">
          {cats.map((c,i) => <CapCard key={i} c={c} i={i} />)}
        </div>
      </div>
    </section>
  )
}
