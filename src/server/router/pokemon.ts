import { createRouter } from "./context";
import { z } from "zod";
import { getOptionsForVote } from "../../utils/getRandomPokemon";

const getPokemonById = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (response.ok) {
    const pokemon = await response.json();
    return pokemon;
  }

  return "not found";
};

export const exampleRouter = createRouter()
  .query("getPokemonById", {
    async resolve({ input }) {
      const [first, second] = getOptionsForVote();
      const pokemon1 = await getPokemonById(first);
      const pokemon2 = await getPokemonById(second);

      return {
        pokemon1,
        pokemon2,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  });
