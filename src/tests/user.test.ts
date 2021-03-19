import EtatAbsent from '../models/etat/etat-absent';
import User from '../models/user/user';

test('User with etat defaut', () => {
    const user: User = new User();
    expect(user.sendMessages()).toBe('EtatPresent sendMessage');
});
test('Etat EtatPresent', () => {
    const user: User = new User();
    user.setEtat(new EtatAbsent());
    expect(user.sendMessages()).toBe('EtatAbsent sendMessage');
});
