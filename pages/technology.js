import React, { useState } from 'react'
import styles from '../styles/Technology.module.css'
import data from '../data/data.json'

const Technology = () => {
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
    
  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <p>03 SPACE LAUNCH 101</p>
            <div className={styles.btnsInfo}>
                <div className={styles.btns}>
                    <button onClick={zero}>1</button>
                    <button onClick={one}>2</button>
                    <button onClick={two}>3</button>
                </div>
                <div className={styles.info}>
                    <p>THE TERMINOLOGY ...</p>
                    <h1>{data.technology[id].name}</h1>
                    <p className={styles.desc}>{data.technology[id].description}</p>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <img className={styles.img} src={data.technology[id].images.portrait} alt="" />
        </div>
    </div>
  )
}

export default Technology