import Dao from './dao';

/**
 * DAO to serialize in json return string only for the test
 * partial implementation because there are no interface or network
 */
export default class DaoJSON extends Dao {
    constructor() {
        super();
    }

    getAll(): string {
        return 'DAO Json get all';
    }

    get(id: number): string {
        return `DAO Json get ${id}`;
    }

    update(id: number, obj: object): string {
        return `DAO Json update ${id}`;
    }

    delete(id: number): string {
        return `DAO Json delete ${id}`;
    }
}
