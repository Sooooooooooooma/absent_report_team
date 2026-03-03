import { useState } from 'react'
import "./preview.css"
import Header from "./header"
import address from "../address.json"
import { useNavigate } from 'react-router-dom'

function Preview({ userInf, absentForm }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const teData = address[absentForm.subject] || { "name": "(リストに存在しない教科を選択しています。)ヌル", "eMail": "ta2bey371@gmail.com" }

  const text = `${teData.name}先生、${absentForm.subject}を受講している${userInf.stName}(学籍番号：${userInf.stNum})です。${absentForm.date}の授業を${absentForm.reason}により${absentForm.isAttend}したため、その証明書を以下に添付します。`;
  const sendMail = async () => {
    try {
      setMessage("送信中");
      const response = await fetch("https://script.google.com/macros/s/AKfycbzxvct973jpMb-8ucJ8NmziJE-_gtnqFXGmYbzsGJUZXmoyvLZ-ImIfxIjlmvrUsjoUBg/exec", {
        method: "POST",
        body: JSON.stringify({
          body: text,
          address:teData.eMail,
          base64: absentForm.file
        })
      });
      if (response.ok) navigate("/Conplite");
      else {
        alert("送信に失敗しました");
        setMessage(null);
      };
    } catch (error) {
      alert("通信に失敗しました");
      setMessage(null);
    }
  };

  return (
    <>
      <Header />
      <div>
        <p>{text}</p>
        <img src={absentForm.file} alt='画像が読み込めません' width={250} />
        <button onClick={() => navigate("/Form")}>入力画面へ戻る</button>
        <button className='submit' onClick={sendMail}>送信</button>
        <p>{message}</p>
      </div>
    </>
  )
}


export default Preview