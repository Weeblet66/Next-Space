import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Navbar = () => {
  const [bg, setbg] = useState({
    backgroundImage:" url(/home/background-home-desktop.jpg)"
  })
  function destination(){
    setbg({
      backgroundImage:" url(/destination/background-destination-desktop.jpg)"
    })
  }
  
  function home(){
    setbg({
      backgroundImage:" url(/home/background-home-desktop.jpg)"
    })
  }
  function crew(){
    setbg({
      backgroundImage:" url(/crew/background-crew-desktop.jpg)"
    })
  }
  function technology(){
    setbg({
      backgroundImage:" url(/technology/background-technology-desktop.jpg)"
    })
  }
  return (
    <nav style={bg} className={styles.mainnav}>
    
        <a className={styles.logo}c href="/">
        <Image  src="/shared/logo.svg" width={50} height={50} />
        </a>
        <hr />
        
   
    <ul>
      <Link href='/'>
      <li  onClick={home} className={styles.title} ><span>00</span> HOME</li></Link>
      <Link href='/destination'><li onClick={destination}><span>01</span> DESTINATION</li></Link>
      <Link href='/crew'><li onClick={crew}><span>02</span> CREW</li></Link>
      <Link href='/technology'><li onClick={technology}><span>04</span> TECHNOLOGY</li></Link>
      <span className={styles.end}></span>
    </ul>
  </nav>
  )
}

export default Navbar
