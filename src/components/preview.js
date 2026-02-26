import React from 'react'
import "./preview.css"
import Header from "./header"
import { useNavigate } from 'react-router-dom'

function Preview({ userInf, absentForm }) {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div>
        <button className='submit'>送信</button>
      </div>
    </>
  )
}


export default Preview