import Datares from "./component/dataMap";
import "./App.css";
import Header from "./component/Header";
import PlaceList from "./component/PlaceList";
import { Routes, Route } from "react-router-dom";
import React, {useState} from "react";

const AuthContext = React.createContext();

function App() {
  const [searchText,setsearchText] = useState('')
  return (
    <AuthContext.Provider value={{searchText,setsearchText}}>
      <div className="head-app">
      <Header />
      <Routes>
        <Route path="/" element={<div className="app"><PlaceList /><Datares/></div>} exact />
      </Routes>
    </div>
    </AuthContext.Provider>
    
  );
}

export {AuthContext}
export default App;
