import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// "Label: content" split for solution bullets
function SolutionBullet({ text }) {
  const colonIdx = text.indexOf(':')
  const hasLabel = colonIdx > -1 && colonIdx < 48
  const label    = hasLabel ? text.slice(0, colonIdx) : null
  const body     = hasLabel ? text.slice(colonIdx + 1).trim() : text
  return (
    <p style={{ fontSize: 16, color: '#8A6A5A', lineHeight: 1.88, maxWidth: 740, margin: 0 }}>
      {label && <strong style={{ color: '#3D2314', fontWeight: 600 }}>{label}: </strong>}
      {body}
    </p>
  )
}

// Simple dot bullet for impact
function ImpactBullet({ text }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <span style={{ flexShrink: 0, marginTop: 9, width: 6, height: 6, borderRadius: '50%', background: '#C2622D', opacity: 0.7 }} />
      <p style={{ fontSize: 16, color: '#8A6A5A', lineHeight: 1.82, margin: 0 }}>{text}</p>
    </div>
  )
}

// Arrow-circle icon bullet for Why It Works
function WhyBullet({ text }) {
  const colonIdx = text.indexOf(':')
  const hasLabel = colonIdx > -1 && colonIdx < 48
  const label    = hasLabel ? text.slice(0, colonIdx) : null
  const body     = hasLabel ? text.slice(colonIdx + 1).trim() : text
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <span style={{
        flexShrink: 0,
        width: 26, height: 26,
        borderRadius: '50%',
        border: '1.5px solid rgba(194,98,45,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginTop: 1,
        background: 'rgba(194,98,45,0.06)',
      }}>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#C2622D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span style={{ fontSize: 15, color: '#8A6A5A', lineHeight: 1.75 }}>
        {label && <strong style={{ color: '#3D2314', fontWeight: 600 }}>{label}: </strong>}
        {body}
      </span>
    </div>
  )
}

export default function CaseStudySection({ section, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const isGrid = section.type === 'whyItWorks'

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.2) }}
      style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)', marginBottom: 72 }}
    >
      {/* Section heading — large, matching screenshot */}
      <h2 style={{
        fontSize: 'clamp(28px,3.8vw,48px)',
        fontWeight: 900,
        color: '#1A0F0A',
        letterSpacing: -1.2,
        marginBottom: 30,
        lineHeight: 1.15,
        fontFamily: "'Montserrat', sans-serif",
      }}>
        {section.title}
      </h2>

      {/* Challenge / plain paragraph */}
      {section.content && !isGrid && (
        <p style={{ fontSize: 16, color: '#8A6A5A', lineHeight: 1.88, maxWidth: 740, marginBottom: section.bullets ? 32 : 0 }}>
          {section.content}
        </p>
      )}

      {/* Solution bullets — plain spaced paragraphs (no icon) */}
      {section.bullets && section.type === 'solution' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {section.bullets.map((b, i) => <SolutionBullet key={i} text={b} />)}
        </div>
      )}

      {/* Impact bullets — simple dot list */}
      {section.bullets && section.type === 'impact' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {section.bullets.map((b, i) => <ImpactBullet key={i} text={b} />)}
        </div>
      )}

      {/* Why It Works — 2-col icon grid + summary paragraph */}
      {section.bullets && isGrid && (
        <>
          <div
            className="cs-why-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 48px', marginBottom: section.content ? 32 : 0 }}
          >
            {section.bullets.map((b, i) => (
              <div key={i} style={section.bullets.length % 2 !== 0 && i === section.bullets.length - 1 ? { gridColumn: '1 / -1' } : {}}>
                <WhyBullet text={b} />
              </div>
            ))}
          </div>

          {section.content && (
            <p style={{
              fontSize: 16,
              color: '#8A6A5A',
              lineHeight: 1.88,
              maxWidth: 820,
              borderLeft: '2px solid rgba(194,98,45,0.35)',
              paddingLeft: 22,
              marginTop: 8,
            }}>
              {section.content}
            </p>
          )}
        </>
      )}

      <style>{`@media(max-width:640px){.cs-why-grid{grid-template-columns:1fr!important}}`}</style>
    </motion.section>
  )
}
