import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SideNav from "./SideNave";
import Home from "./Home";
import OTC from "./OTC";
import ZUELIG from "./ZUELIG";
import UNILAB from "./UNILAB";
import METRO from "./METRO";
import GENERICS from "./GENERICS";
import BRANDED from "./BRANDED";

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <SideNav />
        {/* Make sure the main content area does not overflow */}
        <div className="flex-1 p-10 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/otc" element={<OTC />} />
            <Route path="/zuelig" element={<ZUELIG />} />
            <Route path="/unilab" element={<UNILAB />} />
            <Route path="/metro" element={<METRO />} />
            <Route path="/generics" element={<GENERICS />} />
            <Route path="/branded" element={<BRANDED />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
