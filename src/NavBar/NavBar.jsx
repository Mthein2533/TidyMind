import React from 'react'
import Styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
function NavBar() {
    
  return (
    

      <>
      
      <ul className={Styles.NavBarContainer}>
        <li className={Styles.TidyMind}>
            <span className={Styles.Tidy}>TIDY</span>
            <span className={Styles.Mind}>MIND</span></li>
        <Link to='/form'> <button className={Styles.ContactsButton}> CONTACTS</button></Link>
    </ul>
    </>
  )
}

export default NavBar
