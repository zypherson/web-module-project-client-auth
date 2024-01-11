import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import FriendsList from './Components/Friends';
import AddFriend from './Components/AddFriend';



function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Login/>}/>
       
      
      <Route exact path='/login' element={<Login /> }/>
       
      <Route exact path='/friends' element={<FriendsList/>}/>
        
      <Route exact path='/friends/add' element={<AddFriend/>}/>
        
      </Routes>


    </div>
  
  );
}

export default App;
