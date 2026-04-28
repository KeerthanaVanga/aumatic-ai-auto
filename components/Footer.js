import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{ background:'linear-gradient(180deg,#1A0F0A 0%,#0F0805 100%)', borderTop:'1px solid rgba(194,98,45,0.2)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'clamp(40px,5vw,64px) clamp(16px,3vw,32px) 36px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.8fr 1fr 1fr 1fr', gap:'clamp(28px,4vw,48px)', marginBottom:'clamp(42px,5vw,58px)' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
              <img src="/aumatic_img.png" width="32" height="32" alt="Aumatic.AI" style={{ display: 'block', objectFit: 'contain', mixBlendMode: 'screen' }}/>
              <span style={{ fontSize:18, fontWeight:900, color:'#F5EFE8', letterSpacing:-0.5, fontFamily:"'Montserrat', sans-serif" }}>Aumatic.<span style={{ color:'#C2622D' }}>AI</span></span>
            </div>
            <p style={{ fontSize:14, color:'rgba(245,239,232,0.45)', lineHeight:1.75, maxWidth:270, marginBottom:24 }}>
              We build & deploy intelligent automation for forward-thinking businesses. Save hundreds of hours every month.
            </p>
            <div style={{ display:'flex', gap:10 }}>
              {['ð•','in','â–¶'].map((s,i)=>(
                <motion.a key={i} href="#" whileHover={{ scale:1.1 }}
                  style={{ width:36, height:36, borderRadius:9, background:'rgba(194,98,45,0.1)', border:'1px solid rgba(194,98,45,0.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, color:'rgba(245,239,232,0.45)', textDecoration:'none', transition:'all 0.2s' }}
                  onMouseEnter={e=>{e.currentTarget.style.color='#C2622D';e.currentTarget.style.borderColor='rgba(194,98,45,0.45)'}}
                  onMouseLeave={e=>{e.currentTarget.style.color='rgba(245,239,232,0.45)';e.currentTarget.style.borderColor='rgba(194,98,45,0.2)'}}
                >{s}</motion.a>
              ))}
            </div>
          </div>

          {[
            {title:'Services', links:['Process','Capabilities','Why Us','Impact','Case Studies']},
            {title:'Company',  links:['About','Blog','Careers','Press','Contact']},
            {title:'Resources',links:['Free Audit','ROI Calculator','Templates','Docs','Support']},
          ].map(col=>(
            <div key={col.title}>
              <div style={{ fontSize:11, fontWeight:800, color:'#C2622D', letterSpacing:2.5, textTransform:'uppercase', marginBottom:18 }}>{col.title}</div>
              <div style={{ display:'flex', flexDirection:'column', gap:11 }}>
                {col.links.map(l=>(
                  <a key={l} href="#" style={{ fontSize:14, color:'rgba(245,239,232,0.4)', textDecoration:'none', transition:'color 0.2s' }}
                    onMouseEnter={e=>e.target.style.color='#F5EFE8'}
                    onMouseLeave={e=>e.target.style.color='rgba(245,239,232,0.4)'}
                  >{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop:'1px solid rgba(194,98,45,0.12)', paddingTop:24, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:14 }}>
          <span style={{ fontSize:13, color:'rgba(245,239,232,0.28)' }}>Â© {new Date().getFullYear()} Aumatic.AI. All rights reserved.</span>
          <div style={{ display:'flex', gap:20, flexWrap:'wrap' }}>
            {['Privacy Policy','Terms','Cookies'].map(l=>(
              <a key={l} href="#" style={{ fontSize:13, color:'rgba(245,239,232,0.28)', textDecoration:'none', transition:'color 0.2s' }}
                onMouseEnter={e=>e.target.style.color='#C2622D'}
                onMouseLeave={e=>e.target.style.color='rgba(245,239,232,0.28)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  )
}

