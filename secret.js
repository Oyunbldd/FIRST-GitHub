const pass = ['?', '404', 'I'];
let current = 0;
function add(word) {
    if (pass[current] !== word) {
        return;
    }
    current++;
    if (current === 2) {
        window.location.href = 'chat.html';
    }
}