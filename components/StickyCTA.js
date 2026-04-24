import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    const fn = ()=>setVisible(window.scrollY>600)
    window.addEventListener('scroll',fn,{passive:true})
    return ()=>window.removeEventListener('scroll',fn)
  },[])
  return (
    <AnimatePresence>
      {visible&&(
        <motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} exit={{y:100,opacity:0}} transition={{duration:0.4,ease:[0.22,1,0.36,1]}}
          style={{position:'fixed',bottom:24,left:'50%',transform:'translateX(-50%)',zIndex:90,display:'flex',alignItems:'center',gap:16,padding:'14px 22px',borderRadius:18,background:'rgba(245,239,232,0.97)',backdropFilter:'blur(24px)',border:'1px solid rgba(194,98,45,0.22)',boxShadow:'0 8px 40px rgba(194,98,45,0.18)',whiteSpace:'nowrap'}}>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <div style={{width:8,height:8,borderRadius:99,background:'#C2622D',boxShadow:'0 0 8px rgba(194,98,45,0.6)'}}/>
            <span style={{fontSize:13,color:'#3D2314',fontWeight:500}}><strong style={{color:'#1A0F0A'}}>3 spots left</strong> this month</span>
          </div>
          <div style={{width:1,height:20,background:'rgba(194,98,45,0.2)'}}/>
          <motion.a href="#contact" whileHover={{scale:1.04}} whileTap={{scale:0.97}}
            style={{padding:'9px 20px',borderRadius:10,fontSize:13,fontWeight:700,background:'linear-gradient(135deg,#C2622D,#A8501F)',color:'white',textDecoration:'none',boxShadow:'0 4px 16px rgba(194,98,45,0.38)'}}>
            Free Consultation →
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
