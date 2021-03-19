import IChatMessageFilter from './ichat-message-filter';
export default class MessageColorFilter implements IChatMessageFilter {
    appliquer(message: Object) {
        return `MessageColorFilter ${message}`;
    }
}
