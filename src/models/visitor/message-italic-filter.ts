import IChatMessageFilter from './IChatMessageFilter';
export default class MessageItalicFilter implements IChatMessageFilter {
    appliquer(message: Object) {
        return `MessageItalicFilter ${message}`;
    }
}
