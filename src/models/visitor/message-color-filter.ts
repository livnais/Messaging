import IChatMessageFilter from './ichat-message-filter';
export default class MessageBoldFilter implements IChatMessageFilter {
    appliquer(message: Object) {
        return `MessageBoldFilter ${message}`;
    }
}
