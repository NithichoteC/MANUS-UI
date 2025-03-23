
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./App.css";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <div className="flex h-screen w-screen bg-[#272728]">
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <main className="flex-1 flex flex-col items-center justify-end pb-[22px] transition-all duration-300">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
