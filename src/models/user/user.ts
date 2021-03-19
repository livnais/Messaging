import Etat from '../etat/etat';
import EtatPresent from '../etat/etat-present';
import ProxyChatMessage from '../proxy/proxy-chat-message';

export default class User {
    /**
     * Initialize state for the ueser
     */
    constructor() {
        this.etat = new EtatPresent();
        this.proxyChatMessage = new ProxyChatMessage();
    }

    public proxyChatMessage: ProxyChatMessage;
    private etat: Etat;

    public getEtat(): Etat {
        return this.etat;
    }

    public setEtat(etat: Etat): void {
        this.etat = etat;
    }

    public sendMessages(): string {
        return this.etat.sendMessages(); //TODO doit appeller la fonction de l'état
    }

    public getMessageUp() {
        return 'Get message up';
    }

    public getMessageDown() {
        return 'Get message down';
    }
}
