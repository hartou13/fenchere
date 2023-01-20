import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BackOffStat from './component/BackOffStat/BackOffStat';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import HistoriqueMouvement from './component/historiqueMouvement/HistoriqueMouvement';
import ListUsers from './component/listUsers/ListUsers';
import LoginAdmin from './component/loginAdmin/LoginAdmin';
import Categorie from './page/Categorie';
import ListCategorie from './page/ListCategorie';
import AddCategorie from './page/AddCategorie';
import UpdateCategorie from './page/UpdateCategorie';
import InputComponent from './component/InputComp';
import TableComp from './component/TableComp';
import NotValidate from './demandeargent/NotValidate';
import ListOnGoingAuction from './component/listEnchereEnCours/ListOnGoingAuction';
import UpdateAdmin from './component/updateAdmin/UpdateAdmin';
import UpdateCommi from './component/updateCommi/UpdateCommi';
import EnchereAClore from './component/enchereAClore/EnchereAClore';

const root = ReactDOM.createRoot(document.getElementById('root'));
let data = [
  {
    a: "a",
    b: "b",
    c: 1,
    d: <p>Salama</p>
  },
  {
    a: "a",
    b: "b",
    c: 2,
    d: <p>tezitra</p>

  }
];
let header = ["a", "b", "d"];
root.render(
  <BrowserRouter>
    <Routes>
      {/* mialy */}
      <Route path={'/'} element={<LoginAdmin />} ></Route>
      {/* hart */}
      <Route path={'/stat'} element={<BackOffStat />} ></Route>
      <Route path={'/listUser'} element={<ListUsers />} ></Route>
      <Route path={'/histo'} element={<HistoriqueMouvement />} ></Route>
      <Route path={'/listAuction'} element={<ListOnGoingAuction />} ></Route>
      <Route path={'/updateAdmin'} element={<UpdateAdmin />} ></Route>
      <Route path={'/updateCommi'} element={<UpdateCommi />} ></Route>
      <Route path={'/aclore'} element={<EnchereAClore />} ></Route>

      {/* faneva */}
      {/* <Route path={'/'} element={<Categorie component={<ListCategorie/>}/>}></Route> */}
      <Route path={'/liste'} element={<Categorie component={<ListCategorie />} />}></Route>
      <Route path={'/add'} element={<Categorie component={<AddCategorie />} />}></Route>
      <Route path={'/update'} element={<Categorie component={<UpdateCategorie />} />}></Route>

      {/* do */}

      <Route path="/t" element={<TableComp border="1" cellSpacing="0" className="table table-striped table-sm" data={data} header={header}></TableComp>} />
      <Route path="/nv" element={<NotValidate></NotValidate>} />
      <Route path="/input" element={<InputComponent className="form-control" placeholder="Enter your Name" name="nom" type="date"></InputComponent>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
