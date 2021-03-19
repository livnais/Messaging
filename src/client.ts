import ChatMessage from './models/proxy/chat-message';
import ProxyChatMessage from './models/proxy/proxy-chat-message';

let isModified = true;

const proxy = new ProxyChatMessage();
proxy.push(new ChatMessage('test'));
proxy.push(new ChatMessage('test2'));
proxy.push(new ChatMessage('test3'));
proxy.push(new ChatMessage('test4'));

proxy.forEach((element: ChatMessage) => {
    isModified = element.testVariable == true;
});

console.log(isModified);
