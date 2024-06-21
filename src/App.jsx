import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import Maincon from './Maincon.jsx';
import Feedback from './Feedback.jsx';
import Card from './Card.jsx';
import Questions from './Questions';
import Search from './Search.jsx';
import Maincon2 from './Maincon2.jsx';


function App() {
  

  return (
    <>
    <Header/>
    <div className="outerdiv">
    <Maincon/>
    <Card/>
    <Feedback/>
    <Questions/>
    <Search/>
    <Maincon2/>
    <Feedback/>
    <Questions/>
    <Card/>
   
    
    
    
    </div>
    </>
  )
}

export default App
