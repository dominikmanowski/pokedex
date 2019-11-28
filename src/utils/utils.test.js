import { checkAvailability, filterPokemons } from './utils';

const pokemons = [
  {
    name: 'Cubone',
    types: ['Fighting'],
    subtype: 'Basic',
  },
  {
    name: 'Turtwig',
    types: ['Grass'],
    subtype: 'Basic',
  },
  {
    name: 'Bellossom',
    types: ['Grass'],
    subtype: 'Stage 2',
  },
  {
    name: 'Hariyama ex',
    types: ['Fighting'],
    subtype: 'EX',
  },
  {
    name: 'Aggronm',
    types: ['Metal'],
    subtype: 'Stage 2',
  },
];

describe('checkAvailability', () => {
  test('expect to return N/A', () => {
    const content = checkAvailability();
    expect(content).toBe('N/A');
  });

  test('expect to return "String"', () => {
    const content = checkAvailability('String');
    expect(content).toBe('String');
  });

  test('expect to return "N/A"', () => {
    const content = checkAvailability(undefined);
    expect(content).toBe('N/A');
  });

  test('expect to return "N/A"', () => {
    const content = checkAvailability(null);
    expect(content).toBe('N/A');
  });

  test('expect to return "N/A"', () => {
    const content = checkAvailability(0);
    expect(content).toBe('N/A');
  });

  test('expect to return "N/A"', () => {
    const content = checkAvailability({});
    expect(content).toBe('N/A');
  });

  test('expect to return "N/A"', () => {
    const content = checkAvailability([]);
    expect(content).toBe('N/A');
  });
});

describe('filterPokemons', () => {
  test('expect to return Cubone and Turtwig', () => {
    const pokemonsArr = filterPokemons(pokemons, 'basic');
    expect(pokemonsArr).toEqual([
      {
        name: 'Cubone',
        types: ['Fighting'],
        subtype: 'Basic',
      },
      {
        name: 'Turtwig',
        types: ['Grass'],
        subtype: 'Basic',
      },
    ]);
  });

  test('expect to return Turtwig and Bellossom', () => {
    const pokemonsArr = filterPokemons(pokemons, 'Grass');
    expect(pokemonsArr).toEqual([
      {
        name: 'Turtwig',
        types: ['Grass'],
        subtype: 'Basic',
      },
      {
        name: 'Bellossom',
        types: ['Grass'],
        subtype: 'Stage 2',
      },
    ]);
  });

  test('expect to return Aggronm and Hariyama ex', () => {
    const pokemonsArr = filterPokemons(pokemons, 'metal');
    expect(pokemonsArr).toEqual([
      {
        name: 'Aggronm',
        types: ['Metal'],
        subtype: 'Stage 2',
      },
    ]);
  });

  test('expect to return Cubone and Hariyama ex', () => {
    const pokemonsArr = filterPokemons(pokemons, 'fight');
    expect(pokemonsArr).toEqual([
      {
        name: 'Cubone',
        types: ['Fighting'],
        subtype: 'Basic',
      },
      {
        name: 'Hariyama ex',
        types: ['Fighting'],
        subtype: 'EX',
      },
    ]);
  });

  test('expect to return empty array', () => {
    const pokemonsArr = filterPokemons(pokemons, 'qwerty');
    expect(pokemonsArr).toEqual([]);
  });

  test('expect to return all pokemons', () => {
    const pokemonsArr = filterPokemons(pokemons, '');
    expect(pokemonsArr).toEqual([
      {
        name: 'Cubone',
        types: ['Fighting'],
        subtype: 'Basic',
      },
      {
        name: 'Turtwig',
        types: ['Grass'],
        subtype: 'Basic',
      },
      {
        name: 'Bellossom',
        types: ['Grass'],
        subtype: 'Stage 2',
      },
      {
        name: 'Hariyama ex',
        types: ['Fighting'],
        subtype: 'EX',
      },
      {
        name: 'Aggronm',
        types: ['Metal'],
        subtype: 'Stage 2',
      },
    ]);
  });
});
