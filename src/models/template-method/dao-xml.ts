import Dao from './dao';

/**
 * DAO to serialize in xml return string only for the test
 * partial implementation because there are no interface or network
 */
export default class DaoXML extends Dao {
    constructor() {
        super();
    }

    getAll(): string {
        return 'DAO XML get all';
    }

    get(id: number): string {
        return `DAO XML get ${id}`;
    }

    update(id: number, obj: object): string {
        return `DAO XML update ${id}`;
    }

    delete(id: number): string {
        return `DAO XML delete ${id}`;
    }
}
