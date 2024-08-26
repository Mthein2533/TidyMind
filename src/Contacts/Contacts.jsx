import React from 'react'
import Styles from './Contact.module.css'
function Contacts() {
  return (
    <div className={Styles.Container}>
      <img src="./src/assets/log.png" className={Styles.img} />
      <p className={Styles.para}>For any inquiries, please reach out to us at:
    [Tidymindsatx@gmail.com]
         [720-552-2032]
We look forward to hearing from you!</p>
    </div>
  )
}

export default Contacts
