import Etat from '../models/etat/etat';
import EtatAbsent from '../models/etat/etat-absent';
import EtatPresent from '../models/etat/etat-present';

test('Etat EtatAbsent', () => {
  const etatAbsent: Etat = new EtatAbsent();

  expect(etatAbsent.sendMessages()).toBe('EtatAbsent sendMessage');
});
test('Etat EtatPresent', () => {
  const etatPresent: Etat = new EtatPresent();

  expect(etatPresent.sendMessages()).toBe('EtatPresent sendMessage');
});
