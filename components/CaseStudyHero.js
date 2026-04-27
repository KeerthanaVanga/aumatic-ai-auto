import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CaseStudyHero({ study }) {
  return (
    <div style={{ paddingTop: 80, background: '#F5EFE8' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(16px,4vw,40px) clamp(36px,4vw,56px)' }}>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: 28 }}
        >
          <Link
            href="/#case-studies"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              fontSize: 13, fontWeight: 600, color: '#8A6A5A',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#C2622D'}
            onMouseLeave={e => e.currentTarget.style.color = '#8A6A5A'}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Case Studies
          </Link>
        </motion.div>

        {/* Industry + date badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}
        >
          <span style={{
            background: 'rgba(194,98,45,0.1)', border: '1px solid rgba(194,98,45,0.22)',
            borderRadius: 99, padding: '5px 14px',
            fontSize: 11, fontWeight: 700, letterSpacing: 1.2,
            textTransform: 'uppercase', color: '#C2622D',
          }}>
            {study.industry}
          </span>
          <span style={{
            background: 'rgba(194,98,45,0.06)', border: '1px solid rgba(194,98,45,0.12)',
            borderRadius: 99, padding: '5px 14px',
            fontSize: 11, fontWeight: 500, color: '#8A6A5A',
          }}>
            {study.date}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(28px,4.5vw,58px)',
            fontWeight: 900,
            color: '#1A0F0A',
            letterSpacing: -2,
            lineHeight: 1.1,
            fontFamily: "'Playfair Display', serif",
            maxWidth: 820,
            marginBottom: 24,
          }}
        >
          {study.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          style={{
            fontSize: 'clamp(16px,1.7vw,19px)',
            color: '#8A6A5A',
            lineHeight: 1.82,
            maxWidth: 680,
            marginBottom: 28,
          }}
        >
          {study.description}
        </motion.p>

        {/* Category + metrics labels */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
        >
          {study.category && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                fontSize: 11, fontWeight: 800,
                letterSpacing: 2.2, textTransform: 'uppercase',
                color: '#C2622D',
              }}>
                {study.category}
              </span>
              {study.metricsLabel && (
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(194,98,45,0.45)', display: 'inline-block', flexShrink: 0 }} />
              )}
            </div>
          )}
          {study.metricsLabel && (
            <span style={{
              fontSize: 11, fontWeight: 700,
              letterSpacing: 1.8, textTransform: 'uppercase',
              color: '#C2622D', opacity: 0.75,
            }}>
              {study.metricsLabel}
            </span>
          )}
        </motion.div>

        {/* Bottom border */}
        <div style={{ marginTop: 40, height: 1, background: 'linear-gradient(90deg,rgba(194,98,45,0.22) 0%,transparent 80%)' }} />
      </div>
    </div>
  )
}
