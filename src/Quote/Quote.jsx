import React from 'react'
import Styles from './Quote.module.css'
import {Link} from 'react-router-dom'
function Quote() {
  return (
    <div className={Styles.container}>
      <div className={Styles.inerContainer}>
     <Link to='/form'><button className={Styles.button}>Get free Quote</button></Link>
      </div>
    </div>
  )
}

export default Quote
