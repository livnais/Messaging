import IChatMessageFilter from './IChatMessageFilter';
export default class MessageLinkFilter implements IChatMessageFilter {
    appliquer(message: Object) {
        return `MessageLinkFilter ${message}`;
    }
}
