import ChatMessage from './chat-message';

export default class ProxyChatMessage extends Array<ChatMessage> {
    forEach = (action) => {
        this.load();
        super.forEach(action);
    };

    load = (): void => {
        const array: Array<ChatMessage> = this.map((element: ChatMessage) => {
            element.testVariable = true;
            return element;
        });
        let i = 0;
        array.forEach((element) => {
            this[i] = element;
            i++;
        });
    };

    import(): string {
        return 'Proxy import';
    }
}
