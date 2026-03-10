
import React from 'react'
import { useState } from 'react'
import "./header.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';



function Hamburger(){
    const [isOpen,setIsOpen]=useState(false);
    const navigate = useNavigate();


    //ボタンが押された時
    const toggleMenu=()=>{
        setIsOpen(true);
    };

    const closeMenu=()=>{
        setIsOpen(false);
    };

    const information =()=>{
        navigate("/Myself");  //アカウントのページに飛ぶ

    };

    const history =()=>{
        navigate("/Reback")  //履歴のページに飛ぶ
    }

    const logout =()=>{
        navigate("/Login");
    }

    const introduce =()=>{
        navigate("/Introduce");
    }
    
    return (
        <>
      <h2 className='header'>欠席報告</h2>
        <div className='hamburger' onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
        {isOpen &&<div className='overlay' onClick={closeMenu}></div>}
        

        <div className={isOpen ? "menu open" :"menu"}>
        <ul>
            <li onClick={information}>アカウント</li>
            <li onClick={introduce}>このアプリについて</li>
            <li onClick={history}>履歴</li>
            {/* <li onClick={closeMenu}>close</li> */}
            <li onClick={logout}>ログアウト</li>

        </ul>
        </div>
      </>
    )
}


    


export default Hamburger