import React from 'react'
import Homepage from './Screens/Homepage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div id='App'>


      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/favourities" element={<Fav />} /> */}
      </Routes>

    </div>
  )
}

export default App
