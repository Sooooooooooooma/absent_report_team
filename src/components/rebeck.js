// import React from 'react'
// import { useState } from 'react'
// import Header from './header'  

// export default function rebeck() {
  // return (
    // <>
    // <Header/>
    // <div>rebeck</div>
    // </>
  // )
// }


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import './rebeck.css'; // CSSのファイル名もこちらに合わせます

const Reback = () => {
  const navigate = useNavigate();

  // 100%安全に表示させるための、ダミーの履歴リスト
  const historyList = [
    {
      id: 1,
      date: "2024-05-20",
      day: "月曜日",
      subject: "プログラミング演習",
      classTime: "2",
      reason: "病気",
      isAttend: "欠席"
    },
    {
      id: 2,
      date: "2024-05-22",
      day: "水曜日",
      subject: "ネットワーク基礎",
      classTime: "1",
      reason: "交通機関の遅延",
      isAttend: "遅刻"
    }
  ];
// ここを// こうやって受け取るように変えるだけ！
// const Reback = ({ historyList }) => { 
  // 中身はダミーデータじゃなくて、受け取った本物のデータがループ表示される
// }
// こういう風に変えなきゃいけない


  return (
    <>
      <Header />
      <div className="reback-wrapper">
        <h2 className="reback-title">ー 完了した ー</h2>

        <div className="reback-list">
          {historyList.map((item) => (
            <div key={item.id} className="reback-card">
              <div className="card-top">
                <span>{item.date} ({item.day})</span>
                <span className="attend-status">{item.isAttend}</span>
              </div>
              <div className="card-middle">
                <p className="subject-name">{item.subject}</p>
              </div>
              <div className="card-bottom">
                <span>{item.classTime}限</span>
                <span>理由: {item.reason}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reback-btn-area">
          <button className="logout-btn" onClick={() => navigate('/Login')}>ログアウト</button>
          <button className="back-btn" onClick={() => navigate('/Form')}>新規申請へ</button>
        </div>
      </div>
    </>
  );
}

export default Reback;