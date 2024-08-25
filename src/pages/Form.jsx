import React from 'react'
import Styles from './Form.module.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Compressor from 'compressorjs';

function Form() {
  const [gmail,setgmail]=useState('')
  const [phone,setphone]=useState('')
  const [date,setdate]=useState('')
  const [comments,setcomments]=useState('')
  const [img,setimg]=useState('')
  const [service,setservice]=useState('')

const handleInput= (e) =>{
  e.preventDefault();

  const serviceId='service_gsi6hbo'
  const templteId='template_ijc9ppe'
  const publicKey='CZ8RPwbd2uH1FHZK7'
   const tampleteGmail={
    form_gmail: gmail,
    form_phone:phone,
    form_date:date,
    form_comments:comments,
    form_service:service,
    form_img:img,
   };
   emailjs.send(serviceId, templteId ,tampleteGmail,publicKey)
.then((res)=>{
  console.log('gmail has been sent ', res)
  setcomments('')
  setdate('')
  setgmail('')
  setimg('')
  setphone('')
  setservice('')
})
.catch((error)=>{
  console.error('something is wrong',error)
})
}

const handleFileChange= (e) => {
  const file= e.target.files[0]
  if(file){
    new Compressor(file,{
      quality: 0.1,
      success(result){
        const reader = new FileReader();
  reader.onloadend=()=>{
    setimg(reader.result)
  }
  reader.readAsDataURL(result)
      },
      error(err){
        console.log(err.message)
      }
    })
    
  }
}
  return (
    
    <>
    
    <div className={Styles.tittleHolder}>
    <h1 className={Styles.tittle}>Send us a Message!</h1>
    </div>


    <div className={Styles.container}>
      <label htmlFor="inputOne" className={Styles.inputOne} >Choose Your Service:</label><br />
     <select  value={service}  id='inputOne' onChange={(e)=> setservice(e.target.value)}>
      <option value="Deep Cleaning">Deep Clean</option>
      <option value="Office Cleaning">Office Clean</option>
      <option value="Everyday Cleaning">Everyday Clean</option>
      <option value="Move in/out cleaning">Move in/out Clean</option>



     </select><br />
      <label htmlFor="inputTwo">Attach a image:</label><br />
     <input type="file" id='inputTwo' className={Styles.inputTwo}  onChange={handleFileChange}/><br />
     
      
     
     
     <label htmlFor="inputThree" >Date for your service:</label><br />
    <input type="date" id='inputThree' className={Styles.inputThree} value={date}onChange={(e)=> setdate(e.target.value)}/><br />
    
    <label htmlFor="inputFour" >Gmail:</label><br />
    <input  placeholder='     Blah@gmail.com  ' type="text" id='inputFour' value={gmail} className={Styles.inputFour} onChange={(e)=> setgmail(e.target.value)}/><br />

    <label htmlFor="inputFive">Phone number:</label><br />
    <input placeholder='    ***-***-****' type="text" id='inputFive' value={phone} className={Styles.inputFive} onChange={(e)=> setphone(e.target.value)}/><br />


     <label  htmlFor="inputSix">Comments:</label><br />
    <input placeholder='   Anything we should know'type="text" id='inputSix' value={comments} className={Styles.inputSix} onChange={(e)=> setcomments(e.target.value)}/> <br />
      
      
      <button className={Styles.submitButton} onClick={handleInput}>SUBMIT</button>
    <Link  to='/'> <button className={Styles.homeButton} ><span class="material-symbols-outlined">
arrow_back</span></button></Link>

    </div>
    </>
  )
}

export default Form
