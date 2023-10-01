const sampleWords = new Set([
    "high",
    "much",
    "very",
    "need",
    "school",
    "make",
    "they",
    "around",
    "move",
    "own",
    "man",
    "stand",
    "come",
    "through",
    "with",
    "home",
    "large",
    "look",
    "child",
    "than",
    "during",
    "like",
    "all",
    "show",
    "other",
    "that",
    "however",
    "of",
    "where",
    "want",
    "down",
    "know",
    "use",
    "number",
    "seem",
    "but",
    "must",
    "could",
    "mean",
    "feel",
    "find",
    "many",
    "on",
    "these",
    "may",
    "even",
    "world",
    "see",
    "house",
    "people",
    "hand",
    "a",
    "off",
    "there",
    "both",
    "have",
    "order",
    "after",
    "consider",
    "you",
    "small",
    "then",
    "those",
    "program",
    "up",
    "which",
    "go",
    "call",
    "say",
    "get",
    "no",
    "word",
    "this",
    "not",
    "over",
    "few",
    "never",
    "general",
    "place",
    "first",
    "late",
    "here",
    "run",
    "good",
    "what",
    "by",
    "leave",
    "into",
    "give",
    "still",
    "state",
    "keep",
    "write",
    "year",
    "same",
    "each",
    "begin",
    "it",
    "under",
    "so",
    "the",
    "fact",
    "last",
    "eye",
    "plan",
    "as",
    "without",
    "do",
    "way",
    "early",
    "old",
    "become",
    "time",
    "more",
    "course",
    "lead",
    "against",
    "at",
    "real",
    "most",
    "right",
    "also",
    "group",
    "when",
    "day",
    "present",
    "should",
    "life",
    "thing",
    "would",
    "while",
    "only",
    "just",
    "ask",
    "think",
    "how",
    "we",
    "he",
    "face",
    "system",
    "too",
    "any",
    "new",
    "I",
    "before",
    "in",
    "she",
    "again",
    "back",
    "can",
    "form",
    "interest",
    "part",
    "such",
    "person",
    "play",
    "set",
    "turn",
    "one",
    "public",
    "will",
    "long",
    "tell",
    "help",
    "now",
    "another",
    "be",
    "little",
    "increase",
    "nation",
    "well",
    "between",
    "from",
    "some",
    "about",
    "open",
    "to",
    "if",
    "great",
    "might",
    "govern",
    "possible",
    "for",
    "work",
    "since",
    "or",
    "line",
    "head",
    "take",
    "out",
    "problem",
    "change",
    "end",
    "develop",
    "who",
    "hold",
    "point",
    "because",
    "and",
    "follow",
    "very",
    "the",
    "think",
    "they",
    "where",
    "who",
    "end",
    "group",
    "get",
    "before",
    "not",
    "old",
    "turn",
    "any",
    "then",
    "possible",
    "come",
    "program",
    "work",
    "still",
    "never",
    "well",
    "increase",
    "ask",
    "will",
    "form",
    "mean",
    "for",
    "by",
    "since",
    "how",
    "keep",
    "home",
    "set",
    "he",
    "long",
    "person",
    "out",
    "help",
    "in",
    "head",
    "number",
    "early",
    "late",
    "interest",
    "tell",
    "same",
    "too",
    "line",
    "public",
    "many",
    "those",
    "have",
    "this",
    "because",
    "thing",
    "know",
    "change",
    "play",
    "she",
    "place",
    "when",
    "from",
    "part",
    "follow",
    "new",
    "against",
    "be",
    "so",
    "with",
    "great",
    "last",
    "word",
    "these",
    "leave",
    "run",
    "feel",
    "govern",
    "eye",
    "course",
    "small",
    "present",
    "while",
    "right",
    "no",
    "few",
    "you",
    "now",
    "little",
    "child",
    "first",
    "I",
    "to",
    "after",
    "both",
    "however",
    "much",
    "need",
    "nation",
    "just",
    "into",
    "another",
    "develop",
    "on",
    "may",
    "do",
    "real",
    "high",
    "over",
    "between",
    "make",
    "house",
    "way",
    "like",
    "hold",
    "as",
    "what",
    "problem",
    "plan",
    "school",
    "there",
    "use",
    "show",
    "lead",
    "give",
    "that",
    "can",
    "face",
    "go",
    "all",
    "say",
    "point",
    "about",
    "open",
    "of",
    "or",
    "own",
    "call",
    "people",
    "consider",
    "year",
    "man",
    "move",
    "find",
    "again",
    "order",
    "time",
    "write",
    "which",
    "a",
    "world",
    "through",
    "if",
    "general",
    "system",
    "but",
    "up",
    "it",
    "seem",
    "life",
    "look",
    "hand",
    "state",
    "at",
    "here",
    "stand",
    "off",
    "back",
    "could",
    "and",
    "some",
    "fact",
    "without",
    "begin",
    "down",
    "see",
    "also",
    "than",
    "each",
    "one",
    "want",
    "around",
    "other",
    "we",
    "good",
    "large",
    "become",
    "during",
    "should",
    "such",
    "must",
    "day",
    "only",
    "under",
    "more",
    "most",
    "take",
    "would",
    "even",
    "might"
]);


