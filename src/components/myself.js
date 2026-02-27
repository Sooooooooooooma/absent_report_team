import React from 'react'
import Header from './header'
import { useState } from 'react'
import Login from './login'
import { data } from 'react-router-dom'

const myself = ({userInf}) => {
    console.log(userInf)

  return (
    <>
    <Header />
    <div>学籍番号{userInf.stNum}</div>
    <div>名前{userInf.stName}</div>
    

    </>
  )
}

export default myself