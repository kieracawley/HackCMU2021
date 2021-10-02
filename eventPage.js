var currentDate = new Date();
var dd = currentDate.getDate();
var mm = currentDate.getMonth()+1;
var yy = currentDate.getFullYear();
if(dd<10) {dd = '0'+dd} 
if(mm<10) {mm = '0'+mm}
currentDate = (mm)+ "/"+ dd + "/" + yy;
chrome.runtime.onInstalled.addListener(function(details){
    var defaultSettings = {
		censorCharacter: "****",
		filterMethod: "0",
		filterToggle: false,
		matchMethod: "0",
		multipleMeaning: "0",
		password: "null", 
		warningDomains: [
		],
		websites: [
			],
		defaultWords: [],
		substituteWords: [],
		textHistory: [],
		wordDates:[{date: currentDate, wordHist: []}]	
	}

    if(details.reason == "install"){
       chrome.storage.local.set(defaultSettings, function() {
      	alert("Extension successfully installed");
    });
    }
});

// chrome.webRequest.onCompleted.addListener(function(details) {
//     var url = document.createElement('a');
//     url.href = details.url;
//     if (url.search && url.search.indexOf('ajaxpipe=1') !== -1) {
//         console.log('New page via AJAX.');
//         chrome.tabs.executeScript({'file' : 'content.js'});
//     }
// }, {urls : ["*://*.facebook.com/*"]});
