/**
 * DAO to serialize return string only for the test
 * partial implementation because there are no interface or network
 */
export default abstract class Dao {
    constructor() {}

    getAll(): string {
        return 'DAO get all';
    }

    get(id: number): string {
        return `DAO get ${id}`;
    }

    update(id: number, obj: object): string {
        return `DAO update ${id}`;
    }

    delete(id: number): string {
        return `DAO delete ${id}`;
    }
}
