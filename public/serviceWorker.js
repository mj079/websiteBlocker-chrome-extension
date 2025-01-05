chrome.runtime.onInstalled.addListener(() => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/icon48.png",
    title: "Website Blocker",
    message: "Blocking rules have been applied."
  });
});
