import SingletonDao from '../models/singleton/singleton-dao';

test('Factory test for XML', () => {
  expect(SingletonDao.getInstanceXML()).toBe(SingletonDao.getInstanceXML());
});

test('Factory test for JSON', () => {
  expect(SingletonDao.getInstanceJSON()).toBe(SingletonDao.getInstanceJSON());
});

test('Factory test for SQL', () => {
  expect(SingletonDao.getInstanceSQL()).toBe(SingletonDao.getInstanceSQL());
});

test('Factory test bug for SQL', () => {
  expect(SingletonDao.getInstanceSQL()).not.toBe(SingletonDao.getInstanceXML());
});
