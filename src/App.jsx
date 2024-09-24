import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RegisterHook from './components/form/RegisterHook'
import RegisterFormik from './components/form/RegisterFormik'

function App() {

  return (
    <>
      <div>
      {/* <RegisterHook /> */}
      <RegisterFormik />
      </div>
    </>
  )
}

export default App
