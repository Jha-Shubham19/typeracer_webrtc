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

const textarea = document.getElementById('messageInput');
const inputText = document.getElementById('inputText');
const readyButton = document.getElementById('ready');
const startButton = document.getElementById('start_button');
const hostButton = document.getElementById('host');
const guestButton = document.getElementById("guest");



const AllPlayersData = class {
    static allAreReady = false;
    static consider_less_words = [];
    static rank = 0;
    constructor(namee) {
        this.allPlayersData = {};
        this.allPlayersData[namee] = { value: 0, ready: false };
        this.textareaDivSpans = [];
        this.arrayToStoreWords = Array.from(sampleWords);
        // this.start();
    }
    updateRange() {
        const ul = document.getElementById('messages');
        let lis = ul.children;
        let ranges = [];
        for (let li of lis) {
            // console.log(li.firstChild.nodeValue);
            li.children[0].value = this.allPlayersData[li.firstChild.nodeValue]['value'];
            if (li.children[0].value == this.textareaDivSpans.length && li.lastChild == li.children[0]) {
                AllPlayersData.rank++;
                li.appendChild(document.createTextNode(AllPlayersData.rank));
                WebRTCConnection.sendData(AllPlayersData.rank);
            }
        }
    }
    fisherYatesMethod(points = this.arrayToStoreWords) {
        return new Promise((resolve, reject) => {
            let i = points.length-1;
            for (; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let k = points[i];
                points[i] = points[j];
                points[j] = k;
            }
            if (i == 0) resolve(-1);

        })
    }
    async start() {
        AllPlayersData.allAreReady = false;
        
        if (AllPlayersData.consider_less_words.length == 0) {
            console.log("botttttttttttttt");
            await this.fisherYatesMethod();
            AllPlayersData.consider_less_words = this.arrayToStoreWords.slice(0, Math.floor(Math.random() * (45 - 30)) + 30);
            Object.keys(this.allPlayersData).forEach((namee, ind) => {
                this.addNewPlayer(namee);
            });
            WebRTCConnection.sendData(JSON.stringify(this.allPlayersData));
            WebRTCConnection.sendData(0);   //rank = 0
            WebRTCConnection.sendData(JSON.stringify(AllPlayersData.consider_less_words));
        }
        this.setTheTextToTextarea();
    }
    setTheTextToTextarea(arrayToStoreWords = AllPlayersData.consider_less_words) {
        textarea.innerHTML = '';
        inputText.value = '';
        inputText.setAttribute('readonly', true);
        let words = arrayToStoreWords.join(' ');
        this.textareaDivSpans = words.split('').map((val, ind) => {
            let span = document.createElement('span');
            span.textContent = val;
            span.dataset.indexOfThisSpan = ind;
            return span;
        });
        this.textareaDivSpans.forEach(span => {
            textarea.appendChild(span);
        });
        // console.log(textarea);
        let tempRangeArr = document.querySelectorAll('input[type="range"]');

        tempRangeArr.forEach(val => { val.setAttribute('max', this.textareaDivSpans.length) });
        this.message();
    }
    message(message = Object.keys(this.allPlayersData), doYouHaveToUpdate = false) {
        if (doYouHaveToUpdate == true) {
            // console.log("bott hu me dotouhavetoupdate");
            this.updateRange();
            return;
        }

        const ul = document.getElementById('messages');
        ul.innerHTML = '';
        // console.log(message);
        for (let person of message) {
            const range = document.createElement('input');
            const attributesToSet = { type: 'range', max: this.textareaDivSpans.length, min: 0, value: 0, style: 'width:60%;accent-color:rebeccapurple' };
            for (let bot in attributesToSet) range.setAttribute(bot, attributesToSet[bot]);
            const li = document.createElement('li');
            li.dataset.myNameIs = person;
            li.appendChild(document.createTextNode(person));

            li.appendChild(range);
            ul.appendChild(li);
        }
        let canWeRealeseAll = true;

        Object.entries(this.allPlayersData).map(([key, val]) => {
            // console.log(key, val);
            if (val['ready']) {
                document.querySelector(`li[data-my-name-is="${key}"`).style.color = 'green';
            }
            else canWeRealeseAll = false;
        });
        if (canWeRealeseAll) {
            // console.log("chdh");
            AllPlayersData.allAreReady = true;
            WebRTCConnection.sendData(JSON.stringify(true));
        }
        // else WebRTCConnection.sendData(JSON.stringify(allPlayersData));
    }
    addNewPlayer(hisName) {
        this.allPlayersData[hisName] = { value: 0, ready: false };
    }
};
const Player = class extends AllPlayersData {
    constructor(namee) {
        super(namee);

        this.namee = namee;
    }
    setMyValue(len) {
        this.allPlayersData[this.namee].value = len;

        WebRTCConnection.sendData(JSON.stringify(this.allPlayersData))
    }
    
    setMyUI(ev) {
        const valueOfInp = ev.target.value;
        valueOfInp.split('').forEach((val, ind) => {
            if (this.textareaDivSpans[ind].textContent == val) {
                this.textareaDivSpans[ind].style.color = 'lime';
                this.textareaDivSpans[ind].dataset.isCorrect = true;
            }
            else {
                this.textareaDivSpans[ind].style.color = 'red';
                this.textareaDivSpans[ind].style.textDecoration = 'underline';
            }

        });
        for (let i = valueOfInp.length; i < this.textareaDivSpans.length; i++) {
            if (this.textareaDivSpans[i].style.color) {
                this.textareaDivSpans[i].style.color = '';
                this.textareaDivSpans[i].style.textDecoration = 'none';
                this.textareaDivSpans[i].dataset.isCorrect = false;
            }
            else break;
        }
        const len = document.querySelectorAll('span[data-is-correct="true"]').length;
        if (this.textareaDivSpans.length == len) ev.target.setAttribute('readonly', true);
        this.setMyValue(len);
    }
    setIamReady() {
        
        this.allPlayersData[this.namee].ready = true;
        WebRTCConnection.sendData(JSON.stringify(this.allPlayersData));
    }
    releaseMe() {
        setTimeout(() => { inputText.removeAttribute('readonly'); inputText.focus() }, 4000)
    }
};
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
const namee = prompt("enter name");
const playerObj = new Player(namee);
readyButton.addEventListener('click', () => {
    playerObj.setIamReady();
});
startButton.addEventListener('click', () => {
   
    if (WebRTCConnection.allWebRTCConnections.length && WebRTCConnection.allWebRTCConnections[0].role == "host") {
        AllPlayersData.consider_less_words = [];
        playerObj.start();
    }
    else if (WebRTCConnection.allWebRTCConnections.length) alert("Only host can start new game");
    else playerObj.start();
})
hostButton.addEventListener('click', () => {
    const peerConncetionForNewClient = new WebRTCConnection();
    peerConncetionForNewClient.actAsHost(showAlert);
});
guestButton.addEventListener('click', () => {
    const peerConncetionForNewClient = new WebRTCConnection();
    peerConncetionForNewClient.actAsGuest(showAlert);
});


