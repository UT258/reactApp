import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Search from "./component/Search.jsx";

function App() {
    const[searchTerm, setSearchTerm] = useState('');
    //IT MUST BE GLOBAL THE SEARCH TERM WILL BE GLOBAL

  return (


      <main>
          <div className="pattern"/>
          <div className="wrapper">
              <header>
                  <img src="./hero-img.png" alt="heroimage"/>
                  <h1>Find <span className="text-gradient">Movies</span> you enjoy wihout a hasle</h1>
              </header>
              <Search searchterm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
      </main>
  )
}

export default App
