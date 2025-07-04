import Action from './components/Action'
import Navbar from './components/Navbar' 
import TableComponent from '../src/components/BaiscTable' 
import React from "react";
import Footer from './components/Footer';
import SpreadsheetTable from "./components/tanstack table"

function App() { 

  return (
    <div className=' w-[1440px] h-[1024px] '>
      <Navbar/>
      <Action/>
      <TableComponent  /> 
      <Footer/>
          {/* <SpreadsheetTable/> */}
    </div>
   )
 }

export default App
 