import React from "react";
import Action from './components/Action'
import Navbar from './components/Navbar' 
import TableComponent from '../src/components/BaiscTable' 
import Footer from './components/Footer'; 

function App() { 

  return (
    <div className=' w-[1440px] h-[1024px] '>
      <Navbar/>
      <Action/>
      <TableComponent  /> 
      <Footer/> 
    </div>
   )
 }

export default App
 