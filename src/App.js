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
    "subject": "",
    "reason": "",
    "isAttend": "",
    "file": "",
  })
  return (
    <div>
      
    </div>

  );
}

export default App;