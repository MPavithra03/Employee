import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Login from './pages/Login';
import Manager from './pages/Manager';
import Addtl from './pages/Addtl';
import Addtask from './pages/Addtask';
import Tl from './pages/Tl';
import Member from './pages/Member';
import Addtm from './pages/Addtm';
import Addtmtl from './pages/Addtmtl';
import Addtasktl from './pages/Addtasktl'
import Reset from './pages/Reset';



const App = () => {
  return (
    <div className='bg-sky-950'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/manager' element={<Manager/>}></Route>
        <Route path='/addtl' element={<Addtl/>}></Route>
        <Route path='/addtask' element={<Addtask/>}></Route>
        <Route path='/tl' element={<Tl/>}></Route>
        <Route path='/member' element={<Member/>}></Route>
        <Route path='/addtm' element={<Addtm/>}> </Route>
        <Route path='/addtmtl' element={<Addtmtl/>}></Route>
        <Route path='/addtasktl' element={<Addtasktl/>}> </Route>
        <Route path='/reset' element={<Reset/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
