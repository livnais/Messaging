import Dao from './dao';

/**
 * DAO to save in database return string only for the test
 * partial implementation because there are no interface or network
 */
export default class DaoSQL extends Dao {
    constructor() {
        super();
    }

    getAll(): string {
        return 'DAO SQL get all';
    }

    update(id: number, obj: object): string {
        return `DAO SQL update ${id}`;
    }

    delete(id: number): string {
        return `DAO SQL delete ${id}`;
    }
}
