import { blue } from '@mui/material/colors';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import React from 'react';
import MyButton from '../Items/Button';
import Hello from '../Items/new';
import AlertDialog from '../Templates/Dilog';
import Inputbox from './inputbox';

import styles from './main.module.css';
import { Link } from "react-router-dom";

      
  function Main() {

    return(
        <>
        {/* <div>< AlertDialog/></div> */}
        <div className={styles.main}>
            <h2 className={styles.header1}>Sign in to Twitter</h2>
            
              
                 <div><Hello icon={<GoogleIcon style={{backgroundImage: "conic-gradient(red, yellow, green)"}}/>}  background="white" color="black"  text="Sign in with Google"/></div>
                 <div><Hello icon={<AppleIcon />} background="white" color="black" text="Sign in with Apple "/></div>
                 
          
                 <div><Inputbox  placeholder="email"  text="email"/></div>
                 <div><Inputbox placeholder="password"   text="password"/></div>
                 <div><MyButton color="white"  buttonname="NEXT"/></div>
                 <div><MyButton color="black" background="white" buttonname="Forget password?"/></div>
                 

            </div>
            <div className={styles.footer1}> <i>Don't have an account? <span style={{color:"blue",}}><Link to="/Register">Sign up</Link></span></i></div>

       

       
      
        </>
    )
    
  }
  export default Main;