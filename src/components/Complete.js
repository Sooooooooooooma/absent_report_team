import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './header';

const Complete = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div>
        <h2>送信が完了しました</h2>
        <button className='logout_btn' onClick={() => navigate('/Login')}>ログアウト</button>
        <button className="" onClick={() => navigate("/Reback")}>履歴</button>
      </div>
    </>
  )
}

export default Complete