import { convertNumbers, handleTens, handleHundreds } from '../utils';

describe('convertNumbers', () => {
  it('return an array of string from an array of numbers', () => {
    const actual = convertNumbers([
      0, 1, 5, 10, 11, 15, 20, 21, 30, 35, 50, 51, 68, 70, 75, 99, 100, 101,
      105, 111, 123, 168, 171, 175, 199, 200, 201, 555, 999, 1000, 1001, 1111,
      1199, 1234, 1999, 2000, 2001, 2020, 2021, 2345, 9999, 10000, 11111, 12345,
      123456, 654321, 999999,
    ]);
    const expected = [
      'zéro',
      'un',
      'cinq',
      'dix',
      'onze',
      'quinze',
      'vingt',
      'vingt-et-un',
      'trente',
      'trente-cinq',
      'cinquante',
      'cinquante-et-un',
      'soixante-huit',
      'soixante-dix',
      'soixante-quinze',
      'quatre-vingt-dix-neuf',
      'cent',
      'cent-un',
      'cent-cinq',
      'cent-onze',
      'cent-vingt-trois',
      'cent-soixante-huit',
      'cent-soixante-et-onze',
      'cent-soixante-quinze',
      'cent-quatre-vingt-dix-neuf',
      'deux-cents',
      'deux-cent-un',
      'cinq-cent-cinquante-cinq',
      'neuf-cent-quatre-vingt-dix-neuf',
      'mille',
      'mille-un',
      'mille-cent-onze',
      'mille-cent-quatre-vingt-dix-neuf',
      'mille-deux-cent-trente-quatre',
      'mille-neuf-cent-quatre-vingt-dix-neuf',
      'deux-milles',
      'deux-mille-un',
      'deux-mille-vingt',
      'deux-mille-vingt-et-un',
      'deux-mille-trois-cent-quarante-cinq',
      'neuf-mille-neuf-cent-quatre-vingt-dix-neuf',
      'dix-milles',
      'onze-mille-cent-onze',
      'douze-mille-trois-cent-quarante-cinq',
      'cent-vingt-trois-mille-quatre-cent-cinquante-six',
      'six-cent-cinquante-quatre-mille-trois-cent-vingt-et-un',
      'neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf',
    ];
    expect(actual).toEqual(expected);
  });
});

describe('handleTens', () => {
  it('manages subtwenty numbers', () => {
    const actual = handleTens(1);
    const expected = 'un';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for simple ten 20', () => {
    const actual = handleTens(20);
    const expected = 'vingt';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for simple ten 22', () => {
    const actual = handleTens(22);
    const expected = 'vingt-deux';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for simple ten and one 21', () => {
    const actual = handleTens(21);
    const expected = 'vingt-et-un';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for simple ten 66', () => {
    const actual = handleTens(66);
    const expected = 'soixante-six';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for simple ten and one 61', () => {
    const actual = handleTens(61);
    const expected = 'soixante-et-un';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for tricky 73', () => {
    const actual = handleTens(73);
    const expected = 'soixante-treize';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for tricky 71', () => {
    const actual = handleTens(71);
    const expected = 'soixante-et-onze';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for tricky 80', () => {
    const actual = handleTens(80);
    const expected = 'quatre-vingts';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for tricky 81', () => {
    const actual = handleTens(81);
    const expected = 'quatre-vingt-un';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for tricky 82', () => {
    const actual = handleTens(82);
    const expected = 'quatre-vingt-deux';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for tricky 92', () => {
    const actual = handleTens(92);
    const expected = 'quatre-vingt-douze';
    expect(actual).toEqual(expected);
  });
});
describe('handleHundreds', () => {
  it('return the right answer for 100', () => {
    const actual = handleHundreds(100);
    const expected = 'cent';
    expect(actual).toEqual(expected);
  });
  it('return the right answer for other hundreds 600', () => {
    const actual = handleHundreds(600);
    const expected = 'six-cent';
    expect(actual).toEqual(expected);
  });
  it('return only the hundred for a non round number', () => {
    const actual = handleHundreds(649);
    const expected = 'six-cent';
    expect(actual).toEqual(expected);
  });
});
