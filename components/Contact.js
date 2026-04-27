import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CAL_BASE = 'https://cal.com/tana-aumatic-jwapmu'

const MEETINGS = [
  {
    label: '15 Min Call',
    sub: 'Quick Intro',
    slug: '15min',
    icon: '⚡',
    duration: '15',
    desc: 'A quick chat to see if we are a fit. No fluff, just clarity.',
  },
  {
    label: '30 Min Call',
    sub: 'Deep Dive',
    slug: '30min',
    icon: '🎯',
    duration: '30',
    desc: 'Walk us through your workflows. We will map the automation opportunities.',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="contact" className="section-pad" style={{ background: 'linear-gradient(180deg,#EDE4D8 0%,#F5EFE8 100%)', borderTop: '1px solid rgba(194,98,45,0.12)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse,rgba(194,98,45,0.08) 0%,transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(36px,5vw,56px)' }}>
          <span className="label">Get Started</span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, letterSpacing: -2, color: '#1A0F0A', margin: '14px 0 16px', fontFamily: "'Montserrat', sans-serif" }}>
            Book Your Free<br />Consultation
          </h2>
          <p style={{ fontSize: 'clamp(15px,1.8vw,17px)', color: '#5C3D2A', lineHeight: 1.65 }}>
            Tell us about your business. We will show you exactly where AI can save hundreds of hours.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="cal-grid">
          {MEETINGS.map((m, i) => (
            <motion.div key={m.slug}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(14px)', border: '1px solid rgba(194,98,45,0.16)', borderRadius: 22, padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 4px 32px rgba(194,98,45,0.07)' }}>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 30 }}>{m.icon}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 18, color: '#1A0F0A', letterSpacing: -0.4 }}>{m.label}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#C2622D', textTransform: 'uppercase', letterSpacing: 1.5, marginTop: 2 }}>{m.sub}</div>
                </div>
              </div>

              <p style={{ fontSize: 14, color: '#5C3D2A', lineHeight: 1.7, margin: 0 }}>{m.desc}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#8A6A5A', flexWrap: 'wrap' }}>
                <span>⏱ {m.duration} min</span>
                <span style={{ opacity: 0.4 }}>·</span>
                <span>📹 Google Meet</span>
                <span style={{ opacity: 0.4 }}>·</span>
                <span>🆓 Free</span>
              </div>

              <motion.a
                href={`${CAL_BASE}/${m.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.97 }}
                style={{ marginTop: 'auto', display: 'block', width: '100%', padding: '14px 24px', borderRadius: 12, background: 'linear-gradient(135deg,#C2622D,#A8501F)', border: 'none', color: '#fff', fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 20px rgba(194,98,45,0.35)', letterSpacing: 0.2, textDecoration: 'none', textAlign: 'center' }}>
                Book {m.label} →
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', fontSize: 13, color: '#8A6A5A', marginTop: 20 }}>
          No commitment required · Google Meet link sent instantly · Reply within 24h
        </motion.p>
      </div>

      <style>{`@media(max-width:600px){.cal-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
