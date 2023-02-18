import logo from './logo.svg';
import './App.css';
import Hello from './Items/new';
import Main from './component/main';
import AlertDialog from './Templates/Dilog';
import {Routes, Route} from 'react-router-dom';
import AlertDialog1 from './Templates/Register';

function App() {
  return (
    <div className="App">
      {< AlertDialog/>}
   <Routes>
   <Route path='/' element={< AlertDialog/>}/>
   <Route path="/Register" element={< AlertDialog1/>}/>
   <Route path="/Link" element={< AlertDialog1/>}/>
   </Routes>
   
    </div>
  );
}

export default App;
