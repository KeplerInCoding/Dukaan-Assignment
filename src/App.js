import "./App.css";
import Sidebar from "./components/Sidebar";
import Discounts from "./pages/Discounts";
import {Route, Routes} from 'react-router-dom';
import Progress from "./pages/Progress";

function App() {
  return (<div className="w-screen h-screen">
    <div  className="flex">
    <Sidebar/>

    <Routes>
        <Route path="/" element={<Discounts/>}></Route>
        <Route path="/progress" element={<Progress/>}></Route>
        {/* <Route path="/sip" element={<Delievery/>}></Route>
        <Route path="/sip" element={<Marketing/>}></Route>
        <Route path="/sip" element={<Analytics/>}></Route>
        <Route path="/payouts" element={<Payouts/>}></Route>
        <Route path="/discounts" element={<Discounts/>}></Route>
        <Route path="/audience" element={<Audience/>}></Route>
        <Route path="/appeareance" element={<Appeareance/>}></Route>
        <Route path="/plugins" element={<Plugins/>}/> */}
      </Routes>
    </div>
  </div>);
}

export default App;
