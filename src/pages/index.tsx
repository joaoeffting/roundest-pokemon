import type { NextPage } from "next";
import Image from "next/image";
import { trpc } from "../utils/trpc";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["api.pokemon"]);

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
        <div className="text-2xl text-center">Which Pokémon is rouded?</div>
        <div className="p-2"></div>
        <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
          <div className="w-16 h-16 bg-red-800">
            <Image src={image1} alt="Pokemon 1" width={500} height={500} />
          </div>
          <div className="p-8">VS</div>
          <div className="w-16 h-16 bg-red-800">
            <Image src={image2} alt="Pokemon 2" width={500} height={500} />
          </div>
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
