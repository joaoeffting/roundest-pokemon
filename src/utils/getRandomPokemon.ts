const MAX_DEX_ID = 5;

export const getRandomPokemon: (notThisOne?: number) => number = (
  notThisOne
) => {
  const pokedexNumber = Math.floor(Math.random() * MAX_DEX_ID) + 1;
  if (pokedexNumber !== notThisOne) {
    return pokedexNumber;
  }

  return getRandomPokemon(notThisOne);
};

export const getOptionsForVote: () => [number, number] = () => {
  const firstId = getRandomPokemon();
  const secondeId = getRandomPokemon(firstId);

  return [firstId, secondeId];
};
