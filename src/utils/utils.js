export const filterPokemons = (arr, query) => {
  if (typeof query === 'string') {
    const lowCasQuery = query.toLowerCase();
    return arr.filter(
      ({ name, types, subtype }) =>
        (name && name.toLowerCase().includes(lowCasQuery)) ||
        (types &&
          types.every(type => type.toLowerCase().includes(lowCasQuery))) ||
        (subtype && subtype.toLowerCase().includes(lowCasQuery))
    );
  }
  return arr;
};

export const checkAvailability = input => {
  if (input && !!input.length) {
    return input;
  }
  return 'N/A';
};
