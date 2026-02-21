import React, { useEffect, useState } from 'react'
import curriculum from './curriculum.json'

const Form = () => {
    const nowDay = new Date().getFullYear()+"-"+String(new Date().getMonth()+101).slice(1)+"-"+String(new Date().getDate()+100).slice(1);
    const dayList = [
        ["Sun","日曜日"],
        ["Mon","月曜日"],
        ["Tue","火曜日"],
        ["Wed","水曜日"],
        ["Thu","木曜日"],
        ["Fri","金曜日"],
        ["Stu","土曜日"]
    ];

    const [date,setDate] = useState(nowDay);
    const [day,setDay] = useState(["Mon","月曜日"]);
    const [classTime,setClassTime] = useState("1");
    const [grade,setGrade] = useState("1");
    const [reason,setReason] = useState("病気");

    const changeDate = (e) => setDate(e.target.value);
    const changeClassTime = (e) => setClassTime(e.target.value);
    const changeGrade = (e) => setGrade(e.target.value);
    const changeReason = (e) => setReason(e.target.value);

    useEffect(()=>{
        const targetDate = new Date(date);
        setDay(dayList[targetDate.getDay()]);
    },[date])
    useEffect(()=>{
        console.log(reason);
    },[reason])
  return (
    <>
        <div>
            <input type='date' onChange={changeDate} value={date} max={nowDay} />
            <p>{day[1]}</p>
            <select onChange={changeClassTime}>
                <option value={1}>1限</option>
                <option value={2}>2限</option>
                <option value={3}>3限</option>
                <option value={4}>4限</option>
                <option value={5}>5限</option>
                <option value={6}>6限</option>
            </select>
            <select onChange={changeGrade}>
                <option value={1}>1年次</option>
                <option value={2}>2年次</option>
                <option value={3}>3年次</option>
                <option value={4}>4年次</option>
            </select>
            {curriculum[grade][day[0]][classTime][0] !== ""?<p>{curriculum[grade][day[0]][classTime]}</p>:<p>該当する授業はありません。</p>}
        </div>
        <div>
            <select onChange={changeReason}>
                <option>病気</option>
                <option>交通機関の遅延</option>
                <option>忌引き</option>
                <option>その他</option>
            </select>
            {reason === "交通機関の遅延" ? 
            <>
                <label>
                    欠席
                    <input type='radio' name='isAttend'/>
                </label>
                <label>
                    遅刻
                    <input type='radio' name='isAttend'/>
                </label>
            </>:!(reason === "病気" || reason === "忌引き") && 
            <input type='text'/>
            }
        </div>
    </>
  )
}

export default Form