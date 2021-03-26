import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import Search from "./components/Search";
import TextEditor from "./components/TextEditor";
import TopNav from "./components/TopNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import db from "./firebase";
import Home from "./components/Home";

const App = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [username, setUsername] = useState("");
  const [auth, setAuth] = useState(username != "");
  const [img, setImg] = useState("");

  // Business Communication
  const [businessCom, setBusinessCom] = useState([]);

  // Modern Programming Language
  const [mdp, smdp] = useState([]);

  // Visual Programming
  const [vp, svp] = useState([]);

  // Computer Orgranization & Assembly Language
  const [coal, scoal] = useState([]);

  // Data structure & Algorithms
  const [dsa, sdsa] = useState([]);

  useEffect(() => {
    db.collection("firstNote")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => setBusinessCom(snapshot.docs.map((doc) => doc.data())));
    db.collection("secondNote")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => smdp(snapshot.docs.map((doc) => doc.data())));
    db.collection("thirdNote")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => svp(snapshot.docs.map((doc) => doc.data())));
    db.collection("fourthNote")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => scoal(snapshot.docs.map((doc) => doc.data())));
    db.collection("fifthNote")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => sdsa(snapshot.docs.map((doc) => doc.data())));
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Navbar showOptions={showOptions} setShowOptions={setShowOptions} username={username} />
            <TopNav />
            {!auth ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Home setUsername={setUsername} setImg={setImg} setAuth={setAuth} />
              </div>
            ) : (
              <Dashboard bc={[]} username={username} img={img} />
            )}
          </Route>

          <Route path="/businessCommunication">
            <Navbar showOptions={showOptions} setShowOptions={setShowOptions} username={username} />
            <TopNav />
            {auth ? (
              <>
                <Dashboard bc={businessCom} username={username} img={img} />
                <Notes bc={businessCom} sbc={setBusinessCom} />
                <div className="center">
                  <Search />
                  <TextEditor bc={businessCom} sbc={setBusinessCom} username={username} img={img} />
                </div>
              </>
            ) : (
              <Home setUsername={setUsername} setImg={setImg} setAuth={setAuth} />
            )}
          </Route>

          <Route path="/modernProgrammingLanguage">
            <Navbar showOptions={showOptions} setShowOptions={setShowOptions} username={username} />
            <TopNav />
            {auth ? (
              <>
                <Dashboard bc={mdp} username={username} img={img} />
                <Notes bc={mdp} sbc={smdp} />
                <div className="center">
                  <Search />
                  <TextEditor bc={mdp} sbc={smdp} username={username} img={img} />
                </div>
              </>
            ) : (
              <Home setUsername={setUsername} setImg={setImg} setAuth={setAuth} />
            )}
          </Route>

          <Route path="/visualProgramming">
            <Navbar showOptions={showOptions} setShowOptions={setShowOptions} username={username} />
            <TopNav />
            {auth ? (
              <>
                <Dashboard bc={vp} username={username} img={img} />
                <Notes bc={vp} sbc={svp} />
                <div className="center">
                  <Search />
                  <TextEditor bc={vp} sbc={svp} username={username} img={img} />
                </div>
              </>
            ) : (
              <Home setUsername={setUsername} setImg={setImg} setAuth={setAuth} />
            )}
          </Route>

          <Route path="/compOrgAndAssemblyLanguage">
            <Navbar showOptions={showOptions} setShowOptions={setShowOptions} username={username} />
            <TopNav />
            {auth ? (
              <>
                <Dashboard bc={coal} username={username} img={img} />
                <Notes bc={coal} sbc={scoal} />
                <div className="center">
                  <Search />
                  <TextEditor bc={coal} sbc={scoal} username={username} img={img} />
                </div>
              </>
            ) : (
              <Home setUsername={setUsername} setImg={setImg} setAuth={setAuth} />
            )}
          </Route>

          <Route path="/dataStructureAndAlgorithm">
            <Navbar showOptions={showOptions} setShowOptions={setShowOptions} username={username} />
            <TopNav />
            {auth ? (
              <>
                <Dashboard bc={dsa} username={username} img={img} />
                <Notes bc={dsa} sbc={sdsa} />
                <div className="center">
                  <Search />
                  <TextEditor bc={dsa} sbc={sdsa} username={username} img={img} />
                </div>
              </>
            ) : (
              <Home setUsername={setUsername} setImg={setImg} setAuth={setAuth} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
