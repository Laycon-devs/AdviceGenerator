import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [advice, setAdvice] = useState("");
  const [greeting, setGreeting] = useState('');
  const API_URL = "https://api.adviceslip.com/advice"

  const fetchAdvice = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data);
    setAdvice(data.slip.advice)
  }

  const getCurrentTime = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting('Good afternoon');
    } else if (currentHour >= 17 && currentHour < 20) {
      setGreeting('Good evening');
    } else {
      setGreeting('Good night');
    }
  }
    useEffect(() => {
      fetchAdvice()
      getCurrentTime()
    },[])
  return (
    <>
      <div>
      <h3>Hi I'm {`{Hyconn}`}</h3>
        <a href="./">
          <img width="50%" src="man.png" alt="man" />
        </a>
      </div>
      <h1>Advice Generator</h1>
      <div className="card">
        <h2>{advice}</h2>
        <button onClick={() => {fetchAdvice()}}>
          Generate
        </button>
        <h3>
        Greetings and {greeting}! I'm here to offer support and help you find motivation.
        </h3>
      </div>
      <p className="read-the-docs">
      Press the Generate button to receive a dose of my motivation.
      </p>
    </>
  )
}

export default App
