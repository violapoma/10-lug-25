import { useState } from 'react'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyAlert from './components/MyAlert'
import AllTheBooks from './components/AllTheBooks'

function App() {

  return (
    <>
      <MyNav />
      <MyAlert />
      <AllTheBooks />
      <MyFooter />
    </>
  )
}

export default App
