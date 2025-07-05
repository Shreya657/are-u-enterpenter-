import { useState } from 'react'
import './App.css'
import Quiz from './components/quiz'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Result from './components/Result'
import Home from './components/Home';







function App() {
 
  return (
       <div className='app'>
           <Router>
        <Routes>

                   <Route path='/' element={<Home/>}/>
                    <Route path='/quiz' element={<Quiz/>}/>
                                        <Route path='/result' element={<Result />}/>



        </Routes>
      </Router>
      </div>
      
      
    
  )
}

export default App
      
