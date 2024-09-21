import { useState } from 'react'
import './App.css'
import Html from './Html'
import Css from './Css'
import Javascript from './Javascript'

function App() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
    <div style={{"display":"flex"}}>
<button onClick={()=> setActiveTab(0)}>HTML</button>
<button onClick={()=> setActiveTab(1)}>CSS</button>
<button onClick={()=> setActiveTab(2)}>JavaScript</button>
    </div>
  {/* <Html/>
  <Css/>
  <Javascript/> */}
       {activeTab==0 && <Html/> }
       {activeTab==1 && <Css/> }
       {activeTab==2 && <Javascript/> }
    </>
  )
}

export default App
