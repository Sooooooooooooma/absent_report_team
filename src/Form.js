import React, { useState } from 'react'
import curriculum from './curriculum.json'

const Form = () => {
    const [date,setDate] = useState("");
    const [day,setDay] = useState("Mon");
    const [classTime,setClassTime] = useState("2");
    const [grade,setGrade] = useState("");

    const changeDate = (e) => setDate(e.target.value);
    const changeDay = (e) => setDay(e.target.value);
    const changeClassTime = (e) => setClassTime(e.target.value);
    const changeGrade = (e) => setGrade(e.target.value);
  return (
    <div>
        <input type='date' onChange={changeDate} />
        <select onChange={changeDay}>
            <option value={"Mon"}>月</option>
            <option value={"Tue"}>火</option>
            <option value={"Wed"}>水</option>
            <option value={"Thu"}>木</option>
            <option value={"Fri"}>金</option>
        </select>
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
        <p>{date},{day},{classTime},{grade}</p>
        {curriculum[1][day][classTime]?<p>{curriculum[1][day][classTime]}</p>:<p></p>}
    </div>
  )
}

export default Form