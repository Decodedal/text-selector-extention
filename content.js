console.log("its ")

const textPinkBg = () =>{
    let paragraphs = document.getElementsByTagName("p")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    for(elm of paragraphs){
        elm.style['background-color'] = `#${randomColor}`;
    }
}
const getSelectedText = () => window.getSelection().toString();

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    if(message.txt === "hello"){
        // textPinkBg()
    let userSelection = getSelectedText()
    console.log(userSelection)
    }
}