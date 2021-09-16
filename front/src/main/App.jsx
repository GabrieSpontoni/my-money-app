import React from "react";
import "./App.css";

import Sidebar from "../common/template/sideBar";
import Header from "../common/template/header";
import Footer from "../common/template/footer";
import Routes from "./routes";
import Messages from "../common/msg/messages";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <Routes />
      </div>
      <Footer />
      <Messages />
    </div>
  );
}

export default App;
