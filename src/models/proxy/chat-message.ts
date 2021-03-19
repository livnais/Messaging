export default class ChatMessage {
    /**
     * Add the message in plaintext
     */
    constructor(plaintext: string) {
        this.plaintext = plaintext;
    }

    testVariable: boolean = false;
    plaintext: string;
}
