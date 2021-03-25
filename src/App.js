import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import Search from "./components/Search";
import TextEditor from "./components/TextEditor";
import TopNav from "./components/TopNav";

const App = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="app">
      <Navbar showOptions={showOptions} setShowOptions={setShowOptions} />
      <TopNav />
      <Dashboard />
      <Notes />
      <div className="center">
        <Search />
        <TextEditor />
      </div>
    </div>
  );
};

export default App;
