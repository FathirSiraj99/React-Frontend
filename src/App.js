import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserList from "./pages/UserList";
import UserProduk from "./pages/ProductList";
import CreateUser from "./pages/UserCreate";
import UpdateUser from "./pages/UserUpdate";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/userproduk" element={<UserProduk/>}></Route>
          <Route path="/userlist" element={<UserList/>}></Route>
          <Route path="/createuser" element={<CreateUser/>}></Route>
          <Route path="/createuser" element={<CreateUser/>}></Route>
          <Route path="/updateuser/:id" element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

