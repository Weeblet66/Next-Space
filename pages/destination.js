import React, { useEffect, useState } from 'react'
import styles from '../styles/Destination.module.css'
import data from '../data/data.json'

const Destination = () => {
  console.log(data)
  const [id, setId] = useState(0)

function moon(){
setId(0)
}
function mars(){
setId(1)
}
function europa(){
  setId(2)
  }
function titan(){
    setId(3)
    }
  return (<>
    <div className={styles.main}>
        <div className={styles.left}>
          <p>01 PICK YOUR DESTINATION</p>
          <div className={styles.img}>
            <img src={ data.destinations[id].images.png} width={400} height={400} alt="" />
          </div>
          
        </div>
        <div className={styles.right}>
          <ul>
            <li><button onClick={moon}>Moon</button></li>
            <li><button onClick={mars}>Mars</button></li>
            <li><button onClick={europa}>Europa</button></li>
            <li><button onClick={titan}>Titan</button></li>
          </ul>
          <h1 className={styles.heading}>{data.destinations[id].name}</h1>
          <p>{ data.destinations[id].description}</p>
          <hr />
          <div className={styles.distanceTravel}>
            
            <div className={styles.distance}>
            <h6>AVG. DISTANCE</h6>
              <div>{ data.destinations[id].distance}</div>
            </div>
            <div className={styles.time}>
              <h6>EST. TRAVEL TIME</h6>
              <div>{data.destinations[id].travel}</div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Destination