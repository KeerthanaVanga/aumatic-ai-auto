import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Icon({ paths }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C2622D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  )
}

const cats = [
  {
    icon: <Icon paths={[
      'M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h2a2 2 0 0 1 2 2v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-1a2 2 0 0 1 2-2h2V9.5A4 4 0 0 1 12 2z',
    ]} />,
    title: 'AI & Machine Learning',
    tags: ['OpenAI / GPT', 'Claude AI', 'Custom LLMs', 'RAG Systems', 'Computer Vision'],
  },
  {
    icon: <Icon paths={['M13 2L3 14h9l-1 8 10-12h-9l1-8z']} />,
    title: 'Automation Platforms',
    tags: ['Make.com', 'Zapier', 'n8n', 'Custom APIs', 'Webhooks'],
  },
  {
    icon: <Icon paths={[
      'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
      'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
      'M23 21v-2a4 4 0 0 0-3-3.87',
      'M16 3.13a4 4 0 0 1 0 7.75',
    ]} />,
    title: 'CRM & Operations',
    tags: ['HubSpot', 'Salesforce', 'Pipedrive', 'Monday CRM', 'Airtable'],
  },
  {
    icon: <Icon paths={['M16 18l6-6-6-6', 'M8 6l-6 6 6 6']} />,
    title: 'Development',
    tags: ['TypeScript', 'Python', 'REST APIs', 'GraphQL', 'Node.js'],
  },
  {
    icon: <Icon paths={[
      'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    ]} />,
    title: 'Business Tools',
    tags: ['Slack', 'Google Workspace', 'Microsoft 365', 'Notion', 'Asana'],
  },
  {
    icon: <Icon paths={['M18 20V10', 'M12 20V4', 'M6 20v-6']} />,
    title: 'Data & Analytics',
    tags: ['BigQuery', 'Snowflake', 'Power BI', 'Looker', 'dbt'],
  },
]

function CapCard({ c, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
      className="card" style={{ padding: 'clamp(20px,2.5vw,28px)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{
          width: 42, height: 42, borderRadius: 12,
          background: 'rgba(194,98,45,0.10)', border: '1px solid rgba(194,98,45,0.22)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          {c.icon}
        </div>
        <h3 style={{ fontSize: 'clamp(16px,1.9vw,19px)', fontWeight: 700, color: '#1A0F0A', letterSpacing: -0.2 }}>
          {c.title}
        </h3>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </motion.div>
  )
}

export default function Capabilities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="capabilities" className="section-pad" style={{ background: '#F5EFE8', borderTop: '1px solid rgba(194,98,45,0.1)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px,6vw,64px)' }}>
          <span className="label">Capabilities</span>
          <h2 style={{ fontSize: 'clamp(44px,5.5vw,72px)', fontWeight: 900, letterSpacing: -2.5, color: '#1A0F0A', margin: '0 0 20px', lineHeight: 1.08, fontFamily: "'Montserrat', sans-serif" }}>
            Technologies We Master
          </h2>
          <p style={{ fontSize: 'clamp(17px,1.9vw,21px)', color: '#5C3D2A', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Platform-agnostic expertise. We pick the right tools for your unique needs.
          </p>
        </motion.div>
        <div className="grid-3">
          {cats.map((c, i) => <CapCard key={i} c={c} i={i} />)}
        </div>
      </div>
    </section>
  )
}
