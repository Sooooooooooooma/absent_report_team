import {
  useState
} from "react";
import Complete from "./components/Complete.js"
import Form from "./components/Form.js"
import header from "./components/header.js"
import Login from "./components/login.js"
import Preview from "./components/preview.js"
import Reback from "./components/rebeck.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [userInf, setUserInf] = useState({
    "stNum": "",
    "stName": "",
  })

  const [absentForm, setAbsentForm] = useState({
    "date": "",  //日にち
    "day": "",  //曜日
    "grade":"", //学年
    "class":"", //何限？？？？？
    "subject": "",//教科
    "reason": "",//理由
    "isAttend": "",//遅刻or欠席
    "file": "",//ファイル
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Preview" element={<Preview/>}/>
        <Route path="/Conplite" element={<Complete/>}/>
        <Route path="/Reback" element={<Reback/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;