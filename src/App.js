

import {
  useState
} from "react";
import Complete from "./components/Complete.js"
import Form from "./components/Form.js"
import Header from "./components/header.js"
import Login from "./components/login.js"
import Preview from "./components/preview.js"
import Reback from "./components/rebeck.js"
import Myself from "./components/myself.js"
import Introduce from "./components/Introduce.js";
import E_mail from "./components/e_mail.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [userInf, setUserInf] = useState({
    "stNum": "202020123", //学籍番号
    "stName": "テストデータ", //名前
  })

  //子からデータを受け取る関数
  const catchUser=(data)=>{
    setUserInf(data);
    // console.log(data)
  };

  const [absentForm, setAbsentForm] = useState({
    "date": "2026-03-24",  //日にち
    "day": "",  //曜日
    "grade":"", //学年
    "class":"", //何限？？？？？
    "subject": "プログラミング演習",//教科
    "reason": "交通機関の遅延",//理由
    "isAttend": "欠席",//遅刻or欠席
    "file": "",//ファイル


  })


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login catchUser={catchUser}/>}/>
        <Route path="/Form" element={<Form userInf={userInf}/>}/>
        <Route path="/Preview" element={<Preview userInf={userInf} absentForm={absentForm}/>}/>
        <Route path="/Conplite" element={<Complete/>}/>
        <Route path="/Reback" element={<Reback/>}/>
        <Route path="/Myself" element={<Myself userInf={userInf}/>}/>
        <Route path="/Introduce" element={<Introduce/>}/>
        <Route path="/E_mail" element={<E_mail/>}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;













// import {
//   useState
// } from "react";
// import Complete from "./components/Complete.js"
// import Form from "./components/Form.js"
// import Header from "./components/header.js"
// import Login from "./components/login.js"
// import Preview from "./components/preview.js"
// import Reback from "./components/rebeck.js"
// import Myself from "./components/myself.js"
// import Introduce from "./components/Introduce.js";
// import E_mail from "./components/e_mail.js";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   const [userInf, setUserInf] = useState({
//     "stNum": "", //学籍番号
//     "stName": "", //名前
//   })

//   //子からデータを受け取る関数
//   const catchUser=(data)=>{
//     setUserInf(data);
//     // console.log(data)
//   };

//   const [absentForm, setAbsentForm] = useState({
//     "date": "",  //日にち
//     "day": "",  //曜日
//     "grade":"", //学年
//     "class":"", //何限？？？？？
//     "subject": "",//教科
//     "reason": "",//理由
//     "isAttend": "",//遅刻or欠席
//     "file": "",//ファイル


//   })


//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/Login" element={<Login catchUser={catchUser}/>}/>
//         <Route path="/Form" element={<Form userInf={userInf}/>}/>
//         <Route path="/Preview" element={<Preview userInf={userInf} absentForm={absentForm}/>}/>
//         <Route path="/Conplite" element={<Complete/>}/>
//         <Route path="/Reback" element={<Reback/>}/>
//         <Route path="/Myself" element={<Myself userInf={userInf}/>}/>
//         <Route path="/Introduce" element={<Introduce/>}/>
//         <Route path="/E_mail" element={<E_mail/>}/>
        
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

