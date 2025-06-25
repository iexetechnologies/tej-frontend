import { useState } from 'react'
import './App.css'
import Sidebar from '../components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
      <Sidebar />
      <div className="container-fluid" style={{ marginLeft: '250px' }}>
        <div className="p-4">
          <h1>Main Content Area</h1>
          <p>This is where your main page content goes.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
