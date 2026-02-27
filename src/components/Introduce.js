import React from 'react'
import { useState } from 'react'
import  "./Introduce.css"
import Header from './header'
import { useNavigate } from 'react-router-dom';


const Introduce = () => {
    const navigate=useNavigate();


    const test1 =()=>{
        navigate("/Form");
    }

  return (
    <>
    <Header />
    <p>このアプリは欠席や遅刻を申請できるアプリです。</p>
    <p>診断表を添付して担当教授（または講師）に送信することができます</p>
    <a className='e-mail' onClick={test1}>送信可能な教授講師一覧はこのページから参照してください。</a>

    </>
  )
    
}

export default Introduce