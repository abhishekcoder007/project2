import React from 'react';
import style from "./inputbox.module.css";
export default function Inputbox(props){

    return(
        <>
        <input className={style.input1} placeholder={props.placeholder} type={props.text}/>
        </>
    )
}