import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NewHobby from "./components/NewHobby/NewHobby";
import ProviderCabinet from "./components/ProviderCabinet/ProviderCabinet";
import UserCabinet from "./components/UserCabinet/UserCabinet";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route path="/main_page" render={ () => <MainPage />}/>
            <Route path="/new_hobby" render={ () => <NewHobby />}/>
            <Route path="/provider_cabinet" render={ () => <ProviderCabinet />}/>
            <Route path="/user_cabinet" render={ () => <UserCabinet />}/>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;