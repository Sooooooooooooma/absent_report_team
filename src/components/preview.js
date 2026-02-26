import React from 'react'
import "./preview.css"
import Header from "./header"
import { useNavigate } from 'react-router-dom'

function Preview({ userInf, absentForm }) {
  const navigate = useNavigate();
  const text = `${absentForm.subject}を受講している${userInf.stName}(学籍番号：${userInf.stNum})です。\n${absentForm.date}の授業を${absentForm.reason}により${absentForm.isAttend}したため、その証明書を以下に添付します。`
  return (
    <>
      <Header />
      <div>
        <p>{text}</p>
        <button className='submit'>送信</button>
      </div>
    </>
  )
}


export default Preview