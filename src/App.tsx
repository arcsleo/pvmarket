import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SettingsNav from "./components/SettingsNav/SettingsNav";
import Header from "./components/Header/Header";
import SecondHeader from "./components/SecondHeader/SecondHeader";
import Profile from "./components/Profile/Profile";
import Password from "./components/Password/Password";
import Wallet from "./components/Wallet/Wallet";
import AllCards from "./components/AllCards/AllCards";
import Plan from "./components/Plan/Plan";

function App() {
  const [activeTab, setactiveTab] = React.useState("Profile");

  const callbackNav = (value: any) => {
    setactiveTab(value);
  };

  return (
    <div className="App">
      <Header />
      <SecondHeader />
      <div className="Navigation">
        <SettingsNav callbackNav={callbackNav} activeTab={activeTab} />
      </div>
      <div className="contentArea">
        {activeTab === "Profile" && <Profile />}
        {/* {activeTab === "Plan" && <Plan />} */}
        {activeTab === "Change password" && <Password />}
        {activeTab === "Wallet" && <AllCards />}
        {/* <Wallet /> */}
      </div>
    </div>
  );
}

export default App;
