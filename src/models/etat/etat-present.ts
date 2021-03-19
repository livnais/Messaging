import Etat from './etat';

export default class EtatPresent extends Etat {
    constructor() {
        super();
    }
    sendMessages(): string {
        return 'EtatPresent sendMessage';
    }
}
