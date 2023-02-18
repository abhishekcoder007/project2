import { width } from '@mui/system';
import React from 'react';
import styles from"./Button.module.css";

const MyButton=(props) =>{

    return(
        <button  style={{color: props.color,backgroundColor:props.background}} className={styles.button1} >{props.buttonname}</button>
    )
      


}
export default MyButton;

//style={{color:"red",width:"200px",}}