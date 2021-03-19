import commandObservable from '../models/observable/command-observable';
import interfaceObservable from '../models/observable/interface-observable';

test('Test adding and removing action to command observable', () => {
  const instance: commandObservable = new commandObservable();

  instance.attach(new Object(), { test: 'test1' });
  instance.attach(new Object(), { test: 'test2' });
  instance.attach(new Object(), { test: 'test3' });
  instance.detach(new Object(), { test: 'test2' });

  expect(instance.actions.length).toBe(2);
});

test('Test adding and removing action to interface observable', () => {
  const instance: interfaceObservable = new interfaceObservable();

  instance.attach(new Object(), { test: 'test1' });
  instance.attach(new Object(), { test: 'test2' });
  instance.attach(new Object(), { test: 'test3' });
  instance.detach(new Object(), { test: 'test2' });

  expect(instance.actions.length).toBe(2);
});
