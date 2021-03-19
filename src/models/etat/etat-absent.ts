import Etat from './etat';

export default class EtatAbsent extends Etat {
    constructor() {
        super();
    }
    sendMessages(): string {
        return 'EtatAbsent sendMessage';
    }
}
