import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: 'Working with Aumatic completely changed how we handle client engagement on Instagram. The DM and comment automation saved hours every day and helped us close more deals through faster, more consistent interactions.',
    name: 'Ali Shah',
    role: 'Social Media Manager, Pixel Social (Toronto)',
    initials: 'AS',
    color: '#C2622D',
  },
  {
    quote: 'Our LinkedIn presence grew significantly. The AI posting system finds relevant content in our niche, rewrites it in our brand voice, and publishes daily. We now get qualified leads directly from our content without lifting a finger.',
    name: 'David Clarke',
    role: 'Founder, ScaleUp Agency (Chicago)',
    initials: 'DC',
    color: '#D4784A',
  },
  {
    quote: 'The social media automation keeps our brand consistent across Instagram, TikTok, and LinkedIn. It genuinely feels like having a dedicated content team working around the clock — without the overhead.',
    name: 'Sandra Chen',
    role: 'Marketing Director, NorthStream Marketing (Vancouver)',
    initials: 'SC',
    color: '#8A6A5A',
  },
  {
    quote: 'The newsletter monitoring automation opened up a whole new lead channel for us. It identifies businesses with deliverability issues and triggers outreach automatically. A genuinely smart approach to prospecting.',
    name: 'Mark Stevens',
    role: 'Head of Growth, ProReach Agency (New York)',
    initials: 'MS',
    color: '#6B4A3A',
  },
  {
    quote: 'With the WhatsApp broadcast automation, every new book release now reaches thousands of readers instantly. We moved from manual messaging to automated, personalised broadcasts — and our launch-day results improved noticeably.',
    name: 'Maria Costa',
    role: 'Founder, Bluebell Publishing',
    initials: 'MC',
    color: '#A8501F',
  },
  {
    quote: 'Our team saves hours every week with the document consolidation automation. It creates all client documents, names them correctly, and files them in the right Drive folders automatically. Zero manual errors.',
    name: 'Ryan Patel',
    role: 'Operations Lead, Vector Consulting (Austin)',
    initials: 'RP',
    color: '#D4784A',
  },
  {
    quote: 'The WhatsApp local service connector transformed how we match customers with service providers. Requests get routed in seconds, providers get jobs they would have missed, and the whole system runs without manual coordination.',
    name: 'James Miller',
    role: 'Founder, QuickFix Services (Ohio)',
    initials: 'JM',
    color: '#C2622D',
  },
]

const GAP = 24

