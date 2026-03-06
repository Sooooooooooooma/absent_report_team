import React, { useEffect, useState } from 'react'
import Header from './header'
import "./Form.css"
import { useNavigate } from 'react-router-dom';
import curriculum from '../curriculum.json'


function Form({userInf,absentForm,setAbsentForm}) {
    const navigate = useNavigate();
    
    // フォーム入力処理
    const handleFormChange = (e) => {
        const { name, value, files } = e.target;

        setAbsentForm({
            ...absentForm,
            [name]: files ? files[0] : value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const isEmpty = Object.values(absentForm).some(
            (value) => value === "" || value === null
        );

        if (isEmpty) {
            alert("すべての項目を入力してください！");
            return;
        }
        console.log("Form",absentForm);
        navigate("/preview");
    };


  

    return (
        <form onSubmit={handleSubmit}>
            <Header/>
            <input type="date" name="date" required onChange={handleFormChange} />

            <select name="day" required onChange={handleFormChange}>
                <option value="">曜日</option>
                <option value="Mon">月曜日</option>
                <option value="Tue">火曜日</option>
                <option value="Wed">水曜日</option>
                <option value="Thu">木曜日</option>
                <option value="Fri">金曜日</option>
            </select>

            <select name="grade" required onChange={handleFormChange}>
                <option value="">学年</option>
                <option value="1">１年生</option>
                <option value="2">２年生</option>
                <option value="3">３年生</option>
                <option value="4">４年生</option>
            </select>

            <select name="class" required onChange={handleFormChange}>
                <option value="">何限？</option>
                <option value="1">1限</option>
                <option value="2">2限</option>
                <option value="3">3限</option>
                <option value="4">4限</option>
                <option value="5">5限</option>
                <option value="6">6限</option>
            </select>

            <input type="text" name="subject" placeholder="教科名" required onChange={handleFormChange} />

            <select name="reason" required onChange={handleFormChange}>
                <option value="">理由</option>
                <option value="病欠">病欠</option>
                <option value="遅延">公共交通機関の遅延</option>
            </select>

            <select name="isAttend" required onChange={handleFormChange}>
                <option value="">欠席 or 遅刻？</option>
                <option value="欠席">欠席</option>
                <option value="遅刻">遅刻</option>
            </select>

           <input type="file" name="file" required onChange={handleFormChange} />   {/* FileReader */}

            <button type="submit">送信</button>
        </form>
    )

}

export default Form;