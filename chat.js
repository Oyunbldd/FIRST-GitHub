const inp = document.getElementsByClassName("input")[0];
let messagesEl = document.getElementById("messages");
let messages = [];
let message = document.getElementsByTagName("input")[0]
const db = firebase.database();
db.ref('messages').on('value', data => {
    console.log(data.val())
    let size = Object.keys(data.val()).length
    let me = data.val()
    let keys = Object.keys(me)
    console.log(keys)
    messagesEl.innerHTML = ""
    for (i = -0; i < size; i++) {
        let messageEl = document.createElement('div');
        messageEl.innerHTML = me[keys[i]].text;
        messageEl.className = 'message';
        messagesEl.appendChild(messageEl);
        inp.value = '';
    }
})
function send() {
    if (!inp.value) {
        return
    }
    const message = {
        text: inp.value,
        timestamp: Date.now()
    }
    db.ref('messages').push(message);

}
function uptade() {
    let messageEl = document.createElement('div');
    messageEl.innerHTML = me[keys[i]];
    messageEl.className = 'message';
    messagesEl.appendChild(messageEl);
    inp.value = '';
}
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        send();
    }
});