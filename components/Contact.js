import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true })
  const [form, setForm] = useState({ name:'', email:'', company:'', message:'' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)
  const ch = e => setForm(p => ({...p,[e.target.name]:e.target.value}))
  const sub = e => { e.preventDefault(); setSubmitted(true) }

  const inp = name => ({
    width:'100%', padding:'13px 16px', borderRadius:12,
    background: focused===name ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
    border: focused===name ? '1.5px solid rgba(194,98,45,0.5)' : '1.5px solid rgba(194,98,45,0.18)',
    color:'#1A0F0A', fontSize:15, outline:'none', fontFamily:'inherit', transition:'all 0.2s',
  })

  return (
    <section id="contact" className="section-pad" style={{ background:'linear-gradient(180deg,#EDE4D8 0%,#F5EFE8 100%)', borderTop:'1px solid rgba(194,98,45,0.12)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'5%', left:'50%', transform:'translateX(-50%)', width:700, height:400, background:'radial-gradient(ellipse,rgba(194,98,45,0.08) 0%,transparent 60%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:680, margin:'0 auto', position:'relative', zIndex:1 }}>
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:'clamp(36px,5vw,56px)' }}>
          <span className="label">Get Started</span>
          <h2 style={{ fontSize:'clamp(28px,4vw,52px)', fontWeight:900, letterSpacing:-2, color:'#1A0F0A', margin:'14px 0 16px', fontFamily:"'Playfair Display',serif" }}>
            Book Your Free<br />Consultation
          </h2>
          <p style={{ fontSize:'clamp(15px,1.8vw,17px)', color:'#5C3D2A', lineHeight:1.65 }}>
            Tell us about your business. We'll show you exactly where AI can save hundreds of hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
            style={{ padding:'56px 40px', borderRadius:24, textAlign:'center', background:'rgba(255,255,255,0.85)', border:'1px solid rgba(194,98,45,0.2)', boxShadow:'0 8px 40px rgba(194,98,45,0.1)' }}>
            <div style={{ fontSize:52, marginBottom:20 }}>✅</div>
            <h3 style={{ fontSize:24, fontWeight:800, color:'#1A0F0A', marginBottom:12, fontFamily:"'Playfair Display',serif" }}>We'll be in touch!</h3>
            <p style={{ fontSize:15, color:'#5C3D2A', lineHeight:1.7 }}>Expect a reply within <strong style={{ color:'#C2622D' }}>24 hours</strong> to schedule your free strategy call.</p>
          </motion.div>
        ) : (
          <motion.form onSubmit={sub}
            initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6, delay:0.15 }}
            style={{ padding:'clamp(24px,4vw,44px)', borderRadius:24, background:'rgba(255,255,255,0.7)', border:'1px solid rgba(194,98,45,0.16)', backdropFilter:'blur(12px)', boxShadow:'0 8px 48px rgba(194,98,45,0.08)' }}
          >
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }} className="form-grid">
              {[{name:'name',label:'Full Name',ph:'Alex Johnson'},{name:'email',label:'Work Email',ph:'alex@company.com'}].map(f=>(
                <div key={f.name}>
                  <label style={{ display:'block', fontSize:12, fontWeight:700, color:'#5C3D2A', marginBottom:8, letterSpacing:0.3 }}>{f.label}</label>
                  <input type={f.name==='email'?'email':'text'} name={f.name} value={form[f.name]} onChange={ch}
                    onFocus={()=>setFocused(f.name)} onBlur={()=>setFocused(null)}
                    placeholder={f.ph} style={inp(f.name)} />
                </div>
              ))}
            </div>
            <div style={{ marginBottom:16 }}>
              <label style={{ display:'block', fontSize:12, fontWeight:700, color:'#5C3D2A', marginBottom:8 }}>Company / Website</label>
              <input type="text" name="company" value={form.company} onChange={ch}
                onFocus={()=>setFocused('company')} onBlur={()=>setFocused(null)}
                placeholder="Acme Inc. or acme.com" style={inp('company')} />
            </div>
            <div style={{ marginBottom:24 }}>
              <label style={{ display:'block', fontSize:12, fontWeight:700, color:'#5C3D2A', marginBottom:8 }}>What would you like to automate?</label>
              <textarea name="message" value={form.message} onChange={ch}
                onFocus={()=>setFocused('message')} onBlur={()=>setFocused(null)}
                placeholder="Describe the workflows or bottlenecks you want to solve..." rows={4}
                style={{...inp('message'), resize:'vertical', lineHeight:1.6}} />
            </div>
            <motion.button type="submit" whileHover={{ scale:1.02, y:-1 }} whileTap={{ scale:0.98 }}
              style={{ width:'100%', padding:'15px 32px', borderRadius:12, background:'linear-gradient(135deg,#C2622D,#A8501F)', border:'none', color:'white', fontSize:16, fontWeight:800, cursor:'pointer', boxShadow:'0 4px 24px rgba(194,98,45,0.4)', fontFamily:'inherit', letterSpacing:0.2 }}>
              Book Free Consultation →
            </motion.button>
            <p style={{ textAlign:'center', fontSize:12, color:'#8A6A5A', marginTop:14 }}>No commitment required. We reply within 24 hours.</p>
          </motion.form>
        )}
      </div>
      <style>{`@media(max-width:520px){.form-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
