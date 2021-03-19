import IChatMessageFilter from './IChatMessageFilter';
export default class MessageBoldFilter implements IChatMessageFilter {
    appliquer(message: Object) {
        return `MessageBoldFilter ${message}`;
    }
}
