import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const companies = [
  { name:'DataHive',   icon:'🐝' }, { name:'CloudForge',  icon:'⚒️' },
  { name:'PipeSync',   icon:'🔄' }, { name:'AutoGrid',    icon:'⚡' },
  { name:'SmartFlow',  icon:'🌊' }, { name:'CoreStack',   icon:'🧱' },
  { name:'SyncLab',    icon:'🔬' }, { name:'AIBridge',    icon:'🌉' },
  { name:'ScaleForce', icon:'📈' }, { name:'NexOps',      icon:'🔗' },
  { name:'FlowBase',   icon:'💧' }, { name:'DataPulse',   icon:'📊' },
]

export default function LogoBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section ref={ref} style={{ padding:'48px 0', background:'#EDE4D8', borderTop:'1px solid rgba(194,98,45,0.12)', borderBottom:'1px solid rgba(194,98,45,0.12)', overflow:'hidden', position:'relative' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:60, background:'radial-gradient(ellipse, rgba(194,98,45,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />

      <motion.p initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ duration:0.6 }}
        style={{ textAlign:'center', fontSize:11, fontWeight:700, letterSpacing:4, textTransform:'uppercase', color:'rgba(194,98,45,0.65)', marginBottom:30 }}>
        Trusted by Forward-Thinking Companies
      </motion.p>

      <div style={{ position:'relative' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:160, background:'linear-gradient(to right, #EDE4D8, transparent)', zIndex:2, pointerEvents:'none' }} />
        <div style={{ position:'absolute', right:0, top:0, bottom:0, width:160, background:'linear-gradient(to left, #EDE4D8, transparent)', zIndex:2, pointerEvents:'none' }} />

        <div style={{ overflow:'hidden', display:'flex' }}>
          <motion.div animate={{ x:[0,-1620] }} transition={{ duration:34, repeat:Infinity, ease:'linear' }}
            style={{ display:'flex', gap:0, flexShrink:0 }}>
            {[...companies,...companies,...companies].map((c,i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:9, padding:'10px 26px', marginRight:10, borderRadius:12, flexShrink:0, background:'rgba(255,255,255,0.55)', border:'1px solid rgba(194,98,45,0.14)', boxShadow:'0 2px 8px rgba(194,98,45,0.06)' }}>
                <span style={{ fontSize:18 }}>{c.icon}</span>
                <span style={{ fontSize:15, fontWeight:700, color:'#3D2314', whiteSpace:'nowrap', letterSpacing:-0.2 }}>{c.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
