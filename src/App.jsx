import Register from './pages/Resgister'
import Login from './pages/Login'
import Home from './pages/Home'
import './style.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import React, { useContext } from 'react';


function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to='/login'/>
    }

    return children;
  }

  console.log('CURRENT USER')
  console.log(currentUser)
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route index element={
        <ProtectedRoute>
        <Home/>
        </ProtectedRoute>
      }/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
