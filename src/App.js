import {
  useState
} from "react";

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
    <div>
      
    </div>

  );
}

export default App;