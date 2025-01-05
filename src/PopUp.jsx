import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isBlockingEnabled, setBlockingEnabled] = useState(true);
  const [blockedSites, setBlockedSites] = useState(["example.com", "testsite.com"]);

  useEffect(() => {
    chrome.storage.local.get("isBlockingEnabled", (data) => {
      setBlockingEnabled(data.isBlockingEnabled);
    });
  }, []);

  const toggleBlocking = () => {
    const newStatus = !isBlockingEnabled;
    setBlockingEnabled(newStatus);
    chrome.storage.local.set({ isBlockingEnabled: newStatus });
    chrome.notifications.create({
      type: "basic",
      iconUrl: "../public/pngtree-block-icon-for-your-project-png-image_1731069.png",
      title: "Website Blocker",
      message: `Blocking ${newStatus ? "enabled" : "disabled"}.`
    });
  };

  return (
    <div>
      <h2>Website Blocker</h2>
      <button onClick={toggleBlocking}>
        {isBlockingEnabled ? "Disable Blocker" : "Enable Blocker"}
      </button>
      <h3>Blocked Websites:</h3>
      <ul>
        {blockedSites.map((site, index) => (
          <li key={index}>{site}</li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
