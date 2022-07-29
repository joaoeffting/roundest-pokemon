import type { NextPage } from "next";
import Image from "next/image";
import { trpc } from "../utils/trpc";

// COMPONETS
import { Pokemon, Header } from "../components";

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

    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <Header text="Which is the roundest?" />
        <div className="p-2"></div>
        <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
          <Pokemon imageSrc={image1} alt="Pokemon 1" name={pokemon1?.name} />
          <div className="p-8">VS</div>
          <Pokemon imageSrc={image2} alt="Pokemon 2" name={pokemon2?.name} />
        </div>
      </div>
    );
  }
  return <div>Something went wrong</div>;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};

export default Home;
