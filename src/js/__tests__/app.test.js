import Team, { Character } from '../app';

it('Team add', () => {
  const result = new Team();
  const char = new Character('Magic');
  result.add(char);
  expect(result.toArray()).toEqual([{ name: 'Magic' }]);
});

it('Team add error', () => {
  function exp() {
    const result = new Team();
    const char = new Character('Magic');
    result.add(char);
    result.add(char);
    return result.toArray();
  }
  expect(exp).toThrow();
});

it('Team addAll', () => {
  const result = new Team();
  const char = new Character('Magic1');
  const charOne = new Character('Magic2');
  const charTwo = new Character('Magic3');
  result.addAll(char, charOne, charTwo);
  expect(result.toArray()).toEqual([{ name: 'Magic1' }, { name: 'Magic2' }, { name: 'Magic3' }]);
});
