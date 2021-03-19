import IChatMessageFilter from './IChatMessageFilter';
export default class MessageColorFilter implements IChatMessageFilter {
    appliquer(message: Object) {
        return `MessageColorFilter ${message}`;
    }
}
