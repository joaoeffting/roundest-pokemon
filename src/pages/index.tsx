import type { NextPage } from "next";
import Image from "next/image";
import { trpc } from "../utils/trpc";

// COMPONETS
import { Pokemon, Header, Button } from "../components";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["api.getPokemonById"]);

  if (isLoading) return <div>Loading</div>;

  if (data) {
    const { pokemon1, pokemon2 } = data;

    const {
      sprites: { front_default: image1 },
    } = pokemon1;

    const {
      sprites: { front_default: image2 },
    } = pokemon2;

    const selectRoundest = (pokemonId: number) => {
      console.log(pokemonId);
    };

    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <Header text="Which is the roundest?" />
        <div className="p-2"></div>
        <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
          <Pokemon
            imageSrc={image1}
            alt="Pokemon 1"
            name={pokemon1?.name}
            onPokemonVoteClick={() => selectRoundest(pokemon1?.id)}
          />
          <div className="p-8">VS</div>
          <Pokemon
            imageSrc={image2}
            alt="Pokemon 2"
            name={pokemon2?.name}
            onPokemonVoteClick={() => selectRoundest(pokemon2?.id)}
          />
        </div>
      </div>
    );
  }
  return <div>Something went wrong</div>;
};

export default Home;
