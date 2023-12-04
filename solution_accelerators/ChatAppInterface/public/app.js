const socket = require('socket.io-client')();

const chatContainer = document.getElementById('chat-container');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

function sendMessage(message) {
    socket.emit('message', message);
}

socket.on('message', (message) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
});

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = messageInput.value;
    sendMessage(message);
    messageInput.value = '';
});
