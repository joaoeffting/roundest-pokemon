import React from "react";
import Image from "next/image";
import Button from "./Button";

const Pokemon = ({
  imageSrc,
  alt,
  name,
  onPokemonVoteClick,
}: {
  imageSrc: string;
  alt: string;
  name: string;
  onPokemonVoteClick: () => void;
}) => {
  return (
    <div className="w-64 h-64 flex flex-col">
      <Image
        src={imageSrc}
        alt={alt}
        layout="responsive"
        width={96}
        height={96}
        className="w-full"
      />
      <div className="text-xl text-center capitalize mt-[-2rem]">{name}</div>
      <Button text="Vote" onClick={onPokemonVoteClick} />
    </div>
  );
};

export default Pokemon;
