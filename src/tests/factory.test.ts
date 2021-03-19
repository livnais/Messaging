import DaoSQL from '../models/template-method/dao-sql';
import DaoXML from '../models/template-method/dao-xml';
import DaoJSON from '../models/template-method/dao-json';
import FactoryDao from '../models/factory/factory-dao';
import { isEqual } from 'lodash';

test('Factory test for XML', () => {
    expect(isEqual(FactoryDao.creerInstance(DaoXML.name), new DaoXML())).toBe(true);
});

test('Factory test for SQL', () => {
    expect(isEqual(FactoryDao.creerInstance(DaoSQL.name), new DaoSQL())).toBe(true);
});

test('Factory test for JSON', () => {
    expect(isEqual(FactoryDao.creerInstance(DaoJSON.name), new DaoJSON())).toBe(true);
});
