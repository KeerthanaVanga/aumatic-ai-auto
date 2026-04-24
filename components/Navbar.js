import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Process',      href: '#process' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Impact',       href: '#impact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = scrolled ? 'rgba(245,239,232,0.97)' : 'rgba(245,239,232,0.92)'

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: navBg,
      backdropFilter: 'blur(18px) saturate(180%)',
      borderBottom: scrolled ? '1px solid rgba(194,98,45,0.14)' : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 20px rgba(194,98,45,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 clamp(16px,3vw,32px)', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* ── Logo – exact flame + Aumatic.AI ── */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path d="M16 2C16 2 8 10 8 18C8 22.4 11.6 26 16 26C20.4 26 24 22.4 24 18C24 14 20 10 20 10C20 10 19 14 16 16C13 14 12 10 12 10C12 10 16 6 16 2Z" fill="#C2622D"/>
            <path d="M16 16C14 16 12 17.5 12 20C12 22.2 13.8 24 16 24C18.2 24 20 22.2 20 20C20 17.5 18 16 16 16Z" fill="#E8A87C"/>
          </svg>
          <span style={{ fontSize: 19, fontWeight: 900, letterSpacing: -0.5, color: '#1A0F0A', fontFamily: "'Playfair Display', serif" }}>
            Aumatic.<span style={{ color: '#C2622D' }}>AI</span>
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hide-mobile">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{ padding: '8px 18px', borderRadius: 8, fontSize: 15, fontWeight: 500, color: '#3D2314', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.target.style.color = '#C2622D'; e.target.style.background = 'rgba(194,98,45,0.07)' }}
              onMouseLeave={e => { e.target.style.color = '#3D2314'; e.target.style.background = 'transparent' }}
            >{l.label}</a>
          ))}
        </nav>

        {/* ── CTA + hamburger ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <motion.a href="#contact" whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
            style={{ padding: '11px 24px', borderRadius: 10, fontSize: 15, fontWeight: 700, background: 'linear-gradient(135deg,#C2622D,#A8501F)', color: 'white', textDecoration: 'none', boxShadow: '0 4px 18px rgba(194,98,45,0.38)', whiteSpace: 'nowrap' }}>
            Book a Call
          </motion.a>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} aria-label="menu"
            style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}
            className="show-mobile"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{ width: 24, height: 2.5, background: '#C2622D', borderRadius: 99, display: 'block', transition: '0.3s',
                transform: i===0 && open ? 'rotate(45deg) translate(5px,5px)' : i===2 && open ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
                opacity: i===1 && open ? 0 : 1 }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden', borderTop: '1px solid rgba(194,98,45,0.12)', background: 'rgba(245,239,232,0.99)' }}
          >
            <div style={{ padding: '12px 20px 20px' }}>
              {links.map(l => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '14px 16px', borderRadius: 10, fontSize: 16, fontWeight: 600, color: '#3D2314', textDecoration: 'none', borderBottom: '1px solid rgba(194,98,45,0.08)' }}
                  onMouseEnter={e => e.target.style.color = '#C2622D'}
                  onMouseLeave={e => e.target.style.color = '#3D2314'}
                >{l.label}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                style={{ display: 'block', marginTop: 16, padding: '14px', borderRadius: 12, textAlign: 'center', background: 'linear-gradient(135deg,#C2622D,#A8501F)', color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: 16 }}>
                Book a Free Consultation →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
