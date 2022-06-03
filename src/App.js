import Datares from "./component/dataMap";
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div className="head-app">
      <Header />
      <div className="app">
        <Datares />
        {/* <Foother/> */}
      </div>
    </div>
  );
}

export default App;
