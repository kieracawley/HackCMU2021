# HackCMU2021

# This code is going to filter out unwanted websites via chrome extension

#manifest.json file code
{
  "name": "Getting Started Example",
  "description": "TBD",
  "version": "1.0",
  "manifest_version": 3
} 
"content_scripts": [
  {
    "matches": [
      "<all_urls>"
    ],
    "js": ["content.js"] ###This is going to tell manifest.json to inject content.js
  }
]

content.js file (will interact with webpages using javascript)
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);

// background.js
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);
