import React, { useState } from 'react'
import styles from '../styles/Crew.module.css'
import data from '../data/data.json'
const Crew = () => {

  const [id, setId] = useState(0)
  function zero(){
    setId(0)
  }
  function one(){
    setId(1)
  }
  function two(){
    setId(2)
  }
  function three(){
    setId(3)
  }

  return (
    <div className={styles.main}>
      <div className={styles.left}>
      <p>02 MEET YOUR CREW</p>
      <h3>{data.crew[id].role}</h3>
      <h1>{data.crew[id].name}</h1>
      <p className={styles.desc}>{data.crew[id].bio}</p>
      <div className={styles.btns}>
        <button onClick={zero}></button>
        <button onClick={one}></button>
        <button onClick={two}></button>
        <button onClick={three}></button>
      </div>
      </div>
      <div className={styles.right}>
        <img className={styles.img} src={data.crew[id].images.png} alt="" />
      </div>
    </div>
  )
}

export default Crew