const WebRTCConnection = class {
    constructor(swapDisplay, bothPlayData, updateRange, arrayToStoreWords) {
        const configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
        this.peerConncetion = new RTCPeerConnection(configuration);
        this.role = null;
        this.Ichannel = null;
        this.swapDisplay = swapDisplay;
        this.bothPlayData = bothPlayData;
        this.updateRange = updateRange;
        this.arrayToStoreWords = arrayToStoreWords;
        this.consider_less_words = null;
    }

    addListenersForChannel() {
        this.Ichannel.onopen = () => console.log('open')
        this.Ichannel.onclose = () => console.log('close')
        this.Ichannel.onmessage = async ({ data }) => {
            let realObjData = JSON.parse(data);
            if(Array.isArray(realObjData)) {
                this.consider_less_words = realObjData.slice();
            }
            else {

                this.bothPlayData['NOT_YOU'] = JSON.parse(data);
                if(this.bothPlayData["NOT_YOU"]['ready']) {
                    document.querySelector(`[data-my-name-is = "NOT_YOU"]`).style.color = 'green';
                }
                if(this.bothPlayData["YOU"]["ready"] && this.bothPlayData["NOT_YOU"]['ready']) {
                    setTimeout(()=> {
                        document.getElementById('inputText').removeAttribute('readonly');
                        document.getElementById('inputText').focus();
                    }, 5000);
                }
                this.updateRange();
            }
        }
    }
    async actAsHost(callBack) {
        this.role = 'host';
        let resolveNow = null;
        this.peerConncetion.onicecandidate = e => {
            console.log(this.peerConncetion.iceGatheringState);
            if(this.peerConncetion.iceGatheringState == 'complete')
                resolveNow();
        }
        this.Ichannel = this.peerConncetion.createDataChannel('channel')
        this.addListenersForChannel();
        const offer = await this.peerConncetion.createOffer();
        await this.peerConncetion.setLocalDescription(offer);
        await new Promise((resolve, reject) => {
            resolveNow = resolve;
        });
        await callBack(JSON.stringify(this.peerConncetion.localDescription));
        const answerOffer = prompt("Enter data recived by guest");
        await this.peerConncetion.setRemoteDescription(JSON.parse(answerOffer));
        this.swapDisplay();
    }

    async actAsGuest(callBack) {
        this.role = 'guest';
        let resolveNow = null;
        this.peerConncetion.onicecandidate = async () => {
            console.log(this.peerConncetion.iceGatheringState);
            if(this.peerConncetion.iceGatheringState == 'complete')
            resolveNow();
        }
        this.peerConncetion.ondatachannel = ({ channel }) => {
            this.Ichannel = channel;
            this.addListenersForChannel();
        }
        const offer = prompt("Enter data recived by host");
        await this.peerConncetion.setRemoteDescription(JSON.parse(offer));
        const answer = await this.peerConncetion.createAnswer();
        this.peerConncetion.setLocalDescription(answer);
        await new Promise((resolve, reject) => {
            resolveNow = resolve;
        });
        await callBack(JSON.stringify(this.peerConncetion.localDescription));
        this.swapDisplay();

    }
    getPeerConnection() {
        return this.peerConncetion;
    }
    sendData(message) {
        this.Ichannel.send(message);
    }

    inititalizeTheMyData() {
        this.bothPlayData["YOU"]["value"] = 0;
        this.bothPlayData["YOU"]["ready"] = false;
        this.bothPlayData["YOU"]["postion"] = 0;
        this.bothPlayData["NOT_YOU"]["value"] = 0;
        this.bothPlayData["NOT_YOU"]["ready"] = false;
        this.bothPlayData["NOT_YOU"]["postion"] = 0;
        document.getElementById('inputText').setAttribute('readonly', true);
    }
    shortifyTheText() {
        if(this.role == 'host') {
            this.fisherYatesMethod(this.arrayToStoreWords);
            const random = Math.floor(Math.random()*(40-30)) + 30;
            this.consider_less_words = arrayToStoreWords.slice(0, random);
            this.sendData(JSON.stringify(this.consider_less_words));
            return this.consider_less_words;
        }
        else {
            return this.consider_less_words;
        }
    }
    fisherYatesMethod() {

        for (let i = this.arrayToStoreWords.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let k = this.arrayToStoreWords[i];
            this.arrayToStoreWords[i] = this.arrayToStoreWords[j];
            this.arrayToStoreWords[j] = k;
        }
    }
};
let bothPlayData = { "YOU": {}, "NOT_YOU": {} };
function swapDisplay() {
    const divConn = document.getElementById('forConnetion');
    const divPlay = document.getElementById('play');
    divConn.style.display = 'none';
    divPlay.style.display = 'block';
}
function updateRange() {
    const ul = document.getElementById('messages');
    let lis = ul.children;
    let ranges = [];

    lis[0].children[0].value = bothPlayData[lis[0].firstChild.nodeValue]['value'];
    if (lis[0].children[0].value == textareaDivSpans.length && lis[0].lastChild == lis[0].children[0]) {
        bothPlayData[lis[0].firstChild.nodeValue]['postion'] = bothPlayData[lis[1].firstChild.nodeValue]['postion'] + 1;
        lis[0].appendChild(document.createTextNode(bothPlayData[lis[0].firstChild.nodeValue]['postion']));
    }
    lis[1].children[0].value = bothPlayData[lis[1].firstChild.nodeValue]['value'];
    if (lis[1].children[0].value == textareaDivSpans.length && lis[1].lastChild == lis[1].children[0]) {
        bothPlayData[lis[1].firstChild.nodeValue]['postion'] = bothPlayData[lis[0].firstChild.nodeValue]['postion'] + 1;
        lis[1].appendChild(document.createTextNode(bothPlayData[lis[1].firstChild.nodeValue]['postion']));
    }

}
let arrayToStoreWords = Array.from(sampleWords);
const myObj = new WebRTCConnection(swapDisplay, bothPlayData, updateRange, arrayToStoreWords);
function showAlert(offer) {
    return new Promise((resolve, reject) => {
        var customAlert = document.getElementById('customAlert');
        customAlert.style.display = 'block';
        customAlert.querySelector('textarea').value = offer;
        customAlert.querySelector('button').addEventListener('click', (ev) => {
            customAlert.style.display = 'none';
            resolve();
        });
    })
}
document.getElementById("host").addEventListener('click', (ev) => {

    myObj.actAsHost(showAlert);
});
document.getElementById("guest").addEventListener('click', (ev) => {
    // const myObj = new WebRTCConnection();
    myObj.actAsGuest(showAlert);
});




