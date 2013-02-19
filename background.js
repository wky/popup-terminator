
var active = true;

console.log('popup termination ON');
chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});
chrome.browserAction.setBadgeText({text:"BLOCK"});

chrome.browserAction.onClicked.addListener(function(t){
    if (active){
        active = false;
        console.log('popup termination OFF');
        chrome.browserAction.setBadgeText({text:"NO BLOCK"});
    }else{
        active = true;
        console.log('popup termination ON');
        chrome.browserAction.setBadgeText({text:"BLOCK"});
    }
});

chrome.windows.onCreated.addListener(function(w){
    if (active && w.type == 'popup'){
        console.log('Terminating a popup...');
        chrome.windows.remove(w.id, function(){
            console.log('YOU ARE TERMINATED ');
        });
    }
});
