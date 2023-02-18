import React from 'react';
import style from './new.module.css';

function Hello(props){

    return(
        <>
       
       
        <div style={{color:props.color,backgroundColor:props.background}} className={style.insta}>
           <span style={{color:props.color,backgroundColor:props.background}} className={style.insta1}>{props.icon}&nbsp;{props.text} </span>

        </div>
        </>
    )
}
export default Hello;