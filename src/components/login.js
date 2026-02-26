
import React, { useState } from 'react'
import Header from './header'
import "./login.css"
import { useNavigate } from 'react-router-dom';

const Login = ({ catchUser }) => {
    const navigate = useNavigate();
    const [stNum, setStNum] = useState(""); //loginページ専用の「入力一時保存箱」
    const [stName,setStName]=useState("");


    // const getUserInf = (e) => setUserInf(e.target.value);

    const allow = () => {
        if (stNum.trim() !== "" && stName.trim()!=="") {      //trimは空白を削除
            catchUser({stNum,stName});   //親にデータを渡している
            navigate("/Form");  
            console.log({stNum,stName})
        } else {
            alert("ユーザ名が入力されていません。");
        }
    }

    return (
        <div>
            <Header/>
            <p>学籍番号</p>
            <input className='input' value={stNum} onChange={(e)=>setStNum(e.target.value)} />

            <p>名前</p>
            <input
                className='name'
                value={stName}   //stateとつなぐ
                onChange={(e)=>setStName(e.target.value)}
            />

            <button onClick={allow} className='lgbt'>
                ログイン
            </button>
        </div>
    )
}

export default Login