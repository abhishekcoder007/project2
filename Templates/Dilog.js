import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Main from '../component/main';
import MyButton from '../Items/Button';

import Icons from '../component/Icons';
import TwitterIcon from '@mui/icons-material/Twitter';
import { lightGreen } from '@mui/material/colors';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        my twiter
      </Button>
     
      <Dialog
        open={open}
        onClose={handleClose}
       
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"white" ,height:"85vh", width:'500px',borderRadius:"25px"}}>
            
        <div><Icons /></div>
           <div> <Main/></div>
          
        
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
           
          </Button> */}

          {/* <i>Don't have an account? <span style={{color:"blue",}}>Sign up</span></i> */}
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

