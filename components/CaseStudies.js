import { useState, useMemo, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '../data/caseStudies'

const PER_PAGE = 6

export default function CaseStudies() {
  const headerRef = useRef(null)
  const inView    = useInView(headerRef, { once: true })

  const [query, setQuery] = useState('')
  const [page,  setPage]  = useState(0)

  /* â”€â”€ Filtered list â”€â”€ */
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return caseStudies
    return caseStudies.filter(s =>
      s.title.toLowerCase().includes(q)    ||
      s.summary.toLowerCase().includes(q)  ||
      s.industry.toLowerCase().includes(q) ||
      (s.category || '').toLowerCase().includes(q) ||
      s.tags.some(t => t.toLowerCase().includes(q))
    )
  }, [query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const safePage   = Math.min(page, totalPages - 1)
  const pageItems  = filtered.slice(safePage * PER_PAGE, (safePage + 1) * PER_PAGE)

  function handleSearch(e) {
    setQuery(e.target.value)
    setPage(0)
  }
  function clearSearch() {
    setQuery('')
    setPage(0)
  }

  return (
    <section id="case-studies" className="section-pad" style={{ background: '#F5EFE8', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative orbs */}
      <div className="orb1" style={{ position: 'absolute', top: '8%', right: '4%', width: 460, height: 460, borderRadius: '50%', background: 'radial-gradient(circle,rgba(194,98,45,0.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div className="orb2" style={{ position: 'absolute', bottom: '8%', left: '2%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,rgba(194,98,45,0.05) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div className="max-w-6xl mx-auto">

        {/* â”€â”€ Section header â”€â”€ */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span className="label">Case Studies</span>
          <h2 style={{ fontSize: 'clamp(44px,5.5vw,68px)', fontWeight: 900, letterSpacing: -2.5, lineHeight: 1.08, color: '#1A0F0A', margin: '0 0 20px' }}>
            Real Clients.<br />
            <span style={{ background: 'linear-gradient(135deg,#C2622D,#A8501F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Real Outcomes.
            </span>
          </h2>
          <p style={{ fontSize: 'clamp(17px,1.9vw,21px)', color: '#8A6A5A', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            See how we've helped businesses automate their most time-consuming workflows and unlock measurable growth.
          </p>
        </motion.div>

        {/* â”€â”€ Search + count row â”€â”€ */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 14 }}
        >
          {/* Result count */}
          <span style={{ fontSize: 14, color: '#8A6A5A', fontWeight: 500 }}>
            {filtered.length} case {filtered.length === 1 ? 'study' : 'studies'}
            {query && <span style={{ color: '#C2622D' }}> for "{query}"</span>}
          </span>

          {/* Search input */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            {/* Search icon */}
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              style={{ position: 'absolute', left: 14, pointerEvents: 'none', flexShrink: 0 }}
            >
              <circle cx="6.5" cy="6.5" r="4.5" stroke="#8A6A5A" strokeWidth="1.4"/>
              <path d="M10 10L13.5 13.5" stroke="#8A6A5A" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>

            <input
              type="text"
              placeholder="Search case studiesâ€¦"
              value={query}
              onChange={handleSearch}
              style={{
                width: 'clamp(200px,28vw,300px)',
                padding: '10px 38px 10px 38px',
                borderRadius: 99,
                border: '1px solid rgba(194,98,45,0.22)',
                background: 'rgba(237,228,216,0.6)',
                fontSize: 14,
                color: '#3D2314',
                outline: 'none',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                fontFamily: 'inherit',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(194,98,45,0.5)'
                e.target.style.boxShadow   = '0 0 0 3px rgba(194,98,45,0.09)'
                e.target.style.background  = 'rgba(255,255,255,0.85)'
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(194,98,45,0.22)'
                e.target.style.boxShadow   = 'none'
                e.target.style.background  = 'rgba(237,228,216,0.6)'
              }}
            />

            {/* Clear button */}
            {query && (
              <button
                onClick={clearSearch}
                style={{ position: 'absolute', right: 12, background: 'none', border: 'none', cursor: 'pointer', padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8A6A5A', lineHeight: 1, fontSize: 16, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C2622D'}
                onMouseLeave={e => e.currentTarget.style.color = '#8A6A5A'}
                aria-label="Clear search"
              >
                Ã—
              </button>
            )}
          </div>
        </motion.div>

        {/* â”€â”€ Cards grid â”€â”€ */}
        <AnimatePresence mode="wait">
          {pageItems.length > 0 ? (
            <motion.div
              key={`${query}-${safePage}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid-3"
            >
              {pageItems.map((study, i) => (
                <CaseStudyCard key={study.slug} study={study} index={i} />
              ))}
            </motion.div>
          ) : (
            /* â”€â”€ Empty state â”€â”€ */
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              style={{ textAlign: 'center', padding: 'clamp(48px,6vw,80px) 24px' }}
            >
              <div style={{ fontSize: 48, marginBottom: 18, opacity: 0.5 }}>ðŸ”</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1A0F0A', marginBottom: 10 }}>No results found</h3>
              <p style={{ fontSize: 15, color: '#8A6A5A', marginBottom: 24 }}>
                No case studies match <strong>"{query}"</strong>. Try a different keyword.
              </p>
              <button
                onClick={clearSearch}
                style={{ padding: '10px 24px', borderRadius: 10, border: '1px solid rgba(194,98,45,0.3)', background: 'transparent', fontSize: 14, fontWeight: 600, color: '#C2622D', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(194,98,45,0.08)'; e.currentTarget.style.borderColor = 'rgba(194,98,45,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(194,98,45,0.3)' }}
              >
                Clear search
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* â”€â”€ Pagination â”€â”€ */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 48 }}
          >
            {/* Prev */}
            <button
              onClick={() => setPage(p => p - 1)}
              disabled={safePage === 0}
              style={{
                padding: '9px 22px',
                borderRadius: 10,
                border: '1px solid rgba(194,98,45,0.25)',
                background: 'transparent',
                fontSize: 14,
                fontWeight: 600,
                color: safePage === 0 ? '#B89A88' : '#3D2314',
                cursor: safePage === 0 ? 'not-allowed' : 'pointer',
                opacity: safePage === 0 ? 0.45 : 1,
                transition: 'all 0.2s',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => { if (safePage !== 0) { e.currentTarget.style.background = 'rgba(194,98,45,0.08)'; e.currentTarget.style.borderColor = 'rgba(194,98,45,0.45)' } }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(194,98,45,0.25)' }}
            >
              Prev
            </button>

            {/* Page pills */}
            <div style={{ display: 'flex', gap: 6 }}>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  style={{
                    width: 36, height: 36,
                    borderRadius: 8,
                    border: i === safePage ? '1px solid #C2622D' : '1px solid rgba(194,98,45,0.2)',
                    background: i === safePage ? 'linear-gradient(135deg,#C2622D,#A8501F)' : 'transparent',
                    color: i === safePage ? 'white' : '#8A6A5A',
                    fontSize: 14,
                    fontWeight: i === safePage ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => { if (i !== safePage) { e.currentTarget.style.background = 'rgba(194,98,45,0.08)'; e.currentTarget.style.color = '#3D2314' } }}
                  onMouseLeave={e => { if (i !== safePage) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8A6A5A' } }}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Page label */}
            <span style={{ fontSize: 13, color: '#8A6A5A', fontWeight: 500, padding: '0 4px', whiteSpace: 'nowrap' }}>
              Page {safePage + 1} of {totalPages}
            </span>

            {/* Next */}
            <button
              onClick={() => setPage(p => p + 1)}
              disabled={safePage === totalPages - 1}
              style={{
                padding: '9px 22px',
                borderRadius: 10,
                border: '1px solid rgba(194,98,45,0.25)',
                background: 'transparent',
                fontSize: 14,
                fontWeight: 600,
                color: safePage === totalPages - 1 ? '#B89A88' : '#3D2314',
                cursor: safePage === totalPages - 1 ? 'not-allowed' : 'pointer',
                opacity: safePage === totalPages - 1 ? 0.45 : 1,
                transition: 'all 0.2s',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => { if (safePage !== totalPages - 1) { e.currentTarget.style.background = 'rgba(194,98,45,0.08)'; e.currentTarget.style.borderColor = 'rgba(194,98,45,0.45)' } }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(194,98,45,0.25)' }}
            >
              Next
            </button>
          </motion.div>
        )}

      </div>
    </section>
  )
}

