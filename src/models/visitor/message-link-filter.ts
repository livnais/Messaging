import IChatMessageFilter from './ichat-message-filter';
export default class MessageLinkFilter implements IChatMessageFilter {
    appliquer(message: Object) {
        return `MessageLinkFilter ${message}`;
    }
}