export default function Testimonials() {
  const [current,    setCurrent]    = useState(0)
  const [containerW, setContainerW] = useState(0)
  const [touchStart, setTouchStart] = useState(null)

  const containerRef = useRef(null)
  const headerRef    = useRef(null)
  const inView       = useInView(headerRef, { once: true })
  const n            = testimonials.length

  /* ── Measure container width (responsive) ── */
  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerW(containerRef.current.offsetWidth)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  /* ── Auto-advance ── */
  useEffect(() => {
    const t = setTimeout(() => setCurrent(c => (c + 1) % n), 5500)
    return () => clearTimeout(t)
  }, [current, n])

  /* ── Dimensions ── */
  const CARD_W = containerW > 0 ? Math.min(640, Math.max(280, containerW * 0.62)) : 0
  const trackX = containerW > 0 ? containerW / 2 - current * (CARD_W + GAP) - CARD_W / 2 : 0

  const goTo = i   => setCurrent(i)
  const go   = dir => setCurrent(c => (c + dir + n) % n)

  /* ── Touch swipe ── */
  const onTouchStart = e => setTouchStart(e.touches[0].clientX)
  const onTouchEnd   = e => {
    if (touchStart == null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 48) go(diff > 0 ? 1 : -1)
    setTouchStart(null)
  }

  return (
    <section
      id="testimonials"
      className="section-pad"
      style={{ background: '#EDE4D8', position: 'relative', overflow: 'hidden' }}
    >
      {/* Orbs */}
      <div className="orb3" style={{ position: 'absolute', top: '12%', left: '4%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,rgba(194,98,45,0.06) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div className="orb1" style={{ position: 'absolute', bottom: '12%', right: '3%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(194,98,45,0.05) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(194,98,45,0.1)', border: '1px solid rgba(194,98,45,0.2)', borderRadius: 99, padding: '6px 18px', marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C2622D', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#C2622D' }}>Testimonials</span>
          </div>

          <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, color: '#1A0F0A', letterSpacing: -1.5, lineHeight: 1.1, margin: 0 }}>
            What Clients Say About<br />
            <span style={{ background: 'linear-gradient(135deg,#C2622D,#A8501F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Working With Us
            </span>
          </h2>
        </motion.div>

        {/* ── Carousel stage ── */}
        <div
          ref={containerRef}
          style={{ position: 'relative', overflow: 'hidden', paddingTop: 8, paddingBottom: 8 }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Left fade gradient */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 'clamp(60px,10vw,130px)', background: 'linear-gradient(90deg,#EDE4D8 0%,transparent 100%)', zIndex: 3, pointerEvents: 'none' }} />
          {/* Right fade gradient */}
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 'clamp(60px,10vw,130px)', background: 'linear-gradient(270deg,#EDE4D8 0%,transparent 100%)', zIndex: 3, pointerEvents: 'none' }} />

          {/* Sliding track */}
          <div style={{
            display: 'flex',
            gap: GAP,
            transform: `translateX(${trackX}px)`,
            transition: 'transform 0.55s cubic-bezier(0.25,1,0.5,1)',
          }}>
            {testimonials.map((t, i) => {
              const isActive = i === current
              return (
                <div
                  key={i}
                  onClick={() => !isActive && goTo(i)}
                  style={{
                    width: CARD_W || 640,
                    flexShrink: 0,
                    borderRadius: 20,
                    padding: 'clamp(28px,3.5vw,44px) clamp(22px,3.5vw,48px)',
                    background: isActive
                      ? 'linear-gradient(160deg,#2C1810 0%,#3D2314 100%)'
                      : 'rgba(194,98,45,0.05)',
                    border: `1px solid ${isActive ? 'rgba(194,98,45,0.28)' : 'rgba(194,98,45,0.1)'}`,
                    boxShadow: isActive ? '0 24px 64px rgba(194,98,45,0.2)' : 'none',
                    opacity: isActive ? 1 : 0.38,
                    transform: isActive ? 'scale(1)' : 'scale(0.93)',
                    transition: 'all 0.55s cubic-bezier(0.25,1,0.5,1)',
                    cursor: isActive ? 'default' : 'pointer',
                  }}
                >
                  {/* Quote text */}
                  <p style={{
                    fontSize: 'clamp(14px,1.4vw,17px)',
                    color: isActive ? 'rgba(245,239,232,0.82)' : '#8A6A5A',
                    lineHeight: 1.85,
                    textAlign: 'center',
                    marginBottom: 28,
                    transition: 'color 0.55s',
                  }}>
                    "{t.quote}"
                  </p>

                  {/* Divider */}
                  <div style={{ borderTop: `1px solid ${isActive ? 'rgba(194,98,45,0.22)' : 'rgba(194,98,45,0.08)'}`, marginBottom: 24, transition: 'border-color 0.55s' }} />

                  {/* Author row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    {/* Avatar */}
                    <div style={{
                      width: 44, height: 44,
                      borderRadius: '50%',
                      background: t.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, fontWeight: 800, color: 'white',
                      flexShrink: 0,
                      boxShadow: isActive ? `0 4px 16px ${t.color}60` : 'none',
                      transition: 'box-shadow 0.55s',
                    }}>
                      {t.initials}
                    </div>

                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: isActive ? '#C2622D' : '#8A6A5A', transition: 'color 0.55s' }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: 12, color: isActive ? 'rgba(245,239,232,0.42)' : '#B89A88', lineHeight: 1.5, transition: 'color 0.55s' }}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Dot / dash indicators ── */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 7, marginTop: 36 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width:  i === current ? 32 : 8,
                height: 4,
                borderRadius: 99,
                background: i === current ? '#C2622D' : 'rgba(194,98,45,0.28)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.35s cubic-bezier(0.25,1,0.5,1)',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
