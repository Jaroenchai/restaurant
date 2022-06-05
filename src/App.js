import Datares from "./component/dataMap";
import "./App.css";
import Header from "./component/Header";
import PlaceList from "./component/PlaceList";
import { Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import ResDtail from "./component/ResDtail";
import PageError404 from "./component/PageEror404";

const AuthContext = React.createContext();

function App() {
  const [searchText,setsearchText] = useState('')
  return (
    <AuthContext.Provider value={{searchText,setsearchText}}>
      <Header />
      <Routes>
        <Route path="/" element={<div className="app"><PlaceList /><Datares/></div>} exact />
        <Route path="/post/:postId" element={<ResDtail/>}/>
        <Route path="*" element={<PageError404/>}/>
      </Routes>
    </AuthContext.Provider>
    
  );
}

export {AuthContext}
export default App;
