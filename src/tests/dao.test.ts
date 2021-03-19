import SingletonDao from '../models/singleton/singleton-dao';
import Dao from '../models/template-method/dao';

test('Dao XML via singleton and factory', () => {
  const instanceDao: Dao = SingletonDao.getInstanceXML();

  expect(instanceDao.getAll()).toBe('DAO XML get all');
  expect(instanceDao.get(1)).toBe('DAO XML get 1');
  expect(instanceDao.update(1, new Object())).toBe('DAO XML update 1');
  expect(instanceDao.delete(1)).toBe('DAO XML delete 1');
});

test('Dao JSON via singleton and factory', () => {
  const instanceDao: Dao = SingletonDao.getInstanceJSON();

  expect(instanceDao.getAll()).toBe('DAO Json get all');
  expect(instanceDao.get(1)).toBe('DAO Json get 1');
  expect(instanceDao.update(1, new Object())).toBe('DAO Json update 1');
  expect(instanceDao.delete(1)).toBe('DAO Json delete 1');
});

test('Dao SQL via singleton and factory', () => {
  const instanceDao: Dao = SingletonDao.getInstanceSQL();

  expect(instanceDao.getAll()).toBe('DAO SQL get all');
  expect(instanceDao.get(1)).toBe('DAO get 1');
  expect(instanceDao.update(1, new Object())).toBe('DAO SQL update 1');
  expect(instanceDao.delete(1)).toBe('DAO SQL delete 1');
});