const textarea = document.getElementById('messageInput');
const inputText = document.getElementById('inputText');
const start_button = document.getElementById("start_button");
const readdy_button = document.getElementById("ready");

let textareaDivSpans = [];







function updateMyValue(valueLen) {
    bothPlayData["YOU"]["value"] = valueLen;
    myObj.sendData(JSON.stringify(bothPlayData['YOU']));

    updateRange();
}

function start() {
    myObj.inititalizeTheMyData();
    consider_less_words = myObj.shortifyTheText();
    addTextToTextArea(consider_less_words);
}
start_button.addEventListener('click', () => {
    start();
})
readdy_button.addEventListener('click', ()=>{
    bothPlayData["YOU"]["ready"] = true;
    document.data
    myObj.sendData(JSON.stringify(bothPlayData['YOU']));
    document.querySelector(`[data-my-name-is = "YOU"]`).style.color = 'green';
    if(bothPlayData["YOU"]["ready"] && bothPlayData["NOT_YOU"]['ready']) {
        setTimeout(()=> {
            document.getElementById('inputText').removeAttribute('readonly');
            document.getElementById('inputText').focus();
        }, 5000);
    }
})
function addTextToTextArea(arrayToStoreWords) {
    if(!arrayToStoreWords) {
        alert("Only host can start new game")
        return;
    }
    textarea.innerHTML = '';
    inputText.value = '';
    // rank=0;
    // inputText.setAttribute('readonly',true);
    let words = arrayToStoreWords.join(' ');
    textareaDivSpans = words.split('').map((val, ind) => {
        let span = document.createElement('span');
        span.textContent = val;
        span.dataset.indexOfThisSpan = ind;
        return span;
    });
    textareaDivSpans.forEach(span => {
        textarea.appendChild(span);
    });
    let tempRangeArr = document.querySelectorAll('input[type="range"]');

    tempRangeArr.forEach(val => { val.setAttribute('max', textareaDivSpans.length) });

    //range
    const ul = document.getElementById('messages');
    ul.innerHTML = '';

    for (let i = 0; i < 2; i++) {
        const range = document.createElement('input');
        const attributesToSet = { type: 'range', max: textareaDivSpans.length, min: 0, value: 0, style: 'width:60%;accent-color:rebeccapurple' };
        for (let bot in attributesToSet) range.setAttribute(bot, attributesToSet[bot]);
        const li = document.createElement('li');
        let person = i == 0 ? "YOU" : "NOT_YOU";
        li.dataset.myNameIs = person;
        li.appendChild(document.createTextNode(person));

        li.appendChild(range);
        ul.appendChild(li);
    }
}


inputText.addEventListener('input', (ev) => {
    const valueOfInp = ev.target.value;
    valueOfInp.split('').forEach((val, ind) => {
        if (textareaDivSpans[ind].textContent == val) {
            textareaDivSpans[ind].style.color = 'lime';
            textareaDivSpans[ind].dataset.isCorrect = true;
        }
        else {
            textareaDivSpans[ind].style.color = 'red';
            textareaDivSpans[ind].style.textDecoration = 'underline';
        }

    });
    for (let i = valueOfInp.length; i < textareaDivSpans.length; i++) {
        if (textareaDivSpans[i].style.color) {
            textareaDivSpans[i].style.color = '';
            textareaDivSpans[i].style.textDecoration = 'none';
            textareaDivSpans[i].dataset.isCorrect = false;
        }
        else break;
    }
    const len = document.querySelectorAll('span[data-is-correct="true"]').length;
    if (textareaDivSpans.length == len) ev.target.setAttribute('readonly', true);
    // socket.emit('updateMyValue', {namee,len});
    updateMyValue(len)


})
