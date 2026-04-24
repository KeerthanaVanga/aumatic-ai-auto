import Head from 'next/head'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import LogoBar      from '../components/LogoBar'
import Process      from '../components/Process'
import Capabilities from '../components/Capabilities'
import WhyUs        from '../components/WhyUs'
import Impact       from '../components/Impact'
import Contact      from '../components/Contact'
import Footer       from '../components/Footer'
import StickyCTA    from '../components/StickyCTA'

function Loader({ onDone }) {
  useEffect(()=>{ const t=setTimeout(onDone,2000); return ()=>clearTimeout(t) },[])
  return (
    <motion.div exit={{opacity:0}} transition={{duration:0.45}}
      style={{position:'fixed',inset:0,zIndex:9999,background:'#F5EFE8',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:28}}>
      <div style={{position:'absolute',top:'20%',left:'20%',width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,rgba(210,180,150,0.4) 0%,transparent 65%)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',bottom:'20%',right:'20%',width:300,height:300,borderRadius:'50%',background:'radial-gradient(circle,rgba(194,98,45,0.15) 0%,transparent 65%)',pointerEvents:'none'}}/>
      <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.5,ease:[0.22,1,0.36,1]}}
        style={{display:'flex',alignItems:'center',gap:10}}>
        <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
          <path d="M16 2C16 2 8 10 8 18C8 22.4 11.6 26 16 26C20.4 26 24 22.4 24 18C24 14 20 10 20 10C20 10 19 14 16 16C13 14 12 10 12 10C12 10 16 6 16 2Z" fill="#C2622D"/>
          <path d="M16 16C14 16 12 17.5 12 20C12 22.2 13.8 24 16 24C18.2 24 20 22.2 20 20C20 17.5 18 16 16 16Z" fill="#E8A87C"/>
        </svg>
        <span style={{fontSize:26,fontWeight:900,letterSpacing:-1,color:'#1A0F0A',fontFamily:"'Playfair Display',serif"}}>
          Aumatic.<span style={{color:'#C2622D'}}>AI</span>
        </span>
      </motion.div>
      <div style={{width:200,height:3,background:'rgba(194,98,45,0.15)',borderRadius:99,overflow:'hidden'}}>
        <motion.div initial={{width:0}} animate={{width:'100%'}} transition={{duration:1.7,ease:'easeInOut'}}
          style={{height:'100%',background:'linear-gradient(90deg,#C2622D,#E8A060)',borderRadius:99}}/>
      </div>
      <motion.p initial={{opacity:0}} animate={{opacity:0.55}} transition={{delay:0.4}}
        style={{color:'#8A6A5A',fontSize:13}}>Loading AI systems...</motion.p>
    </motion.div>
  )
}

function CursorGlow() {
  const [pos,setPos]=useState({x:-300,y:-300})
  useEffect(()=>{
    const fn=e=>setPos({x:e.clientX,y:e.clientY})
    window.addEventListener('mousemove',fn,{passive:true})
    return()=>window.removeEventListener('mousemove',fn)
  },[])
  return <div style={{position:'fixed',pointerEvents:'none',zIndex:0,left:pos.x,top:pos.y,width:480,height:480,transform:'translate(-50%,-50%)',background:'radial-gradient(circle,rgba(194,98,45,0.04) 0%,transparent 65%)',borderRadius:'50%',transition:'left 0.1s ease-out,top 0.1s ease-out'}}/>
}

export default function Home() {
  const [loaded,setLoaded]=useState(false)
  return (
    <>
      <Head>
        <title>Aumatic.AI — AI Automation Agency</title>
        <meta name="description" content="We Build & Deploy Intelligent Automation for Your Business. Save hundreds of hours every month with custom AI workflows."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔥</text></svg>"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&display=swap" rel="stylesheet"/>
      </Head>
      <AnimatePresence>{!loaded&&<Loader onDone={()=>setLoaded(true)}/>}</AnimatePresence>
      {loaded&&(
        <div style={{minHeight:'100vh',background:'#F5EFE8'}}>
          <CursorGlow/>
          <Navbar/>
          <main>
            <Hero/>
            <LogoBar/>
            <Process/>
            <Capabilities/>
            <WhyUs/>
            <Impact/>
            <Contact/>
          </main>
          <Footer/>
          <StickyCTA/>
        </div>
      )}
    </>
  )
}
