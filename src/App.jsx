import { useState } from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import ServicesModule from './ServicesModule/ServicesModule'
import Contacts from './Contacts/Contacts'
import Quote from './Quote/Quote.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Form  from './pages/Form.jsx'
import Media from 'react-media'
function App() {
const [Headline,setHeadline]= useState('')

  return (
    <>
    <Router>
<Routes>
  <Route path='/' element={
    <>
 <div className='firstHalf'>
 <NavBar/>
 
 <div className='Headline'>SERVICES</div>
 </div>
 
 <ServicesModule/>
 <Quote />
 <Contacts/>
 <div className='secondHalf'>

 </div>
  </>
  }/>


  <Route path='/form' element={<Form/>}/>
  <Route path='*' element={<h1>page not found</h1>}/>


</Routes>
    </Router>

  

    </>
  )
}
// 
export default App
