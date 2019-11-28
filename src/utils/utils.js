export const filterPokemons = (arr, query) => {
  return arr.filter(
    ({ name, types, subtype }) =>
    (name && name.toLowerCase().includes(query)) ||
    (types && types.every(type => type.toLowerCase().includes(query))) ||
    (subtype && subtype.toLowerCase().includes(query))
  );
};

export const checkAvailability = (input) => {
  if (!input) {
    return "N/A"
  }
  return input
}