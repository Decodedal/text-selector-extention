console.log("Background running")

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}

//use messaging to link the content and background scripts