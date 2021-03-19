import IChatMessageFilter from './ichat-message-filter';
export default class MessageItalicFilter implements IChatMessageFilter {
    appliquer(message: Object) {
        return `MessageItalicFilter ${message}`;
    }
}
