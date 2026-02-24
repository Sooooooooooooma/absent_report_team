import React from 'react'
import { useState } from 'react'
import Header from './header'
import "./login.css"

function login() {
  return (
    <div>
        <Header/>
        <input className='input'></input>
        <input className='name'></input>
        <button className='lgbt'>ログイン</button>
    </div>
  )
}

export default login