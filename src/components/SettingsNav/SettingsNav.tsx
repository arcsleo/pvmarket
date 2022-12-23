import "./SettingsNav.css";

function SettingsNav(props: any) {
  const { callbackNav, activeTab } = props;

  return (
    <div className="SettingNavWrapper">
      <div className="SettingNavHeading">SETTINGS</div>
      <div
        className={
          activeTab === "Profile"
            ? "SettingNavigation selected"
            : "SettingNavigation"
        }
        onClick={() => callbackNav("Profile")}
      >
        Profile
      </div>
      <div
        className={
          activeTab === "Wallet"
            ? "SettingNavigation selected"
            : "SettingNavigation"
        }
        onClick={() => callbackNav("Wallet")}
      >
        Wallet
      </div>
      <div
        className={
          activeTab === "Plan"
            ? "SettingNavigation selected"
            : "SettingNavigation"
        }
        onClick={() => callbackNav("Plan")}
      >
        Plan
      </div>
      <div
        className={
          activeTab === "Change password"
            ? "SettingNavigation selected"
            : "SettingNavigation"
        }
        onClick={() => callbackNav("Change password")}
      >
        Change password
      </div>
    </div>
  );
}

export default SettingsNav;
