import { useState } from 'react'
import "./preview.css"
import Header from "./header"
import address from "../address.json"
import { useNavigate } from 'react-router-dom'

//画像ファイルのテストデータ
// "file": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAAEmAQMAAAD1Cq+ZAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACTUlEQVRoge2ZYW4EIQiFSTyAR+LqHskDmFh5D7Zudw9QyJhJ185880Nk4IEiz3jGM/7T2DbGEsUlq2/ePBP7W4Ky3z7a1NXHnucfbVNs0oc/LUD1jed61n2ewAADJhmclKGWrVvNJHvIuSNakBKxTd6Hcl+WSpR7tNCphW8Y+83vc1Iemfrn9SV+JaU42sbteZz6RF/9eJ6b8oBkGxsB2Hx508FXCcpCEVz4XMcSC/HJs+i8LZWZmoqIazZgDF7xsVI1FKBsw08KnXzDnjTMAeqqQVnE9e/1bDXj7plQO9SgXMZiz2EJC1FIMsioJahGrWcg58NfpSaqQSHQLjeJ+uoh/cwFSlAISFy3bTX3HIEKkbgGFY6MdSsrTkFSNQ1YgkLVhfTC6sTMsF+s1KA8kb7cWRmMPbtWoc7t17cLoQdltL1SKUAtKoUooGEDe4+KrwbFrGLpBcZooKgB33VhYorOi1pzuwFgFaaaVYJiYpHuHu3ll32vkVHzU83lz4iOyBWWLp9ITXGH0S0wG+zp0s9Kk37p+9zUiLiLz3e/9OyfXJuYYkyivqMlOLGXLs2UmmrRBaE9CBK5lEJuyrvm+F5XtGPdqXsRSuI4S9gRCRfgAcIqQXn1TP1ulYqKt5/9JKEAJb50xloUYdF/vaNvagprvtzZRZC+myE3RQXkfSx0YZt38uRd32emaINo9vixTxyqV6KYMNlm3n7p1b0rQW2WI8qTH+QZubo+ySluMrtZfuYzKIjkV/TlphiZKA3iCEij3VWEesYznvE/xg+mDD5i8H3XQgAAAABJRU5ErkJggg==",//ファイル

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
          stData: userInf,
          address: teData.eMail,
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