inputText.addEventListener('input', (ev) => playerObj.setMyUI(ev));
const WebRTCConnection = class {
    static allWebRTCConnections = [];
    constructor(swapDisplay, bothPlayData, updateRange, arrayToStoreWords) {
        const configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
        this.peerConncetion = new RTCPeerConnection(configuration);
        this.role = null;
        this.Ichannel = null;
        WebRTCConnection.allWebRTCConnections.push(this);
    }

    addListenersForChannel() {
        this.Ichannel.onopen = async () => {
            playerObj.addNewPlayer(playerObj.namee);
            this.Ichannel.namee = playerObj.namee;
            WebRTCConnection.sendData(JSON.stringify(playerObj.allPlayersData));
            if (this.role == 'host') {
                WebRTCConnection.sendData(JSON.stringify(AllPlayersData.consider_less_words));
            }
        }
        this.Ichannel.onclosing = (c) => console.log(c);
        this.Ichannel.onmessage = async ({ data }) => {
            
            data = await JSON.parse(data);
            if (data == true) {
                if (this.role == 'host')
                    WebRTCConnection.sendData(JSON.stringify(true));
                else
                    playerObj.releaseMe();
            }
            else if (Array.isArray(data)) { // text is array
                AllPlayersData.consider_less_words = data;
                playerObj.start();
            }
            else if (Number.isInteger(data)) { // number for rank
                AllPlayersData.rank = data;
            }
            else {
                playerObj.allPlayersData = { ...playerObj.allPlayersData, ...data };

                if (this.role == 'host')
                    WebRTCConnection.sendData(JSON.stringify(playerObj.allPlayersData));    //brodcast
                else {
                    
                    playerObj.message(undefined, AllPlayersData.allAreReady);

                }

            }
        }
    }
    async handleHostSperately(data) {
        
        data = await JSON.parse(data);
        if (data == true) {
            playerObj.releaseMe();
        }
        else if (Array.isArray(data)) { // text is array
            AllPlayersData.consider_less_words = data;
            playerObj.start();
        }
        else if (Number.isInteger(data)) { //number for rank
            AllPlayersData.rank = data;
        }
        else {
            playerObj.allPlayersData = { ...playerObj.allPlayersData, ...data };
            
            playerObj.message(undefined, AllPlayersData.allAreReady);
        }
    }
    async actAsHost(callBack) {
        this.role = 'host';
        let resolveNow = null;
        this.peerConncetion.onicecandidate = e => {
            if (this.peerConncetion.iceGatheringState == 'complete')
                resolveNow();
        }
        this.Ichannel = this.peerConncetion.createDataChannel('channel')
        this.addListenersForChannel();
        const offer = await this.peerConncetion.createOffer();
        await this.peerConncetion.setLocalDescription(offer);
        await new Promise((resolve, reject) => {
            resolveNow = resolve;
        });
        console.log(JSON.stringify(this.peerConncetion.localDescription));
        await callBack(JSON.stringify(this.peerConncetion.localDescription));
        const answerOffer = prompt("Enter data recived by guest");
        await this.peerConncetion.setRemoteDescription(JSON.parse(answerOffer));

    }

    async actAsGuest(callBack) {
        this.role = 'guest';
        let resolveNow = null;
        this.peerConncetion.onicecandidate = async () => {
            console.log(this.peerConncetion.iceGatheringState);
            if (this.peerConncetion.iceGatheringState == 'complete')
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
        console.log(JSON.stringify(this.peerConncetion.localDescription));
        await callBack(JSON.stringify(this.peerConncetion.localDescription));

    }
    static sendData(message) {
        WebRTCConnection.allWebRTCConnections.forEach(async (obj) => {
            if (obj.role == 'host') {
                obj.handleHostSperately(message);
            }
            await obj.Ichannel.send(message);
        });
    }
};